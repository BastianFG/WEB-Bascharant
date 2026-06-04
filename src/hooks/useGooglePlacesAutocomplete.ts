import { useEffect } from "react";

let scriptLoadingPromise: Promise<void> | null = null;

// Registrar el callback global de falla de autenticación de Google Maps
if (typeof window !== "undefined") {
  (window as any).gm_authFailure = () => {
    console.warn(
      "Google Maps API: Error de autenticación detectado (posible API Key inválida, sin facturación habilitada o dominio no autorizado)."
    );
    // Restaurar inmediatamente cualquier input afectado por la falla de Google Maps
    const autocompleteInputs = document.querySelectorAll("input");
    autocompleteInputs.forEach((el) => {
      if (el.disabled || el.placeholder.includes("error") || el.placeholder.includes("produjo") || el.placeholder.includes("occurred")) {
        el.disabled = false;
        // Quitar clases inyectadas por Google
        el.classList.remove("pac-target-input");
        // Restaurar placeholder original (si lo guardamos en un data-attribute)
        const orig = el.getAttribute("data-original-placeholder");
        if (orig) {
          el.placeholder = orig;
        }
        if (el.value.toLowerCase().includes("error") || el.value.toLowerCase().includes("se produjo")) {
          el.value = "";
        }
      }
    });

    // Remover contenedores de sugerencias vacíos/rotos
    const pacContainers = document.querySelectorAll(".pac-container");
    pacContainers.forEach((container) => container.remove());
  };
}

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
      scriptLoadingPromise = null; // permitir reintento
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

    // Guardar el placeholder original en memoria y en un atributo HTML para restauración global
    const originalPlaceholder = input.placeholder || "";
    input.setAttribute("data-original-placeholder", originalPlaceholder);

    let autocomplete: google.maps.places.Autocomplete | null = null;
    let checkInterval: NodeJS.Timeout | null = null;

    // Prevenir el envío del formulario al presionar Enter para seleccionar una sugerencia
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
            
            // Disparar evento de input para que React actualice sus estados
            inputRef.current!.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });

        // Monitoreo proactivo: Si Google Maps inyecta un error o deshabilita el input,
        // lo detectamos inmediatamente y restauramos el input nativo.
        let checkCount = 0;
        checkInterval = setInterval(() => {
          const el = inputRef.current;
          if (!el) {
            if (checkInterval) clearInterval(checkInterval);
            return;
          }
          checkCount++;

          const hasErrorPlaceholder =
            el.placeholder.toLowerCase().includes("error") ||
            el.placeholder.toLowerCase().includes("occurred") ||
            el.placeholder.toLowerCase().includes("se produjo") ||
            el.placeholder.toLowerCase().includes("produjo");

          const hasErrorValue =
            el.value.toLowerCase().includes("error") ||
            el.value.toLowerCase().includes("se produjo");

          if (el.disabled || hasErrorPlaceholder || hasErrorValue) {
            console.warn(
              "Google Places Autocomplete: Error de API o billing detectado. Restaurando el input de dirección original."
            );

            if (checkInterval) clearInterval(checkInterval);

            // Desvincular listeners de Google Maps
            if (autocomplete) {
              window.google?.maps?.event?.clearInstanceListeners(autocomplete);
            }

            // Quitar clase de control de Google Maps
            el.classList.remove("pac-target-input");

            // Restaurar estado e input original
            el.disabled = false;
            el.placeholder = originalPlaceholder;
            if (hasErrorValue) {
              el.value = "";
            }

            // Eliminar paneles de Google Maps remanentes
            const pacContainers = document.querySelectorAll(".pac-container");
            pacContainers.forEach((container) => container.remove());
          }

          // Dejar de verificar después de 4 segundos (el handshake de Google toma < 1s)
          if (checkCount > 40) {
            if (checkInterval) clearInterval(checkInterval);
          }
        }, 100);
      })
      .catch((err) => {
        console.error("Error al cargar la API de Google Maps:", err);
      });

    return () => {
      input.removeEventListener("keydown", handleKeyDown);
      if (checkInterval) clearInterval(checkInterval);
      if (autocomplete) {
        window.google?.maps?.event?.clearInstanceListeners(autocomplete);
      }
      const pacContainers = document.querySelectorAll(".pac-container");
      pacContainers.forEach((container) => container.remove());
    };
  }, [inputRef]);
}
