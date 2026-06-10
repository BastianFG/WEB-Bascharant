import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.bascharant.com';

const pages = [
  '/',
  '/sobre-nosotros',
];

const services = [
  '/servicio-de-mantencion-de-areas-verdes',
  '/proyecto-paisajismo',
  '/poda-tala-y-transplante-profesional-de-arbolado-urbano-comercial',
  '/diseno-y-construcion-de-sistemas-de-riego',
  '/diseno-y-construccion-de-areas-verdes',
  '/control-fitosanitario-y-manejo-de-plagas-areas-verdes',
];

const portfolio = [
  '/proyecto-paisajismo-seco-reconversion-hidrica-quilicura-chile',
  '/proyecto-habilitacion-terraza-corporativa-las-condes-chile',
  '/proyecto-poda-preventiva-silvicultura-arbolado-quilicura-chile',
  '/proyecto-mantencion-areas-verdes-industriales-san-ignacio-chile',
  '/proyecto-diseno-paisajismo-vial-copec-santiago-chile',
  '/proyecto-muro-verde-vertical-vitacura-chile',
  '/proyecto-fumigacion-control-fitosanitario-quilicura-chile',
  '/proyecto-diseno-habilitacion-piscina-entorno-chicureo-chile',
  '/proyecto-paisajismo-residencial-zapallar-chile'
];

function generateSitemapXml(urls) {
  const currentDate = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  urls.forEach((url) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${url === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
}

function generateSitemapIndexXml(sitemaps) {
  const currentDate = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  sitemaps.forEach((sitemap) => {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE_URL}/${sitemap}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  });
  
  xml += `</sitemapindex>`;
  return xml;
}

async function main() {
  const publicDir = path.resolve('public');
  
  const pagesXml = generateSitemapXml(pages);
  const servicesXml = generateSitemapXml(services);
  const portfolioXml = generateSitemapXml(portfolio);
  
  fs.writeFileSync(path.join(publicDir, 'pages-sitemap.xml'), pagesXml);
  fs.writeFileSync(path.join(publicDir, 'services-sitemap.xml'), servicesXml);
  fs.writeFileSync(path.join(publicDir, 'portfolio-sitemap.xml'), portfolioXml);
  
  const indexXml = generateSitemapIndexXml(['pages-sitemap.xml', 'services-sitemap.xml', 'portfolio-sitemap.xml']);
  fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), indexXml);
  
  console.log('✅ Sitemaps generated successfully.');
}

main().catch(console.error);
