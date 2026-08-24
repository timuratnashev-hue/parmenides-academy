// Цитаты к узлам карты филиаций. Собраны 25.08.2026; confidence: high — дословно и сверено/уверенно, medium — дословность не сверена, low — оригинал не приводится, только locus и парафраз.
export type Quote = { n: string; locus: string; original: string; translation: string; translator: string; lang: string; confidence: 'high'|'medium'|'low'; verified: string; note: string; extra_sources: {t:string;u:string}[] };
export const quotes: Record<string, Quote> = {
 "Марий Викторин": {
  "n": "Марий Викторин",
  "locus": "Ad Candidum 4 (ed. Henry–Hadot, SC 68, p. 136, 11–12 = CSEL 83/1; PL 8, 1021–1022)",
  "original": "Supra ὂν igitur deus est et, iuxta quod supra est, μὴ ὂν deus dicitur.",
  "translation": "Итак, Бог — превыше сущего (ὄν), и в той мере, в какой он превыше, Бог именуется не-сущим (μὴ ὄν).",
  "translator": "перевод мой",
  "lang": "la+grc",
  "confidence": "high",
  "verified": "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/a792a97c-5dc1-413b-bc02-52358ece3c39/content",
  "note": "Отец как μὴ ὄν по превосходству — латинская формула Единого первой гипотезы (Parm. 141e: единое «никак не причастно бытию»); ср. Adv. Arium IV 21, 26–27: «Τριδύναμος est deus, id est tres potentias habens, esse, vivere, intellegere».",
  "extra_sources": [
   {
    "t": "P. V. Spade, Marius Victorinus on the Trinity (лат. цитаты по изд. Henry–Hadot)",
    "u": "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/a792a97c-5dc1-413b-bc02-52358ece3c39/content"
   },
   {
    "t": "Marius Victorinus, Opera theologica (PL 8), documentacatholicaomnia",
    "u": "https://www.documentacatholicaomnia.eu/20_30_0290-0364-_Marius_Victorinus.html"
   }
  ]
 },
 "Каппадокийцы: Василий, Григорий Богослов, Григорий Нисский": {
  "n": "Каппадокийцы: Василий, Григорий Богослов, Григорий Нисский",
  "locus": "Григорий Богослов, Oratio 29 (Theologica III), 2 (PG 36, 76B; SC 250, p. 180)",
  "original": "Διὰ τοῦτο μονὰς ἀπ᾿ ἀρχῆς εἰς δυάδα κινηθεῖσα μέχρι Τριάδος ἔστη.",
  "translation": "Поэтому монада, от начала подвигшаяся к диаде, остановилась на триаде.",
  "translator": "перевод мой",
  "lang": "grc",
  "confidence": "high",
  "verified": "https://maksimologija.org/st-maximus-the-confessor-peri-diaforwn-aporiwn/",
  "note": "Переход от единого к многому (Parm. 142b–143a: единое, сущее, их различие — рождение числа) перенесён внутрь одной сущности; сразу перед этим Григорий отвергает образ переполнившейся чаши, то есть эманацию.",
  "extra_sources": [
   {
    "t": "Григорий Богослов, Слово 29 (греч., PG 36) — текст с леммой у Максима, Amb. ad Thomam 1",
    "u": "https://maksimologija.org/st-maximus-the-confessor-peri-diaforwn-aporiwn/"
   },
   {
    "t": "Григорий Богослов, Слово 29, о Сыне (рус., пер. МДА)",
    "u": "https://azbyka.ru/otechnik/Grigorij_Bogoslov/slovo/29"
   }
  ]
 },
 "Августин о времени": {
  "n": "Августин о времени",
  "locus": "Confessiones XI 15, 20 (CCSL 27, p. 204; PL 32, 817)",
  "original": "Si quid intellegitur temporis, quod in nullas iam vel minutissimas momentorum partes dividi possit, id solum est quod praesens dicatur; quod tamen ita raptim a futuro in praeteritum transvolat, ut nulla morula extendatur. Nam si extenditur, dividitur in praeteritum et futurum; praesens autem nullum habet spatium.",
  "translation": "Если мыслится нечто от времени, что уже не может быть разделено ни на какие, даже мельчайшие, доли мгновений, — только это и можно назвать настоящим; но оно так стремительно перелетает из будущего в прошедшее, что не длится ни малейшей задержки. Ибо если оно протягивается, то делится на прошедшее и будущее; настоящее же не имеет никакой протяжённости.",
  "translator": "перевод мой (ср. пер. М. Е. Сергеенко)",
  "lang": "la",
  "confidence": "high",
  "verified": "https://www.thelatinlibrary.com/augustine/conf11.shtml",
  "note": "Настоящее без протяжённости — латинский типологический двойник «вдруг» (τὸ ἐξαίφνης, Parm. 156d–e), «не находящегося ни в каком времени», пришедший к Августину не из диалога, а через Плотина (Enn. III 7) и апорию «теперь» Аристотеля.",
  "extra_sources": [
   {
    "t": "Augustinus, Confessiones XI (лат., The Latin Library)",
    "u": "https://www.thelatinlibrary.com/augustine/conf11.shtml"
   }
  ]
 },
 "Боэций": {
  "n": "Боэций",
  "locus": "De consolatione philosophiae V, pr. 6, 4 (CCSL 94, p. 101; PL 63, 858)",
  "original": "Aeternitas igitur est interminabilis vitae tota simul et perfecta possessio, quod ex collatione temporalium clarius liquet. Nam quicquid vivit in tempore, id praesens a praeteritis in futura procedit, nihilque est in tempore constitutum, quod totum vitae suae spatium pariter possit amplecti.",
  "translation": "Итак, вечность есть обладание безграничной жизнью, всей разом и совершенной; это яснее видно из сопоставления с временны́м. Ибо всё, что живёт во времени, будучи настоящим, идёт от прошлого к будущему, и нет ничего установленного во времени, что могло бы равно объять всё пространство своей жизни.",
  "translator": "перевод мой (ср. пер. В. И. Уколовой, М. Н. Цейтлина)",
  "lang": "la",
  "confidence": "high",
  "verified": "https://www.hs-augsburg.de/~harsch/Chronologia/Lspost06/Boethius/boe_con5.html",
  "note": "Латинская чеканка плотиновской вечности (Enn. III 7, 3: «жизнь вся разом»), восходящей к Parm. 141d–142a — единое, не причастное времени, «не было, не будет и не есть».",
  "extra_sources": [
   {
    "t": "Boethius, Consolatio V (лат., Bibliotheca Augustana)",
    "u": "https://www.hs-augsburg.de/~harsch/Chronologia/Lspost06/Boethius/boe_con5.html"
   }
  ]
 },
 "Шлейермахер": {
  "n": "Шлейермахер",
  "locus": "F. Schleiermacher, Einleitung zum «Parmenides», in: Platons Werke, Ersten Theiles zweiter Band, Berlin: Realschulbuchhandlung, 1805 (2. Aufl. 1818), первые строки введения; англ.: Schleiermacher's Introductions to the Dialogues of Plato, transl. W. Dobson, Cambridge 1836, p. 112",
  "original": "Wer weiß nicht, wie ehedem der »Parmenides« des Platon als ein dunkles Heiligtum von Vielen ist angestaunt worden, worin geheime nur Wenigen zugängliche Schätze der erhabensten Weisheit verborgen lägen. Allein nachdem dieser Wahn, so leicht es auch war, erst spät aus dem Wege geräumt worden: so hat sich die falschgegründete Erhebung in Vorwürfe umgekehrt von der Art, daß, ihre Richtigkeit vorausgesetzt, das Ganze wiederum nur auf andere Weise unbegreiflich wird.",
  "translation": "Кому не известно, как некогда «Парменид» Платона многими был почитаем с изумлением, словно тёмное святилище, в котором сокрыты тайные, лишь немногим доступные сокровища возвышеннейшей мудрости. Но после того как это заблуждение, сколь ни легко было это сделать, лишь поздно было устранено с пути, ложно обоснованное превознесение обернулось упрёками такого рода, что, если допустить их справедливость, целое вновь становится непостижимым — только уже иным образом.",
  "translator": "перевод составителя",
  "lang": "de",
  "confidence": "high",
  "verified": "https://projekt-gutenberg.org/authors/platon/books/platons-werke-erster-theil/chapter/16",
  "note": "Открывающие фразы введения: одновременно отвергается неоплатоническое чтение («тёмное святилище») и просвещенческое (набор софизмов). Там же ключевые тезисы: «Die Absicht, warum diese einzelen Teile da sind, ist also nicht das Ergebnis, sondern die Beweisführung selbst» (цель — не результат, а само доказательство) и «der Begriff des Augenblicklichen oder der Tatsache im unendlich kleinen der Zeit» (о «вдруг» как бесконечно-малом времени) — обе формулировки проверены по тому же тексту. Пагинация первого издания не сверена, потому дан только locus по изданию/главе.",
  "extra_sources": [
   {
    "t": "Platons Werke, Erster Theil (Projekt Gutenberg-DE), Einleitung zum Parmenides",
    "u": "https://www.projekt-gutenberg.org/platon/platowr1/parmenid.html"
   },
   {
    "t": "Schleiermacher's Introductions to the Dialogues of Plato (Dobson, 1836), archive.org",
    "u": "https://archive.org/details/cu31924028994543"
   }
  ]
 },
 "Гегель": {
  "n": "Гегель",
  "locus": "G. W. F. Hegel, Phänomenologie des Geistes (1807), Vorrede; Werke in 20 Bänden (Suhrkamp), Bd. 3, S. 65; ср. Vorlesungen über die Geschichte der Philosophie, Platon, «Dialektik» (Werke Bd. 19, S. 79)",
  "original": "…daß […] es auch Zeiten gegeben, welche sogar Zeiten der Schwärmerei genannt werden, worin die Aristotelische Philosophie um ihrer spekulativen Tiefe willen geachtet und der Parmenides des Plato, wohl das größte Kunstwerk der alten Dialektik, für die wahre Enthüllung und den positiven Ausdruck des göttlichen Lebens gehalten wurde…",
  "translation": "…были и такие времена, которые даже называют временами мечтательности, когда аристотелевскую философию почитали за её спекулятивную глубину, а «Парменид» Платона — пожалуй, величайшее произведение искусства древней диалектики — считали истинным раскрытием и позитивным выражением божественной жизни…",
  "translator": "перевод составителя; ср. пер. Г. Г. Шпета (Гегель. Феноменология духа. СПб.: Наука, 1992, с. 37)",
  "lang": "de",
  "confidence": "high",
  "verified": "https://www.marxists.org/deutsch/philosophie/hegel/phaenom/vorrede2.htm",
  "note": "Вторая, столь же прямая оценка — в «Лекциях по истории философии»: «Die ausgeführte eigentliche Dialektik aber ist im Parmenides enthalten, dem berühmtesten Meisterstück der Platonischen Dialektik» (проверено по zeno.org, Werke 19, S. 79) — «Развитая же собственно диалектика содержится в „Пармениде“, знаменитейшем шедевре платоновской диалектики» (рус.: Лекции по истории философии, кн. 2, пер. Б. Столпнера). Страница Шпета указана по памяти и требует сверки.",
  "extra_sources": [
   {
    "t": "Hegel, Vorlesungen über die Geschichte der Philosophie, Platon: 1. Dialektik (zeno.org)",
    "u": "http://www.zeno.org/Philosophie/M/Hegel,+Georg+Wilhelm+Friedrich/Vorlesungen+%C3%BCber+die+Geschichte+der+Philosophie/Erster+Teil:+Griechische+Philosophie/Erster+Abschnitt.+Von+Thales+bis+Aristoteles/Drittes+Kapitel.+Platon+und+Aristoteles/A.+Philosophie+des+Platon/1.+Dialektik"
   },
   {
    "t": "Гегель, Лекции по истории философии, Платон: диалектика (рус.)",
    "u": "https://fil.wikireading.ru/26551"
   }
  ]
 },
 "Шеллинг": {
  "n": "Шеллинг",
  "locus": "F. W. J. Schelling, Bruno oder über das göttliche und natürliche Princip der Dinge (1802), in: Sämmtliche Werke, hrsg. K. F. A. Schelling, I. Abt., Bd. IV, Stuttgart/Augsburg 1859, S. 235–236 (фрагменты)",
  "original": "…die Ungetrenntheit des Verschiedenen vom Einen…",
  "translation": "…нераздельность различного от Единого…",
  "translator": "перевод составителя",
  "lang": "de",
  "confidence": "low",
  "verified": "",
  "note": "О «Пармениде» Платона Шеллинг прямо не пишет (в Платоновских тетрадях 1792–1794 диалога нет). Ближайшее к генологии первой гипотезы — «Бруно», где абсолютное описано как «das Eine ohne Gegensatz», «das Eine, das über allen Gegensatz erhoben», «die Ungetrenntheit des Verschiedenen vom Einen» (SW I/4, 235–236). Фрагменты приведены по цитации у В. Байервальтеса (Absolute Identität. Neuplatonische Implikationen in Schellings «Bruno», Philosophisches Jahrbuch 80, 1973, S. 245, прим. 5–17), полные предложения по первоисточнику не воспроизведены. Поздняя формула das unvordenkliche Sein — Philosophie der Offenbarung (SW II/3), дословно не воспроизведена. Рус.: Шеллинг. Соч. в 2 т. Т. 1. М.: Мысль, 1987 (Бруно, пер. М. И. Левиной).",
  "extra_sources": [
   {
    "t": "W. Beierwaltes, «Absolute Identität. Neuplatonische Implikationen in Schellings ‚Bruno‘», Philosophisches Jahrbuch 80 (1973), 242–266 (PDF)",
    "u": "https://philosophisches-jahrbuch.de/wp-content/uploads/2019/03/PJ80_S242-266_Beierwaltes_Absolute-Identit%C3%A4t.pdf"
   },
   {
    "t": "Schelling, Bruno (zeno.org)",
    "u": "http://www.zeno.org/Philosophie/M/Schelling,+Friedrich+Wilhelm+Joseph/Bruno+oder+%C3%BCber+das+g%C3%B6ttliche+und+nat%C3%BCrliche+Princip+der+Dinge"
   }
  ]
 },
 "Кьеркегор": {
  "n": "Кьеркегор",
  "locus": "S. Kierkegaard, Begrebet Angest (1844), Caput III, § 1, примечание; Søren Kierkegaards Skrifter, Bd. 4, København 1997, s. 386–387",
  "original": "Det er i »Parmenides« at Plato fremsætter »Øieblikket«. Denne Dialog beskæfter sig med at eftervise Modsigelsen i Begreberne selv […] Øieblikket viser sig nu at være dette underlige Væsen (ατοπον, det græske Ord er her ypperligt), der ligger mellem Bevægelse og Ro uden at være i nogen Tid, og til dette og ud af dette slaaer det Bevægende om i Ro, og det Hvilende i Bevægelse. Øieblikket bliver derfor Overgangs-Kategorien overhovedet (μεταβολη) […] Af alt dette har nu Plato Fortjeneste ved at tydeliggjøre sig Vanskeligheden, men Øieblikket bliver dog en lydløs atomistisk Abstraktion, som man heller ei forklarer ved at ignorere den.",
  "translation": "Именно в «Пармениде» Платон выдвигает «мгновение». Этот диалог занят тем, чтобы показать противоречие в самих понятиях […] Мгновение оказывается тут тем странным существом (ἄτοπον — греческое слово здесь превосходно), которое лежит между движением и покоем, не находясь ни в каком времени, и в нём и из него движущееся переходит в покой, а покоящееся — в движение. Поэтому мгновение становится категорией перехода вообще (μεταβολή) […] Во всём этом заслуга Платона — в том, что он прояснил себе трудность, однако мгновение остаётся у него беззвучной атомистической абстракцией, которую нельзя объяснить и тем, что её игнорируют.",
  "translator": "перевод составителя; ср. пер. Н. В. Исаевой и С. А. Исаева (Кьеркегор. Страх и трепет. М.: Республика, 1993, «Понятие страха», гл. III, прим.)",
  "lang": "da",
  "confidence": "high",
  "verified": "https://tekster.kb.dk/text/sks-ba-txt-root",
  "note": "Единственное в XIX в. до Гадамера место, где 155e–157b читается как проблема времени (Гадамер, Dionysius 7, прим. 3). В том же примечании Кьеркегор разбирает 151e («быть» = причастность сущности в настоящем времени) и колебание τὸ νῦν между «настоящим», «вечным» и «мгновением». Страницы SKS 4 указаны по составу тома (Begrebet Angest, Caput III) и требуют точной сверки по печатному изданию.",
  "extra_sources": [
   {
    "t": "Begrebet Angest, SKS (Det Kgl. Bibliotek, tekstportal)",
    "u": "https://tekster.kb.dk/text/sks-ba-txt-root"
   },
   {
    "t": "Gadamer, «Plato's Parmenides and Its Influence», Dionysius 7 (1983), n. 3",
    "u": "https://ojs.library.dal.ca/dionysius/article/view/6190"
   }
  ]
 },
 "Маркс — Лукач — Адорно": {
  "n": "Маркс — Лукач — Адорно",
  "locus": "Th. W. Adorno, Negative Dialektik (1966), Zweiter Teil, «Kritik der positiven Negation»; Gesammelte Schriften, Bd. 6, Frankfurt a. M.: Suhrkamp, 1973, S. 158",
  "original": "Fraglos hat Hegel, gegen Kant, die Priorität der Synthesis eingeschränkt: er erkannte Vielheit und Einheit, beide bei Kant schon nebeneinander Kategorien, nach dem Muster der Platonischen Spätdialoge als Momente, deren keines ohne das andere sei. Gleichwohl ist Hegel, wie Kant und die gesamte Tradition, auch Platon, parteiisch für die Einheit.",
  "translation": "Бесспорно, Гегель, в противовес Канту, ограничил приоритет синтеза: множество и единство — у Канта уже стоящие рядом категории — он, по образцу поздних диалогов Платона, признал моментами, ни один из которых не существует без другого. И всё же Гегель, как Кант и вся традиция, как и сам Платон, пристрастен к единству.",
  "translator": "перевод составителя; рус. изд.: Адорно. Негативная диалектика. Пер. Е. Л. Петренко. М.: Научный мир, 2003",
  "lang": "de",
  "confidence": "high",
  "verified": "https://archive.org/stream/TheodorAdorno-NegativeDialektik/AdornoTheodorW.-NegativeDialektik_djvu.txt",
  "note": "Единственный из троих, кто прямо соотносит свою диалектику с поздними диалогами Платона (т. е. с «Парменидом» и «Софистом» — по имени диалог не назван). Ср. первые строки Vorrede: «Dialektik will bereits bei Platon, daß durchs Denkmittel der Negation ein Positives sich herstelle […] Das Buch möchte Dialektik von derlei affirmativem Wesen befreien» (GS 6, S. 9) — то есть отказ от снятия, возвращающий к неснятому результату платоновской диалектики. Страница 158 взята из колонтитула сканированного издания (Suhrkamp 1966, пагинация совпадает с GS 6). Лекции «Ontologie und Dialektik» (1960/61) дословно не воспроизведены.",
  "extra_sources": [
   {
    "t": "Adorno, Negative Dialektik, полный текст (archive.org, PDF)",
    "u": "https://ia801607.us.archive.org/15/items/TheodorAdorno-NegativeDialektik/AdornoTheodorW.-NegativeDialektik.pdf"
   },
   {
    "t": "Th. W. Adorno, Ontology and Dialectics: 1960/61, Polity, 2019",
    "u": "https://www.politybooks.com/bookdetail?book_slug=ontology-and-dialectics-196061--9780745679464"
   }
  ]
 },
 "Пауль Наторп": {
  "n": "Пауль Наторп",
  "locus": "P. Natorp, Platos Ideenlehre. Eine Einführung in den Idealismus, Leipzig: Dürr, 1903, Kap. VII «Parmenides», S. 218–219",
  "original": "Zwar Schleiermacher hat leider gerade diesem Werk, das er unbegreiflicherweise für eine Jugendarbeit hielt, volles Verständnis nicht abgewinnen können […] Aber sie haben das ganze Bild nicht zu entschleiern, den ganzen Bau in seiner erstaunlichen Verwicklung und doch innerlichsten Planmäßigkeit nicht nachzuzeichnen vermocht. […] So sehr ich in der Erklärung des einzelnen den genannten und auch wohl einigen nicht genannten Vorgängern zu Dank verpflichtet bin, die Totalansicht des einzigartigen Werks habe ich mir selbst erringen müssen.",
  "translation": "Правда, Шлейермахер, к сожалению, именно этого труда, который он непостижимым образом считал юношеской работой, не сумел понять вполне […] Но и они [Целлер, Штальбаум, Куно Фишер] не смогли снять покров с целостной картины, не смогли воспроизвести всё строение в его поразительной запутанности и вместе с тем глубочайшей внутренней планомерности. […] Сколь ни обязан я в объяснении частностей названным, да и некоторым неназванным предшественникам, целостный взгляд на это единственное в своём роде произведение мне пришлось добывать самому.",
  "translator": "перевод составителя",
  "lang": "de",
  "confidence": "high",
  "verified": "https://archive.org/details/platosideenlehr00natogoog",
  "note": "Открытие главы о «Пармениде»: прямое размежевание со Шлейермахером и заявка на собственную «Totalansicht» диалога. Там же (перед этим) о неоплатониках: «Den Neuplatonikern […] war die anscheinende Dunkelheit dieser Schrift gerade recht, um ihre verwegensten Auslegungskünste daran spielen zu lassen». Страницы 218–219 — по OCR первого издания (колонтитул «Parmenides 219»).",
  "extra_sources": [
   {
    "t": "Natorp, Platos Ideenlehre (1903), полный текст (archive.org)",
    "u": "https://archive.org/details/platosideenlehr00natogoog"
   },
   {
    "t": "SEP: Paul Natorp",
    "u": "https://plato.stanford.edu/entries/natorp/"
   }
  ]
 },
 "Ханс-Георг Гадамер": {
  "n": "Ханс-Георг Гадамер",
  "locus": "H.-G. Gadamer, «Plato's Parmenides and Its Influence», Dionysius 7 (Dec. 1983), pp. 3–16, здесь p. 11; нем.: «Platos Parmenides und seine Nachwirkung», Gesammelte Werke, Bd. 7, Tübingen: Mohr, 1991, S. 313–327",
  "original": "Now in the Platonic dialogue Parmenides reveals the temporal structure of this change as the 'instant', which is between rest and motion in no time (Parmenides 156e). This structure holds true for all metabolai, for all sorts of sudden change. All of these transitions from one to the other are in no time and this means that there is a 'between' for which neither the one determination nor the other is valid. This is strongly opposed to all recognized views of the mutually exclusive opposition of kinesis and stasis.",
  "translation": "И вот в платоновском диалоге Парменид раскрывает временную структуру этого изменения как «мгновение», которое находится между покоем и движением вне всякого времени (Парменид 156e). Эта структура верна для всех μεταβολαί, для всякого рода внезапного изменения. Все эти переходы от одного к другому — вне времени, и это значит, что есть «между», для которого не значима ни та, ни другая определённость. Это резко противостоит всем признанным взглядам на взаимоисключающую противоположность κίνησις и στάσις.",
  "translator": "перевод составителя",
  "lang": "en",
  "confidence": "high",
  "verified": "https://ojs.library.dal.ca/dionysius/article/download/6190/5499",
  "note": "Текст статьи — авторизованная английская версия доклада; немецкий оригинал (GW 7) дословно не воспроизведён. В прим. 3 на той же странице Гадамер выдвигает гипотезу о Кьеркегоре как первом, кто связал это место с проблемой времени. Формула о неоплатониках как «плохих платониках» находится в начале статьи (p. 3).",
  "extra_sources": [
   {
    "t": "Gadamer, «Plato's Parmenides and Its Influence», Dionysius 7 (1983), открытый PDF",
    "u": "https://ojs.library.dal.ca/dionysius/article/view/6190"
   },
   {
    "t": "H.-G. Gadamer, Hegel's Dialectic: Five Hermeneutical Studies (archive.org)",
    "u": "https://archive.org/details/hegelsdialecticf0000gada"
   }
  ]
 },
 "Бертран Рассел": {
  "n": "Бертран Рассел",
  "locus": "B. Russell, The Principles of Mathematics, Cambridge: CUP, 1903, Part V, ch. XLIII «The Philosophy of the Infinite», § 337, p. 355 (оценка диалога) и § 339, p. 357 (доказательство из «Парменида»)",
  "original": "Plato's Parmenides—which is perhaps the best collection of antinomies ever made—is scarcely relevant here, being concerned with difficulties more fundamental than any that have to do with infinity. […] A very simple proof is that suggested in the Parmenides, which is as follows. Let it be granted that there is a number 1. Then 1 is, or has Being, and therefore there is Being. But 1 and Being are two: hence there is a number 2; and so on.",
  "translation": "«Парменид» Платона — пожалуй, лучшее собрание антиномий, когда-либо составленное, — здесь едва ли уместен, поскольку занят трудностями более фундаментальными, чем любые из тех, что связаны с бесконечностью. […] Очень простое доказательство [существования бесконечных классов] — то, что подсказано в «Пармениде»; оно таково. Допустим, что есть число 1. Тогда 1 есть, то есть обладает бытием, а значит, есть бытие. Но 1 и бытие суть два: следовательно, есть число 2; и так далее.",
  "translator": "перевод составителя",
  "lang": "en",
  "confidence": "high",
  "verified": "https://people.umass.edu/klement/pom/pom-portrait.pdf",
  "note": "Уточнение к карточке узла: фраза о «лучшем собрании антиномий» стоит в § 337 (историческая ретроспекция), а не в § 338; платоновское доказательство бесконечности — в § 339 (по 142b–144a). Пагинация первого издания (355, 357) совпадает со 2-м изд. 1937 г. и воспроизведена в электронном издании К. Клемента с маргинальной нумерацией.",
  "extra_sources": [
   {
    "t": "The Principles of Mathematics, электронное издание K. Klement (UMass), PDF с пагинацией 1903 г.",
    "u": "https://people.umass.edu/klement/pom/"
   },
   {
    "t": "SEP: Bertrand Russell",
    "u": "https://plato.stanford.edu/entries/russell/"
   }
  ]
 },
 "«Книга о причинах» (Liber de causis)": {
  "n": "«Книга о причинах» (Liber de causis)",
  "locus": "Liber de causis, prop. 6 (ed. Pattin) = prop. 5 (Bardenhewer); у Фомы Аквинского In Librum de causis, lectio 6",
  "original": "Causa prima superior est omni narratione. Et non deficiunt linguae a narratione eius nisi propter narrationem esse ipsius, quoniam ipsa est supra omnem causam et non narratur nisi per causas secundas, quae illuminantur a lumine causae primae.",
  "translation": "Первая причина выше всякого повествования. И языки бессильны рассказать о ней лишь оттого, что [бессильны рассказать] о её бытии, ибо она — над всякой причиной, и о ней говорят только через вторые причины, освещённые светом Первой причины.",
  "translator": "пер. составителя карты (Т. Атнашев / Claude)",
  "lang": "la",
  "confidence": "high",
  "verified": "https://www.corpusthomisticum.org/cdc01.html",
  "note": "Латинская версия арабской переработки Прокла, Elem. theol. 123 (об апофатике первой ипостаси = 1-я гипотеза «Парменида»). Первая половина фразы сверена по Corpus Thomisticum; продолжение — по изданию Pattin (1966).",
  "extra_sources": [
   {
    "t": "Aquinas, Super Librum de causis (Corpus Thomisticum)",
    "u": "https://www.corpusthomisticum.org/cdc01.html"
   },
   {
    "t": "Liber de causis, англ. пер. (archive.org)",
    "u": "https://archive.org/details/the-book-of-causes-liber-de-causis"
   }
  ]
 },
 "Авиценна (Ибн Сина)": {
  "n": "Авиценна (Ибн Сина)",
  "locus": "Ибн Сина, аш-Шифа', Илахиййат VIII.4 (Cairo ed. 1960, p. 344); лат. Liber de philosophia prima VIII.4 (ed. Van Riet)",
  "original": "فالأول لا ماهية له، وذوات الماهيات يفيض عليها الوجود منه، فهو مجرد الوجود بشرط سلب العدم وسائر الأوصاف عنه.",
  "translation": "Итак, у Первого нет чтойности; на обладающих же чтойностями бытие изливается от него. Он — чистое бытие при условии отрицания у него небытия и всех прочих определений.",
  "translator": "пер. составителя карты (Т. Атнашев / Claude)",
  "lang": "ar",
  "confidence": "medium",
  "verified": "",
  "note": "Лат. версия: «Primus igitur non habet quidditatem, sed super habentia quidditates fluit esse ab eo». Точная пунктуация/огласовка по каирскому изданию не сверена онлайн. Необходимо-сущее без чтойности — авиценновский аналог «единого, которому не принадлежит бытие» (Parm. 141e), пришедший через Плотина-Прокла, а не через диалог.",
  "extra_sources": [
   {
    "t": "Avicenna, The Metaphysics of The Healing, tr. M. Marmura (BYU 2005)",
    "u": "https://archive.org/details/avicenna-the-metaphysics-of-the-healing"
   },
   {
    "t": "SEP: Ibn Sina's Metaphysics",
    "u": "https://plato.stanford.edu/entries/ibn-sina-metaphysics/"
   }
  ]
 },
 "Ибн Гвироль (Авицеброн)": {
  "n": "Ибн Гвироль (Авицеброн)",
  "locus": "Avicebron, Fons vitae I.5 и V.24 (ed. C. Baeumker, BGPhM I/2–4, Münster 1892–95)",
  "original": "",
  "translation": "Парафраз: о Первой сущности (essentia prima) нельзя знать «что она есть» (quid est), а лишь «что она есть» (quia est) — через её действия; она есть единство, из которого всякое иное единство лишь дробится и умножается по мере удаления от источника.",
  "translator": "парафраз составителя карты",
  "lang": "la",
  "confidence": "low",
  "verified": "",
  "note": "Дословный латинский текст по Baeumker не воспроизводится по памяти; ключевые термины — essentia prima, unitas, scire quia est / non quid est. Гвироль — единственный представитель линии, у которого «единое» напрямую стоит над всеобщей материей и формой (тема Parm. 137c–142a через Плотина).",
  "extra_sources": [
   {
    "t": "Fons vitae, ed. Baeumker (archive.org)",
    "u": "https://archive.org/details/avencebrolisibng00ibngoog"
   },
   {
    "t": "SEP: Solomon Ibn Gabirol",
    "u": "https://plato.stanford.edu/entries/ibn-gabirol/"
   }
  ]
 },
 "Ибн Араби и вахдат аль-вуджуд": {
  "n": "Ибн Араби и вахдат аль-вуджуд",
  "locus": "Ибн Араби, Фусус аль-хикам, фасс Идрис (гл. 4), ed. Abu l-'Ala 'Afifi, Cairo 1946, p. 79",
  "original": "فسبحان من أظهر الأشياء وهو عينها.",
  "translation": "Хвала Тому, кто явил вещи и Сам есть их самость.",
  "translator": "пер. составителя карты (Т. Атнашев / Claude)",
  "lang": "ar",
  "confidence": "high",
  "verified": "https://www.hindawi.org/books/86253537/20/",
  "note": "Формула «Он и не Он» (هو لا هو) того же фасса — ближайший исламский аналог парменидовского «единое есть и не есть» (2-я/3-я гипотезы), но пришедший не от Платона, а из суфийской экзегезы и «Теологии Аристотеля».",
  "extra_sources": [
   {
    "t": "Фусус аль-хикам, араб. текст (archive.org)",
    "u": "https://archive.org/details/FususAlHikam"
   },
   {
    "t": "W. Chittick, The Sufi Path of Knowledge (SUNY 1989)",
    "u": "https://archive.org/details/sufipathofknowle0000chit"
   }
  ]
 },
 "Эйн-Соф в каббале": {
  "n": "Эйн-Соф в каббале",
  "locus": "Азриэль из Жероны, «Ша'ар ха-шоэль» (Перуш эсер сфирот), нач.; ср. Шолем, Origins of the Kabbalah, p. 423–444",
  "original": "",
  "translation": "Парафраз: Эйн-Соф есть «совершенство без изъяна»; в нём совпадают «йеш» (сущее) и «айин» (ничто), так что о нём нельзя сказать ни что он есть, ни что его нет; всякое имя и всякий атрибут принадлежат уже сфирот.",
  "translator": "парафраз составителя карты",
  "lang": "he",
  "confidence": "low",
  "verified": "",
  "note": "Еврейский текст Азриэля не воспроизводится дословно по памяти; Шолем прямо связывает «совпадение йеш и айин» у Азриэля с неоплатонической апофатикой (Прокл через Liber de causis/Ибн Гвироля). В самом Зогаре Эйн-Соф встречается редко (ср. Zohar III 225a, Ra'aya Meheimna).",
  "extra_sources": [
   {
    "t": "G. Scholem, Origins of the Kabbalah (archive.org)",
    "u": "https://archive.org/details/originsofkabbala0000scho"
   },
   {
    "t": "Encyclopaedia Judaica: Azriel of Gerona",
    "u": "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/azriel-gerona"
   }
  ]
 },
 "Марсилио Фичино": {
  "n": "Марсилио Фичино",
  "locus": "Ficino, Argumentum in Parmenidem (Opera, Basel 1576, p. 1136) и In Parmenidem, cap. 49 (ed. M. Vanhaelen, I Tatti 2012, vol. 2)",
  "original": "",
  "translation": "Парафраз: Платон в «Пармениде» «обнимает всё божественное» — это не логическая игра, а сама теология: Парменид рассуждает «не только логически, но и теологически», и Дионисий Ареопагит, всегда ставящий единое выше сущего, следует именно ему. Оттуда же (cap. 49) знаменитый выпад: «о если бы этот удивительный юноша (mirandus hic iuvenis) внимательнее рассмотрел платоновские рассуждения, прежде чем столь уверенно выступать против Платона…»",
  "translator": "парафраз составителя карты",
  "lang": "la",
  "confidence": "low",
  "verified": "",
  "note": "Латинский текст Argumentum и cap. 49 дословно не воспроизводится по памяти; см. критическое издание Vanhaelen и Allen, «The Second Ficino–Pico Controversy». Именно у Фичино «Парменид» впервые на Западе читается как прокловская теология целиком.",
  "extra_sources": [
   {
    "t": "M. Allen, The Second Ficino-Pico Controversy: Parmenidean Poetry, Eristic, and the One",
    "u": "https://www.taylorfrancis.com/chapters/mono/10.4324/9781003556787-10/second-ficino-pico-controversy-parmenidean-poetry-eristic-one-michael-allen"
   },
   {
    "t": "Ficino, Opera omnia 1576 (archive.org)",
    "u": "https://archive.org/details/bub_gb_KzDkgZvqiSMC"
   }
  ]
 },
 "Пико делла Мирандола": {
  "n": "Пико делла Мирандола",
  "locus": "Pico della Mirandola, De ente et uno (1491), cap. 2–5; ed. E. Garin, De hominis dignitate… Firenze 1942, pp. 386–441",
  "original": "",
  "translation": "Парафраз: единое и сущее равнообъёмны и обратимы (aequalia et convertibilia) — ни единое не шире сущего, ни сущее единого (cap. 2–4); «Парменид» же вовсе не догматический трактат, а диалектическое упражнение, из которого нельзя выводить учение о едином выше сущего (cap. 2). Бог — выше сущего лишь как выше тварного «ens participatum», но Он есть само бытие (ipsum esse) и само единое одновременно (cap. 4–5).",
  "translator": "парафраз составителя карты",
  "lang": "la",
  "confidence": "low",
  "verified": "",
  "note": "Дословный латинский текст по Garin не воспроизводится по памяти. Пико пишет против Фичино и в защиту согласия Платона с Аристотелем (concordia); Фичино отвечает в In Parmenidem cap. 49.",
  "extra_sources": [
   {
    "t": "Pico, De ente et uno, лат.-англ. (Being and Unity, tr. V. Hamm, Marquette 1943)",
    "u": "https://archive.org/details/ofbeingunitydeen0000pico"
   },
   {
    "t": "SEP: Giovanni Pico della Mirandola",
    "u": "https://plato.stanford.edu/entries/pico-della-mirandola/"
   }
  ]
 },
 "Джордано Бруно": {
  "n": "Джордано Бруно",
  "locus": "Bruno, De la causa, principio et uno (1584), dialogo V (ed. G. Aquilecchia, Opere italiane I, pp. 733–734)",
  "original": "Qua l'altezza è profondità, l'abisso è luce inaccessa, la tenebra è chiarezza, il magno è parvo, il confuso è distinto, la lite è amicizia, il dividuo è individuo, l'atomo è immenso.",
  "translation": "Здесь высота есть глубина, бездна — неприступный свет, тьма — ясность, великое — малое, смешанное — раздельное, распря — дружба, делимое — неделимое, атом — безмерность.",
  "translator": "пер. составителя карты (ср. рус. пер. М. А. Дынника, Бруно, Диалоги, М. 1949)",
  "lang": "it",
  "confidence": "high",
  "verified": "https://it.wikiquote.org/wiki/Giordano_Bruno",
  "note": "Первое слово в разных изданиях: «Qua» / «Quivi» / «Ivi». Бруно прямо переносит кузанскую coincidentia oppositorum (De docta ign. I.4) на единую бесконечную субстанцию: единое уже не выше бытия, а есть само бытие — шаг к Спинозе.",
  "extra_sources": [
   {
    "t": "De la causa, principio et uno, ит. текст (LiberLiber)",
    "u": "https://www.liberliber.it/online/autori/autori-b/giordano-bruno/de-la-causa-principio-et-uno/"
   },
   {
    "t": "Bruno, Cause, Principle and Unity, tr. R. de Lucca (CUP 1998)",
    "u": "https://archive.org/details/causeprincipleun0000brun"
   }
  ]
 },
 "Спиноза": {
  "n": "Спиноза",
  "locus": "Spinoza, Ethica I, prop. 14–15 (Opera, ed. Gebhardt II, 56)",
  "original": "Praeter Deum nulla dari neque concipi potest substantia. [...] Quicquid est, in Deo est, et nihil sine Deo esse neque concipi potest.",
  "translation": "Кроме Бога никакая субстанция не может ни существовать, ни быть представляема. [...] Всё, что существует, существует в Боге, и ничто без Бога не может ни существовать, ни быть представляемо.",
  "translator": "пер. Н. А. Иванцова (1892), с уточнениями",
  "lang": "la",
  "confidence": "high",
  "verified": "https://www.thelatinlibrary.com/spinoza.ethica1.html",
  "note": "Единое здесь тождественно бытию (Deus sive Natura), а не выше его. Формула «determinatio negatio est» — не из «Этики», а из Ep. 50 (к Яриху Йеллесу, 1674); её парменидовский резонанс (всякая определённость есть «не-единое») поднят Гегелем.",
  "extra_sources": [
   {
    "t": "Spinoza, Ethica (Latin Library)",
    "u": "https://www.thelatinlibrary.com/spinoza.ethica1.html"
   },
   {
    "t": "Спиноза, Этика, пер. Иванцова (archive.org)",
    "u": "https://archive.org/details/spinoza_etika_1892"
   }
  ]
 },
 "Спевсипп": {
  "n": "Спевсипп",
  "locus": "Прокл, In Parmenidem VII (латинский перевод Вильгельма из Мёрбеке), ed. Klibansky–Labowsky (1953), p. 38.32–40.5 = Спевсипп fr. 48 Tarán (ср. Iambl. De communi mathematica scientia 4, p. 15.5–17 Festa)",
  "original": "unum enim melius ente putantes et a quo le ens, et ab ea que secundum principium habitudine ipsum liberaverunt",
  "translation": "Ибо, полагая единое лучшим, чем сущее, и тем, от чего происходит сущее, они освободили его и от того отношения, которое присуще началу.",
  "translator": "перевод мой",
  "lang": "la",
  "confidence": "medium",
  "verified": "",
  "note": "Единственное прямое свидетельство о том, что уже в Древней Академии единое ставилось «выше сущего» (unum melius ente) — то есть первая гипотеза «Парменида» (141e: единое никак не есть) читалась метафизически, а не как логическое упражнение; параллель у Ямвлиха DCMS 4: τὸ ἕν «даже не сущее» (οὐδὲ ὄν).",
  "extra_sources": [
   {
    "t": "R. Klibansky, C. Labowsky (eds.), Parmenides usque ad finem primae hypothesis nec non Procli Commentarium in Parmenidem, pars ultima adhuc inedita, Plato Latinus III, London 1953",
    "u": "https://warburg.sas.ac.uk/publications/plato-latinus"
   },
   {
    "t": "L. Tarán, Speusippus of Athens, Brill 1981 (fr. 48 с комментарием)",
    "u": "https://brill.com/display/title/2547"
   }
  ]
 },
 "Аристотель": {
  "n": "Аристотель",
  "locus": "Аристотель, Metaphysica Γ 2, 1003b22–25 (Bekker)",
  "original": "εἰ δὴ τὸ ὂν καὶ τὸ ἓν ταὐτὸν καὶ μία φύσις τῷ ἀκολουθεῖν ἀλλήλοις ὥσπερ ἀρχὴ καὶ αἴτιον, ἀλλ' οὐχ ὡς ἑνὶ λόγῳ δηλούμενα (διαφέρει δὲ οὐθὲν οὐδ' ἂν ὁμοίως ὑπολάβωμεν, ἀλλὰ καὶ πρὸ ἔργου μᾶλλον)",
  "translation": "Итак, если сущее и единое суть одно и то же и одна природа — в том смысле, что они следуют друг за другом, как начало и причина, а не в том, что обозначаются одним определением (впрочем, нет разницы, даже если мы поймём их и так, — это было бы даже удобнее для дела).",
  "translator": "перевод мой (ср. рус. пер. А. В. Кубицкого)",
  "lang": "grc",
  "confidence": "high",
  "verified": "",
  "note": "Прямой ответ на вопрос второй части «Парменида» о ἓν καὶ ὄν: Аристотель отказывает единому в трансцендентности, отождествляя его с сущим по природе и различая лишь по понятию, — так рождается линия «ens et unum convertuntur», доходящая до Фомы.",
  "extra_sources": [
   {
    "t": "Aristotle, Metaphysics, ed. W. D. Ross, Perseus Digital Library (греч. текст)",
    "u": "http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0051"
   },
   {
    "t": "Аристотель, Метафизика, пер. А. В. Кубицкого (Сочинения, т. 1, М., 1976)",
    "u": "https://platona.net/load/knigi_po_filosofii/istorija_antichnaja/aristotel_sochinenija_v_4_tomakh_tom_1/7-1-0-1305"
   }
  ]
 },
 "Бертольд Моосбургский": {
  "n": "Бертольд Моосбургский",
  "locus": "Berthold von Moosburg, Expositio super Elementationem theologicam Procli, Praeambulum C и Expositio tituli (CPTMA VI/1, ed. M. R. Pagnoni-Sturlese, L. Sturlese, Hamburg 1984)",
  "original": "",
  "translation": "Парафраз: предмет платоновской «сверхмудрости» (supersapientia) — не сущее как сущее (предмет аристотелевской метафизики), а единое и благо, которые «выше сущего» (super ens); поэтому первое начало, единое-благо, познаётся не разумом, а «единым души» (unum animae).",
  "translator": "парафраз составителя карты",
  "lang": "la",
  "confidence": "low",
  "verified": "",
  "note": "Дословный текст преамбулы по CPTMA не воспроизводится по памяти. Бертольд — единственный латинский автор XIV в., открыто ставящий прокловскую хенологию (т.е. 1-ю гипотезу «Парменида») выше аристотелевской онтологии; ср. E. King, Supersapientia (Brill 2021).",
  "extra_sources": [
   {
    "t": "E. King, Supersapientia: Berthold of Moosburg and the Divine Science of the Platonists (Brill 2021, OA)",
    "u": "https://brill.com/display/title/59539"
   },
   {
    "t": "D. Calma, E. King (eds.), The Renewal of Medieval Metaphysics (Brill 2021, OA)",
    "u": "https://brill.com/display/title/59540"
   }
  ]
 },
 "Мейстер Экхарт": {
  "n": "Мейстер Экхарт",
  "locus": "Eckhart, Expositio s. Evangelii sec. Iohannem n. 207 (LW III, 175); ср. Expositio libri Sapientiae n. 147–148 (LW II, 485–486): unum = negatio negationis",
  "original": "Negatio autem negationis medulla, puritas et geminatio est affirmati esse.",
  "translation": "Отрицание же отрицания есть сердцевина, чистота и удвоение утверждаемого бытия.",
  "translator": "пер. составителя карты (Т. Атнашев / Claude)",
  "lang": "la",
  "confidence": "high",
  "verified": "https://franorourke.ie/wp-content/uploads/2020/10/Triplex-Via-of-Naming-God-2.pdf",
  "note": "В In Sap. n. 148 та же мысль применена к «единому»: unum есть negatio negationis, «сердцевина и вершина чистейшего утверждения». Нем. параллель — Pr. 52 («Beati pauperes spiritu»): «ich bitte got, daz er mich ledic mache gotes» — различение Gott/Gottheit. Экхарт читал Прокла через Liber de causis и Мёрбеке, не через «Парменид».",
  "extra_sources": [
   {
    "t": "Meister Eckhart, Die lateinischen Werke (Kohlhammer), обзор",
    "u": "https://www.meister-eckhart-gesellschaft.de/"
   },
   {
    "t": "SEP: Meister Eckhart",
    "u": "https://plato.stanford.edu/entries/meister-eckhart/"
   }
  ]
 },
 "Николай Кузанский": {
  "n": "Николай Кузанский",
  "locus": "Nicolaus Cusanus, De docta ignorantia I.4 (n. 11) и I.5 (n. 13), ed. Hoffmann–Klibansky 1932",
  "original": "Maximum itaque absolutum unum est, quod est omnia; in quo omnia, quia maximum. Et quoniam nihil sibi opponitur, secum simul coincidit minimum. [...] Est igitur unitas absoluta, cui nihil opponitur, ipsa absoluta maximitas, quae est Deus benedictus.",
  "translation": "Итак, абсолютный максимум есть единое, которое есть всё; в нём всё, поскольку он максимум. И поскольку ничто ему не противостоит, с ним вместе совпадает и минимум. [...] Следовательно, абсолютное единство, которому ничто не противостоит, есть сама абсолютная максимальность, то есть благословенный Бог.",
  "translator": "пер. составителя карты (ср. В. В. Бибихин, Кузанский, Соч. т. 1, М. 1979)",
  "lang": "la",
  "confidence": "high",
  "verified": "https://la.wikisource.org/wiki/De_docta_ignorantia/1",
  "note": "Coincidentia oppositorum как ответ на апории «Парменида»; прямое обсуждение гипотез — в De li non aliud 19–22 (с упоминанием Прокла-комментатора) и De principio (1459) на Parm. 137c.",
  "extra_sources": [
   {
    "t": "Cusanus-Portal (Trier), критич. текст с переводами",
    "u": "https://urts99.uni-trier.de/cusanus/"
   },
   {
    "t": "J. Hopkins, англ. пер. De docta ignorantia (PDF)",
    "u": "https://jasper-hopkins.info/DI-I-12-2000.pdf"
   }
  ]
 },
 "Псевдо-Дионисий Ареопагит": {
  "n": "Псевдо-Дионисий Ареопагит",
  "locus": "De mystica theologia V (PG 3, 1048A–B; ed. Ritter, PTS 36, p. 149–150)",
  "original": "…οὔτε ἓν οὔτε ἑνότης, οὔτε θεότης ἢ ἀγαθότης· οὐδὲ πνεῦμά ἐστιν, ὡς ἡμᾶς εἰδέναι, οὔτε υἱότης οὔτε πατρότης … ὑπὲρ πᾶσαν θέσιν ἐστὶν ἡ παντελὴς καὶ ἑνιαία τῶν πάντων αἰτία καὶ ὑπὲρ πᾶσαν ἀφαίρεσιν ἡ ὑπεροχὴ τοῦ πάντων ἁπλῶς ἀπολελυμένου καὶ ἐπέκεινα τῶν ὅλων.",
  "translation": "…ни единое, ни единство, ни божественность или благость; и не дух она, как нам его знать, ни сыновство, ни отцовство… Выше всякого утверждения — всесовершенная и единая Причина всего, и выше всякого отрицания — превосходство Того, кто просто отрешён от всего и запределен целому.",
  "translator": "перевод мой (ср. пер. Г. М. Прохорова)",
  "lang": "grc",
  "confidence": "high",
  "verified": "https://maksimologija.org/st-dionysius-mystikis-theologias/",
  "note": "Финал лестницы отрицаний повторяет исход первой гипотезы (Parm. 141e–142a: единое «никак не есть», ни имя, ни слово, ни знание не относятся к нему) в редакции Прокла (In Parm. VII; Theol. Plat. II 10–12), включая отрицание самого «единого».",
  "extra_sources": [
   {
    "t": "Дионисий Ареопагит, Περὶ μυστικῆς θεολογίας (греч. текст)",
    "u": "https://maksimologija.org/st-dionysius-mystikis-theologias/"
   }
  ]
 },
 "Максим Исповедник": {
  "n": "Максим Исповедник",
  "locus": "Ambigua ad Iohannem, Amb. 7, 20 (PG 91, 1081B–C; ed. Constas, DOML 28, vol. 1, p. 106)",
  "original": "",
  "translation": "Единый Логос есть многие логосы, и многие — единый: по благому, творящему и содержащему всё исхождению Единого в сущие — многие; по возводящему и промыслительному возвращению многих к Единому — единый.",
  "translator": "перевод мой (парафраз; ср. пер. А. М. Шуфрина в: Максим Исповедник, Полемика с оригенизмом и моноэнергизмом, 2007)",
  "lang": "grc",
  "confidence": "low",
  "verified": "",
  "note": "Формула «единый Логос — многие логосы, многие — единый» есть христологическая переработка отношения одного и многого второй гипотезы (Parm. 142d–144e), где переход совершается не эманацией, а волей Творца; греческий текст не воспроизведён дословно, дан пересказ.",
  "extra_sources": [
   {
    "t": "Максим Исповедник, Ambigua ad Iohannem (греч., PG 91), khazarzar / PG Migne",
    "u": "http://khazarzar.skeptik.net/pgm/PG_Migne/Maximus%20Confessor_PG%2090-91/"
   },
   {
    "t": "Maximus, Amb. 7, англ. пер. и обзор (Creation Theology Fellowship)",
    "u": "https://creationtheologyfellowship.org/2022/07/06/st-maximuss-metaphysics-of-creation-in-ambiguum-7/"
   }
  ]
 },
 "Иоанн Скот Эриугена": {
  "n": "Иоанн Скот Эриугена",
  "locus": "Periphyseon III 19 (PL 122, 680D–681A; ed. Jeauneau, CCCM 163, ll. 1912–1925)",
  "original": "Ineffabilem et incomprehensibilem divinae bonitatis inaccessibilemque claritatem omnibus intellectibus sive humanis sive angelicis incognitam — superessentialis est enim et supernaturalis — eo nomine significatam crediderim, quae, dum per se ipsam cogitatur, neque est, neque erat, neque erit; in nullo enim intelligitur existentium, quia superat omnia … Dum ergo incomprehensibilis intelligitur, per excellentiam nihilum non immerito vocitatur.",
  "translation": "Я полагаю, что этим именем [«ничто»] обозначается неизреченная, непостижимая и неприступная ясность божественной благости, неведомая никакому уму — ни человеческому, ни ангельскому, ибо она сверхсущностна и сверхприродна; мыслимая сама по себе, она ни есть, ни была, ни будет: она не постигается ни в чём из существующего, ибо превосходит всё. Итак, поскольку она мыслится как непостижимая, её не без основания называют «ничто» по превосходству.",
  "translator": "перевод мой",
  "lang": "la",
  "confidence": "high",
  "verified": "https://archive.org/download/johannisscotier00schlgoog/johannisscotier00schlgoog_djvu.txt",
  "note": "«Neque est, neque erat, neque erit» — латинская буква Parm. 141e («единое не было, не будет и не есть»), а nihilum per excellentiam — имя Единого первой гипотезы, пришедшее через Дионисия и Максима без ссылки на диалог.",
  "extra_sources": [
   {
    "t": "Johannes Scotus Erigena, De divisione naturae, ed. Schlüter 1838 (OCR, archive.org)",
    "u": "https://archive.org/details/johannisscotier00schlgoog"
   },
   {
    "t": "Periphyseon III (PL 122), documentacatholicaomnia",
    "u": "https://www.documentacatholicaomnia.eu/30_10_0810-0877-_Iohannes_Scotus_Erigena.html"
   }
  ]
 },
 "Григорий Палама и исихазм": {
  "n": "Григорий Палама и исихазм",
  "locus": "Capita CL physica, theologica, moralia et practica, cap. 75 (PG 150, 1173B; ed. Sinkewicz, Toronto 1988, p. 170)",
  "original": "Τριῶν ὄντων τοῦ Θεοῦ, οὐσίας, ἐνεργείας, Τριάδος ὑποστάσεων θείων…",
  "translation": "Поскольку у Бога три [начала] — сущность, энергия, Троица божественных ипостасей… [далее: сущность непричастна, ипостаси несообщимы, причастны же лишь энергии].",
  "translator": "перевод мой (ср. пер. А. И. Сидорова, Богословские труды 38, 2003)",
  "lang": "grc",
  "confidence": "medium",
  "verified": "https://amethystosbooks.blogspot.com/2025/03/2_24.html",
  "note": "Тройное различение сущность / энергия / ипостаси удерживает обе гипотезы «Парменида» разом: непричастная οὐσία — единое первой гипотезы (ἀμέθεκτον Прокла), причастные ἐνέργειαι — исхождения второй; воспроизведён лишь зачин главы, продолжение дано пересказом.",
  "extra_sources": [
   {
    "t": "Григорий Палама, Сто пятьдесят глав (рус., пер. А. И. Сидорова)",
    "u": "https://azbyka.ru/otechnik/Grigorij_Palama/sto_pyatdesyat_glav/"
   },
   {
    "t": "Γρηγόριος Παλαμᾶς, Κεφάλαια ἑκατὸν πεντήκοντα (греч., главы 1–35)",
    "u": "https://maksimologija.org/st-gregory-palamas-kefalaia/"
   }
  ]
 },
 "Модерат из Гадеса и Нумений": {
  "n": "Модерат из Гадеса и Нумений",
  "locus": "Симпликий, In Aristotelis Physica, p. 230.36–231.2 Diels (CAG IX), из Порфирия «О материи» — свидетельство о Модерате",
  "original": "οὗτος γὰρ κατὰ τοὺς Πυθαγορείους τὸ μὲν πρῶτον ἓν ὑπὲρ τὸ εἶναι καὶ πᾶσαν οὐσίαν ἀποφαίνεται, τὸ δὲ δεύτερον ἕν, ὅπερ ἐστὶ τὸ ὄντως ὂν καὶ νοητόν, τὰ εἴδη φησὶν εἶναι, τὸ δὲ τρίτον, ὅπερ ἐστὶ τὸ ψυχικόν, μετέχειν τοῦ ἑνὸς καὶ τῶν εἰδῶν",
  "translation": "Ибо он [Модерат], следуя пифагорейцам, объявляет первое Единое сверх бытия и всякой сущности; второе Единое, которое есть истинно сущее и умопостигаемое, — это, говорит он, идеи; третье же, душевное, причастно Единому и идеям.",
  "translator": "перевод мой",
  "lang": "grc",
  "confidence": "medium",
  "verified": "",
  "note": "Первое дошедшее до нас чтение трёх гипотез «Парменида» как трёх уровней Единого (сверхсущее — сущее-идеи — душа), которое Доддс (1928) объявил истоком неоплатонического Единого.",
  "extra_sources": [
   {
    "t": "Simplicii in Aristotelis Physicorum libros quattuor priores commentaria, ed. H. Diels, CAG IX, Berlin 1882 (archive.org)",
    "u": "https://archive.org/details/simpliciiinarist09simp"
   },
   {
    "t": "E. R. Dodds, «The Parmenides of Plato and the Origin of the Neoplatonic One», CQ 22 (1928)",
    "u": "https://doi.org/10.1017/S0009838800029591"
   }
  ]
 },
 "Плотин": {
  "n": "Плотин",
  "locus": "Плотин, Enneades V 1 [10], 8.23–27 (Henry–Schwyzer)",
  "original": "ὁ δὲ παρὰ Πλάτωνι Παρμενίδης ἀκριβέστερον λέγων διαιρεῖ ἀπ' ἀλλήλων τὸ πρῶτον ἕν, ὃ κυριώτερον ἕν, καὶ δεύτερον ἓν πολλὰ λέγων, καὶ τρίτον ἓν καὶ πολλά. καὶ σύμφωνος οὕτως καὶ αὐτὸς ταῖς φύσεσι ταῖς τρισίν.",
  "translation": "А Парменид у Платона, говоря точнее, различает друг от друга первое единое — единое в собственном смысле, — и второе, называя его «единое-многое», и третье — «единое и многое». И так он тоже оказывается в согласии с тремя природами.",
  "translator": "перевод мой (ср. рус. пер. Г. В. Малеванского и А. Ф. Лосева)",
  "lang": "grc",
  "confidence": "high",
  "verified": "",
  "note": "Единственная у Плотина прямая ссылка на «Парменид», где первые три гипотезы отождествляются с тремя ипостасями — Единым, Умом и Душой; отсюда весь неоплатонический канон чтения диалога.",
  "extra_sources": [
   {
    "t": "Plotinus, Ennead V.1, греч. текст (Bibliotheca Augustana / TLG-free)",
    "u": "https://www.hs-augsburg.de/~harsch/graeca/Chronologia/S_post03/Plotinos/plo_intr.html"
   },
   {
    "t": "Плотин, Эннеады V.1, рус. пер. Г. В. Малеванского (psylib)",
    "u": "https://psylib.org.ua/books/ploti01/txt31.htm"
   }
  ]
 },
 "Порфирий и анонимный комментарий": {
  "n": "Порфирий и анонимный комментарий",
  "locus": "Anonymi in Platonis Parmenidem commentarium, fr. XII, 22–29 (ed. P. Hadot, Porphyre et Victorinus, t. II, Paris 1968, p. 104; = Kroll 1892)",
  "original": "ὅρα δὲ μὴ καὶ αἰνισσομένῳ ἔοικεν ὁ Πλάτων, ὅτι τὸ ἓν τὸ ἐπέκεινα οὐσίας καὶ ὄντος ὂν μὲν οὐκ ἔστιν οὐδὲ οὐσία οὐδὲ ἐνέργεια, ἐνεργεῖ δὲ μᾶλλον καὶ αὐτὸ τὸ ἐνεργεῖν καθαρόν, ὥστε καὶ αὐτὸ τὸ εἶναι τὸ πρὸ τοῦ ὄντος",
  "translation": "Смотри же, не намекает ли Платон на то, что Единое, которое по ту сторону сущности и сущего, не есть ни сущее, ни сущность, ни энергия, но, скорее, действует и само есть чистое действование, — так что оно есть само «быть», предшествующее сущему.",
  "translator": "перевод мой",
  "lang": "grc",
  "confidence": "medium",
  "verified": "",
  "note": "Ключевой пассаж, на котором держится тезис Адо: Первое из первой гипотезы — чистое τὸ εἶναι (инфинитив), а не τὸ ὄν (причастие); это различение через Викторина уйдёт в латинскую теологию бытия.",
  "extra_sources": [
   {
    "t": "G. Bechtle, The Anonymous Commentary on Plato's Parmenides, Bern 1999 (текст, перевод, комментарий)",
    "u": "https://bmcr.brynmawr.edu/2001/2001.02.28/"
   },
   {
    "t": "W. Kroll, «Ein neuplatonischer Parmenidescommentar in einem Turiner Palimpsest», Rheinisches Museum 47 (1892), 599–627",
    "u": "https://www.rhm.uni-koeln.de/047/Kroll.pdf"
   }
  ]
 },
 "Ямвлих и Сириан": {
  "n": "Ямвлих и Сириан",
  "locus": "Прокл, In Parmenidem I, col. 641.1–10 Cousin (= Ямвлих, In Parm. fr. 2 Dillon); ср. Anon. Prolegomena in Platonis philosophiam 26",
  "original": "",
  "translation": "Ямвлих (по Проклу) утверждал, что предмет (σκοπός) диалога — все сущие в целом, поскольку все они происходят от Единого: как в «Тимее» через один предмет содержится вся физиология, так в «Пармениде» — вся теология; и всё, что в гипотезах говорится о единстве и множестве, надо относить к богам и к зависящим от них сущим.",
  "translator": "перевод мой (парафраз)",
  "lang": "grc",
  "confidence": "low",
  "verified": "",
  "note": "Здесь фиксируется решающий поворот: «Парменид» получает единый теологический σκοπός, а гипотезы становятся реальными ступенями божественного, — схему, которую Сириан затем систематизирует в девять гипотез, а Прокл принимает целиком.",
  "extra_sources": [
   {
    "t": "Procli in Platonis Parmenidem commentaria, ed. C. Steel, OCT, vol. I (2007) — книга I",
    "u": "https://global.oup.com/academic/product/procli-in-platonis-parmenidem-commentaria-9780199217847"
   },
   {
    "t": "Proclus' Commentary on Plato's Parmenides, tr. G. R. Morrow, J. M. Dillon, Princeton 1987 (введение о Ямвлихе и Сириане)",
    "u": "https://press.princeton.edu/books/paperback/9780691020891/proclus-commentary-on-platos-parmenides"
   }
  ]
 },
 "Прокл": {
  "n": "Прокл",
  "locus": "Прокл, In Parmenidem VII (латинский перевод Мёрбеке, конец комментария к первой гипотезе), ed. Klibansky–Labowsky (1953), p. 76.1–7; ср. In Parm. VI, col. 1072.19–1074.21 Cousin об отрицаниях как превосхождениях",
  "original": "et per silentium conclusit eam que de ipso theoriam",
  "translation": "И молчанием он [Платон] завершил созерцание, относящееся к Нему [Единому].",
  "translator": "перевод мой",
  "lang": "la",
  "confidence": "medium",
  "verified": "",
  "note": "Кульминация прокловского чтения первой гипотезы: отрицания — не лишения, а превосхождения, и лестница отрицаний завершается снятием самого отрицания и молчанием; именно эта сохранённая только по-латыни концовка стала на Западе каноном апофатики.",
  "extra_sources": [
   {
    "t": "R. Klibansky, C. Labowsky (eds.), Procli Commentarium in Parmenidem, pars ultima adhuc inedita, Plato Latinus III, London 1953",
    "u": "https://warburg.sas.ac.uk/publications/plato-latinus"
   },
   {
    "t": "Procli Commentarium in Platonis Parmenidem, ed. V. Cousin, Paris 1864 (archive.org)",
    "u": "https://archive.org/details/procliphilosophi00procuoft"
   }
  ]
 },
 "Дамаский": {
  "n": "Дамаский",
  "locus": "Дамаский, De principiis (Ἀπορίαι καὶ λύσεις περὶ τῶν πρώτων ἀρχῶν) I, p. 4.1–5.20 Westerink–Combès = I, p. 2–3 Ruelle (об ἄρρητον); ср. I, p. 21.19–22.1 W–C о περιτροπή",
  "original": "",
  "translation": "Дамаский: если первое начало совершенно неизреченно, то нельзя утверждать даже того, что оно неизреченно, ибо и это было бы речью о нём; наши слова о нём «опрокидываются сами на себя» (περιτροπή), а само оно остаётся по ту сторону и Единого, и отрицания.",
  "translator": "перевод мой (парафраз)",
  "lang": "grc",
  "confidence": "low",
  "verified": "",
  "note": "Предел античной апофатики: Дамаский доводит первую гипотезу дальше Прокла — над Единым ставится ἄρρητον, и сама речь об отрицании признаётся самоопровергающейся.",
  "extra_sources": [
   {
    "t": "Damascius, Traité des premiers principes, ed. L. G. Westerink, tr. J. Combès, t. I, Les Belles Lettres 1986",
    "u": "https://www.lesbelleslettres.com/livre/9782251003788/traite-des-premiers-principes-tome-i-de-l-ineffable-et-de-l-un"
   },
   {
    "t": "Damascii successoris Dubitationes et solutiones de primis principiis, ed. C. É. Ruelle, Paris 1889 (archive.org)",
    "u": "https://archive.org/details/damasciisuccesso01dama"
   }
  ]
 },
 "Мартин Хайдеггер": {
  "n": "Мартин Хайдеггер",
  "locus": "M. Heidegger, Der Anfang der abendländischen Philosophie. Auslegung des Anaximander und Parmenides (SS 1932), Gesamtausgabe Bd. 35, Frankfurt a. M.: Klostermann, 2012, S. 148; ср. Seminare: Platon — Aristoteles — Augustinus, GA 83 (2012), «Platons Parmenides» (WS 1930/31), S. 28, 33",
  "original": "…die Seinsfrage am radikalsten und weitesten entfaltet…",
  "translation": "…[диалог, в котором Платон] всего радикальнее и всего шире развернул вопрос о бытии…",
  "translator": "перевод составителя",
  "lang": "de",
  "confidence": "medium",
  "verified": "",
  "note": "Немецкий фрагмент GA 35, S. 148 (о «Пармениде» как диалоге, где Платон «die Seinsfrage am radikalsten und weitesten entfaltet») и тезисы семинара 1930/31 приведены по цитации у Ф. Гонсалеса; полные предложения по первоисточнику не воспроизведены. В GA 83 Хайдеггер называет вторую часть диалога «Erschütterung der Philosophie als solcher» (S. 28) и связывает ἐξαίφνης с подлинной ἕνωσις единого (S. 33): именно там вопрос об онтологическом различии ставится заново через μεταβολή — ἐξαίφνης. Курс «Platon: Sophistes» (GA 19, 1924/25) и «Identität und Differenz» (1957) к самому диалогу не обращаются.",
  "extra_sources": [
   {
    "t": "F. J. Gonzalez, «Shattering Presence: Being as Change, Time as the Sudden Instant in Heidegger's 1930–31 Seminar on Plato's Parmenides», JHP 57/2 (2019)",
    "u": "https://www.beyng.com/papers/GonzalezShattering.html"
   },
   {
    "t": "J. Backman, «All of a Sudden: Heidegger and Plato's Parmenides», Epoché 11/2 (2007)",
    "u": "https://doi.org/10.5840/epoche200711219"
   }
  ]
 },
 "Жак Лакан": {
  "n": "Жак Лакан",
  "locus": "J. Lacan, Le Séminaire, livre XIX: …ou pire (1971–1972), leçon du 19 avril 1972 (Panthéon-Sorbonne); éd. J.-A. Miller, Paris: Seuil, 2011 (глава о «Пармениде», нумерация страниц не сверена); стенограмма Staferla, p. 60",
  "original": "…c'est ce fameux Parménide n'est-ce pas, du cher Platon, qui est toujours si mal lu, enfin en tout cas — moi — que je m'exerce à lire d'une façon qui n'est pas tout à fait celle reçue. […] Et le déroulement des 8 hypothèses concernant les rapports de l'Un et de l'Être, reste en quelque sorte problématique, un objet de scandale. […] je dirais que ce qui me frappe, c'est vraiment tout à fait le contraire, et que si quelque chose me donnait l'idée qu'il y a dans le dialogue platonicien je ne sais quelle première assise d'un discours proprement analytique, je dirais que c'est bien celui-là, le Parménide, qui me le confirmerait.",
  "translation": "…это тот знаменитый «Парменид», не правда ли, милого Платона, который всегда так плохо читают, — во всяком случае я упражняюсь в том, чтобы читать его не совсем принятым способом. […] И развёртывание восьми гипотез об отношениях Единого и Бытия остаётся в известном смысле проблематичным, предметом скандала. […] Я бы сказал, что меня поражает как раз прямо противоположное: если что-то и подсказывало бы мне, что в платоновском диалоге есть какое-то первое основание собственно аналитического дискурса, то я сказал бы, что именно он, «Парменид», мне это и подтвердил бы.",
  "translator": "перевод составителя",
  "lang": "fr",
  "confidence": "high",
  "verified": "http://staferla.free.fr/S19/S19...OU%20PIRE.pdf",
  "note": "Текст — по стенограмме Staferla (сверено с аудиозаписью редакторами сайта); в издании Seuil 2011 (ред. Ж.-А. Миллер) формулировки могут быть сглажены. В лекции 17 мая 1972 г. — ещё две ключевые формулы: «le Parménide c'est l'Un qui se dit» и рекомендация аналитикам «travailler le Parménide», а также связка «Yad'lun» / «il n'y a pas de rapport sexuel». Формула «Y a d'l'Un» появляется уже в этом семинаре (весна 1972), а не только в XX «Encore».",
  "extra_sources": [
   {
    "t": "Staferla: стенограммы семинаров Лакана (S19 …ou pire; S20 Encore)",
    "u": "http://staferla.free.fr/"
   },
   {
    "t": "B. O'Donnell, «The Parmenides and the One», The Letter 30 (2004)",
    "u": "https://esource.dbs.ie/server/api/core/bitstreams/a7da7c64-8298-4f49-bda8-a166b78b4a37/content"
   }
  ]
 },
 "Жиль Делёз": {
  "n": "Жиль Делёз",
  "locus": "G. Deleuze, Différence et répétition, Paris: PUF, 1968, ch. V «Synthèse asymétrique du sensible» (франц. пагинация не сверена); англ.: Difference and Repetition, transl. P. Patton, New York: Columbia UP, 1994, p. 235; о Жане Вале — ch. I, n. 18 (англ. p. 312)",
  "original": "L'œuvre de Dieu est toujours menacée par la troisième hypothèse du Parménide, celle de l'instant différentiel ou intensif.",
  "translation": "Труд Бога всегда под угрозой третьей гипотезы «Парменида» — гипотезы дифференциального, или интенсивного, мгновения.",
  "translator": "перевод составителя; рус. изд.: Делёз. Различие и повторение. Пер. Н. Б. Маньковской, Э. П. Юровской. СПб.: Петрополис, 1998",
  "lang": "fr",
  "confidence": "medium",
  "verified": "https://mumbletheoryhome.wordpress.com/wp-content/uploads/2020/01/gilles-deleuze-difference-and-repetition-columbia-university-press-1995.pdf",
  "note": "Дословно проверен английский текст Паттона (p. 235): «The labour of God is always threatened by the third hypothesis of the Parmenides, that of the differential or intensive instant»; французская фраза приведена по памяти и требует сверки с PUF. Там же проверены: «The whole structure of the Parmenides follows from this [hypothetical method of Rep. 511b], under conditions such that it is no longer possible to see therein a propaedeutics, a gymnastics, a game or a formal exercise» (p. 197; в прим. 15 — ссылка на Прокла как на комментатора метода «Парменида») и о Жане Вале: «All Jean Wahl's work is a profound meditation on difference» (n. 18, p. 312). Дамаский упомянут в «Логике смысла» и в библиографии DR.",
  "extra_sources": [
   {
    "t": "Deleuze, Difference and Repetition (Columbia UP), полный текст PDF",
    "u": "https://mumbletheoryhome.wordpress.com/wp-content/uploads/2020/01/gilles-deleuze-difference-and-repetition-columbia-university-press-1995.pdf"
   },
   {
    "t": "Jean Wahl, Étude sur le Parménide de Platon, 1926 (SUDOC)",
    "u": "https://www.sudoc.fr/00394574X"
   }
  ]
 },
 "Жак Деррида": {
  "n": "Жак Деррида",
  "locus": "J. Derrida, «Comment ne pas parler. Dénégations» (1986), in: Psyché. Inventions de l'autre, Paris: Galilée, 1987, разд. I–II (франц. пагинация не сверена); англ.: «How to Avoid Speaking: Denials», transl. K. Frieden, in: Derrida and Negative Theology, ed. H. Coward, T. Foshay, Albany: SUNY Press, 1992, pp. 105–106, 108",
  "original": "Under the name of khora, the place belongs neither to the sensible nor to the intelligible, neither to becoming, nor to non-being (the khora is never described as a void), nor to Being […] All the aporias, which Plato makes no effort to hide, would signify that there is something that is neither a being nor a nothingness […] The neither/nor may no longer be reconverted into both…and. […] The passage through the negativity of discourse on the subject of the khora is neither the last word nor a mediation in service of a dialectic, an elevation toward a positive or proper meaning, a Good or a God. This has nothing to do with negative theology.",
  "translation": "Под именем хоры место не принадлежит ни чувственному, ни умопостигаемому, ни становлению, ни небытию (хора никогда не описывается как пустота), ни бытию […] Все апории, которых Платон и не пытается скрыть, означали бы, что есть нечто, что ни сущее, ни ничто […] «Ни то ни другое» уже не может быть обращено в «и то и другое». […] Прохождение через негативность речи о хоре — не последнее слово и не опосредование на службе диалектики, не восхождение к положительному или собственному смыслу, к Благу или Богу. Это не имеет ничего общего с отрицательной теологией.",
  "translator": "перевод составителя (с англ.)",
  "lang": "en",
  "confidence": "medium",
  "verified": "https://www.noinputbooks.com/endless/cc_06-27-11_07-23-11/State%20University%20of%20New%20York%20Press/1992/how%20to%20avoid%20speaking%20-%20derrida.pdf",
  "note": "Сам «Парменид» Деррида здесь не называет: платоновские источники — «Тимей» (хора) и «Государство» 509b. Приведён авторизованный английский перевод (текст был написан для лекции в Иерусалиме); французский оригинал по Psyché дословно не воспроизведён. Место показательно для карты: логика «ни… ни», не обращаемая в «и… и», структурно повторяет аппарат первой гипотезы, но Деррида прямо отделяет её от апофатики «по ту сторону бытия».",
  "extra_sources": [
   {
    "t": "«How to Avoid Speaking: Denials», англ. PDF",
    "u": "https://www.noinputbooks.com/endless/cc_06-27-11_07-23-11/State%20University%20of%20New%20York%20Press/1992/how%20to%20avoid%20speaking%20-%20derrida.pdf"
   },
   {
    "t": "S. Gersh, Neoplatonism after Derrida: Parallelograms, Brill, 2006",
    "u": "https://philpapers.org/rec/GERNAD-2"
   }
  ]
 },
 "Жан-Люк Марион": {
  "n": "Жан-Люк Марион",
  "locus": "J.-L. Marion, Dieu sans l'être, Paris: Fayard, 1982 (Quadrige/PUF, 1991), ch. II «La double idolâtrie», §§ 2–3 (страницы не сверены); ср. L'idole et la distance, Paris: Grasset, 1977, § 12 (о Дионисии и «Государстве» 509b)",
  "original": "",
  "translation": "Парафраз: бытие есть последний «концептуальный идол» — мыслить Бога как ens supremum или как causa sui значит подчинить его горизонту бытия, который он должен превосходить; поэтому первое имя Бога — не бытие, а любовь (агапэ), дар; и Дионисиево «сверхсущностное» Марион переописывает как библейскую критику идола, а не как наследие первой гипотезы «Парменида».",
  "translator": "",
  "lang": "fr",
  "confidence": "low",
  "verified": "",
  "note": "Дословная французская цитата не воспроизведена (доступа к тексту Cairn нет). О «Пармениде» Марион прямо не пишет; связь с первой гипотезой идёт через Дионисия (у которого она опосредована Проклом/Дамаскием) и через ἐπέκεινα τῆς οὐσίας. Для точной цитаты см. англ. изд.: God Without Being, transl. T. A. Carlson, Chicago UP, 1991, ch. 2 «Double Idolatry».",
  "extra_sources": [
   {
    "t": "W. J. Hankey, «Jean-Luc Marion's Dionysian Neoplatonism», in: Perspectives sur le néoplatonisme, PU Laval, 2009",
    "u": "https://doi.org/10.1515/9782763707020-019"
   },
   {
    "t": "J. Zachhuber, «Christian Apophaticism in Jean-Luc Marion's Early Works», Verbum Vitae 41/3 (2023)",
    "u": "https://doi.org/10.31743/vv.16158"
   }
  ]
 },
 "Ален Бадью": {
  "n": "Ален Бадью",
  "locus": "A. Badiou, L'être et l'événement, Paris: Seuil, 1988, Méditation 2 «Platon» (франц. пагинация не сверена); англ.: Being and Event, transl. O. Feltham, London: Continuum, 2005, p. 31 (Meditation Two), n. p. 484 (об изд. Дьеса)",
  "original": "",
  "translation": "«Весь мой дискурс берёт начало в аксиоматическом решении — решении о небытии единого. Диалектические следствия этого решения кропотливо развёрнуты Платоном в самом конце „Парменида“. […] Тупик „Парменида“ состоит в установлении того, что и единое, и иные обладают и не обладают всеми мыслимыми определениями, что они целиком суть всё (πάντα πάντως ἐστί) и что они не таковы (τε καὶ οὐκ ἔστι). Тем самым вся диалектика единого приводит нас к общему крушению мысли как таковой» (пер. с англ.: «My entire discourse originates in an axiomatic decision; that of the non-being of the one. The dialectical consequences of this decision are painstakingly unfolded by Plato at the very end of the Parmenides. […] We are thus led to a general ruin of thought as such by the entire dialectic of the one»).",
  "translator": "перевод составителя (с англ.)",
  "lang": "fr",
  "confidence": "medium",
  "verified": "https://ia801407.us.archive.org/32/items/important-publications-in-philosophy/Important%20Publications%20in%20Philosophy/Contemporary%20Philosophical%20Texts/Continental%20Philosophy/Critical%20Theory%20and%20Marxism/Being%20and%20Event.pdf",
  "note": "Французский оригинал дословно не воспроизведён; английский текст Фелтема проверен по PDF (эпиграф медитации: «If the one is not, nothing is», Parm. 166c). В прим. (p. 484) — признание о переводе Дьеса: «I have often modified it, not in order to correct it, which would be presumptuous, but in order to tighten, in my own manner, its conceptual requisition», и отсылка к типологии гипотез у Ф. Реньо (Cahiers pour l'analyse 9, 1968). Ср. также Méditation 1: «revolving doors of Plato's Parmenides introduce us to the singular joy of never seeing the moment of conclusion arrive» (p. 23, Meditation One).",
  "extra_sources": [
   {
    "t": "Being and Event (Continuum, 2005), PDF",
    "u": "https://ia801407.us.archive.org/32/items/important-publications-in-philosophy/Important%20Publications%20in%20Philosophy/Contemporary%20Philosophical%20Texts/Continental%20Philosophy/Critical%20Theory%20and%20Marxism/Being%20and%20Event.pdf"
   },
   {
    "t": "A. J. Bartlett, Badiou and Plato: An Education by Truths, Edinburgh UP, 2011",
    "u": "https://philpapers.org/rec/BARBAP-6"
   }
  ]
 },
 "А. Ф. Лосев": {
  "n": "А. Ф. Лосев",
  "locus": "Лосев А. Ф. [Преамбула к диалогу «Парменид»], «Критические замечания к диалогу», п. 1 // Платон. Собр. соч. в 4 т. Т. 2. М.: Мысль, 1993 (Философское наследие, т. 116). С. 501",
  "original": "«Парменид», представляющий собой одно из самых значительных произведений не только античной, но и мировой диалектики, отличается все тем же множеством разных отклонений в сторону, ненужных для логики повествовательных элементов. […] Нельзя же в самом деле верить в то, что вся эта диалектика дается только в целях упражнения в логическом мышлении, как об этом склонен говорить сам Платон (135de). […] Однако думать так — значит выкидывать из Платона множество подобных рассуждений и искажать всю историю платонизма, который, чем дальше, тем больше, как раз выдвигал на первый план именно эту диалектику одного и иного.",
  "translation": "",
  "translator": "",
  "lang": "ru",
  "confidence": "high",
  "verified": "https://ancientrome.ru/publik/article.htm?a=1489637466",
  "note": "Оригинал русский, перевод не требуется. Там же (с. 503): «„Парменид“ Платона есть напряженнейшее выдвигание вперед единства противоположностей» — аргумент против приписывания диалога Аристотелю. Полная схема восьми гипотез — в той же преамбуле, раздел «Композиция диалога» (с. 498–501); о неоплатонизме как комментарии к «Пармениду» и «Тимею» — в «Истории античной эстетики», т. VII.",
  "extra_sources": [
   {
    "t": "Лосев, Преамбула к «Пармениду» (Собр. соч. Платона, т. 2, 1993, с. 497–504), ancientrome.ru",
    "u": "https://ancientrome.ru/publik/article.htm?a=1489637466"
   },
   {
    "t": "Лосев, «Античный космос и современная наука» (1927), полный текст",
    "u": "https://lib.rmvoz.ru/bigzal/losev_aleksey_antichnyy_kosmos_i_sovremennaya_nauka"
   }
  ]
 },
 "С. Н. Булгаков": {
  "n": "С. Н. Булгаков",
  "locus": "Булгаков С. Н. Свет невечерний. Созерцания и умозрения. М.: Путь, 1917. Отдел первый «Божественное Ничто», гл. I «Отрицательное богословие», прим. vii (к разделу об античной философии); переизд.: М.: Республика, 1994, с. 100 (прим.)",
  "original": "Сюда относятся, напр., и некоторые мотивы диалектики Парменида (как на это справедливо указывает русский переводчик Платона проф. Карпов: ч. III, 341, прим.), именно диалектики понятия единого, το εν, которое в одном смысле является совершенно трансцендентным бытию и есть в этом смысле ничто, напротив, в другом смысле оно содержит в себе все и принимает в себя все разнообразие форм. Если о первом εν говорится, что «для него нет ни имени, ни слова, ни какого-либо знания, ни чувства, ни мнения... оно не именуется и не высказывается, и не мнится, и не познается, и ничто из его существенностей не чувствуется», то о втором εν установляется, что «для него может быть и знание, и мнение, и чувство... есть для него и имя, и слово — оно и именуется, и высказывается» (Парменид, 142 а, 155 d, рус. пер. Карпова, ч. VI, стр. 276, 303).",
  "translation": "",
  "translator": "",
  "lang": "ru",
  "confidence": "high",
  "verified": "https://www.vehi.net/bulgakov/svet/001.html",
  "note": "Оригинал русский. Платон цитируется в переводе В. Н. Карпова (Сочинения Платона, ч. VI, 1879). Примечание относится к тезису Булгакова о том, что отрицательное богословие «в античной философии» уже намечено у Платона (ἐπέκεινα τῆς οὐσίας, Resp. 509b, цитируется там же по-гречески). Пагинация издания 1994 г. по памяти, требует сверки; в сетевой публикации (vehi.net) примечание нумеруется как [vii].",
  "extra_sources": [
   {
    "t": "«Свет невечерний», отдел первый (vehi.net)",
    "u": "https://www.vehi.net/bulgakov/svet/001.html"
   },
   {
    "t": "Астапов С. Н., «Антиномия в отрицательной диалектике П. А. Флоренского, С. Н. Булгакова, С. Л. Франка», 2009",
    "u": "https://cyberleninka.ru/article/n/antinomiya-v-otritsatelnoy-dialektike-p-a-florenskogo-s-n-bulgakova-s-l-franka"
   }
  ]
 },
 "С. Л. Франк": {
  "n": "С. Л. Франк",
  "locus": "Франк С. Л. Непостижимое. Онтологическое введение в философию религии. Париж: Дом книги / Современные записки, 1939. Предисловие; переизд.: Франк С. Л. Сочинения. М.: Правда, 1990, с. 183–184",
  "original": "Среди многих великих умов этого направления я особенно выделяю имя одного мыслителя, который, в грандиозной форме объединяя духовные достижения античности и средневековья с основоположными замыслами нового времени, достиг такого синтеза, какой позднее уже никогда не удавался европейскому духу. Я имею в виду Николая Кузанского. Для меня он в некотором смысле есть мой единственный учитель философии. И моя книга хочет быть, в сущности, не более чем систематическим развитием — на новых путях, в новых формах мысли, в новых формулировках старых и вечных проблем — основного начала его мировоззрения, его умозрительного выражения вселенской христианской истины.",
  "translation": "",
  "translator": "",
  "lang": "ru",
  "confidence": "high",
  "verified": "https://azbyka.ru/otechnik/Semen_Frank/nepostizhimoe/",
  "note": "Оригинал русский. «Парменид» в книге не упоминается по имени: филиация к первой гипотезе идёт целиком через Кузанского (эпиграф книги — «Attingitur inattingibile inattingibiliter»), а «это направление» Франк определяет чуть выше как традицию «начиная с Плотина, Дионисия Ареопагита и Августина вплоть до Баадера и Владимира Соловьева». В сетевой публикации azbyka.ru фраза «Я имею в виду» набрана с опечаткой («Я именно в виду»); здесь исправлено по смыслу. Страницы изд. 1990 г. требуют сверки.",
  "extra_sources": [
   {
    "t": "«Непостижимое», полный текст (azbyka.ru)",
    "u": "https://azbyka.ru/otechnik/Semen_Frank/nepostizhimoe/"
   },
   {
    "t": "H. J. Moore, «The Russian Cusanus: S. L. Frank and the Russian reception of Nicholas of Cusa», The Philosophical Forum 54 (2023)",
    "u": "https://doi.org/10.1111/phil.12331"
   }
  ]
 }
};
