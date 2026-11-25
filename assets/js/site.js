/* PMF Factory site script: scroll reveals + HubSpot form embeds */
(function () {
  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // HubSpot forms
  var PORTAL = '144176746', REGION = 'eu1';
  var BASE = new URL('.', document.currentScript ? new URL('../..', document.currentScript.src) : location.href).href.replace(/\/$/, '');
  var THEMES = { kinetic: "@font-face{font-family:\"Inter\";font-weight:400;src:url(\"__BASE__/assets/fonts/Inter/Inter-Regular.woff\") format(\"woff\")}@font-face{font-family:\"Inter\";font-weight:600;src:url(\"__BASE__/assets/fonts/Inter/Inter-SemiBold.woff\") format(\"woff\")}@font-face{font-family:\"Inter\";font-weight:800;src:url(\"__BASE__/assets/fonts/Inter/Inter-ExtraBold.woff\") format(\"woff\")}html,body{margin:0;background:transparent}.hs-form{font-family:\"Inter\",system-ui,sans-serif;color:#0B0B0F;font-size:16px;line-height:1.5}.hs-form fieldset{max-width:none!important}.hs-form .hs-richtext h1{display:none}.hs-form .hs-richtext p{margin:0 0 14px;font-size:15px;color:#5F5C55}.hs-form .hs-form-field{margin:0 0 18px}.hs-form label{display:block;font-size:14px;font-weight:600;margin:0 0 8px}.hs-form .hs-form-required{color:#0B0B0F;margin-left:2px}.hs-form input.hs-input[type=email],.hs-form input.hs-input[type=text],.hs-form input.hs-input[type=tel],.hs-form select.hs-input,.hs-form textarea.hs-input{box-sizing:border-box;width:100%!important;font:16px/1.4 \"Inter\",system-ui,sans-serif;color:#0B0B0F;background:#F3F1EC;border:1.5px solid transparent;border-radius:14px;padding:14px 16px;outline:none;transition:border-color .2s,background-color .2s;-webkit-appearance:none;appearance:none}.hs-form input.hs-input:focus,.hs-form select.hs-input:focus,.hs-form textarea.hs-input:focus{background:#fff;border-color:#0B0B0F}.hs-form input.hs-input.invalid.error{border-color:#B00020;background:#fff}.hs-form .inputs-list{list-style:none;padding:0;margin:0}.hs-form .multi-container{display:flex;flex-wrap:wrap;gap:8px}.hs-form .hs-form-checkbox label,.hs-form .hs-form-radio label{display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:500;font-size:14px;background:#F3F1EC;border:1.5px solid transparent;border-radius:999px;padding:8px 14px 8px 10px;cursor:pointer;transition:background-color .2s,border-color .2s}.hs-form .hs-form-checkbox label:hover{border-color:#0B0B0F}.hs-form .hs-form-checkbox input,.hs-form .hs-form-booleancheckbox input{width:18px;height:18px;margin:0;accent-color:#0B0B0F;flex:none}.hs-form .hs-form-checkbox label:has(input:checked){background:#79FF38;border-color:#0B0B0F}.hs-form .hs-form-booleancheckbox label{display:flex;align-items:flex-start;gap:10px;font-weight:500;font-size:14px;margin:0}.hs-form .legal-consent-container{margin:4px 0 8px}.hs-form .legal-consent-container .hs-richtext,.hs-form .legal-consent-container p{font-size:12.5px;line-height:1.5;color:#5F5C55;margin:0 0 10px}.hs-form .hs-error-msgs{list-style:none;padding:0;margin:6px 0 0}.hs-form .hs-error-msgs label,.hs-form .hs-error-msg{color:#B00020;font-size:13px;font-weight:600;margin:0}.hs-form .hs_error_rollup{display:none}.hs-form .hs-submit{margin:10px 0 4px}.hs-form .hs-button{font:700 16px/1 \"Inter\",system-ui,sans-serif;color:#0B0B0F;background:#79FF38;border:0;border-radius:999px;padding:17px 30px;cursor:pointer;transition:transform .2s,box-shadow .2s;-webkit-appearance:none}.hs-form .hs-button:hover{transform:translateY(-1px);box-shadow:0 0 0 3px #0B0B0F}.hs-form .hs-button:focus-visible{outline:3px solid #0B0B0F;outline-offset:3px}.submitted-message{font-family:\"Inter\",system-ui,sans-serif;font-size:20px;font-weight:600;line-height:1.4;color:#0B0B0F;padding:28px;background:#79FF38;border-radius:24px}", swiss: "@font-face{font-family:\"Inter\";font-weight:400;src:url(\"__BASE__/assets/fonts/Inter/Inter-Regular.woff\") format(\"woff\")}@font-face{font-family:\"Inter\";font-weight:600;src:url(\"__BASE__/assets/fonts/Inter/Inter-SemiBold.woff\") format(\"woff\")}@font-face{font-family:\"Inter\";font-weight:800;src:url(\"__BASE__/assets/fonts/Inter/Inter-ExtraBold.woff\") format(\"woff\")}html,body{margin:0;background:transparent}.hs-form{font-family:\"Inter\",system-ui,sans-serif;color:#0B0B0F;font-size:16px;line-height:1.5}.hs-form fieldset{max-width:none!important}.hs-form .hs-richtext h1{display:none}.hs-form .hs-richtext p{margin:0 0 14px;font-size:15px;color:#6A6A72}.hs-form .hs-form-field{margin:0 0 22px}.hs-form label{display:block;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;margin:0 0 6px;color:#0B0B0F}.hs-form .hs-form-required{margin-left:2px;color:#9B00B8}.hs-form input.hs-input[type=email],.hs-form input.hs-input[type=text],.hs-form input.hs-input[type=tel],.hs-form select.hs-input,.hs-form textarea.hs-input{box-sizing:border-box;width:100%!important;font:20px/1.3 \"Inter\",system-ui,sans-serif;color:#0B0B0F;background:transparent;border:0;border-bottom:1px solid #0B0B0F;border-radius:0;padding:10px 0;outline:none;-webkit-appearance:none;appearance:none}.hs-form input.hs-input:focus{border-bottom:3px solid #0B0B0F;padding-bottom:8px}.hs-form input.hs-input.invalid.error{border-bottom-color:#B00020}.hs-form .inputs-list{list-style:none;padding:0;margin:0}.hs-form .multi-container{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #0B0B0F}.hs-form .hs-form-checkbox label{display:flex;align-items:center;gap:10px;margin:0;font-size:15px;font-weight:500;letter-spacing:0;text-transform:none;padding:12px 0;border-bottom:1px solid #EDEDF0;cursor:pointer}.hs-form .hs-form-checkbox input,.hs-form .hs-form-booleancheckbox input{width:16px;height:16px;margin:0;accent-color:#0B0B0F;flex:none}.hs-form .hs-form-checkbox label:has(input:checked){font-weight:700}.hs-form .hs-form-booleancheckbox label{display:flex;align-items:flex-start;gap:10px;font-size:14px;font-weight:500;letter-spacing:0;text-transform:none;margin:0}.hs-form .legal-consent-container .hs-richtext,.hs-form .legal-consent-container p{font-size:12px;line-height:1.5;color:#6A6A72;margin:0 0 10px}.hs-form .hs-error-msgs{list-style:none;padding:0;margin:6px 0 0}.hs-form .hs-error-msgs label,.hs-form .hs-error-msg{color:#B00020;font-size:12px;font-weight:600;text-transform:none;letter-spacing:0;margin:0}.hs-form .hs_error_rollup{display:none}.hs-form .hs-submit{margin:14px 0 4px}.hs-form .hs-button{width:100%;text-align:left;font:600 20px/1 \"Inter\",system-ui,sans-serif;color:#fff;background:#0B0B0F;border:0;border-radius:0;padding:22px 20px;cursor:pointer;-webkit-appearance:none}.hs-form .hs-button:hover{background:#9B00B8}.hs-form .hs-button:focus-visible{outline:3px solid #9B00B8;outline-offset:3px}.submitted-message{font-family:\"Inter\",system-ui,sans-serif;font-size:22px;font-weight:600;line-height:1.35;color:#0B0B0F;padding:24px 0;border-top:1px solid #0B0B0F;border-bottom:1px solid #0B0B0F}" };
  var FORM_CSS = (THEMES[document.body.getAttribute('data-form-theme')] || THEMES.kinetic).split('__BASE__').join(BASE);
  var mounts = document.querySelectorAll('[data-hs-form]');
  if (!mounts.length) return;

  function fallback(m) {
    m.classList.remove('loading');
    var fb = m.parentNode.querySelector('.form-fallback');
    if (fb) fb.hidden = false;
  }
  function style(m) {
    // HubSpot renders the form in a same-origin iframe: inject our stylesheet into it
    var fr = m.querySelector('iframe.hs-form-iframe');
    var doc = fr ? fr.contentDocument : document;
    var form = doc && doc.querySelector('form.hs-form');
    if (!form) return false;
    if (!doc.getElementById('pmf-form-style')) {
      Array.prototype.forEach.call(doc.querySelectorAll('style[id^="hs-form-style"]'), function (el) { el.remove(); });
      var st = doc.createElement('style'); st.id = 'pmf-form-style'; st.textContent = FORM_CSS;
      (doc.head || doc.documentElement).appendChild(st);
    }
    m.classList.remove('loading'); m.setAttribute('data-ready', '1');
    return true;
  }
  function create() {
    mounts.forEach(function (m) {
      window.hbspt.forms.create({
        region: REGION,
        portalId: PORTAL,
        formId: m.getAttribute('data-hs-form'),
        target: '#' + m.id,
        onFormReady: function () { style(m); }
      });
      var tries = 0;
      var t = setInterval(function () {
        tries++;
        // keep re-applying briefly (HubSpot may re-render, e.g. after validation)
        if (m.getAttribute('data-ready') && tries > 40) { clearInterval(t); return; }
        style(m);
        if (tries === 40 && !m.getAttribute('data-ready')) { clearInterval(t); fallback(m); }
      }, 250);
    });
  }
  var s = document.createElement('script');
  s.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
  s.charset = 'utf-8';
  s.async = true;
  s.onload = function () { window.hbspt && window.hbspt.forms ? create() : mounts.forEach(fallback); };
  s.onerror = function () { mounts.forEach(fallback); };
  document.head.appendChild(s);
})();
