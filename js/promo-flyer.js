/* =====================================================================
   FLORICOR · Flyer flotante de promoción semanal
   - Aparece apenas entra la persona
   - Contador que corre hasta el domingo 23:59:59 y se reinicia cada lunes
   - La "X" para cerrar recién se habilita a los 5 segundos
   ===================================================================== */
(function () {
    'use strict';

    // ---------------- CONFIGURACIÓN RÁPIDA ----------------
    var CONFIG = {
        segundosBloqueoCierre: 5,        // segundos antes de poder cerrar
        mostrarUnaVezPorSesion: true,    // false = aparece en cada página
        retrasoAparicionMs: 400,         // pequeña pausa para que cargue la página
        descuento: '17%',
        whatsapp: '56941818578',
        urlCatalogo: '/catalogo.html'
    };

    var PROMOS = [
        { img: '/assets/foto30.webp', nombre: '6 girasoles + 8 rosas rojas', antes: 52500, ahora: 43750 },
        { img: '/assets/foto29.webp', nombre: '6 rosas rojas + 4 girasoles', antes: 42000, ahora: 35000 },
        { img: '/assets/foto31.webp', nombre: 'Canastas de flores',          antes: 27000, ahora: 22500 }
    ];

    // ---------------- UTILIDADES ----------------
    function clp(n) { return '$' + n.toLocaleString('es-CL'); }

    // Fin de la promo: domingo de esta semana a las 23:59:59.
    // El lunes a las 00:00 el cálculo salta automáticamente al domingo siguiente.
    function finDePromo() {
        var ahora = new Date();
        var dia = ahora.getDay();                 // 0 = domingo ... 6 = sábado
        var faltanParaDomingo = (7 - dia) % 7;    // domingo -> 0
        return new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            ahora.getDate() + faltanParaDomingo,
            23, 59, 59, 999
        );
    }

    function dosDigitos(n) { return (n < 10 ? '0' : '') + n; }

    function partesRestantes() {
        var ms = finDePromo().getTime() - Date.now();
        if (ms < 0) ms = 0;
        var s = Math.floor(ms / 1000);
        return {
            dias: Math.floor(s / 86400),
            horas: Math.floor((s % 86400) / 3600),
            min: Math.floor((s % 3600) / 60),
            seg: s % 60
        };
    }

    function yaSeMostro() {
        if (!CONFIG.mostrarUnaVezPorSesion) return false;
        try { return sessionStorage.getItem('floricor_flyer_promo') === '1'; }
        catch (e) { return false; }
    }
    function marcarMostrado() {
        try { sessionStorage.setItem('floricor_flyer_promo', '1'); } catch (e) {}
    }

    // ---------------- ESTILOS ----------------
    var CSS = ''
    + '.fpromo-overlay{position:fixed;inset:0;z-index:99999;background:rgba(18,12,22,.78);'
    + 'backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;'
    + 'justify-content:center;padding:1rem;opacity:0;visibility:hidden;transition:opacity .35s ease,visibility .35s ease;overflow-y:auto}'
    + '.fpromo-overlay.is-open{opacity:1;visibility:visible}'
    + '.fpromo-card{position:relative;width:100%;max-width:430px;background:#fff;border-radius:22px;'
    + 'overflow:hidden;box-shadow:0 30px 90px rgba(0,0,0,.55);transform:translateY(26px) scale(.96);'
    + 'transition:transform .45s cubic-bezier(.2,.8,.3,1);font-family:"Poppins",system-ui,sans-serif;margin:auto}'
    + '.fpromo-overlay.is-open .fpromo-card{transform:translateY(0) scale(1)}'
    + '.fpromo-head{background:linear-gradient(135deg,#A5101B 0%,#D6212E 55%,#E8434F 100%);color:#fff;'
    + 'padding:1.5rem 1.25rem 1.15rem;text-align:center;position:relative;overflow:hidden}'
    + '.fpromo-head::after{content:"";position:absolute;inset:-40% -10% auto auto;width:210px;height:210px;'
    + 'border-radius:50%;background:rgba(255,255,255,.10)}'
    + '.fpromo-kicker{font-size:.6rem;letter-spacing:.32em;text-transform:uppercase;opacity:.92;font-weight:600}'
    + '.fpromo-big{font-family:"Playfair Display",Georgia,serif;font-size:3.1rem;line-height:1;font-weight:700;'
    + 'margin:.35rem 0 .1rem;text-shadow:0 4px 18px rgba(0,0,0,.25);position:relative}'
    + '.fpromo-sub{font-size:.82rem;font-weight:500;opacity:.96;position:relative}'
    + '.fpromo-body{padding:1.15rem 1.25rem 1.35rem}'
    + '.fpromo-item{display:flex;align-items:center;gap:.8rem;padding:.55rem 0;border-bottom:1px solid #f0edf3}'
    + '.fpromo-item:last-of-type{border-bottom:0}'
    + '.fpromo-item img{width:54px;height:54px;object-fit:cover;border-radius:12px;flex:0 0 54px;background:#f3eff7}'
    + '.fpromo-item-name{font-size:.79rem;color:#2a2233;font-weight:500;line-height:1.3}'
    + '.fpromo-item-prices{margin-top:.15rem;font-size:.78rem;display:flex;align-items:baseline;gap:.4rem;flex-wrap:wrap}'
    + '.fpromo-antes{color:#9b93a6;text-decoration:line-through;text-decoration-color:#D6212E;font-size:.74rem}'
    + '.fpromo-ahora{color:#D6212E;font-weight:700;font-size:1rem}'
    + '.fpromo-clock{margin:1rem 0 .2rem;text-align:center}'
    + '.fpromo-clock-label{font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:#7a7186;font-weight:600}'
    + '.fpromo-clock-boxes{display:flex;justify-content:center;gap:.45rem;margin-top:.5rem}'
    + '.fpromo-box{background:#16121C;color:#fff;border-radius:11px;min-width:56px;padding:.5rem .3rem}'
    + '.fpromo-box b{display:block;font-size:1.32rem;line-height:1;font-variant-numeric:tabular-nums;font-weight:700}'
    + '.fpromo-box i{display:block;font-style:normal;font-size:.52rem;letter-spacing:.16em;text-transform:uppercase;opacity:.7;margin-top:.28rem}'
    + '.fpromo-actions{display:grid;gap:.55rem;margin-top:1.1rem}'
    + '.fpromo-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;border:0;cursor:pointer;'
    + 'border-radius:999px;padding:.85rem 1rem;font-size:.86rem;font-weight:600;text-decoration:none;font-family:inherit}'
    + '.fpromo-btn-main{background:linear-gradient(135deg,#D6212E,#A5101B);color:#fff;box-shadow:0 10px 24px rgba(214,33,46,.35)}'
    + '.fpromo-btn-wa{background:#1EBE5D;color:#fff}'
    + '.fpromo-btn svg{width:18px;height:18px}'
    + '.fpromo-legal{text-align:center;font-size:.62rem;color:#9b93a6;margin-top:.75rem;line-height:1.5}'
    + '.fpromo-close{position:absolute;top:.7rem;right:.7rem;z-index:4;width:38px;height:38px;border-radius:50%;'
    + 'border:0;background:rgba(0,0,0,.32);color:#fff;font-size:1.15rem;line-height:1;cursor:not-allowed;'
    + 'display:flex;align-items:center;justify-content:center;font-family:inherit;font-weight:600;'
    + 'transition:background .25s ease,transform .25s ease}'
    + '.fpromo-close.is-ready{cursor:pointer;background:rgba(0,0,0,.5)}'
    + '.fpromo-close.is-ready:hover{background:rgba(0,0,0,.75);transform:rotate(90deg)}'
    + '.fpromo-close span{font-variant-numeric:tabular-nums;font-size:.9rem}'
    + '@media(max-width:420px){.fpromo-big{font-size:2.5rem}.fpromo-box{min-width:48px}.fpromo-box b{font-size:1.1rem}}';

    // ---------------- CONSTRUCCIÓN ----------------
    function crearFlyer() {
        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        var overlay = document.createElement('div');
        overlay.className = 'fpromo-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Promoción de la semana');

        var itemsHTML = PROMOS.map(function (p) {
            return ''
                + '<div class="fpromo-item">'
                +   '<img src="' + p.img + '" alt="' + p.nombre + '" loading="lazy">'
                +   '<div>'
                +     '<div class="fpromo-item-name">' + p.nombre + '</div>'
                +     '<div class="fpromo-item-prices">'
                +       '<span class="fpromo-antes">' + clp(p.antes) + '</span>'
                +       '<span class="fpromo-ahora">' + clp(p.ahora) + '</span>'
                +     '</div>'
                +   '</div>'
                + '</div>';
        }).join('');

        var waTexto = 'Hola, quiero aprovechar la PROMOCIÓN de la semana (' + CONFIG.descuento + ' de descuento) que vi en la página.';

        overlay.innerHTML = ''
            + '<div class="fpromo-card">'
            +   '<button class="fpromo-close" id="fpromo-close" aria-label="Cerrar" disabled><span id="fpromo-count">5</span></button>'
            +   '<div class="fpromo-head">'
            +     '<div class="fpromo-kicker">Promoción de la semana</div>'
            +     '<div class="fpromo-big">' + CONFIG.descuento + ' DTO.</div>'
            +     '<div class="fpromo-sub">En ramos de girasoles, rosas rojas y todas las canastas</div>'
            +   '</div>'
            +   '<div class="fpromo-body">'
            +     itemsHTML
            +     '<div class="fpromo-clock">'
            +       '<div class="fpromo-clock-label">Termina el domingo</div>'
            +       '<div class="fpromo-clock-boxes">'
            +         '<div class="fpromo-box"><b id="fpromo-d">0</b><i>Días</i></div>'
            +         '<div class="fpromo-box"><b id="fpromo-h">00</b><i>Horas</i></div>'
            +         '<div class="fpromo-box"><b id="fpromo-m">00</b><i>Min</i></div>'
            +         '<div class="fpromo-box"><b id="fpromo-s">00</b><i>Seg</i></div>'
            +       '</div>'
            +     '</div>'
            +     '<div class="fpromo-actions">'
            +       '<button class="fpromo-btn fpromo-btn-main" id="fpromo-ver">Ver las promociones</button>'
            +       '<a class="fpromo-btn fpromo-btn-wa" target="_blank" rel="noopener" href="https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(waTexto) + '">'
            +         '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>'
            +         'Pedir por WhatsApp'
            +       '</a>'
            +     '</div>'
            +     '<div class="fpromo-legal">Precios promocionales válidos hasta el domingo. La promoción se renueva cada lunes.</div>'
            +   '</div>'
            + '</div>';

        document.body.appendChild(overlay);
        return overlay;
    }

    // ---------------- LÓGICA ----------------
    function iniciar() {
        if (yaSeMostro()) return;

        var overlay = crearFlyer();
        var btnCerrar = overlay.querySelector('#fpromo-close');
        var spanCount = overlay.querySelector('#fpromo-count');
        var puedeCerrar = false;
        var scrollY = 0;

        function pintarReloj() {
            var t = partesRestantes();
            overlay.querySelector('#fpromo-d').textContent = t.dias;
            overlay.querySelector('#fpromo-h').textContent = dosDigitos(t.horas);
            overlay.querySelector('#fpromo-m').textContent = dosDigitos(t.min);
            overlay.querySelector('#fpromo-s').textContent = dosDigitos(t.seg);
        }

        function abrir() {
            scrollY = window.pageYOffset;
            overlay.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            marcarMostrado();
            pintarReloj();
            var reloj = setInterval(pintarReloj, 1000);
            overlay._reloj = reloj;

            // Bloqueo de 5 segundos antes de habilitar la X
            var restan = CONFIG.segundosBloqueoCierre;
            spanCount.textContent = restan;
            var bloqueo = setInterval(function () {
                restan--;
                if (restan > 0) {
                    spanCount.textContent = restan;
                } else {
                    clearInterval(bloqueo);
                    puedeCerrar = true;
                    btnCerrar.disabled = false;
                    btnCerrar.classList.add('is-ready');
                    spanCount.textContent = '✕';
                }
            }, 1000);
        }

        function cerrar() {
            if (!puedeCerrar) return;
            overlay.classList.remove('is-open');
            document.body.style.overflow = '';
            clearInterval(overlay._reloj);
            setTimeout(function () {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, 400);
        }

        btnCerrar.addEventListener('click', cerrar);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) cerrar(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

        // "Ver las promociones": activa el filtro si existe, si no va al catálogo
        overlay.querySelector('#fpromo-ver').addEventListener('click', function () {
            var filtro = document.querySelector('.filter-btn[data-filter="promocion"]');
            if (filtro) {
                puedeCerrar = true;
                cerrar();
                setTimeout(function () {
                    filtro.click();
                    var grid = document.getElementById('products-grid');
                    if (grid) window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
                }, 120);
            } else {
                window.location.href = CONFIG.urlCatalogo + '#promocion';
            }
        });

        setTimeout(abrir, CONFIG.retrasoAparicionMs);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();

/* ---------------------------------------------------------------------
   Reloj de la banda de promoción dentro de la página (#promo-strip-clock)
   --------------------------------------------------------------------- */
(function () {
    'use strict';
    function finDePromo() {
        var a = new Date(), d = a.getDay(), f = (7 - d) % 7;
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + f, 23, 59, 59, 999);
    }
    function dd(n) { return (n < 10 ? '0' : '') + n; }
    function tick() {
        var el = document.getElementById('promo-strip-clock');
        if (!el) return;
        var ms = finDePromo().getTime() - Date.now();
        if (ms < 0) ms = 0;
        var s = Math.floor(ms / 1000);
        var dias = Math.floor(s / 86400);
        el.textContent = 'Termina en ' + dias + 'd ' + dd(Math.floor((s % 86400) / 3600)) + 'h '
                       + dd(Math.floor((s % 3600) / 60)) + 'm ' + dd(s % 60) + 's';
    }
    function arrancar() { tick(); setInterval(tick, 1000); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
    else arrancar();
})();
