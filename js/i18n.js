document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    de: {
      'nav.home': 'Home',
      'nav.product': 'Produkt',
      'nav.anleitung': 'Anleitung',
      'nav.impressum': 'Impressum',
      'footer.about': 'Über uns',
      'footer.aboutText': '<span style="color: #E6C07A">BONO Piano Akustik</span> steht für natürliche Schalldämpfung von Flügeln und Klavieren. Das Produkt verbindet musikalische Praxiserfahrung mit hochwertigen Materialien und präziser Verarbeitung – für kompromisslosen Klang bei reduziertem Schallpegel. Erfunden von der Konzertpianistin, Theatermusikerin und Klavierpädagogin <b>Nataliya Tkachenko</b>, vereint <span style="color: #E6C07A">BONO Piano Akustik</span> musikalische Expertise mit der Erfahrung chinesischer Spezialisten für akustische Materialtechnologie. Gemeinsam entwickeln und perfektionieren wir unser Produkt kontinuierlich weiter, um höchste Qualität mit einer wirtschaftlichen Fertigung zu verbinden. <br><span style="font-size: 1.4rem;"><b><em>Der Musikwelt zuliebe!</em></b></span>',
      'footer.nav': 'Navigation',
      'footer.contact': 'Kontakt',
      'footer.social': 'Soziales',
      'footer.purchase': 'Bestellen bei Amazon',
      'footer.email-info': 'Info-Mail',
      'footer.email-purchase': 'Bestell-Mail',


      'index.header.title1': '<span style="font-size: 5rem;">Innovative</span>',
      'index.header.title2': '<span style="font-size: 5rem;"> <span style="color: #b50a0a"> Schalldämpfung</span></span>',
      'index.header.subtitle': '<span style="font-size: 3.5rem; color: #E6C07A">für <em>Flügel</em> und <em>Klaviere</em></span>',
      'index.text1': 'Die elegante Akustiklösung von BONO Piano Akustik reduziert die Lautstärke akustischer Flügel und Klaviere deutlich — ohne den natürlichen Klangcharakter zu beeinträchtigen und ganz ohne Eingriffe in die Mechanik, das Gehäuse oder der Raumarchitektur!',
      'index.text1b': 'Entwickelt für Konzertpianisten, Musikstudierende, Theater, Musikschulen und -Hochschulen, Studios und alle Privaträume.',
      'index.text2': '<span style="color: #b50a0a">Mehr Infos zum Produkt:</span>',
      'index.title2': '<em>Natürlich spielen.</em>',
      'index.title2b': '<em>Leiser klingen.</em>',
      'index.gliederung1': '&rarr; Akustische Freiheit',
      'index.gliederung2': '&rarr; Produkt & Funktionsweise',
      'index.gliederung3': '&rarr; Gutachten & Messungen',
      'index.gliederung4': '&rarr; Innovation & Patent',
      'index.gliederung5': '&rarr; Entwickelt aus der Praxis',
      'index.gliederung6': '&rarr; Künstlerstimmen',
      'index.card.product1': '<b>Das Schalldämpfungs-Set wird am Instrument angebracht und kann jederzeit bedarfsgerecht eingesetzt werden oder rückstandslos entfernt werden.</b>',
      'index.card.product2': 'Die Schalldämpfung von <span style="color: #E6C07A">BONO Piano Akustik &bdquo;Basis&ldquo;</span> eignet sich für Flügel nahezu aller Hersteller mit einer <span style="color: #E6C07A"><span style="text-decoration: underline;"><b> Länge von 151cm bis 180cm</b></span></span>. Dank der durchdachten Form kann sie bei den meisten gängigen kleinen bis mittelgroßen Flügelmodellen eingesetzt werden. Für größere Flügel wird eine <span style="color: #E6C07A"><span style="text-decoration: underline;">spezielle Anfertigung</span></span> empfohlen. <br> <br> <b>Individuelle Spezialanfertigungen für bestimmte Marken, Modelle oder Längen sind möglich.</b>',
      'index.card.product2b': '<b>Bitte kontaktieren Sie uns.</b>',

      
      'product.title': 'Produkt',
      'product.feature1.title': '<b>Akustische Freiheit</b>',
      'product.feature11.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Wenn gute Akustik zur problematischen Lautstärke wird...</span></em><br><br>Akustische Flügel entfalten ihre volle Klangkraft besonders mit geöffnetem Deckel. In kleineren Räumen, kleinen Theatern oder privaten Wohnungen wird genau das jedoch häufig zur Herausforderung.<br><br> Schauspieler werden übertönt, Nachbarn belastet, Proberäume akustisch überfordert. Bisher bedeutete die Lösung oft:',
      'product.feature1.list1': 'kostspielige Raumdämmung',
      'product.feature1.list2': 'dauerhafte Umbauten am Instrument oder Raum',
      'product.feature1.list3': 'der Verzicht auf den vollen Klang des geöffneten Instruments',
      'product.feature12.text': '<span style="color: #E6C07A">BONO Piano Akustik</span> geht einen neuen, einfacheren Weg:<br><span style="text-decoration: underline;">Die Schalldämpfung erfolgt direkt am Instrument und lässt sich jederzeit rückstandslos entfernen.</span>',
      
      'product.feature2.title': '<b>Produkt & Funktionsweise</b>',
      'product.feature21.text': 'Die speziell entwickelte Schalldämpfung wird im Inneren des Flügeldeckels befestigt und reduziert die Schallabstrahlung kontrolliert und gleichmäßig.<br><br> Das Ergebnis: ein weicherer, runder Klang mit deutlich reduzierter Lautstärke — ohne Verlust der musikalischen Ausdruckskraft. <br><br> Vorteile:',
      'product.feature21.list1': 'Reduktion der Lautstärke um ca. 6-10 dB(A)',
      'product.feature21.list2': 'Erhaltung des natürlichen Klangs',
      'product.feature21.list3': 'Variable Dämpfung',
      'product.feature21.list4': 'Kein Bedarf an baulichen Veränderungen',
      'product.feature21.list5': 'Rückstandslose Montage und Demontage',
      'product.feature21.list6': 'Elegante und unauffällige Integration',
      'product.feature22.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em> Entwickelt für professionelle Ansprüche!</em></span><br><br> <span style="font-size: 1.7rem;">Unser Produkt umfasst folgende Teile:</span>',
      'product.feature22.list1': 'eine akustisch optimierte Schalldämpfungsdecke (Teil 1) aus hochwertigem Akustikschaumstoff',
      'product.feature22.list2': 'eine optionale Schaumstoffplatte zur verstärkten Schalldämpfung für die Unterseite (Teil 2)',
      'product.feature22.list3': 'elastische Halterungen mit Klettsystem',
      'product.feature22.list4': 'Klebepads für die Unterseite',
      'product.feature23.text': 'Die Materialien wurden von uns so gewählt, dass sie',
      'product.feature23.list1': 'akustisch wirksam,',
      'product.feature23.list2': 'optisch dezent und',
      'product.feature23.list3': 'instrumentenschonend sind.',

      'product.feature3.title': '<b>Gutachten & Messungen</b>',
      'product.feature3.text1': 'Die Wirksamkeit des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfung wurde von der <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> in einer <b>unabhängigen Untersuchung</b> geprüft. Die Messergebnisse bestätigen eine deutliche und messbare Reduzierung der Schallemissionen. Dabei wurden die Schallpegel sowohl am Platz der Pianistin als auch im Zuhörerbereich erfasst und ausgewertet.<br><br><span style="font-size: 1.7rem; color: #E6C07A">Die wichtigsten Ergebnisse auf einen Blick:</span>',
      'product.feature31.list1': '<span style="color: #ffffff">&check; Reduktion der Lautstärke um <b>bis zu 6 dB(A)</b></span>',
      'product.feature31.list2': '<span style="color: #ffffff">&check; Reduktion des Dauerschallpegels um <b>bis zu 3,5 dB(A)</b></span>',
      'product.feature31.list3': '<span style="color: #ffffff">&check; Mindestens eine <b>Halbierung der Schallleistung</b></span>',
      'product.feature31.list4': '<span style="color: #ffffff">&check; Hörbare Schallminderung sowohl am Platz am Piano als auch im Zuhörerbereich</span>',
      'product.feature31.list5': '<span style="color: #ffffff">&check; <b>Über 100% längere Übungsdauer</b> für Pianistinnen und Pianisten bis zum Erreichen der arbeitsmedizinischer Lärmrichtwerte (Lärmexpositionsgrenze)</span>',
      'product.feature3.text2': 'Das Gutachten kommt zu dem Ergebnis, dass die Schallminderung hörbar ist und die Lärmbelastung für Pianistinnen und Pianisten reduziert. Dadurch verlängert sich die mögliche Spielzeit bis zum Erreichen relevanter Lärmexpositionswerte erheblich.',
      'product.feature3.text3': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Fazit</em></span><br>Die unabhängige Untersuchung von <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> bestätigt die wirksame Schallreduzierung des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfers. Die Messergebnisse zeigen eine hörbare Verringerung der Lärmbelastung und eine deutliche Verlängerung der möglichen Spielzeiten bei vergleichbarer Belastung.',
      'product.feature3.quote': '„Durch die Reduzierung des Schallpegels durch den Schallschutz von BONO Piano Akustik können die Spielzeiten verlängert werden, um den Auslösewert zu erreichen bzw. einer gleichen gesundheitlichen Gefährdung ausgesetzt zu sein.“',
      'product.feature3.quoteSource': '— Schorer + Wolf GmbH',
      'product.feature3.table1.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 80 dB(A)',
      'product.feature3.table2.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 85 dB(A)',
      'product.feature3.table.header1': 'Deckel',
      'product.feature3.table.header2': 'Ohne Schalldämpfung',
      'product.feature3.table.header3': 'Mit Schalldämpfung',
      'product.table.row.lidOpen': 'offen',
      'product.table.row.lidMiddle': 'mittig',
      'product.table1.open.without': '2 Std. 22 Min.',
      'product.table1.open.with': '4 Std. 56 Min.',
      'product.table1.closed.without': '3 Std. 55 Min.',
      'product.table1.closed.with': '5 Std. 56 Min.',
      'product.table2.open.without': '7 Std. 28 Min.',
      'product.table2.open.with': '15 Std. 36 Min.',
      'product.table2.closed.without': '12 Std. 23 Min.',
      'product.table2.closed.with': '18 Std. 41 Min.',
      'product.feature3.chartSrc': 'assets/lautstaerkeGrafik_de.png',
      'product.feature3.chartAlt': 'Messgrafik zur Schallmessung',

      'product.feature4.title': '<b>Innovation & Patent</b>',
      'product.feature4.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Eine neue Lösung für die Akustik von Flügeln und Klavieren</em></span><br><br>Die Innovation dieses Produkts liegt in der Nutzung der natürlichen Resonanzfläche des Flügeldeckels selbst. Anstatt den Raum zu dämmen, wird die Schallabstrahlung direkt am Instrument — an zwei optisch unauffälligen Stellen — kontrolliert.<br><br> Dadurch entsteht:',
      'product.feature4.list1': 'eine reversible Lösung',
      'product.feature4.list2': 'kein Eingriff ins Instrument',
      'product.feature4.list3': 'keine Veränderung der Raumarchitektur',
      'product.feature4.list4': 'eine gleichmäßige Klangreduktion über das gesamte akustische Frequenzspektrum',
      'product.feature4.text2': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Die Schalldämpfung BONO Piano Akustik ist patent- und markenrechtlich geschützt.</em></span>',
      
      'product.feature5.title': '<b>Entwickelt aus der Praxis</b>',
      'product.feature5.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Von einer Konzertpianistin erfunden — mit chinesischem Know-How entwickelt!</em></span><br><br>Die Idee entstand aus der täglichen Praxis auf Bühnen, in Theatern und Proberäumen. Als professionelle Konzertpianistin und Theatermusikerin suchte die Erfinderin nach einer Lösung, welche musikalische Qualität mit kontrollierbarer Lautstärke verbindet. Durch internationales Know-How eines chinesischen Teams in den Bereichen Materialtechnologie, Akustik und Verarbeitung konnte das System optimiert und zu einer praxisorientierten Lösung ausgebaut werden. Das Ergebnis ist eine natürliche Akustiklösung, die musikalische Ausdruckskraft bewahrt und gleichzeitig neue Möglichkeiten für den Einsatz akustischer Instrumente in unterschiedlichsten Räumen schafft. In Zusammenarbeit mit einem erfahrenen chinesischen Entwicklungsteam wurde die Schalldämpfung technisch und akustisch weiterentwickelt. Das Ergebnis ist eine professionelle Lösung, die innovative Funktionalität mit musikalischem Anspruch vereint.',
      
      'product.feature6.title': '<b>Künstlerstimmen</b>',
      'product.feature6.quote1': '„Eine ideal praktische Lösung für das tägliche Üben, für das Theater und kleinere Bühnen sowie zum Schutz des Gehörs. Auch zu Hause benutze ich diese Schalldämpfung beim Üben oder beim Unterrichten. Inzwischen spiele ich fast nie mehr ohne sie. Auch bei meinen professionellen CDs wurde die Schalldämpfung an dem Flügel benuzt:<br>(TIK/36music) \'Chopin und seine Frauen\', \'Nussknacker und Mäusekönig\', \'La Vie De Coco Chanel\'<br>(NEOS Music) \'Fazil Say: Troy-Sonata\'.“',
      'product.feature6.quoteSource1': '<br>— Nataliya Tkachenko,<br>Konzertpianistin und Klavierpädagogin',
      'product.feature6.quote2': '„Ich bin Pianistin und wohne in einer Altbauwohnung, in der auch mein Steinway steht. Für meine Konzerte muss ich regelmäßig üben, außerdem unterrichte ich zahlreiche Schüler. Ein Flügel in einer Wohnung kann bekanntlich schnell zum Problem werden, zum einen wegen der Nachbarn, vor allem aber, weil ein solches Instrument ja für einen großen Saal gedacht ist und in einem normalen Zimmer oft einfach zu laut klingt — auch wenn man es geschlossen lässt.<br><br>Von der Lautstärke des Flügels, egal ob ich ihn spielte oder meine Schüler, war ich zunehmend genervt und suchte nach Lösungen, den Klang etwas zu dämpfen. Zum Beispiel legte ich einen separaten Teppich unter das Instrument (wir haben Parkettboden). Das half nur wenig. Ich war schon drauf und dran, den schönen Flügel zu verkaufen und durch ein Klavier zu ersetzen, als ich von der Lösung erfuhr, die BONO Piano anbietet. Ich versuchte es und war mit dem Ergebnis hochzufrieden. Die Dämpfung funktioniert wirklich und ohne die Klangqualität zu beeinträchtigen, sie lässt sich leicht anbringen und ist optisch unauffällig.<br><br>Ich kann BONO Piano guten Gewissens weiterempfehlen.“',
      'product.feature6.quoteSource2': '<br>— Elena Gurevich,<br>Steinway-Artistin in München',
      'product.feature6.youtubeVid': 'In diesem Video spielt die Erfinderin des Produkts, Nataliya Tkachenko, Erik Saties <em>Gnossienne Nr. 1</em> auf einem Flügel mit der BONO Piano Akustik Schalldämpfung. Die Lautstärke wird dabei deutlich reduziert und ermöglicht so hochwertige Aufnahmen auch in relativ kleinen Räumen — ohne den natürlichen Klangcharakter und die Ausdruckskraft des Instruments zu beeinträchtigen.<br><br><span style="font-size: 1.7rem; color: #E6C07A"><b>Überzeugen Sie sich von der Akustik!</b></span>',

      'tutorial.title': 'Anleitung',
      'tutorial.subtitle': 'Hier wird Ihnen erklärt, wie sie den <span style="color: #E6C07A">BONO Piano Akustik Schalldämpfer</span> korrekt einbauen.<br><br>Diese Webseite ist momentan noch in Arbeit!<br>Bitte haben Sie Geduld.',

      'impressum.title': 'Impressum',
      'impressum.subtitle': 'Angaben gemäß § 5 TMG',
      'impressum.exampleNote': 'Hinweis: Dieses Impressum ist ein Beispiel-Layout und ersetzt keine Rechtsberatung.',
      'impressum.section.provider': 'Anbieter',
      'impressum.section.contact': 'Kontakt',
      'impressum.section.vat': 'Umsatzsteuer',
      'impressum.section.responsible': 'Verantwortlich für den Inhalt',
      'impressum.section.dispute': 'Streitbeilegung',
      'impressum.section.liability': 'Haftungshinweis',
      'impressum.section.copyright': 'Urheberrecht',
      'impressum.provider.name': 'BONO Piano Akustik',
      'impressum.provider.owner': 'Inhaberin: Nataliya Tkachenko',
      'impressum.provider.address': 'Musterstraße 12<br>80331 München<br>Deutschland',
      'impressum.contact.phoneLabel': 'Telefon:',
      'impressum.contact.phone': '+49 123 4567890',
      'impressum.contact.emailLabel': 'E-Mail:',
      'impressum.contact.email': 'info@bonopiano.com',
      'impressum.contact.hoursLabel': 'Erreichbarkeit:',
      'impressum.contact.hours': 'Mo-Fr, 10:00-17:00 Uhr',
      'impressum.vat.note': 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
      'impressum.vat.id': 'DE123456789',
      'impressum.responsible.name': 'Nataliya Tkachenko',
      'impressum.responsible.address': 'Musterstraße 12<br>80331 München<br>Deutschland',
      'impressum.dispute.eu': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      'impressum.dispute.consumer': 'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      'impressum.liability.content': 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
      'impressum.copyright.text': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.',
      'impressum.contact': 'Kontaktdaten',
      'impressum.firm': 'Beispiel Firma'
    },
    en: {      'nav.home': 'Home',
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
      'footer.about': 'About us',
      'footer.aboutText': '<span style="color: #E6C07A">BONO Piano Akustik</span> stands for natural sound damping for grand and upright pianos. The product combines practical musical experience with high-quality materials and precise workmanship - for uncompromising sound with reduced volume. Invented by concert pianist, theatre musician and piano teacher <b>Nataliya Tkachenko</b>, <span style="color: #E6C07A">BONO Piano Akustik</span> combines musical expertise with the experience of Chinese specialists in acoustic material technology. We continuously develop and refine our product together to combine top quality with cost-effective manufacturing. <br><span style="font-size: 1.4rem;"><b><em>For the sake of the musical world!</em></b></span>',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.social': 'Social media',
      'footer.purchase': 'Order on Amazon',
      'footer.email-info': 'Info E‑mail',
      'footer.email-purchase': 'Order E‑mail',
      'footer.email': 'E‑Mail',
      'product.title': 'Product',
      'product.feature1.title': '<b>Acoustic Freedom</b>',
      'product.feature1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'product.feature2.title': '<b>Product & How It Works</b>',
      'product.feature2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'product.feature3.title': '<b>Reports & Measurements</b>',
      'product.feature3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa.',
      'product.feature3.quote': '"By reducing the sound level through BONO Piano Akustik\'s sound protection, playing times can be extended to reach the trigger value or to be exposed to an equivalent health risk."',
      'product.feature3.quoteSource': '— Schorer + Wolf GmbH',
      'product.table80.caption': 'Measured values: Time until reaching a level of 80 dB(A)',
      'product.table85.caption': 'Measured values: Time until reaching a level of 85 dB(A)',
      'product.table.header.situation': 'Situation',
      'product.table.header.without': 'Without damping',
      'product.table.header.with': 'With damping',
      'product.table.row.lidOpen': 'Lid <br>open',
      'product.table.row.lidMiddle': 'Lid <br>half-open',
      'product.table80.row1.without': '2 Std. 22 Min.',
      'product.table80.row1.with': '4 Std. 56 Min.',
      'product.table80.row2.without': '3 Std. 55 Min.',
      'product.table80.row2.with': '5 Std. 56 Min.',
      'product.table85.row1.without': '7 Std. 28 Min.',
      'product.table85.row1.with': '15 Std. 36 Min.',
      'product.table85.row2.without': '12 Std. 23 Min.',
      'product.table85.row2.with': '18 Std. 41 Min.',
      'product.feature3.chartSrc': 'assets/lautstaerkeGrafik_en.png',
      'product.feature3.chartAlt': 'Measurement chart for sound level analysis',
      'tutorial.title': 'Tutorial',
      'impressum.title': 'Imprint',
      'impressum.subtitle': 'Information according to Section 5 TMG',
      'impressum.exampleNote': 'Note: This imprint is a sample layout and does not replace legal advice.',
      'impressum.section.provider': 'Provider',
      'impressum.section.contact': 'Contact',
      'impressum.section.vat': 'VAT',
      'impressum.section.responsible': 'Responsible for content',
      'impressum.section.dispute': 'Dispute resolution',
      'impressum.section.liability': 'Liability notice',
      'impressum.section.copyright': 'Copyright',
      'impressum.provider.name': 'BONO Piano Akustik',
      'impressum.provider.owner': 'Owner: Nataliya Tkachenko',
      'impressum.provider.address': 'Sample Street 12<br>80331 Munich<br>Germany',
      'impressum.contact.phoneLabel': 'Phone:',
      'impressum.contact.phone': '+49 123 4567890',
      'impressum.contact.emailLabel': 'E-mail:',
      'impressum.contact.email': 'info@bonopiano.com',
      'impressum.contact.hoursLabel': 'Availability:',
      'impressum.contact.hours': 'Mon-Fri, 10:00-17:00',
      'impressum.vat.note': 'VAT identification number according to Section 27 a German VAT Act:',
      'impressum.vat.id': 'DE123456789',
      'impressum.responsible.name': 'Nataliya Tkachenko',
      'impressum.responsible.address': 'Sample Street 12<br>80331 Munich<br>Germany',
      'impressum.dispute.eu': 'The European Commission provides a platform for online dispute resolution (ODR):',
      'impressum.dispute.consumer': 'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
      'impressum.liability.content': 'Despite careful control of content, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.',
      'impressum.copyright.text': 'The content and works created by the site operators on these pages are subject to German copyright law. Third-party contributions are marked as such.',
      'impressum.contact': 'Contact',
      'index.header.title1': '<span style="font-size: 5rem;">Innovative</span>',
      'index.header.title2': '<span style="font-size: 5rem;"> <span style="color: #b50a0a"> Sound Damping</span></span>',
      'index.header.subtitle': '<span style="font-size: 3.5rem; color: #E6C07A">for <em>Grand</em> and <em>Upright Pianos</em></span>',
      'index.text1b': 'Developed for concert pianists, music students, theatres, music schools and universities, studios, and all private spaces.',
      'index.text2': '<span style="color: #b50a0a">More information about the product:</span>',
      'index.title2b': '<em>Sound quieter.</em>',
      'index.card.product2b': '<b>Please contact us.</b>',
      'product.feature11.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em>When good acoustics become a volume problem...</span></em><br><br>Acoustic grand pianos unfold their full sonic power especially with the lid open. In smaller rooms, small theatres or private apartments, this often becomes a challenge.<br><br>Actors are drowned out, neighbors are disturbed, and rehearsal spaces become acoustically overloaded. Until now, the solution often meant:',
      'product.feature1.list1': 'expensive room soundproofing',
      'product.feature1.list2': 'permanent modifications to the instrument or room',
      'product.feature1.list3': 'giving up the full sound of the open instrument',
      'product.feature12.text': '<span style="color: #E6C07A">BONO Piano Akustik</span> takes a new, simpler path:<br><span style="text-decoration: underline;">Sound damping happens directly on the instrument and can be removed at any time without residue.</span>',
      'product.feature21.text': 'The specially developed sound damping is mounted inside the grand piano lid and reduces sound radiation in a controlled and even way.<br><br> The result: a softer, rounder sound with significantly reduced volume - without losing musical expressiveness. <br><br> Benefits:',
      'product.feature21.list1': 'Volume reduction by approx. 6-10 dB(A)',
      'product.feature21.list2': 'Preserves the natural sound',
      'product.feature21.list3': 'Variable damping',
      'product.feature21.list4': 'No structural modifications required',
      'product.feature21.list5': 'Residue-free installation and removal',
      'product.feature21.list6': 'Elegant and discreet integration',
      'product.feature22.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em> Developed for professional demands!</em></span><br><br> <span style="font-size: 1.7rem;">Our product includes the following parts:</span>',
      'product.feature22.list1': 'an acoustically optimized damping blanket (Part 1) made of high-quality acoustic foam',
      'product.feature22.list2': 'an optional foam panel for enhanced damping on the underside (Part 2)',
      'product.feature22.list3': 'elastic holders with hook-and-loop system',
      'product.feature22.list4': 'adhesive pads for the underside',
      'product.feature23.text': 'We selected the materials so that they are',
      'product.feature23.list1': 'acoustically effective,',
      'product.feature23.list2': 'visually discreet, and',
      'product.feature23.list3': 'gentle on the instrument.',
      'product.feature3.text1': 'The effectiveness of the <span style="color: #E6C07A">BONO Piano Akustik</span> sound damping was tested by <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> in an <b>independent study</b>. The measurement results confirm a clear and measurable reduction in sound emissions. Sound levels were recorded and analyzed both at the pianist\'s position and in the audience area.<br><br><span style="font-size: 1.7rem; color: #E6C07A">Key results at a glance:</span>',
      'product.feature31.list1': '<span style="color: #ffffff">&check; Volume reduction of <b>up to 6 dB(A)</b></span>',
      'product.feature31.list2': '<span style="color: #ffffff">&check; Continuous sound level reduction of <b>up to 3.5 dB(A)</b></span>',
      'product.feature31.list3': '<span style="color: #ffffff">&check; At least a <b>halving of sound power</b></span>',
      'product.feature31.list4': '<span style="color: #ffffff">&check; Audible reduction at both the piano position and the audience area</span>',
      'product.feature31.list5': '<span style="color: #ffffff">&check; <b>Over 100% longer practice time</b> for pianists until reaching occupational noise guideline values (noise exposure limit)</span>',
      'product.feature3.text2': 'The report concludes that the sound reduction is audible and lowers the noise burden for pianists. This significantly extends the possible playing time before relevant noise exposure limits are reached.',
      'product.feature3.text3': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Conclusion</em></span><br>The independent study by <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> confirms the effective sound reduction of the <span style="color: #E6C07A">BONO Piano Akustik</span> damper. The measurement results show an audible reduction in noise load and a clear extension of possible playing times at comparable exposure.',
      'product.feature3.table1.caption': 'Measured values: Time until reaching a level of 80 dB(A)',
      'product.feature3.table2.caption': 'Measured values: Time until reaching a level of 85 dB(A)',
      'product.feature3.table.header1': 'Lid position',
      'product.feature3.table.header2': 'Without damping',
      'product.feature3.table.header3': 'With damping',
      'product.table1.open.without': '2 h 22 min',
      'product.table1.open.with': '4 h 56 min',
      'product.table1.closed.without': '3 h 55 min',
      'product.table1.closed.with': '5 h 56 min',
      'product.table2.open.without': '7 h 28 min',
      'product.table2.open.with': '15 h 36 min',
      'product.table2.closed.without': '12 h 23 min',
      'product.table2.closed.with': '18 h 41 min',
      'product.feature4.title': '<b>Innovation & Patent</b>',
      'product.feature4.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>A new solution for the acoustics of grand and upright pianos</em></span><br><br>The innovation of this product lies in using the natural resonance surface of the grand piano lid itself. Instead of insulating the room, sound radiation is controlled directly on the instrument - at two visually discreet points.<br><br> This creates:',
      'product.feature4.list1': 'a reversible solution',
      'product.feature4.list2': 'no intervention in the instrument',
      'product.feature4.list3': 'no changes to room architecture',
      'product.feature4.list4': 'even sound reduction across the entire acoustic frequency spectrum',
      'product.feature4.text2': '<span style="font-size: 1.7rem; color: #E6C07A"><em>BONO Piano Akustik sound damping is protected by patent and trademark law.</em></span>',
      'product.feature5.title': '<b>Developed from Practice</b>',
      'product.feature5.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>Invented by a concert pianist - developed with Chinese know-how!</em></span><br><br>The idea emerged from daily practice on stages, in theatres and rehearsal rooms. As a professional concert pianist and theatre musician, the inventor sought a solution that combines musical quality with controllable volume. Through international know-how from a Chinese team in material technology, acoustics and manufacturing, the system was optimized and developed into a practical solution. The result is a natural acoustic solution that preserves musical expressiveness while creating new possibilities for using acoustic instruments in many different spaces. In collaboration with an experienced Chinese development team, the damping was further refined technically and acoustically. The result is a professional solution that combines innovative functionality with musical standards.',
      'product.feature6.title': '<b>Artists\' Voices</b>',
      'product.feature6.quote1': '"An ideally practical solution for daily practice, for theatre and smaller stages, and for hearing protection. I also use this damping at home while practicing and teaching. By now, I almost never play without it. The damping was also used on the grand piano for my professional CDs:<br>(TIK/36music) \'Chopin und seine Frauen\', \'Nussknacker und Mäusekönig\', \'La Vie De Coco Chanel\'<br>(NEOS Music) \'Fazil Say: Troy-Sonata\'."',
      'product.feature6.quoteSource1': '<br>- Nataliya Tkachenko,<br>Concert pianist and piano teacher',
      'product.feature6.quote2': '"I am a pianist and live in an old apartment building where my Steinway also stands. For my concerts I need to practice regularly, and I also teach many students. A grand piano in an apartment can quickly become a problem - on one hand because of neighbors, but above all because such an instrument is designed for a large hall and in a normal room often simply sounds too loud, even when closed.<br><br>I became increasingly annoyed by the piano\'s volume, whether I played or my students did, and I looked for ways to dampen the sound somewhat. For example, I placed a separate carpet under the instrument (we have parquet flooring). That helped only a little. I was about to sell the beautiful grand piano and replace it with an upright when I heard about BONO Piano\'s solution. I tried it and was very satisfied with the result. The damping really works, without affecting sound quality, it is easy to attach, and visually discreet.<br><br>I can recommend BONO Piano with full confidence."',
      'product.feature6.quoteSource2': '<br>- Elena Gurevich,<br>Steinway Artist in Munich',
      'product.feature6.youtubeVid': 'In this video, the inventor of the product, Nataliya Tkachenko, plays Erik Satie\'s <em>Gnossienne No. 1</em> on a grand piano with BONO Piano Akustik sound damping. The volume is significantly reduced and enables high-quality recordings even in relatively small rooms - without affecting the instrument\'s natural tonal character and expressiveness.<br><br><span style="font-size: 1.7rem; color: #E6C07A"><b>Experience the acoustics for yourself!</b></span>',
      'tutorial.subtitle': 'Here we explain how to correctly install the <span style="color: #E6C07A">BONO Piano Akustik sound damper</span>.<br><br>This website is currently still under construction!<br>Please be patient.',
      'impressum.firm': 'Sample Company'
    },
    zh: {      'nav.home': '首页',
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
      'card.youtubeVid': '<b>亲自体验这款声学效果！</b><br><br>在本视频中，Bono Piano Akustik 的发明者兼创始人 Nataliya Tkachenko 演奏了 Satie 的 <em>Gnosienne 第一号</em>，并安装了消音器。这可以显著降低音量，同时保持自然的音色特性。',
      'footer.about': '关于我们',
      'footer.aboutText': '<span style="color: #E6C07A">BONO Piano Akustik</span> 代表适用于三角钢琴和立式钢琴的自然降噪方案。该产品将音乐实践经验与高品质材料和精密工艺结合，在降低声压级的同时保持不妥协的音色。产品由音乐会钢琴家、剧院音乐家兼钢琴教育家 <b>Nataliya Tkachenko</b> 发明，<span style="color: #E6C07A">BONO Piano Akustik</span> 融合了音乐专业能力与中国声学材料技术专家的经验。我们持续共同优化产品，在保证最高品质的同时实现高效制造。<br><span style="font-size: 1.4rem;"><b><em>为了音乐世界！</em></b></span>',
      'footer.nav': '导航',
      'footer.contact': '联系方式',
      'footer.social': '社交媒体',
      'footer.purchase': '在 Amazon 订购',
      'footer.email-info': '信息邮件',
      'footer.email-purchase': '订购邮件',
      'footer.email': '电子邮件',
      'product.title': '产品',
      'product.feature1.title': '<b>声学自由</b>',
      'product.feature1.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'product.feature3.chartSrc': 'assets/lautstaerkeGrafik_zh.png',
      'product.feature3.chartAlt': '声级测量图表',
      'product.feature2.title': '<b>产品与工作原理</b>',
      'product.feature2.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'product.feature3.title': '<b>报告与测量</b>',
      'product.feature3.text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa.',
      'product.feature3.quote': '"通过 BONO Piano Akustik 声学防护降低声压级后，可将演奏时长延长至触发值，或在相同健康风险水平下进行演奏。"',
      'product.feature3.quoteSource': '— Schorer + Wolf GmbH',
      'product.table80.caption': '测量值：达到 80 dB(A) 所需时间',
      'product.table85.caption': '测量值：达到 85 dB(A) 所需时间',
      'product.table.header.situation': '情境',
      'product.table.header.without': '无降噪',
      'product.table.header.with': '有降噪',
      'product.table.row.lidOpen': '琴盖<br>打开',
      'product.table.row.lidMiddle': '琴盖<br>半开',
      'product.table80.row1.without': '2 Std. 22 Min.',
      'product.table80.row1.with': '4 Std. 56 Min.',
      'product.table80.row2.without': '3 Std. 55 Min.',
      'product.table80.row2.with': '5 Std. 56 Min.',
      'product.table85.row1.without': '7 Std. 28 Min.',
      'product.table85.row1.with': '15 Std. 36 Min.',
      'product.table85.row2.without': '12 Std. 23 Min.',
      'product.table85.row2.with': '18 Std. 41 Min.',
      'tutorial.title': '教程',
      'impressum.title': '版权信息',
      'impressum.subtitle': '根据德国电信媒体法第5条的信息',
      'impressum.exampleNote': '提示：此法律声明为示例布局，不能替代法律咨询。',
      'impressum.section.provider': '服务提供者',
      'impressum.section.contact': '联系方式',
      'impressum.section.vat': '增值税',
      'impressum.section.responsible': '内容负责人',
      'impressum.section.dispute': '争议解决',
      'impressum.section.liability': '责任声明',
      'impressum.section.copyright': '版权',
      'impressum.provider.name': 'BONO Piano Akustik',
      'impressum.provider.owner': '负责人：Nataliya Tkachenko',
      'impressum.provider.address': '示例街12号<br>80331 慕尼黑<br>德国',
      'impressum.contact.phoneLabel': '电话：',
      'impressum.contact.phone': '+49 123 4567890',
      'impressum.contact.emailLabel': '电子邮件：',
      'impressum.contact.email': 'info@bonopiano.com',
      'impressum.contact.hoursLabel': '服务时间：',
      'impressum.contact.hours': '周一至周五，10:00-17:00',
      'impressum.vat.note': '根据德国增值税法第27a条的增值税识别号：',
      'impressum.vat.id': 'DE123456789',
      'impressum.responsible.name': 'Nataliya Tkachenko',
      'impressum.responsible.address': '示例街12号<br>80331 慕尼黑<br>德国',
      'impressum.dispute.eu': '欧盟委员会提供在线争议解决平台（ODR）：',
      'impressum.dispute.consumer': '我们没有义务且不愿意参与消费者仲裁机构的争议解决程序。',
      'impressum.liability.content': '尽管我们已仔细审查内容，但对外部链接内容不承担任何责任。链接页面内容由其运营者负责。',
      'impressum.copyright.text': '本网站运营者创建的内容和作品受德国版权法保护。第三方内容将另行标注。',
      'impressum.contact': '联系方式',
      'index.header.title1': '<span style="font-size: 5rem;">创新</span>',
      'index.header.title2': '<span style="font-size: 5rem;"> <span style="color: #b50a0a"> 降噪方案</span></span>',
      'index.header.subtitle': '<span style="font-size: 3.5rem; color: #E6C07A">适用于<em>三角钢琴</em>与<em>立式钢琴</em></span>',
      'index.text1b': '专为音乐会钢琴家、音乐院校学生、剧院、音乐学校与高校、录音室以及各类私人空间开发。',
      'index.text2': '<span style="color: #b50a0a">产品更多信息：</span>',
      'index.title2b': '<em>更安静地发声。</em>',
      'index.card.product2b': '<b>请联系我们。</b>',
      'product.feature11.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em>当优质声学变成音量难题时...</span></em><br><br>声学三角钢琴在打开琴盖时会释放最完整的声能。在较小房间、小型剧院或私人住宅中，这恰恰常常会成为挑战。<br><br>演员会被盖过、邻里会受影响、排练空间会出现声学过载。过去的解决方式通常意味着：',
      'product.feature1.list1': '昂贵的房间隔音工程',
      'product.feature1.list2': '对乐器或空间进行永久性改造',
      'product.feature1.list3': '放弃乐器开启状态下的完整音色',
      'product.feature12.text': '<span style="color: #E6C07A">BONO Piano Akustik</span> 采用了更简单的新路径：<br><span style="text-decoration: underline;">在乐器本体上直接进行降噪，并可随时无残留拆除。</span>',
      'product.feature21.text': '这款专门开发的降噪系统安装在三角钢琴盖内部，以可控且均匀的方式降低声辐射。<br><br> 结果是：声音更柔和、更圆润，音量显著降低，同时不损失音乐表现力。<br><br> 优势：',
      'product.feature21.list1': '音量可降低约 6-10 dB(A)',
      'product.feature21.list2': '保留自然音色',
      'product.feature21.list3': '可变阻尼',
      'product.feature21.list4': '无需建筑结构改造',
      'product.feature21.list5': '安装与拆卸无残留',
      'product.feature21.list6': '外观优雅且低调融合',
      'product.feature22.text': '<span style="font-size: 1.7rem; color: #E6C07A"><em> 为专业需求而开发！</em></span><br><br> <span style="font-size: 1.7rem;">我们的产品包含以下部件：</span>',
      'product.feature22.list1': '一块经声学优化的降噪毯（部件 1），采用高品质声学泡沫材料',
      'product.feature22.list2': '一块可选泡沫板，用于底部增强降噪（部件 2）',
      'product.feature22.list3': '带魔术贴系统的弹性固定件',
      'product.feature22.list4': '用于底部的粘贴垫',
      'product.feature23.text': '我们选择这些材料时，重点是它们应当',
      'product.feature23.list1': '声学有效，',
      'product.feature23.list2': '视觉低调，且',
      'product.feature23.list3': '对乐器友好。',
      'product.feature3.text1': '<span style="color: #E6C07A">BONO Piano Akustik</span> 降噪系统的有效性由 <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> 在一项 <b>独立研究</b> 中进行了验证。测量结果证实了声发射具有明显且可测量的降低。研究同时记录并评估了钢琴演奏者位置与听众区域的声压级。<br><br><span style="font-size: 1.7rem; color: #E6C07A">核心结果一览：</span>',
      'product.feature31.list1': '<span style="color: #ffffff">&check; 音量最高可降低 <b>6 dB(A)</b></span>',
      'product.feature31.list2': '<span style="color: #ffffff">&check; 连续声级最高可降低 <b>3.5 dB(A)</b></span>',
      'product.feature31.list3': '<span style="color: #ffffff">&check; 声功率至少可 <b>减半</b></span>',
      'product.feature31.list4': '<span style="color: #ffffff">&check; 在钢琴位置与听众区域均可听见明显降噪</span>',
      'product.feature31.list5': '<span style="color: #ffffff">&check; 在达到职业噪声参考值（噪声暴露限值）前，钢琴家可获得 <b>超过 100% 的更长练习时长</b></span>',
      'product.feature3.text2': '报告结论显示，降噪效果可被清晰听见，并能降低钢琴演奏者的噪声负担。因此，在达到相关噪声暴露值之前，可用演奏时间明显延长。',
      'product.feature3.text3': '<span style="font-size: 1.7rem; color: #E6C07A"><em>结论</em></span><br><b>Schorer + Wolf Technische Dienstleistungen GmbH</b> 的独立研究证实了 <span style="color: #E6C07A">BONO Piano Akustik</span> 降噪器的有效减噪。测量结果显示，在相近暴露条件下，噪声负担明显下降，且可演奏时间显著延长。',
      'product.feature3.table1.caption': '测量值：达到 80 dB(A) 所需时间',
      'product.feature3.table2.caption': '测量值：达到 85 dB(A) 所需时间',
      'product.feature3.table.header1': '琴盖状态',
      'product.feature3.table.header2': '无降噪',
      'product.feature3.table.header3': '有降噪',
      'product.table1.open.without': '2 小时 22 分',
      'product.table1.open.with': '4 小时 56 分',
      'product.table1.closed.without': '3 小时 55 分',
      'product.table1.closed.with': '5 小时 56 分',
      'product.table2.open.without': '7 小时 28 分',
      'product.table2.open.with': '15 小时 36 分',
      'product.table2.closed.without': '12 小时 23 分',
      'product.table2.closed.with': '18 小时 41 分',
      'product.feature4.title': '<b>创新与专利</b>',
      'product.feature4.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>面向三角钢琴与立式钢琴声学的新方案</em></span><br><br>该产品的创新点在于利用三角钢琴盖本身的自然共振面。不是去改造房间，而是在乐器上两个视觉上不显眼的位置直接控制声辐射。<br><br> 由此实现：',
      'product.feature4.list1': '可逆方案',
      'product.feature4.list2': '不改动乐器本体',
      'product.feature4.list3': '不改变空间结构',
      'product.feature4.list4': '在整个声学频谱上实现均匀降噪',
      'product.feature4.text2': '<span style="font-size: 1.7rem; color: #E6C07A"><em>BONO Piano Akustik 降噪系统受专利与商标法保护。</em></span>',
      'product.feature5.title': '<b>源自实践的开发</b>',
      'product.feature5.text1': '<span style="font-size: 1.7rem; color: #E6C07A"><em>由音乐会钢琴家发明，并结合中国技术经验开发！</em></span><br><br>这一想法来源于舞台、剧院与排练空间中的日常实践。作为专业音乐会钢琴家和剧院音乐家，发明人一直在寻找一种既能保持音乐品质又能控制音量的解决方案。借助中国团队在材料技术、声学与制造方面的国际经验，该系统得以优化并发展为面向实践的方案。最终形成的是一种自然声学解决方案：既保留音乐表现力，也为声学乐器在多种空间中的应用开辟新可能。通过与经验丰富的中国开发团队合作，降噪系统在技术与声学层面持续迭代，形成兼具创新功能与音乐标准的专业方案。',
      'product.feature6.title': '<b>艺术家评价</b>',
      'product.feature6.quote1': '"这是一个非常实用的方案，适用于日常练习、剧院和小型舞台，也有助于听力保护。我在家练琴和授课时也会使用这套降噪系统。现在我几乎不再在没有它的情况下演奏。我的专业唱片中也使用了这套降噪系统：<br>(TIK/36music) \'Chopin und seine Frauen\', \'Nussknacker und Mäusekönig\', \'La Vie De Coco Chanel\'<br>(NEOS Music) \'Fazil Say: Troy-Sonata\'。"',
      'product.feature6.quoteSource1': '<br>- Nataliya Tkachenko，<br>音乐会钢琴家与钢琴教育家',
      'product.feature6.quote2': '"我是一名钢琴家，住在一栋老式公寓里，我的 Steinway 也放在家中。为了演出我需要经常练习，同时也教授很多学生。公寓里放一台三角钢琴很容易产生问题：一方面是邻里影响，更重要的是这种乐器本来是为大型音乐厅设计，在普通房间里即使合上琴盖也常常太响。<br><br>无论是我自己演奏还是学生演奏，这台琴的音量都让我越来越困扰，我一直在寻找降低声音的办法。比如我曾在钢琴下额外铺了地毯（我们是木地板），但效果有限。我一度想卖掉这台漂亮的三角钢琴改用立式钢琴，直到我了解到 BONO Piano 的方案。我尝试后对结果非常满意。降噪确实有效，不会损害音质，安装方便，外观也很低调。<br><br>我可以非常负责地推荐 BONO Piano。"',
      'product.feature6.quoteSource2': '<br>- Elena Gurevich，<br>慕尼黑 Steinway 艺术家',
      'product.feature6.youtubeVid': '在这段视频中，产品发明者 Nataliya Tkachenko 在安装 BONO Piano Akustik 降噪系统的三角钢琴上演奏 Erik Satie 的 <em>Gnossienne No. 1</em>。音量明显降低，因此即使在相对较小的空间中也能进行高质量录音，同时不影响乐器自然音色与表现力。<br><br><span style="font-size: 1.7rem; color: #E6C07A"><b>亲自感受这套声学效果！</b></span>',
      'tutorial.subtitle': '这里将为您说明如何正确安装 <span style="color: #E6C07A">BONO Piano Akustik 降噪器</span>。<br><br>本网站目前仍在建设中！<br>请耐心等待。',
      'impressum.firm': '示例公司'
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

    document.querySelectorAll('[data-i18n-src]').forEach((el) => {
      const key = el.getAttribute('data-i18n-src');
      const src = t(key);
      if (src && src !== key) {
        const fallbackSrc = el.getAttribute('data-i18n-src-fallback');
        if (fallbackSrc && el.tagName === 'IMG') {
          el.onerror = function () {
            if (el.getAttribute('src') !== fallbackSrc) {
              el.setAttribute('src', fallbackSrc);
            }
            el.onerror = null;
          };
        }
        el.setAttribute('src', src);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const alt = t(key);
      if (alt && alt !== key) {
        el.setAttribute('alt', alt);
      }
    });

    document.documentElement.lang = locale;
    setActiveLangButton();
  }

  translatePage();
});

