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
      'card.instagram': 'Folge uns auf Instagram und werde ein AbonnenENT:',
      'footer.about': 'Über die Enten',
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.email': 'E-Mail'
    },
    en: {
      'nav.home': 'Home',
      'nav.shop': 'Shop',
      'nav.instagram': 'Instagram',
      'nav.impressum': 'Imprint',
      'header.title': 'Welcome',
      'header.subtitle': 'to entsetzlichgut.de!\nMy name is DerEntzücker and I like wordplay and ducks.',
      'card.shop': 'Become a consumerENT of funny duck t-shirts:',
      'card.instagram': 'Follow us on Instagram and become a subscribENT:',
      'footer.about': 'About the ducks',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.email': 'E-Mail'
    },
    zh: {
      'nav.home': '首页',
      'nav.shop': '商店',
      'nav.instagram': 'Instagram',
      'nav.impressum': '印象',
      'header.title': '欢迎',
      'header.subtitle': '欢迎来到 entsetzlichgut.de！\n我的名字是 DerEntzücker，我喜欢文字游戏和鸭子。',
      'card.shop': '成为一个有趣鸭子T恤的消费ENT：',
      'card.instagram': '关注我们的 Instagram 并成为一名订阅ENT：',
      'footer.about': '关于这些鸭子',
      'footer.nav': '导航',
      'footer.contact': '联系',
      'footer.email': '电子邮件'
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
    if (nav.startsWith('zh')) return 'zh';
    return 'de';
  }

  let locale = detectLocale();

  function setActiveLangButton() {
    document.querySelectorAll('.lang-button').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === locale);
    });
  }

  document.querySelectorAll('.lang-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      locale = event.currentTarget.dataset.lang;
      saveLocale(locale);
      setActiveLangButton();
      translatePage();
    });
  });

  function t(key) {
    return (translations[locale] && translations[locale][key]) || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const txt = t(key);
      if (el.children.length === 0) {
        el.textContent = txt;
      } else {
        el.childNodes.forEach((n) => {
          if (n.nodeType === Node.TEXT_NODE) {
            n.textContent = txt;
          }
        });
      }
    });

    document.documentElement.lang = locale;
    setActiveLangButton();
  }

  translatePage();
});
