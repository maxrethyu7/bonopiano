document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    de: {
      'nav.home': 'Home',
      'nav.shop': 'Shop',
      'nav.instagram': 'Instagram',
      'nav.impressum': 'Impressum',
      'header.title': 'Herzlich Willkommen',
      'header.subtitle': 'auf entsetzlichgut.de!\nMein Name ist DerEntzücker und ich mag Wortspiele und Enten.',
      'card.shop': 'Werde ein KonsumENT von witzigen Enten-T-Shirts:',
      'card.instagram': 'Folge uns auf Instagram und werde ein AbonnenENT:'
    },
    en: {
      'nav.home': 'Home',
      'nav.shop': 'Shop',
      'nav.instagram': 'Instagram',
      'nav.impressum': 'Imprint',
      'header.title': 'Welcome',
      'header.subtitle': 'to entsetzlichgut.de!\nMy name is DerEntzücker and I like wordplay and ducks.',
      'card.shop': 'Become a consumerENT of funny duck t-shirts:',
      'card.instagram': 'Follow us on Instagram and become a subscribENT:'
    }
  };

  const LANG_KEY = 'site_lang';

  function getSavedLocale() {
    return localStorage.getItem(LANG_KEY);
  }

  function saveLocale(l) {
    localStorage.setItem(LANG_KEY, l);
  }

  function detectLocale() {
    const saved = getSavedLocale();
    if (saved) return saved;
    const nav = navigator.language || navigator.userLanguage || 'de';
    if (nav.startsWith('en')) return 'en';
    return 'de';
  }

  let locale = detectLocale();

  const select = document.getElementById('lang-select');
  if (select) {
    select.value = locale;
    select.addEventListener('change', (e) => {
      locale = e.target.value;
      saveLocale(locale);
      translatePage();
    });
  }

  function t(key) {
    return (translations[locale] && translations[locale][key]) || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const txt = t(key);
      // Preserve inner HTML tags if present: set textContent for plain text
      if (el.children.length === 0) el.textContent = txt;
      else el.childNodes.forEach((n) => { if (n.nodeType === Node.TEXT_NODE) n.textContent = txt; });
    });
  }

  translatePage();
});
