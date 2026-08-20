const products = [
    {
        id: 1,
        name: "Girasoles y Rosas Rojas Premium",
        price: 69000,
        image: "assets/foto1.webp",
        description: "Ramo redondo de gran formato con siete girasoles abiertos y una decena de rosas rojas, salpicado de solidago amarillo y follaje variegado. Va montado sobre malla de yute celeste, un contraste que lo hace ver enorme y muy vistoso.",
        categories: ["girasoles", "rosas-rojas", "precio-alto"]
    },
    {
        id: 2,
        name: "Mix de Temporada con Girasol y Lirios",
        price: 25000,
        image: "assets/foto2.webp",
        description: "Composición variada con girasol, lirios en botón, crisantemo blanco de cabeza grande, crisantemos lilas, gerbera naranja, una rosa fucsia y limonium morado. Envoltura color crema y gypsophila para dar aire.",
        categories: ["mix", "girasoles", "lirios", "precio-bajo"]
    },
    {
        id: 3,
        name: "Girasoles y Rosas Fucsia",
        price: 31000,
        image: "assets/foto3.webp",
        description: "Dos girasoles al centro rodeados de rosas fucsia y una nube generosa de gypsophila blanca. Papel blanco con filo dorado: alegre y romántico al mismo tiempo, ideal para un cumpleaños.",
        categories: ["girasoles", "rosas-rosadas", "precio-medio"]
    },
    {
        id: 4,
        name: "Florero con 24 Rosas Rojas",
        price: 100000,
        image: "assets/foto4.webp",
        description: "Dos docenas de rosas rojas montadas en florero cilíndrico de vidrio, con bayas de hypericum rojo y follaje verde oscuro. Lleva un moño de raso rojo en el cuello y llega listo con agua, sin necesidad de armarlo.",
        categories: ["rosas-rojas", "floreros", "precio-alto"]
    },
    {
        id: 5,
        name: "Canasta con Rosa Roja y Crisantemos",
        price: 28000,
        image: "assets/foto5.webp",
        description: "Canasta con asa alta rellena de crisantemos blancos, margaritas amarillas y una rosa roja como punto focal, más un botón de lirio rosado que se abre a los pocos días. Se apoya sola en cualquier mesa o velador.",
        categories: ["canastas", "mix", "precio-bajo"]
    },
    {
        id: 6,
        name: "Canasta con Girasol y Lirios",
        price: 25000,
        image: "assets/foto6.webp",
        description: "Un girasol grande acompañado de lirios naranjas, crisantemos blancos y lilas, gypsophila y hojas de laurel. Presentada en canasta con asa, perfecta para llevar directo a una oficina o una visita.",
        categories: ["canastas", "girasoles", "lirios", "precio-bajo"]
    },
    {
        id: 7,
        name: "Canasta con Lirio Amarillo",
        price: 25000,
        image: "assets/foto7.webp",
        description: "Lirio amarillo abierto y un segundo en botón, junto a una rosa rosada, crisantemos blancos y morados sobre una base tupida de helecho. La canasta con asa le da un aire clásico y acogedor.",
        categories: ["canastas", "lirios", "mix", "precio-bajo"]
    },
    {
        id: 8,
        name: "Canasta Blanca de Lirios y Rosas",
        price: 25000,
        image: "assets/foto8.webp",
        description: "Arreglo íntegramente blanco con lirio, rosa, crisantemos y gypsophila sobre helecho y follaje verde intenso. Es nuestra opción más sobria: sirve tanto para acompañar en un duelo como para una decoración serena.",
        categories: ["canastas", "lirios", "mix", "precio-bajo"]
    },
    {
        id: 9,
        name: "Ramo Pequeño de Rosas Rosadas",
        price: 20000,
        image: "assets/foto9.webp",
        description: "Formato compacto con dos rosas rosadas, crisantemos blancos, un crisantemo morado y una gerbera naranja, envuelto en papel rosa palo con filo plateado. El detalle justo cuando quieres decir algo sin exagerar.",
        categories: ["rosas-rosadas", "mix", "precio-bajo"]
    },
    {
        id: 10,
        name: "Rosas Rojas y Rosadas con Crisantemos",
        price: 35000,
        image: "assets/foto10.webp",
        description: "Tres rosas rojas y tres rosadas conviven con crisantemos blancos, gypsophila y ramas de mirto. Papel blanco con filo dorado, un ramo equilibrado que funciona para aniversarios y para agradecer.",
        categories: ["rosas-rojas", "rosas-rosadas", "mix", "precio-medio"]
    },
    {
        id: 11,
        name: "Girasol y Rosas en Envoltura Celeste",
        price: 35000,
        image: "assets/foto11.webp",
        description: "Un girasol al centro, dos rosas rojas, una rosa blanca y crisantemos lilas, con gypsophila y ramas altas que le dan movimiento. La envoltura celeste translúcida lo diferencia de cualquier ramo típico.",
        categories: ["girasoles", "rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 12,
        name: "Ramo Campestre con Rosa Roja",
        price: 35000,
        image: "assets/foto12.webp",
        description: "Aire de campo con una rosa roja rodeada de crisantemos blancos, otros en rosa pálido, uno amarillo, ramas de pino y gypsophila. Papel blanco satinado para un resultado fresco y natural.",
        categories: ["mix", "rosas-rojas", "precio-medio"]
    },
    {
        id: 13,
        name: "Lirios y Rosas Rojas",
        price: 35000,
        image: "assets/foto13.webp",
        description: "Lirio coral bien abierto junto a rosas rojas, crisantemos blancos y amarillos y gypsophila. Papel blanco con líneas doradas: un ramo cálido, de colores intensos y buena duración.",
        categories: ["lirios", "rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 14,
        name: "Florero de Rosas Rojas",
        price: 31000,
        image: "assets/foto14.webp",
        description: "Rosas rojas en florero de vidrio con gypsophila, ruscus y lazo de raso celeste, listo para ubicar sin trasvasije. Disponible en tres tamaños: 6 rosas $31.000, 8 rosas $38.000 y 10 rosas $44.000.",
        categories: ["rosas-rojas", "floreros", "precio-medio"]
    },
    {
        id: 15,
        name: "Ramo de 24 Rosas Rojas",
        price: 106000,
        image: "assets/foto15.webp",
        description: "Dos docenas de rosas rojas de tallo largo en una sola cúpula, con gypsophila y mirto entre medio, sobre papel blanco de filo dorado. La opción para pedir matrimonio o celebrar algo grande.",
        categories: ["rosas-rojas", "precio-alto"]
    },
    {
        id: 16,
        name: "Rosas Rojas y Tulipanes",
        price: 81000,
        image: "assets/foto16.webp",
        description: "Una docena de rosas rojas combinada con tulipanes amarillos y blancos, eucalipto y mirto, en papel negro con dorado y moño rojo. Mezcla poco vista que se ve carísima.",
        categories: ["rosas-rojas", "tulipanes", "precio-alto"]
    },
    {
        id: 17,
        name: "Rosas Rojas y Tulipanes Blancos",
        price: 50000,
        image: "assets/foto17.webp",
        description: "Cinco rosas rojas rodeadas de tulipanes blancos aún cerrados, con gypsophila y follaje fino. Papel color crema con filo dorado y lazo de raso rosado: delicado y muy elegante.",
        categories: ["rosas-rojas", "tulipanes", "precio-medio"]
    },
    {
        id: 18,
        name: "Girasoles y Rosas Rojas Grande",
        price: 83000,
        image: "assets/foto18.webp",
        description: "Ocho girasoles y una decena de rosas rojas armados en un ramo de gran volumen, con mirto verde llenando los espacios. Papel negro con borde dorado y cinta roja, imposible de ignorar.",
        categories: ["girasoles", "rosas-rojas", "precio-alto"]
    },
    {
        id: 19,
        name: "Ramo de 20 Rosas Rosadas",
        price: 81000,
        image: "assets/foto19.webp",
        description: "Veinte rosas en distintos tonos de rosa, desde el pálido hasta el fucsia suave, con gypsophila y hojas redondas de eucalipto. Papel blanco con filo dorado para un acabado impecable.",
        categories: ["rosas-rosadas", "precio-alto"]
    },
    {
        id: 20,
        name: "Lirios y Rosas Rosadas",
        price: 49000,
        image: "assets/foto20.webp",
        description: "Lirios rosados abiertos y varios botones que seguirán floreciendo, acompañados de rosas rosa pálido y gypsophila. Papel blanco con filo dorado y amarre de rafia natural.",
        categories: ["lirios", "rosas-rosadas", "mix", "precio-medio"]
    },
    {
        id: 21,
        name: "Florero con Girasoles y Rosas",
        price: 44000,
        image: "assets/foto21.webp",
        description: "Tres girasoles y cinco rosas rojo vino en florero de vidrio, con eucalipto cinerea y gypsophila abriéndose hacia los lados. Lazo de raso rojo al cuello y llega con agua, listo para lucir.",
        categories: ["floreros", "girasoles", "rosas-rojas", "precio-medio"]
    },
    {
        id: 22,
        name: "Ramo de Girasoles",
        price: 40000,
        image: "assets/foto22.webp",
        description: "Ocho girasoles bien abiertos, apretados en una sola cúpula amarilla, con mirto verde de relleno. Papel negro con filo kraft, amarre de rafia y tarjeta escrita a mano incluida.",
        categories: ["girasoles", "precio-medio"]
    },
    {
        id: 23,
        name: "Rosas y Lirios Amarillos",
        price: 40000,
        image: "assets/foto23.webp",
        description: "Cinco rosas amarillas junto a lirios del mismo tono que van abriendo con los días, más gypsophila y follaje. Papel amarillo suave: el ramo para felicitar, agradecer o simplemente alegrar el día.",
        categories: ["lirios", "mix", "precio-medio"]
    },
    {
        id: 24,
        name: "Ramo Pequeño Fucsia con Gerbera",
        price: 23000,
        image: "assets/foto24.webp",
        description: "Gerbera fucsia, rosa fucsia y lirio rosado en un ramo chico pero de color intenso, con gypsophila y follaje. Envoltura gris con ribete lila y amarre de mimbre trenzado.",
        categories: ["rosas-rosadas", "mix", "precio-bajo"]
    },
    {
        id: 25,
        name: "8 Rosas Rojas en Envoltura Negra",
        price: 35000,
        image: "assets/foto25.webp",
        description: "Ocho rosas rojas escalonadas con gypsophila entre medio, en papel negro translúcido con rizos y moño de raso rojo. El clásico romántico, bien hecho y a buen precio.",
        categories: ["rosas-rojas", "precio-medio"]
    },
    {
        id: 26,
        name: "8 Rosas Fucsia",
        price: 35000,
        image: "assets/foto26.webp",
        description: "Ocho rosas fucsia de botón firme con gypsophila y ramas de ciprés, presentadas en papel rosa palo con filo dorado y un moño fucsia amplio. Vibrante sin perder la elegancia.",
        categories: ["rosas-rosadas", "precio-medio"]
    },
    {
        id: 27,
        name: "Girasoles y Rosas Surtidas",
        price: 35000,
        image: "assets/foto27.webp",
        description: "Tres girasoles acompañados de rosas en rosado, blanco y rojo, con gypsophila y hojas verdes. Papel rosado con filo dorado y tarjeta al centro: uno de los más pedidos para cumpleaños.",
        categories: ["girasoles", "mix", "precio-medio"]
    },
    {
        id: 28,
        name: "Girasoles con Rosas de Colores",
        price: 35000,
        image: "assets/foto28.webp",
        description: "Cinco girasoles rodeados de rosas roja, fucsia, rosada y blanca, con abundante gypsophila y mirto. Papel rosa con borde kraft y tarjeta incluida, un ramo alegre para cualquier ocasión.",
        categories: ["girasoles", "mix", "precio-medio"]
    },
    {
        id: 29,
        name: "Ramo de 6 Rosas Rojas y 4 Girasoles",
        price: 35000,
        oldPrice: 42000,
        image: "assets/foto29.webp",
        description: "Seis rosas rojas de botón firme junto a cuatro girasoles amarillos, con alstroemerias rojas, gypsophila y ramas de pino. Envoltura café con interior rosado y encaje: contraste fuerte y mucho más volumen del que aparenta el precio.",
        categories: ["promocion", "girasoles", "rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 30,
        name: "Ramo de 6 Girasoles y 8 Rosas Rojas",
        price: 43750,
        oldPrice: 52500,
        image: "assets/foto30.webp",
        description: "Seis girasoles bien abiertos rodeados de ocho rosas rojas y gypsophila, montados en papel color mantequilla con moño de raso burdeos. Un ramo de gran formato, con colores que se ven desde lejos.",
        categories: ["promocion", "girasoles", "rosas-rojas", "precio-medio"]
    },
    {
        id: 31,
        name: "Canasta Rosas Blancas y Crisantemos Rosados",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto31.webp",
        description: "Rosas blancas y crisantemos rosados sobre una base tupida de pino verde, en canasta de mimbre con asa alta. Fresca y dulce, llega lista para dejar sobre cualquier mesa o velador.",
        categories: ["promocion", "canastas", "rosas-rosadas", "mix", "precio-bajo"]
    },
    {
        id: 32,
        name: "Canasta Cálida con Girasoles y Alstroemerias",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto32.webp",
        description: "Alstroemerias rojas, girasoles pequeños, crisantemos cobrizos y una rosa blanca al centro, con gypsophila y follaje de pino. Canasta con asa en tonos cálidos, de las más vistosas.",
        categories: ["promocion", "canastas", "girasoles", "mix", "precio-bajo"]
    },
    {
        id: 33,
        name: "Canasta de Lirios Naranjas y Rosados",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto33.webp",
        description: "Lirios naranjas y rosados ya abiertos, con botones que siguen floreciendo los días siguientes, más margaritas blancas y crisantemos amarillos sobre follaje verde. La canasta más alta y llamativa del grupo.",
        categories: ["promocion", "canastas", "lirios", "mix", "precio-bajo"]
    },
    {
        id: 34,
        name: "Canasta Blanca de Rosas y Crisantemos",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto34.webp",
        description: "Arreglo íntegramente blanco: rosas, crisantemos y gypsophila sobre una cama densa de pino verde, en canasta con asa. Sobria y elegante, sirve tanto para acompañar como para decorar.",
        categories: ["promocion", "canastas", "mix", "precio-bajo"]
    },
    {
        id: 35,
        name: "Canasta Rosas Blancas y Crisantemos Lilas",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto35.webp",
        description: "Rosas blancas repartidas alrededor de crisantemos lilas y rosados, con gypsophila y abundante pino verde. Canasta con asa alta, delicada y de muy buena duración.",
        categories: ["promocion", "canastas", "rosas-rosadas", "mix", "precio-bajo"]
    },
    {
        id: 36,
        name: "Canasta Blanca y Roja con Margaritas",
        price: 22500,
        oldPrice: 27000,
        image: "assets/foto36.webp",
        description: "Rosas blancas y rojas junto a margaritas blancas, alstroemerias rojas y gypsophila sobre follaje de ciprés. Canasta con asa, un clásico que funciona para cualquier ocasión.",
        categories: ["promocion", "canastas", "rosas-rojas", "mix", "precio-bajo"]
    }
];

// ===== Estado =====
let currentFilter = document.body && document.body.dataset.initialFilter ? document.body.dataset.initialFilter : 'todos';
let searchTerm = '';

function productCode(p){ return String(p.id).padStart(3,'0'); }
function productPhotoUrl(p){ return 'http://floreriasantiago.dondeseria.com/' + p.image.replace(/^\//,''); }
function normalizeText(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
function formatPrice(price){ return '$' + price.toLocaleString('es-CL'); }

function renderProducts(){
    const filter = currentFilter;
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');
    if(!grid) return;
    let filtered = products;
    if(filter !== 'todos'){ filtered = products.filter(p => p.categories.includes(filter)); }
    if(searchTerm.trim()){
        const q = normalizeText(searchTerm.trim());
        filtered = filtered.filter(p => normalizeText(p.name).includes(q) || productCode(p).includes(q));
    }
    filtered = filtered.slice().sort(function(a,b){ return (b.oldPrice?1:0) - (a.oldPrice?1:0); });
    if(filtered.length === 0){
        grid.style.display='none';
        if(emptyState) emptyState.classList.add('active');
        if(resultsCount) resultsCount.textContent='0';
        return;
    }
    grid.style.display='grid';
    if(emptyState) emptyState.classList.remove('active');
    if(resultsCount) resultsCount.textContent = filtered.length;
    grid.innerHTML = filtered.map(buildProductCard).join('');
}

// ===== Tarjeta de producto (con soporte de PROMOCION destacada) =====
function promoPercent(p){ return Math.round((1 - (p.price / p.oldPrice)) * 100); }

function buildProductCard(product){
    var enPromo = !!product.oldPrice;
    var waTexto = enPromo
        ? 'Hola, me interesa el producto EN PROMOCION: ' + product.name + ' (Ref. ' + productCode(product) + ') - Precio promocion ' + formatPrice(product.price) + ' (antes ' + formatPrice(product.oldPrice) + ') | Foto: ' + productPhotoUrl(product)
        : 'Hola, me interesa el producto: ' + product.name + ' (Ref. ' + productCode(product) + ') - ' + formatPrice(product.price) + ' | Foto: ' + productPhotoUrl(product);
    return `
        <div class="product-card${enPromo ? ' is-promo' : ''}" data-categories="${product.categories.join(' ')}">
            ${enPromo ? `<div class="promo-corner"><span class="promo-corner-pct">-${promoPercent(product)}%</span><span class="promo-corner-txt">OFERTA</span></div>` : ''}
            <div class="product-image-container" onclick="openLightbox('${product.image}', '${product.name.replace(/'/g, "\\'")}', '${formatPrice(product.price)}')">
                <img src="/${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                ${enPromo ? `<div class="promo-ribbon">PRECIO PROMOCIÓN · SOLO ESTA SEMANA</div>` : ''}
                <div class="zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                </div>
            </div>
            <div class="product-info">
                                <div class="product-ref">Ref. ${productCode(product)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="price-block">
                        ${enPromo
                            ? `<span class="price-old">Antes ${formatPrice(product.oldPrice)}</span>`
                            : `<span class="price-label">Desde</span>`}
                        <div class="product-price${enPromo ? ' product-price-promo' : ''}">${formatPrice(product.price)}</div>
                        ${enPromo ? `<span class="price-save">Ahorras ${formatPrice(product.oldPrice - product.price)}</span>` : ''}
                    </div>
                    <a href="https://wa.me/56941818578?text=${encodeURIComponent(waTexto)}" class="btn-order" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Pedir Ahora
                    </a>
                </div>
            </div>
        </div>`;
}

function openLightbox(image, name, price){
    document.getElementById('lightbox-image').src = '/' + image.replace(/^\//,'');
    document.getElementById('lightbox-image').alt = name;
    document.getElementById('lightbox-title').textContent = name;
    document.getElementById('lightbox-price').textContent = price;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox(){ document.getElementById('lightbox').classList.remove('active'); }

async function loadComponent(id, path){
    try{
        const r = await fetch(path);
        if(!r.ok) throw new Error(path);
        document.getElementById(id).innerHTML = await r.text();
    }catch(e){ console.error('Error loading', path, e); }
}
function toggleMobileMenu(){
    const menu = document.getElementById('navbarMenu');
    const ham = document.querySelector('.hamburger');
    if(menu && ham){ menu.classList.toggle('active'); ham.classList.toggle('active'); }
}
function trackWhatsAppClick(src){ /* noop */ }

document.addEventListener('DOMContentLoaded', function(){
    loadComponent('navbar-container', '/components/navbar.html');
    loadComponent('service-areas-container', '/components/service-areas.html');
    loadComponent('contact-info-container', '/components/contact-info.html');
    loadComponent('footer-container', '/components/footer.html');
    loadComponent('whatsapp-button-container', '/components/whatsapp-button.html');

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function(){
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderProducts();
            window.scrollTo({ top: 400, behavior: 'smooth' });
        });
    });
    // sincronizar botón activo con filtro inicial
    const initBtn = document.querySelector('.filter-btn[data-filter="'+currentFilter+'"]');
    if(initBtn){ document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); initBtn.classList.add('active'); }

    const search = document.getElementById('product-search');
    if(search){ search.addEventListener('input', function(){ searchTerm = this.value; renderProducts(); }); }

    const lbClose = document.getElementById('lightbox-close');
    if(lbClose) lbClose.addEventListener('click', closeLightbox);
    const lb = document.getElementById('lightbox');
    if(lb) lb.addEventListener('click', function(e){ if(e.target===this) closeLightbox(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeLightbox(); });

    const scrollTopBtn = document.getElementById('scroll-top');
    if(scrollTopBtn){
        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 600) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        });
        scrollTopBtn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
    }

    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('.navbar');
        if(!navbar) return;
        if(window.pageYOffset > 100) navbar.classList.add('navbar-scrolled');
        else navbar.classList.remove('navbar-scrolled');
    });

    // Abrir directamente en promociones si la URL trae #promocion
    if(window.location.hash === '#promocion'){
        var bp = document.querySelector('.filter-btn[data-filter="promocion"]');
        if(bp){ currentFilter = 'promocion'; document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active');}); bp.classList.add('active'); }
    }

    renderProducts();
});
