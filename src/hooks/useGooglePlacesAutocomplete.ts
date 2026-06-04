import { useEffect } from "react";

let scriptLoadingPromise: Promise<void> | null = null;

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.google?.maps?.places) {
    return Promise.resolve();
  }
  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (err) => {
      scriptLoadingPromise = null; // allow retry
      reject(err);
    };
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

export function useGooglePlacesAutocomplete(inputRef: React.RefObject<HTMLInputElement | null>) {
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.warn(
        "VITE_GOOGLE_MAPS_API_KEY no está configurado en el archivo .env. Autocompletado de Google Maps desactivado."
      );
      return;
    }

    let autocomplete: google.maps.places.Autocomplete | null = null;

    // Prevenir el envío del formulario cuando se presiona Enter para seleccionar una sugerencia
    const handleKeyDown = (e: KeyboardEvent) => {
      const pacContainer = document.querySelector(".pac-container");
      if (pacContainer && window.getComputedStyle(pacContainer).display !== "none") {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }
    };

    input.addEventListener("keydown", handleKeyDown);

    loadGoogleMapsScript(apiKey)
      .then(() => {
        if (!inputRef.current) return;

        // Inicializar el objeto Autocomplete con restricciones a Chile
        autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "cl" },
          types: ["address"],
        });

        // Escuchar el evento de selección de dirección
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete?.getPlace();
          if (place && place.formatted_address) {
            inputRef.current!.value = place.formatted_address;
            
            // Disparar evento de input para que React y los controladores de formulario actualicen su estado
            inputRef.current!.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });
      })
      .catch((err) => {
        console.error("Error al cargar la API de Google Maps:", err);
      });

    return () => {
      input.removeEventListener("keydown", handleKeyDown);
      if (autocomplete) {
        window.google?.maps?.event?.clearInstanceListeners(autocomplete);
      }
      // Limpiar pac-containers residuales del DOM
      const pacContainers = document.querySelectorAll(".pac-container");
      pacContainers.forEach((container) => container.remove());
    };
  }, [inputRef]);
}
