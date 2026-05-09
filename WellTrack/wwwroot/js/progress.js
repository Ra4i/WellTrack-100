/* ================================================================
   progress.js — Progress page logic
   ================================================================ */

function applyProgressTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (key) {
      el.textContent = t(key);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initProgress === 'function') initProgress();
});