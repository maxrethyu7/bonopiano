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
      'product.feature1.title': 'Akustische Freiheit',
      'product.feature11.text': '<span style="font-size: 2.3rem; color: #E6C07A"><em>Wenn gute Akustik zur problematischen Lautstärke wird...</span></em><br><br>Akustische Flügel entfalten ihre volle Klangkraft besonders mit geöffnetem Deckel. In kleineren Räumen, kleinen Theatern oder privaten Wohnungen wird genau das jedoch häufig zur Herausforderung.<br><br> Schauspieler werden übertönt, Nachbarn belastet, Proberäume akustisch überfordert. Bisher bedeutete die Lösung oft:',
      'product.feature1.list1': 'kostspielige Raumdämmung',
      'product.feature1.list2': 'dauerhafte Umbauten am Instrument oder Raum',
      'product.feature1.list3': 'der Verzicht auf den vollen Klang des geöffneten Instruments',
      'product.feature12.text': '<span style="color: #E6C07A">BONO Piano Akustik</span> geht einen neuen, einfacheren Weg:<br><span style="text-decoration: underline;">Die Schalldämpfung erfolgt direkt am Instrument und lässt sich jederzeit rückstandslos entfernen.</span>',
      
      'product.feature2.title': 'Produkt & Funktionsweise',
      'product.feature21.text': 'Die speziell entwickelte Schalldämpfung wird im Inneren des Flügeldeckels befestigt und reduziert die Schallabstrahlung kontrolliert und gleichmäßig.<br><br> Das Ergebnis: ein weicherer, runder Klang mit deutlich reduzierter Lautstärke — ohne Verlust der musikalischen Ausdruckskraft. <br><br> Vorteile:',
      'product.feature21.list1': 'Reduktion der Lautstärke um ca. 6-10 dB(A)',
      'product.feature21.list2': 'Erhaltung des natürlichen Klangs',
      'product.feature21.list3': 'Variable Dämpfung',
      'product.feature21.list4': 'Kein Bedarf an baulichen Veränderungen',
      'product.feature21.list5': 'Rückstandslose Montage und Demontage',
      'product.feature21.list6': 'Elegante und unauffällige Integration',
      'product.feature22.text': '<span style="font-size: 2.3rem; color: #E6C07A"><em> Entwickelt für professionelle Ansprüche!</em></span><br><br> <span style="font-size: 2.3rem;">Unser Produkt umfasst folgende Teile:</span>',
      'product.feature22.list1': 'eine akustisch optimierte Schalldämpfungsdecke (Teil 1) aus hochwertigem Akustikschaumstoff',
      'product.feature22.list2': 'eine optionale Schaumstoffplatte zur verstärkten Schalldämpfung für die Unterseite (Teil 2)',
      'product.feature22.list3': 'elastische Halterungen mit Klettsystem',
      'product.feature22.list4': 'Klebepads für die Unterseite',
      'product.feature23.text': 'Die Materialien wurden von uns so gewählt, dass sie',
      'product.feature23.list1': 'akustisch wirksam,',
      'product.feature23.list2': 'optisch dezent und',
      'product.feature23.list3': 'instrumentenschonend sind.',

      'product.feature3.title': 'Gutachten & Messungen',
      'product.feature3.text1': 'Die Wirksamkeit des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfung wurde von der <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> in einer <b>unabhängigen Untersuchung</b> geprüft. Die Messergebnisse bestätigen eine deutliche und messbare Reduzierung der Schallemissionen. Dabei wurden die Schallpegel sowohl am Platz der Pianistin als auch im Zuhörerbereich erfasst und ausgewertet.<br><br><span style="font-size: 2.3rem; color: #E6C07A">Die wichtigsten Ergebnisse auf einen Blick:</span>',
      'product.feature31.list1': '<span style="color: #ffffff">&check; Reduktion der Lautstärke um <b>bis zu 6 dB(A)</b></span>',
      'product.feature31.list2': '<span style="color: #ffffff">&check; Reduktion des Dauerschallpegels um <b>bis zu 3,5 dB(A)</b></span>',
      'product.feature31.list3': '<span style="color: #ffffff">&check; Mindestens eine <b>Halbierung der Schallleistung</b></span>',
      'product.feature31.list4': '<span style="color: #ffffff">&check; Hörbare Schallminderung sowohl am Platz am Piano als auch im Zuhörerbereich</span>',
      'product.feature31.list5': '<span style="color: #ffffff">&check; <b>Über 100% längere Übungsdauer</b> für Pianistinnen und Pianisten bis zum Erreichen der arbeitsmedizinischer Lärmrichtwerte (Lärmexpositionsgrenze)</span>',
      'product.feature3.text2': 'Das Gutachten kommt zu dem Ergebnis, dass die Schallminderung hörbar ist und die Lärmbelastung für Pianistinnen und Pianisten reduziert. Dadurch verlängert sich die mögliche Spielzeit bis zum Erreichen relevanter Lärmexpositionswerte erheblich.',
      'product.feature3.text3': '<span style="font-size: 2.3rem; color: #E6C07A"><em>Fazit</em></span><br>Die unabhängige Untersuchung von <b>Schorer + Wolf Technische Dienstleistungen GmbH</b> bestätigt die wirksame Schallreduzierung des <span style="color: #E6C07A">BONO Piano Akustik</span> Schalldämpfers. Die Messergebnisse zeigen eine hörbare Verringerung der Lärmbelastung und eine deutliche Verlängerung der möglichen Spielzeiten bei vergleichbarer Belastung.',
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

      'product.feature4.title': 'Innovation & Patent',
      'product.feature4.text1': '<span style="font-size: 2.3rem; color: #E6C07A"><em>Eine neue Lösung für die Akustik von Flügeln und Klavieren</em></span><br><br>Die Innovation dieses Produkts liegt in der Nutzung der natürlichen Resonanzfläche des Flügeldeckels selbst. Anstatt den Raum zu dämmen, wird die Schallabstrahlung direkt am Instrument — an zwei optisch unauffälligen Stellen — kontrolliert.<br><br> Dadurch entsteht:',
      'product.feature4.list1': 'eine reversible Lösung',
      'product.feature4.list2': 'kein Eingriff ins Instrument',
      'product.feature4.list3': 'keine Veränderung der Raumarchitektur',
      'product.feature4.list4': 'eine gleichmäßige Klangreduktion über das gesamte akustische Frequenzspektrum',
      'product.feature4.text2': '<span style="font-size: 2.3rem; color: #E6C07A"><em>Die Schalldämpfung BONO Piano Akustik ist patent- und markenrechtlich geschützt.</em></span>',
      
      'product.feature5.title': 'Entwickelt aus der Praxis',
      'product.feature5.text1': '<span style="font-size: 2.3rem; color: #E6C07A"><em>Von einer Konzertpianistin erfunden — mit chinesischem Know-How entwickelt!</em></span><br><br>Die Idee entstand aus der täglichen Praxis auf Bühnen, in Theatern und Proberäumen. Als professionelle Konzertpianistin und Theatermusikerin suchte die Erfinderin nach einer Lösung, welche musikalische Qualität mit kontrollierbarer Lautstärke verbindet. Durch internationales Know-How eines chinesischen Teams in den Bereichen Materialtechnologie, Akustik und Verarbeitung konnte das System optimiert und zu einer praxisorientierten Lösung ausgebaut werden. Das Ergebnis ist eine natürliche Akustiklösung, die musikalische Ausdruckskraft bewahrt und gleichzeitig neue Möglichkeiten für den Einsatz akustischer Instrumente in unterschiedlichsten Räumen schafft. In Zusammenarbeit mit einem erfahrenen chinesischen Entwicklungsteam wurde die Schalldämpfung technisch und akustisch weiterentwickelt. Das Ergebnis ist eine professionelle Lösung, die innovative Funktionalität mit musikalischem Anspruch vereint.',
      
      'product.feature6.title': 'Künstlerstimmen',
      'product.feature6.quote1': '„Eine ideal praktische Lösung für das tägliche Üben, für das Theater und kleinere Bühnen sowie zum Schutz des Gehörs. Auch zu Hause benutze ich diese Schalldämpfung beim Üben oder beim Unterrichten. Inzwischen spiele ich fast nie mehr ohne sie. Auch bei meinen professionellen CDs wurde die Schalldämpfung an dem Flügel benuzt:<br>(TIK/36music) \'Chopin und seine Frauen\', \'Nussknacker und Mäusekönig\', \'La Vie De Coco Chanel\'<br>(NEOS Music) \'Fazil Say: Troy-Sonata\'.“',
      'product.feature6.quoteSource1': '<br>— Nataliya Tkachenko,<br>Konzertpianistin und Klavierpädagogin',
      'product.feature6.quote2': '„Ich bin Pianistin und wohne in einer Altbauwohnung, in der auch mein Steinway steht. Für meine Konzerte muss ich regelmäßig üben, außerdem unterrichte ich zahlreiche Schüler. Ein Flügel in einer Wohnung kann bekanntlich schnell zum Problem werden, zum einen wegen der Nachbarn, vor allem aber, weil ein solches Instrument ja für einen großen Saal gedacht ist und in einem normalen Zimmer oft einfach zu laut klingt — auch wenn man es geschlossen lässt.<br><br>Von der Lautstärke des Flügels, egal ob ich ihn spielte oder meine Schüler, war ich zunehmend genervt und suchte nach Lösungen, den Klang etwas zu dämpfen. Zum Beispiel legte ich einen separaten Teppich unter das Instrument (wir haben Parkettboden). Das half nur wenig. Ich war schon drauf und dran, den schönen Flügel zu verkaufen und durch ein Klavier zu ersetzen, als ich von der Lösung erfuhr, die BONO Piano anbietet. Ich versuchte es und war mit dem Ergebnis hochzufrieden. Die Dämpfung funktioniert wirklich und ohne die Klangqualität zu beeinträchtigen, sie lässt sich leicht anbringen und ist optisch unauffällig.<br><br>Ich kann BONO Piano guten Gewissens weiterempfehlen.“',
      'product.feature6.quoteSource2': '<br>— Elena Gurevich,<br>Steinway-Artistin in München',
      'product.feature6.youtubeVid': 'In diesem Video spielt die Erfinderin des Produkts, Nataliya Tkachenko, Erik Saties <em>Gnossienne Nr. 1</em> auf einem Flügel mit der BONO Piano Akustik Schalldämpfung. Die Lautstärke wird dabei deutlich reduziert und ermöglicht so hochwertige Aufnahmen auch in relativ kleinen Räumen — ohne den natürlichen Klangcharakter und die Ausdruckskraft des Instruments zu beeinträchtigen.<br><br><span style="font-size: 2.3rem; color: #E6C07A"><b>Überzeugen Sie sich von der Akustik!</b></span>',

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
      'product.feature3.quote': '„Durch die Reduzierung des Schallpegels durch den Schallschutz von BONO Piano Akustik können die Spielzeiten verlängert werden, um den Auslösewert zu erreichen bzw. einer gleichen gesundheitlichen Gefährdung ausgesetzt zu sein.“',
      'product.feature3.quoteSource': '— Schorer + Wolf GmbH',
      'product.table80.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 80 dB(A)',
      'product.table85.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 85 dB(A)',
      'product.table.header.situation': 'Situation',
      'product.table.header.without': 'Ohne Schalldämpfung',
      'product.table.header.with': 'Mit Schalldämpfung',
      'product.table.row.lidOpen': 'Deckel <br>offen',
      'product.table.row.lidMiddle': 'Deckel <br>mittig',
      'product.table80.row1.without': '2 Std. 22 Min.',
      'product.table80.row1.with': '4 Std. 56 Min.',
      'product.table80.row2.without': '3 Std. 55 Min.',
      'product.table80.row2.with': '5 Std. 56 Min.',
      'product.table85.row1.without': '7 Std. 28 Min.',
      'product.table85.row1.with': '15 Std. 36 Min.',
      'product.table85.row2.without': '12 Std. 23 Min.',
      'product.table85.row2.with': '18 Std. 41 Min.',
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
      'product.feature3.quote': '„Durch die Reduzierung des Schallpegels durch den Schallschutz von BONO Piano Akustik können die Spielzeiten verlängert werden, um den Auslösewert zu erreichen bzw. einer gleichen gesundheitlichen Gefährdung ausgesetzt zu sein.“',
      'product.feature3.quoteSource': '— Schorer + Wolf GmbH',
      'product.table80.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 80 dB(A)',
      'product.table85.caption': 'Messwerte: Zeit bis Erreichen des Pegels von 85 dB(A)',
      'product.table.header.situation': 'Situation',
      'product.table.header.without': 'Ohne Schalldämpfung',
      'product.table.header.with': 'Mit Schalldämpfung',
      'product.table.row.lidOpen': 'Deckel <br>offen',
      'product.table.row.lidMiddle': 'Deckel <br>mittig',
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
