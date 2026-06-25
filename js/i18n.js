document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    de: {
      'nav.home': 'Home',
      'nav.product': 'Produkt',
      'nav.anleitung': 'Anleitung',
      'nav.impressum': 'Impressum',
      'header.title': 'Leiser klingen. Natürlich spielen.',
      'header.subtitle': '<b>mit Technik von BONO Piano Akustik!<br><br>Die einzige elegante Akustiklösung von BONO Piano Akustik reduziert die Lautstärke akustischer Flügel und Klaviere deutlich – ohne den natürlichen Klangcharakter zu verlieren. Entwickelt für Konzertpianisten, Musikstudierende, Theater, Musik(-hoch-)schulen, Studios und alle Privaträume.</b></h5>',
      'card.product': '<b>Der patentierte Schalldämpfer von Bono Piano Akustik</b><br>Erfahren Sie mehr über das Produkt, indem Sie auf das folgende Bild klicken.</p>',
      'card.youtubeVid': '<b>Überzeugen Sie sich von der Akustik!</b><br><br>In diesem Video spielt die Erfinderin und Gründerin von Bono Piano Akustik, Nataliya Tkachenko, das Stück <em>Gnosienne Nr. 1</em> von <em>Satie</em> mit verbautem Schalldämpfer. Dadurch wird die Lautstärke deutlich reduziert, ohne den natürlichen Klangcharakter zu verlieren.</p>',
      'footer.about': 'Leiser klingen. Natürlich spielen.',
      'footer.aboutText': 'Die einzige elegante Akustiklösung von BONO Piano Akustik reduziert die Lautstärke akustischer Flügel und Klaviere deutlich – ohne den natürlichen Klangcharakter zu verlieren. Entwickelt für Konzertpianisten, Musikstudirenden, Theater, Musikhochschulen, Musikschulen, Studios und alle Privaträume.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.email': 'E-Mail',
      'product.title': 'Produkt',
      'tutorial.title': 'Anleitung',
      'impressum.title': 'Impressum',
      'impressum.contact': 'Kontakt'
    },
    en: {
      'nav.home': 'Home',
      'nav.product': 'Product',
      'nav.anleitung': 'Tutorial',
      'nav.impressum': 'Imprint',
      'header.title': 'Sound quieter. Play naturally.',
      'header.subtitle': '<b>with technology from BONO Piano Akustik!<br><br>The only elegant acoustic solution from BONO Piano Akustik significantly reduces the volume of grand pianos and upright pianos without losing the natural tonal character. Designed for concert pianists, music students, theaters, music colleges, music schools, studios and all private rooms.</b></h5>',
      'card.product': '<b>The patented sound damper from Bono Piano Akustik</b><br><br>Learn more about the product by clicking the image below.</p>',
      'card.youtubeVid': '<b>Experience the acoustics for yourself!</b><br><br>In this video, the inventor and founder of Bono Piano Akustik, Nataliya Tkachenko, plays <em>Gnosienne No. 1</em> by <em>Satie</em> with the installed damper. This reduces the volume significantly without losing the natural tonal character.</p>',
      'footer.about': 'Sound quieter. Play naturally.',
      'footer.aboutText': 'The only elegant acoustic solution from BONO Piano Akustik significantly reduces the volume of grand pianos and upright pianos without losing the natural tonal character. Designed for concert pianists, music students, theaters, music colleges, music schools, studios and all private rooms.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.email': 'E-Mail',
      'product.title': 'Product',
      'tutorial.title': 'Tutorial',
      'impressum.title': 'Imprint',
      'impressum.contact': 'Contact'
    },
    zh: {
      'nav.home': '首页',
      'nav.product': '产品',
      'nav.anleitung': '教程',
      'nav.impressum': '版权信息',
      'header.title': '更安静的演奏。自然的音色。',
      'header.subtitle': '<b>使用 BONO Piano Akustik 的技术！<br><br>BONO Piano Akustik 的唯一优雅声学解决方案显著降低三角钢琴和立式钢琴的音量，同时保持自然的音色特性。为音乐会钢琴家、音乐学生、剧院、音乐学院、音乐学校、工作室和所有私人空间而设计。</b></h5>',
      'card.product': '<b>Bono Piano Akustik 的专利消音器</b><br>点击图片了解更多产品信息。</p>',
      'card.youtubeVid': '<b>亲自体验这款声学效果！</b><br><br>在本视频中，Bono Piano Akustik 的发明者兼创始人 Nataliya Tkachenko 演奏了 Satie 的 <em>Gnosienne 第一号</em>，并安装了消音器。这可以显著降低音量，同时保持自然的音色特性。</p>',
      'footer.about': '更安静的演奏。自然的音色。',
      'footer.aboutText': 'BONO Piano Akustik 的唯一优雅声学解决方案可以显著降低三角钢琴和立式钢琴的音量，同时保持自然的音色特性。为音乐会钢琴家、音乐学生、剧院、音乐学院、音乐学校、工作室和所有私人空间而设计。',
      'footer.nav': '导航',
      'footer.contact': '联系方式',
      'footer.email': '电子邮件',
      'product.title': '产品',
      'tutorial.title': '教程',
      'impressum.title': '版权信息',
      'impressum.contact': '联系方式'
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
