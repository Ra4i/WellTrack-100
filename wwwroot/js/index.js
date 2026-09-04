/* ================================================================
   index.js — Home page logic
   ================================================================ */

function applyHomeTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (key.startsWith('home.')) {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll("[data-translate-title]").forEach(el => {
    const key = el.getAttribute("data-translate-title");
    if (key.startsWith('home.')) {
      el.setAttribute("title", t(key));
    }
  });
}

function initHome() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('nav-login');
  if (user && loginLink) { loginLink.textContent = 'Dashboard'; loginLink.href = '/Home/Dashboard'; }
}

document.addEventListener('DOMContentLoaded', () => {
  initHome();
});