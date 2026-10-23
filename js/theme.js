// Light/dark theme: follows the system setting until the visitor picks one with the header toggle.
// Loaded in <head> so the theme is applied before the page paints (no light flash in dark mode).
(function () {
  var THEME_KEY = 'bono-theme';
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function storedTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function systemTheme() {
    return media && media.matches ? 'dark' : 'light';
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

  applyTheme(storedTheme() || systemTheme());

  // Follow system changes while the visitor hasn't chosen a theme themselves.
  if (media) {
    var onSystemChange = function () {
      if (!storedTheme()) applyTheme(systemTheme());
    };
    if (media.addEventListener) media.addEventListener('change', onSystemChange);
    else if (media.addListener) media.addListener(onSystemChange);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateToggles(root.getAttribute('data-theme'));
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
