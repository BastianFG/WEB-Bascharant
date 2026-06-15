<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap XML - Bascharant</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .header {
            background: linear-gradient(135deg, #1e3c28, #2a5238);
            color: white;
            padding: 60px 20px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .header h1 {
            margin: 0;
            font-size: 2.8em;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 15px 0 0;
            font-size: 1.15em;
            opacity: 0.9;
          }
          .container {
            max-width: 1000px;
            margin: -30px auto 40px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            overflow: hidden;
            padding: 30px 40px;
            position: relative;
          }
          .info {
            background-color: #e8f5e9;
            border-left: 4px solid #4caf50;
            padding: 18px 20px;
            margin-bottom: 30px;
            border-radius: 4px;
            font-size: 0.95em;
            color: #2e7d32;
            display: flex;
            align-items: center;
          }
          .info a {
            color: #1b5e20;
            font-weight: bold;
            text-decoration: none;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: #f8f9fa;
            color: #555;
            text-transform: uppercase;
            font-size: 0.85em;
            font-weight: 600;
            padding: 16px;
            text-align: left;
            border-bottom: 2px solid #eaeaea;
          }
          td {
            padding: 16px;
            border-bottom: 1px solid #f0f0f0;
            font-size: 0.95em;
            color: #555;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #f9fdfa;
          }
          td a {
            color: #2a5238;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          td a:hover {
            color: #4caf50;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 5px 10px;
            background: #e0f2f1;
            color: #00796b;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: 600;
          }
          .freq {
            text-transform: capitalize;
            color: #666;
            font-size: 0.9em;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 0.85em;
            color: #888;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Sitemap XML</h1>
          <p>Explorador interactivo de URLs y Sitemaps para Bascharant</p>
        </div>
        <div class="container">
          <xsl:apply-templates select="*[local-name()='sitemapindex']" />
          <xsl:apply-templates select="*[local-name()='urlset']" />
        </div>
        <div class="footer">
          Generado automáticamente para el sitio web de Bascharant.
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="*[local-name()='sitemapindex']">
    <div class="info">
      Este es un Índice de Sitemaps. Contiene <strong style="margin: 0 4px;"><xsl:value-of select="count(*[local-name()='sitemap'])"/></strong> sitemaps en total.
    </div>
    <table>
      <thead>
        <tr>
          <th>URL del Sitemap</th>
          <th>Última Modificación</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="*[local-name()='sitemap']">
          <tr>
            <td>
              <xsl:variable name="itemURL" select="*[local-name()='loc']" />
              <a href="{$itemURL}"><xsl:value-of select="*[local-name()='loc']"/></a>
            </td>
            <td>
              <xsl:variable name="date" select="*[local-name()='lastmod']" />
              <xsl:value-of select="concat(substring($date,1,10), ' ', substring($date,12,5))"/>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>

  <xsl:template match="*[local-name()='urlset']">
    <div class="info">
      Este sitemap contiene <strong style="margin: 0 4px;"><xsl:value-of select="count(*[local-name()='url'])"/></strong> URLs en total.
    </div>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Prioridad</th>
          <th>Frecuencia</th>
          <th>Última Modificación</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="*[local-name()='url']">
          <tr>
            <td>
              <xsl:variable name="itemURL" select="*[local-name()='loc']" />
              <a href="{$itemURL}"><xsl:value-of select="*[local-name()='loc']"/></a>
            </td>
            <td>
              <xsl:if test="*[local-name()='priority']">
                <span class="badge"><xsl:value-of select="*[local-name()='priority']"/></span>
              </xsl:if>
            </td>
            <td class="freq">
              <xsl:value-of select="*[local-name()='changefreq']"/>
            </td>
            <td>
              <xsl:variable name="date" select="*[local-name()='lastmod']" />
              <xsl:if test="string-length($date) &gt; 0">
                <xsl:value-of select="concat(substring($date,1,10), ' ', substring($date,12,5))"/>
              </xsl:if>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>

</xsl:stylesheet>
