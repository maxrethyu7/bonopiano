// Dark is the default theme; visitors can choose light mode with the header toggle.
// Loaded in <head> so the theme is applied before the page paints.
(function () {
  var THEME_KEY = 'bono-theme';
  var root = document.documentElement;

  function storedTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function updateToggles(theme) {
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      var dark = theme === 'dark';
      buttons[i].setAttribute('aria-pressed', dark ? 'true' : 'false');
      buttons[i].setAttribute('aria-label', dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren');
      buttons[i].setAttribute('title', dark ? 'Light mode' : 'Dark mode');
      var icon = buttons[i].querySelector('.material-icons');
      if (icon) icon.textContent = dark ? 'light_mode' : 'dark_mode';
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateToggles(theme);
  }

  applyTheme(storedTheme() || 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    updateToggles(root.getAttribute('data-theme'));
    document.addEventListener('componentsLoaded', function () {
      updateToggles(root.getAttribute('data-theme'));
    });
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.theme-toggle');
      if (!btn) return;
      e.preventDefault();
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* ignore */ }
      applyTheme(next);
    });
  });
})();
