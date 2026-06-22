document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    de: {
      'nav.home': 'Home',
      'nav.shop': 'Produkt',
      'nav.instagram': 'Anleitung',
      'nav.impressum': 'Impressum',
      'header.title': 'Herzlich Willkommen',
      'header.subtitle': '<b>auf entsetzlichgut.de!</b><br>Mein Name ist DerEntzücker und ich mag Wortspiele und Enten.',
      'card.shop': '<b>Werde ein KonsumENT von witzigen Enten-T-Shirts:</b><br>Klicke auf den ENTLaden, um zum Shop zu gelangen, bei dem Du ENTsetzlichen Merch kaufen kannst! Dort werden die meisten Entenbilder hochgeladen, die Du dann auf Tassen, (Funktions-) T-Shirts und mehr verewigen kannst!',
      'card.instagram': '<b>Folge uns auf Instagram und werde ein AbonnenENT:</b><br>Klicke auf die sich drehende MutterENTe, um auf meine Instagram Seite zu gelangen. Folge mir dort und verpass keine neue, ENTsetzlich gute Entenbilder (und -gifs) mehr, bleib auf dem Laufenden oder kontaktiere mich für Vorschläge, Kritik und anderes!',
      'footer.about': 'Über die Enten',
      'footer.aboutText': 'Die Idee der Enten ist in einer Vorlesung entstanden. Durch den Support einiger Fangirls und -boys wurde die Idee weiterENTwickelt und hier sind wir nun mit einer eigenen Webseite, einem eigenem Shop und einem eigenem Instagram Account.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.email': 'E-Mail',
      'product.title': 'Produkt',
      'product.shopLoading': 'Spreadshop lädt...',
      'tutorial.title': 'Anleitung',
      'impressum.title': 'Impressum',
      'impressum.contact': 'Kontakt'
    },
    en: {
      'nav.home': 'Home',
      'nav.shop': 'Product',
      'nav.instagram': 'Tutorial',
      'nav.impressum': 'Imprint',
      'header.title': 'Welcome',
      'header.subtitle': '<b>to entsetzlichgut.de!</b><br>My name is DerEntzücker and I like wordplay and ducks.',
      'card.shop': '<b>Become a consumerENT of funny duck t-shirts:</b><br>Click through to the shop where you can buy the ENTirely funny merch! Most duck pictures are uploaded there so you can wear them on mugs, shirts and more!',
      'card.instagram': '<b>Follow us on Instagram and become a subscribENT:</b><br>Click the spinning motherDUCK to go to my Instagram page. Follow me there and never miss another new, ENTishly good duck photo (and gif), stay updated or contact me with suggestions, critique, or other messages!',
      'footer.about': 'About the ducks',
      'footer.aboutText': 'The idea for the ducks was born in a lecture. With the support of some fangirls and fanboys the idea was further ENT-developed and now we are here with our own website, our own shop and our own Instagram account.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.email': 'E-Mail',
      'product.title': 'Product',
      'product.shopLoading': 'Spreadshop is loading...',
      'tutorial.title': 'Tutorial',
      'impressum.title': 'Imprint',
      'impressum.contact': 'Contact'
    },
    zh: {
      'nav.home': '首页',
      'nav.shop': '产品',
      'nav.instagram': '教程',
      'nav.impressum': '印象',
      'header.title': '欢迎',
      'header.subtitle': '<b>欢迎来到 entsetzlichgut.de！</b><br>我的名字是 DerEntzücker，我喜欢文字游戏和鸭子。',
      'card.shop': '<b>成为一个有趣鸭子T恤的消费ENT：</b><br>点击“ENT Laden”进入商店，您可以在那里购买ENT绝妙的商品！大多数鸭子图片会上传到那里，您可以将它们印在杯子、T恤等上面！',
      'card.instagram': '<b>关注我们的 Instagram 并成为一名订阅ENT：</b><br>点击旋转的母鸭，进入我的 Instagram 页面。关注我，别错过更多新的、ENT妙的鸭子照片（和动图），保持更新，或给我发建议、反馈和其他消息！',
      'footer.about': '关于这些鸭子',
      'footer.aboutText': '这些鸭子的想法诞生于一次讲座。在一些粉丝的支持下，这个想法得以进一步 ENT 发展，现在我们拥有自己的网站、自己的商店和自己的 Instagram 账号。',
      'footer.nav': '导航',
      'footer.contact': '联系',
      'footer.email': '电子邮件',
      'product.title': '产品',
      'product.shopLoading': 'Spreadshop 加载中...',
      'tutorial.title': '教程',
      'impressum.title': '印象',
      'impressum.contact': '联系'
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
      el.innerHTML = txt;
    });

    document.documentElement.lang = locale;
    setActiveLangButton();
  }

  translatePage();
});
