document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    de: {
      'nav.home': 'Home',
      'nav.product': 'Produkt',
      'nav.anleitung': 'Anleitung',
      'nav.impressum': 'Impressum',
      'index.header.title1': '<span style="font-size: 1.7em;"><span style="color: #E6C07A"> Innovative</span></span>',
      'index.header.title2': '<span style="font-size: 1.8em;"> <span style="color: #910909"> Schalldämpfung</span></span>',
      'index.header.subtitle': '<span style="font-size: 1.7em; color: #E6C07A">für <em>Flügel</em> und <em>Klaviere</em></span>',
      'index.text1': 'Die elegante Akustiklösung von BONO Piano Akustik reduziert die Lautstärke akustischer Flügel und Klaviere deutlich — ohne den natürlichen Klangcharakter zu beeinträchtigen und ganz ohne Eingriffe in die Mechanik, das Gehäuse oder der Raumarchitektur!',
      'index.text1b': 'Entwickelt für Konzertpianisten, Musikstudierende, Theater, Musikschulen und -Hochschulen, Studios und alle Privaträume.',
      'index.text2': 'Mehr Infos zum Produkt:',
      'index.title2': '<em>Natürlich spielen.<br>Leiser klingen.</em>',
      'index.gliederung1': '&rarr; Akustische Freiheit',
      'index.gliederung2': '&rarr; Produkt & Funktionsweise',
      'index.gliederung3': '&rarr; Gutachten & Messungen',
      'index.gliederung4': '&rarr; Innovation & Patent',
      'index.gliederung5': '&rarr; Entwickelt aus der Praxis',
      'index.gliederung6': '&rarr; Künstlerstimmen',
      'index.card.product1': '<b>Das Schalldämpfungs-Set wird am Instrument angebracht und kann jederzeit bedarfsgerecht eingesetzt werden oder rückstandslos entfernt werden.</b>',
      'index.card.product2': 'Die Schalldämpfung von <span style="color: #E6C07A">BONO Piano Akustik</span> &bdquo;Basis&ldquo; eignet sich für Flügel nahezu aller Hersteller mit einer <b> Länge von 151cm bis 180cm</b>. Dank der durchdachten Form kann sie bei den meisten gängigen kleinen bis mittelgroßen Flügelmodellen eingesetzt werden. Für größere Flügel wird eine <span style="text-decoration: underline;">spezielle Anfertigung</span> empfohlen. <br> <br> <b>Individuelle Spezialanfertigungen für bestimmte Marken, Modelle oder Längen sind möglich. Bitte kontaktieren Sie uns dafür.</b>',
      'card.youtubeVid': '<b>Überzeugen Sie sich von der Akustik!</b><br><br>In diesem Video spielt die Erfinderin und Gründerin von Bono Piano Akustik, Nataliya Tkachenko, das Stück <em>Gnosienne Nr. 1</em> von <em>Satie</em> mit verbautem Schalldämpfer. Dadurch wird die Lautstärke deutlich reduziert, ohne den natürlichen Klangcharakter zu verlieren.',
      'footer.about': 'Über BONO Piano Akustik',
      'footer.aboutText': 'BONO Piano Akustik bietet Qualität für Musiker und Musikliebhaber bei akzeptablen Preisen. Gegründet wurde die Firma von der Pianistin Nataliya Tkachenko, die über 20 Jahre Erfahrung im Klavierspiel und in der Klavierpädagogik verfügt.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.social': 'Soziale Medien',
      'footer.purchase': 'Bestellen bei Amazon',
      'footer.email-info': 'Info-Mail',
      'footer.email-purchase': 'Bestell-Mail',
      
      
      'product.title': 'Produkt',
      'product.feature1.title': 'Akustische Freiheit<span style="font-size: 0.7em;"><span style="color: #ffffff"><em> für Flügel und Klaviere</em></span></span>',
      'product.feature11.text': 'Akustische Flügel entfalten ihre volle Klangkraft besonders mit geöffnetem Deckel. In kleineren Räumen, kleinen Theatern oder privaten Wohnungen wird genau das jedoch häufig zur Herausforderung.<br><br> Schauspieler werden übertönt, Nachbarn belastet, Proberäume akustisch überfordert. Bisher bedeutete die Lösung oft:',
      'product.feature1.list1': 'kostspielige Raumdämmung',
      'product.feature1.list2': 'dauerhafte Umbauten am Instrument oder Raum',
      'product.feature1.list3': 'der Verzicht auf den vollen Klang des geöffneten Instruments',
      'product.feature12.text': '<span style="color: #E6C07A">BONO Piano Akustik</span> geht einen neuen, einfacheren Weg:<br><span style="text-decoration: underline;">Die Schalldämpfung erfolgt direkt am Instrument und lässt sich jederzeit rückstandslos entfernen.</span>',
      
      'product.feature2.title': 'Produkt & Funktionsweise',
      'product.feature21.text': 'Die speziell entwickelte Schalldämpfung wird im Inneren des Flügeldeckels befestigt und reduziert die Schallabstrahlung kontrolliert und gleichmäßig.<br><br> Das Ergebnis: ein weicherer, runder Klang mit deutlich reduzierter Lautsärke — ohne Verlust der musikalischen Ausdruckskraft. <br><br> Vorteile:',
      'product.feature21.list1': 'Reduktion der Lautstärke um ca. 6-10 dB(A)',
      'product.feature21.list2': 'Erhaltung des natürlichen Klangs',
      'product.feature21.list3': 'Variable Dämpfung',
      'product.feature21.list4': 'Kein Bedarf an baulichen Veränderungen',
      'product.feature21.list5': 'Rückstandslose Montage und Demontage',
      'product.feature21.list6': 'Elegante und unauffällige Integration',
      'product.feature22.text': '<em> Entwickelt für professionelle Ansprüche!</em><br><br> Unser Produkt umfasst folgende Teile:',
      'product.feature22.list1': 'eine akustisch optimierte Schalldämpfungsdecke (Teil 1) aus hochwertigem Akustikschaumstoff',
      'product.feature22.list2': 'eine optionale Schaumstoffplatte zur verstärkten Schalldämpfung für die Unterseite (Teil 2)',
      'product.feature22.list3': 'elastische Halterungen mit Klettsystem',
      'product.feature22.list4': 'Klebepads für die Unterseite',
      'product.feature23.text': 'Die Materialien wurden von uns so gewählt, dass sie',
      'product.feature23.list1': 'akustisch wirksam,',
      'product.feature23.list2': 'optisch dezent und',
      'product.feature23.list3': 'instrumentenschonend sind.',

      'product.feature3.title': 'Gutachten & Messungen',
      'product.feature3.text1': 'Die Wirksamkeit des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfung wurde von der <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> in einer <b>unabhängigen Untersuchung</b> geprüft. Die Messergebnisse bestätigen eine deutliche und messbare Reduzierung der Schallemissionen. Dabei wurden die Schallpegel sowohl am Platz der Pianistin als auch im Zuhörerbereich erfasst und ausgewertet.<br><br>Die wichtigsten Ergebnisse auf einen Blick:',
      'product.feature31.list1': '<span style="color: #ffffff">&check; Reduktion der Lautstärke um <b>bis zu 6 dB(A)</b></span>',
      'product.feature31.list2': '<span style="color: #ffffff">&check; Reduktion des Dauerschallpegels um <b>bis zu 3,5 dB(A)</b></span>',
      'product.feature31.list3': '<span style="color: #ffffff">&check; Mindestens eine <b>Halbierung der Schallleistung</b></span>',
      'product.feature31.list4': '<span style="color: #ffffff">&check; Hörbare Schallminderung sowohl am Platz am Piano als auch im Zuhörerbereich</span>',
      'product.feature31.list5': '<span style="color: #ffffff">&check; <b>Über 100% längere Übungsdauer</b> für Pianistinnen und Pianisten bis zum Erreichen der arbeitsmedizinischer Lärmrichtwerte (Lärmexpositionsgrenze)</span>',
      'product.feature3.text2': 'Das Gutachten kommt zu dem Ergebnis, dass die Schallminderung hörbar ist und die Lärmbelastung für Pianistinnen und Pianisten reduziert. Dadurch verlängert sich die mögliche Spielzeit bis zum Erreichen relevanter Lärmexpositionswerte erheblich.',
      'product.feature3.text3': '<span style="font-size: 1.5em;"> Fazit</span><br>Die unabhängige Untersuchung von <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> bestätigt die wirksame Schallreduzierung des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfers. Die Messergebnisse zeigen eine hörbare Verringerung der Lärmbelastung und eine deutliche Verlängerung der möglichen Spielzeiten bei vergleichbarer Belastung.',

      'product.feature4.title': 'Innovation & Patent',
      'product.feature4.text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer',
      
      'product.feature5.title': 'Entwickelt aus der Praxis',
      'product.feature5.text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer',
      
      'product.feature6.title': 'Künstlerstimmen',
      'product.feature6.text': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer',
      
      
      'tutorial.title': 'Anleitung',
      'impressum.title': 'Impressum',
      'impressum.contact': 'Kontakt'
    },
    en: {
      'nav.home': 'Home',
      'nav.product': 'Product',
      'nav.anleitung': 'Tutorial',
      'nav.impressum': 'Imprint',
      'header.title': 'Innovative sound damping for grand and upright pianos',
      'index.text1': '<b>The elegant acoustic solution from BONO Piano Akustik significantly reduces the volume of acoustic grand pianos and upright pianos — without compromising the natural tonal character and without any interventions in the mechanism, the case or the room architecture!</b><br><br>Designed for concert pianists, music students, theaters, music schools and conservatories, studios and all private spaces.<br><br>Read more and discover the patented product with all detailed information:',
      'index.title2': '<b>Play naturally. Sound quieter.</b>',
      'index.gliederung1': '&rarr; Acoustic freedom',
      'index.gliederung2': '&rarr; The product & how it works',
      'index.gliederung3': '&rarr; Reports & measurements',
      'index.gliederung4': '&rarr; Innovation & patent',
      'index.gliederung5': '&rarr; Developed from practice',
      'index.gliederung6': '&rarr; Artists\' voices',
      'index.card.product1': '<b>The damping set is attached to the instrument and can be applied as needed or removed without leaving residue.</b>',
      'index.card.product2': 'The BONO Piano Akustik "Basic" damping system is suitable for grand pianos from almost all manufacturers with a <b>length of 151cm to 180cm</b>. Thanks to its thoughtful shape it can be used on most common small to medium grand models. For larger grands a <span style="text-decoration: underline;">custom-made version</span> is recommended. <br><br><b>Individual special constructions for certain brands, models or lengths are possible. Please contact us for this.</b>',
      'card.product': '<b>The patented sound damper from Bono Piano Akustik</b><br>Learn more about the product by clicking the image below.',
      'card.youtubeVid': '<b>Experience the acoustics for yourself!</b><br><br>In this video the inventor and founder of Bono Piano Akustik, Nataliya Tkachenko, plays <em>Gnossienne No. 1</em> by <em>Satie</em> with the installed damper. This significantly reduces the volume without losing the natural tonal character.',
      'footer.about': 'About BONO Piano Akustik',
      'footer.aboutText': 'BONO Piano Akustik offers quality for musicians and music lovers at affordable prices. The company was founded by pianist Nataliya Tkachenko, who has over 20 years of experience in piano performance and piano pedagogy.',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.social': 'Social media',
      'footer.purchase': 'Order',
      'footer.email-info': 'Info E‑mail',
      'footer.email-purchase': 'Order E‑mail',
      'footer.email': 'E‑Mail',
      'product.title': 'Product',
      'product.feature1.title': 'Acoustic Freedom',
      'product.feature1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'product.feature2.title': 'The Product',
      'product.feature2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'product.feature3.title': 'Reports & Measurements',
      'product.feature3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa.',
      'tutorial.title': 'Tutorial',
      'impressum.title': 'Imprint',
      'impressum.contact': 'Contact'
    },
    zh: {
      'nav.home': '首页',
      'nav.product': '产品',
      'nav.anleitung': '教程',
      'nav.impressum': '版权信息',
      'header.title': '为三角钢琴与立式钢琴提供创新的消音方案',
      'index.text1': '<b>来自 BONO Piano Akustik 的优雅声学解决方案可显著降低三角钢琴和立式钢琴的音量——不会损失自然音色特性，也无需对机械、琴体或房间结构进行任何改动！</b><br><br>为音乐会钢琴家、音乐学生、剧院、音乐学校与高等音乐院校、录音室以及所有私人空间而设计。<br><br>了解更多并发现包含详尽信息的专利产品：',
      'index.title2': '<b>自然演奏，更安静的声音。</b>',
      'index.gliederung1': '&rarr; 声学自由',
      'index.gliederung2': '&rarr; 产品及其工作原理',
      'index.gliederung3': '&rarr; 报告与测量',
      'index.gliederung4': '&rarr; 创新与专利',
      'index.gliederung5': '&rarr; 源自实践的开发',
      'index.gliederung6': '&rarr; 艺术家评价',
      'index.card.product1': '<b>消音套件安装在乐器上，可根据需要随时使用或无残留地移除。</b>',
      'index.card.product2': 'BONO Piano Akustik 的“基础”消音系统适用于长度在 <b>151cm 到 180cm</b> 之间、几乎所有厂家的三角钢琴。由于其经过深思熟虑的形状，可以在大多数常见的小型到中型三角钢琴型号上使用。对于更大型的三角钢琴，建议使用<span style="text-decoration: underline;">定制版本</span>。<br><br><b>可根据特定品牌、型号或长度提供个性化定制。请与我们联系。</b>',
      'card.product': '<b>Bono Piano Akustik 的专利消音器</b><br>点击图片了解更多产品信息。',
      'card.youtubeVid': '<b>亲自体验这款声学效果！</b><br><br>在本视频中，Bono Piano Akustik 的发明者兼创始人 Nataliya Tkachenko 演奏了 Satie 的 <em>Gnossienne 第一号</em> 并安装了消音器。这能显著降低音量，同时保持自然的音色特性。',
      'footer.about': '关于 BONO Piano Akustik',
      'footer.aboutText': 'BONO Piano Akustik 为音乐家和音乐爱好者以合理价格提供优质产品。公司由钢琴家 Nataliya Tkachenko 创立，她在钢琴演奏和钢琴教学方面拥有超过 20 年的经验。',
      'footer.nav': '导航',
      'footer.contact': '联系方式',
      'footer.social': '社交媒体',
      'footer.purchase': '订购',
      'footer.email-info': '信息邮件',
      'footer.email-purchase': '订购邮件',
      'footer.email': '电子邮件',
      'card.product': '<b>Bono Piano Akustik 的专利消音器</b><br>点击图片了解更多产品信息。',
      'card.youtubeVid': '<b>亲自体验这款声学效果！</b><br><br>在本视频中，Bono Piano Akustik 的发明者兼创始人 Nataliya Tkachenko 演奏了 Satie 的 <em>Gnosienne 第一号</em>，并安装了消音器。这可以显著降低音量，同时保持自然的音色特性。',
      'footer.about': '更安静的演奏。自然的音色。',
      'footer.aboutText': 'BONO Piano Akustik 的唯一优雅声学解决方案可以显著降低三角钢琴和立式钢琴的音量，同时保持自然的音色特性。为音乐会钢琴家、音乐学生、剧院、音乐学院、音乐学校、工作室和所有私人空间而设计。',
      'footer.nav': '导航',
      'footer.contact': '联系方式',
      'footer.email': '电子邮件',
      'product.title': '产品',
      'product.feature1.title': '声学自由',
      'product.feature1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'product.feature2.title': '产品介绍',
      'product.feature2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'product.feature3.title': '报告与测量',
      'product.feature3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa.',
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
      // set explicit language on translated elements to enable hyphenation and locale-aware typography
      try {
        el.setAttribute('lang', locale);
      } catch (e) {
        // ignore if element cannot have attributes
      }
    });

    document.documentElement.lang = locale;
    setActiveLangButton();
  }

  translatePage();
});
