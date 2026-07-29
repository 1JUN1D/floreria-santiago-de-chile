# PROMPT · Rediseño estético Luxury (index + catálogo + landings)

> Copia desde la línea siguiente y pégalo tal cual en el Cowork de cada proyecto de floristería.

---

Quiero que cambies el ESTILO visual del index.html, del catalogo.html y de todas las páginas de la carpeta landing-pages para que se vean luxury, elegantes y confiables, pero optimizadas (carga rápida). OJO: solo el estilo, NO la estructura ni la jerarquía de los títulos H1, H2, H3 ni lo que dicen sus párrafos. Los colores de marca, textos, datos de contacto y productos de este proyecto YA están definidos: respétalos tal cual. Te doy libertad creativa dentro del sistema de diseño de abajo, no me preguntes nada.

## REGLAS
1. Solo tocas CSS: css/styles.css, css/catalog.css y los bloques `<style>` inline de las landing pages y de los componentes (navbar, footer, contact-info). Nada de HTML, textos, JavaScript ni el array `const products`.
2. Usa el color de marca que el proyecto ya tiene definido en sus variables CSS (:root) como color principal; no lo cambies. Solo genera, si hace falta, una variante más profunda (~25% más oscura) para precios y hovers.
3. Rendimiento: no añadas fuentes, imágenes ni librerías. Animaciones solo con transform/opacity. Incluye `@media (prefers-reduced-motion: reduce)` que las anule.
4. Edita SIEMPRE con las herramientas de archivos (Read/Write/Edit), nunca con scripts bash sobre la carpeta montada (riesgo de corrupción por desincronización de OneDrive).

## SISTEMA DE DISEÑO "LUXURY FLORAL"
Constantes del look (se combinan con el color de marca existente):
- Tinta profunda #14101B / #221B2E para fondos oscuros · blanco cálido #FDFCFB · crema #F8F5F0 · un tinte pastel muy suave del color de marca para fondos alternos
- Oro champán #C9A86A (y oro oscuro #A8853F) SOLO como acento de lujo: líneas finas de 1px, anillos, etiquetas, florones
- Texto #2B2433, texto suave #6B6375, hairlines rgba(22,18,28,0.09)
- Botones de WhatsApp siempre en verde #1EBE5D (hover #169549)
- Tipografía: títulos 'Playfair Display' weight 500-600, letter-spacing -0.01em; cuerpo 'Poppins' weight 300, line-height 1.8-1.95; etiquetas/eyebrows uppercase 0.66-0.72rem con letter-spacing 0.3-0.44em en oro
- Botones pill (border-radius 999px), uppercase, letter-spacing 0.18em; sombras suaves y difusas de baja opacidad; líneas doradas de 64px×1px bajo los títulos de sección (::after)
- MOTIVO CENTRAL: el ARCO DE INVERNADERO → border-radius 999px 999px 20px 20px con doble cerco (passe-partout blanco + anillo dorado fino vía box-shadow)

## INDEX.HTML (reescribir css/styles.css)
- Hero "atelier luminoso": fondo blanco cálido con resplandores radiales sutiles (marca + oro); marca de agua gigante con el nombre de la floristería en Playfair cursiva casi invisible (::before, color de marca al 4-5% de opacidad); texto a la izquierda con el breadcrumb convertido en sello editorial (línea dorada + uppercase espaciado); el video o imagen del hero a la derecha DENTRO de un gran arco (aspect-ratio 4/5) con anillo dorado, passe-partout blanco, un contorno de arco desplazado como eco (::before del contenedor) y un florón '❦' dorado en la cúspide (::after). Botón primario con gradiente del color de marca y brillo deslizante al hover; botón secundario ghost con hairline.
- Carrusel de clientes: "paseo de arcos" sobre fondo crema, con rótulo superior generado por CSS (::before, uppercase dorado + línea dorada debajo); tarjetas en forma de arco con marco blanco y anillo dorado, alturas alternadas (nth-child(even) con margin-top), animación translateX infinita pausada al hover.
- Sección de servicios/categorías: convertir la cuadrícula en FILAS EDITORIALES tipo revista — cada tarjeta pasa a grid de 2 columnas alternando lado (nth-child(even) invierte el orden), imagen en arco grande con marco dorado, y numeración editorial 01, 02, 03… generada con counter() en ::before (Playfair cursiva, solo contorno con -webkit-text-stroke en el color de marca).
- CTA: salón nocturno — fondo tinta con glow radial del color de marca, marco interior dorado (::before, inset 22px, border 1px rgba(201,168,106,0.22)), florón '❦' superior; botón blanco que al hover pasa a dorado.
- Navbar: fondo blanco cálido con blur y hairline inferior, menú en uppercase fino con subrayado dorado al hover, logo con anillo dorado. Footer oscuro coherente. Tarjetas de contacto con borde izquierdo del color de marca que al hover pasa a dorado; mapa con cerco dorado.

## CATALOGO.HTML (reescribir css/catalog.css)
- Hero nocturno con marca de agua del nombre (Playfair cursiva gigante al 3.5% de blanco), eyebrow dorado, línea dorada con glow bajo el H1 y divisor dorado degradado al pie de la sección.
- Filtros como mostrador de joyería: chips pill transparentes con hairline, hover con tinte de marca, activo en negro tinta con anillo dorado; barra sticky con blur.
- Tarjetas de producto como VITRINAS DE ARCO: tarjeta con border-radius de arco y padding interior de 12px; imagen en arco con anillo dorado (aspect-ratio 1/1.12) y zoom suave de 1s al hover; info centrada; nombre en Playfair con separador '·❦·' dorado debajo; precio en Playfair en la variante profunda del color de marca; etiqueta "Desde" uppercase microespaciada; botón de pedido verde WhatsApp pill.
- Lightbox oscuro con blur y marco dorado en la imagen; botón scroll-top en tinta con anillo dorado.

## LANDING PAGES (CSS inline de cada archivo de landing-pages)
- Mismo sistema: hero nocturno con marco dorado interior y línea de oro bajo el H1; banners llamativos convertidos a franjas de tinta con texto dorado espaciado; tarjetas de producto como vitrinas de arco; secciones alternando blanco/crema/tinte de marca; iconos en círculos con anillo dorado; botones pill.
- ELIMINA las animaciones chillonas preexistentes (emojis girando, arcoíris, parpadeos) y reemplázalas por la estética sobria del sistema.
- Si existe una landing FÚNEBRE: variante sobria (tinta, blanco y oro, líneas rectas, SIN arcos ni florones festivos), tono sereno y respetuoso.
- Reparte las landing pages entre agentes en paralelo (2 páginas por agente), pasándoles este sistema de diseño como especificación.

## VERIFICACIÓN OBLIGATORIA
Crea una lista de tareas al inicio y márcalas al completar. Al final revisa con Grep: que no queden los colores hex del estilo viejo, que cada HTML termine en `</html>` sin truncarse, y que las llaves de cada CSS queden balanceadas. Reporta un resumen.
