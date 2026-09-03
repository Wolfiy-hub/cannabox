// Cannabox & Tyson Products Database
// Organized with bilingual support (EN/HU), full descriptions, CBD/THC details, and machine assignments.

const productsDatabase = [
    // ==========================================
    // TYSON MACHINE PRODUCTS (machineId: 2)
    // ==========================================
    {
        id: 'tyson-chocolate',
        machineIds: [2],
        category: 'chocolate',
        name: 'Tyson 2.0 Hemp Seed Milk Chocolate',
        nameHu: 'Tyson 2.0 Tejcsokoládé Kendermaggal',
        price: '3,490 HUF',
        shortDesc: 'Smooth 32% milk chocolate with 10% crunchy shelled hemp seeds, inspired by Mike Tyson.',
        shortDescHu: 'Lágy 32%-os tejcsokoládé 10% roppanós hántolt kendermaggal a legendától.',
        fullDesc: 'Légy részese a Tyson 2.0 élménynek ezzel az isteni tejcsokoládéval, amely egyszerre édes, krémes és ütős. A 32%-os kakaótartalom és a 10% hántolt kendermag tökéletes harmóniát alkot: selymes textúra, diós ízjegyek és egy leheletnyi kenderes utóíz. 100% THC-mentes élvezet, Mike Tyson inspirálta dizájnnal.',
        fullDescEn: 'Be part of the Tyson 2.0 experience with this heavenly milk chocolate that is sweet, creamy, and packing a punch. 32% cocoa content and 10% shelled hemp seeds create perfect harmony: silky texture, nutty notes, and subtle hemp aroma. 100% THC-free enjoyment.',
        cbd: '10% Hemp Seeds',
        cbdHu: '10% Kendermag',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/TYSON tejcsoki_img1.jpg',
        status: 'available'
    },
    {
        id: 'tyson-cookie',
        machineIds: [2],
        category: 'cookies',
        name: 'Tyson 2.0 – Chocolate Chip',
        nameHu: 'Tyson 2.0 – Csokis Keksz',
        price: '2,490 HUF',
        shortDesc: 'Soft & chewy chocolate chip cookie with Bourbon vanilla, cashew, coconut & 8% hemp seeds.',
        shortDescHu: 'Puha, omlós csokis keksz Bourbon vaníliával, kesudióval, kókusszal és 8% kendermaggal.',
        fullDesc: 'Puha, omlós és veszélyesen finom – ez a Tyson 2.0 Cannabis Cookie. A legendás Mike Tyson által inspirált keksz valódi csokoládédarabokkal, édes vaníliás ízvilággal és 8% hántolt kendermaggal készült. Gluténmentes zabpehely, kesudió és kókusz az extra roppanásért.',
        fullDescEn: 'Soft, crumbly, and dangerously delicious – the Tyson 2.0 Cannabis Cookie. Inspired by the legendary Mike Tyson, made with real dark chocolate drops, Bourbon vanilla, and 8% shelled hemp seeds with gluten-free oat flakes, cashew, and coconut.',
        cbd: '8% Hemp Seeds',
        cbdHu: '8% Kendermag',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/TYSON csokis keksz cookie_img1.jpg',
        status: 'available'
    },
    {
        id: 'tyson-gummies',
        machineIds: [2],
        category: 'gummies',
        name: "Tyson 2.0 Mike's Bites Cannabis Gummies",
        nameHu: "Tyson 2.0 Mike’s Bites Eredeti Cannabis Gumicukor",
        price: '3,990 HUF',
        shortDesc: 'Iconic ear-shaped cannabis gummies with hemp seed oil for a knockout flavour experience.',
        shortDescHu: 'Ikonikus fül formájú kenderolajos gumicukor a ringből, ütős ízélménnyel.',
        fullDesc: 'Harapj bele és légy része a legendának! A Tyson 2.0 Mike’s Bites gumicukor nem csupán édesség – ez egy ütős élmény, amit maga Mike Tyson ikonikus ringbeli pillanata inspirált. Minden egyes darab kenderolajjal és autentikus kannabisz aromával készült. 12 db / csomag, 100% THC-mentes.',
        fullDescEn: 'Take a bite and be part of the legend! Tyson 2.0 Mike’s Bites gummies are not just candy – it is a knockout experience inspired by Mike Tyson himself. Each piece is crafted with hemp seed oil and authentic cannabis aroma. 12 pcs per pack, 100% THC-free.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/TYSON gumicukor_img1.jpg',
        status: 'available'
    },
    {
        id: 'tyson-chewing-gum',
        machineIds: [2],
        category: 'chewing-gum',
        name: 'Tyson 2.0 with Activated Charcoal',
        nameHu: 'Tyson 2.0 Cannabis Rágógumi Aktív Szénnel',
        price: '1,990 HUF',
        shortDesc: 'Refreshing cannabis chewing gum with activated charcoal and intense menthol freshness.',
        shortDescHu: 'Frissítő kannabisz rágógumi növényi aktív szénnel és intenzív mentolos frissességgel.',
        fullDesc: 'Frissesség extra erővel. Ez a rágógumi azoknak készült, akik többet várnak el. Tökéletes egyensúlyt teremt a minőségi összetevők és a funkcionális tulajdonságok között. Növényi aktív szénnel (1,4%) és kendermagolajjal (0,72%). 17g - 12 db.',
        fullDescEn: 'Freshness with extra power. Perfect balance between quality ingredients and functional properties, guaranteeing long-lasting freshness with vegetable activated charcoal (1.4%) and hemp seed oil (0.72%). 17g - 12 pieces.',
        cbd: '0.72% Hemp Oil',
        cbdHu: '0,72% Kenderolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/TYSON rágógumi_img1.jpg',
        status: 'available'
    },

    // ==========================================
    // CANNABOX MACHINE PRODUCTS (machineId: 1)
    // ==========================================

    // GUMMIES (Gumicukrok)
    {
        id: 'bbb-gummies-passion',
        machineIds: [1],
        category: 'gummies',
        name: 'Bubbly Billy Buds Gummies – Passionfruit',
        nameHu: 'Bubbly Billy Buds Gumicukor – Maracuja',
        price: '4,990 HUF',
        shortDesc: 'Chewy CBD gummies combining the tropical tang of passionfruit with 30mg CBD per piece.',
        shortDescHu: 'Trópusi maracuja ízű prémium CBD gumicukor, 30mg CBD-vel szemenként.',
        fullDesc: 'Trópusi maracuja ízű prémium CBD gumicukrok a holland Bubbly Billy Buds-tól. 100g-os kiszerelés, 10 db gumicukor tasakonként, 30mg kiváló minőségű CBD minden darabban. 100% legális, 0% THC, prémium kenderkivonatból.',
        fullDescEn: 'Dive into tropical goodness with Bubbly Billy Buds 300mg CBD Gummy Bears – Passionfruit! 100g pack containing 10 gummies with 30mg of premium CBD each. 100% THC-free and legal in the EU.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds Passion Fruit Flavoured CBD Gummies (300mg).jpg',
        status: 'available'
    },
    {
        id: 'bbb-gummies-strawberry',
        machineIds: [1],
        category: 'gummies',
        name: 'Bubbly Billy Buds Gummies – Strawberry',
        nameHu: 'Bubbly Billy Buds Gumicukor – Eper',
        price: '4,990 HUF',
        shortDesc: 'Juicy strawberry CBD gummies packing 30mg of premium CBD into every bear.',
        shortDescHu: 'Zamatos eper ízű prémium CBD gumicukor, 30mg CBD-vel szemenként.',
        fullDesc: 'Fedezd fel újra a gumicukrok élményét modern formában! A Bubbly Billy Buds eper ízű gumicukrok 30mg tiszta CBD-t tartalmaznak darabonként. 100g kiszerelés, 10 darab / csomag. 100% THC-mentes.',
        fullDescEn: 'Rediscover the joy of candy with a modern twist! Bubbly Billy Buds 300mg CBD Gummy Bears – Strawberry blend juicy strawberry taste with 30mg of CBD per bear. 100g pack, 100% THC-free.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Buby Billy  strawberry gumicukor_img1.jpg',
        images: [
            'products/extracted_images/Multitrance Buby Billy  strawberry gumicukor_img1.jpg',
            'products/extracted_images/Multitrance Buby Billy  strawberry gumicukor_img2.jpg'
        ],
        status: 'available'
    },
    {
        id: 'bbb-gummies-watermelon',
        machineIds: [1],
        category: 'gummies',
        name: 'Bubbly Billy Buds Gummies – Watermelon',
        nameHu: 'Bubbly Billy Buds Gumicukor – Görögdinnye',
        price: '4,990 HUF',
        shortDesc: 'Refreshing watermelon CBD gummies with 30mg premium CBD in each bear.',
        shortDescHu: 'Frissítő görögdinnye ízű prémium CBD gumicukor, 30mg CBD-vel szemenként.',
        fullDesc: 'Nyári frissesség egész évben! A Bubbly Billy Buds görögdinnye ízű gumicukrok 30mg tiszta CBD-t tartalmaznak darabonként. 100g kiszerelés, 10 darab / csomag. 100% THC-mentes.',
        fullDescEn: 'Summer freshness year-round! Bubbly Billy Buds 300mg CBD Gummy Bears – Watermelon combine refreshing watermelon flavor with 30mg of CBD per bear. 100g pack, 100% THC-free.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Buby Billy watermelon gumicukor_img1.jpg',
        images: [
            'products/extracted_images/Multitrance Buby Billy watermelon gumicukor_img1.jpg',
            'products/extracted_images/Multitrance Buby Billy watermelon gumicukor_img2.jpg'
        ],
        status: 'available'
    },
    {
        id: 'medicbd-gummies-watermelon',
        machineIds: [1],
        category: 'gummies',
        name: 'MediCBD Gummy Bears – Watermelon',
        nameHu: 'MediCBD Gumimaci – Görögdinnye',
        price: '4,990 HUF',
        shortDesc: 'MediCBD juicy watermelon gummies with 30mg CBD per bear for soothing tranquility.',
        shortDescHu: 'MediCBD lédús görögdinnye ízű gumimaci 30mg CBD-vel a nyugodt pillanatokért.',
        fullDesc: 'A MediCBD 300mg görögdinnyés gumicukor ötvözi a minőséget a kiváló ízzel. Minden szem 30mg prémium CBD-t tartalmaz kenderkivonatból. 100g, 10 db / tasak. 0% THC.',
        fullDescEn: 'Savour the juicy watermelon flavour of MediCBD 300mg CBD Gummy Bears. 100% THC-free, legal across the EU, with 30mg of premium CBD per gummy.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/MEDICBD watermelon gumicukor 300mg_img1.jpg',
        images: [
            'products/extracted_images/MEDICBD watermelon gumicukor 300mg_img1.jpg',
            'products/extracted_images/MEDICBD watermelon gumicukor 300mg_img2.jpg'
        ],
        status: 'available'
    },
    {
        id: 'medicbd-gummies-strawberry',
        machineIds: [1],
        category: 'gummies',
        name: 'MediCBD Gummy Bears – Strawberry',
        nameHu: 'MediCBD Gumimaci – Eper',
        price: '4,990 HUF',
        shortDesc: 'Luscious strawberry gummies infused with 30mg CBD per piece for daily wellness.',
        shortDescHu: 'Zamatos epres gumimaci 30mg CBD tartalommal a mindennapi jó közérzetért.',
        fullDesc: 'Édes eper íz és tiszta kannabidiol kivonat a holland MediCBD-től. 100g, 10 db maci, 30mg CBD / szem. 100% legális és THC-mentes.',
        fullDescEn: 'Sweet strawberry taste combined with pure cannabidiol extract from Dutch MediCBD. 100g, 10 gummy bears, 30mg CBD per piece. 100% legal and THC-free.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/MediCBD Strawberry Flavoured CBD Gummies (300mg).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gummies-passion',
        machineIds: [1],
        category: 'gummies',
        name: 'Multitrance Passion Fruit (300mg)',
        nameHu: 'Multitrance Maracuja CBD Gumicukor (300mg)',
        price: '4,990 HUF',
        shortDesc: 'Original Amsterdam passion fruit CBD gummies with 300mg total CBD.',
        shortDescHu: 'Eredeti amszterdami maracuja ízű CBD gumicukor 300mg össz CBD tartalommal.',
        fullDesc: 'Multitrance Original Amsterdam maracuja ízesítésű prémium CBD gumicukor. 10 db 30mg-os gumicukor 100g-os tasakban. 100% THC-mentes.',
        fullDescEn: 'Multitrance Original Amsterdam passionfruit flavoured premium CBD gummies. 10 pcs of 30mg gummies in 100g pouch. 100% THC-free.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Passion Fruit Flavoured CBD Gummies (300mg)(1).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gummies-strawberry',
        machineIds: [1],
        category: 'gummies',
        name: 'Multitrance Strawberry (300mg)',
        nameHu: 'Multitrance Eper CBD Gumicukor (300mg)',
        price: '4,990 HUF',
        shortDesc: 'Classic Amsterdam strawberry CBD gummies with 300mg total CBD.',
        shortDescHu: 'Klasszikus amszterdami eper ízű CBD gumicukor 300mg össz CBD tartalommal.',
        fullDesc: 'Eredeti holland minőségű epres CBD gumicukor a Multitrance Amsterdamtól. 100g kiszerelés, 30mg CBD darabonként. 0% THC.',
        fullDescEn: 'Original Dutch quality strawberry CBD gummies by Multitrance Amsterdam. 100g pack, 30mg CBD per piece. 0% THC.',
        cbd: '300mg (30mg / pc)',
        cbdHu: '300mg (30mg / db)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Strawberrry Flavoured CBD Gummies (300mg).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gummies-natur',
        machineIds: [1],
        category: 'gummies',
        name: 'Multitrance – Natural Flavour',
        nameHu: 'Multitrance Természetes Cannabis Gumicukor',
        price: '3,490 HUF',
        shortDesc: 'Bold candy flavour infused with genuine essential cannabis hemp seed oil.',
        shortDescHu: 'Karakteres gumicukor valódi esszenciális kendermagolajjal dúsítva.',
        fullDesc: 'A Multitrance Cannabis Gummies kendermagolajjal és kellemes gyümölcsös-kannabiszos aromával készül. 100g-os kiszerelés, 100% THC-mentes, biztonságos és legális.',
        fullDescEn: 'Multitrance Cannabis Gummies are made with hemp seed oil and a bold candy flavor. THC-free, 100% legal, and packed with flavour. 100g pack.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance natur gumicukor_img1.jpg',
        images: [
            'products/extracted_images/Multitrance natur gumicukor_img1.jpg',
            'products/extracted_images/Multitrance natur gumicukor_img2.jpg',
            'products/extracted_images/Multitrance natur gumicukor_img3.jpg'
        ],
        status: 'available'
    },

    // OILS (Olajok)
    {
        id: 'haze-oil-10',
        machineIds: [1],
        category: 'oils',
        name: 'HaZe 10% Full Spectrum CBD Oil',
        nameHu: 'HaZe 10% Teljes Spektrumú CBD Olaj',
        price: '16,990 HUF',
        shortDesc: 'High potency 1000mg full spectrum CBD oil in cold-pressed hemp seed carrier.',
        shortDescHu: 'Nagy hatóerejű 1000mg teljes spektrumú CBD olaj hidegen sajtolt kendermagolajban.',
        fullDesc: 'Tapasztald meg a HaZe 10% CBD olaj erejét az amszterdami Multitrance-tól! 1000mg teljes spektrumú CBD 10ml-es üvegben. Gazdag fitokannabinoidokban és terpénekben a teljes kísérőhatás érdekében. 0% THC, laboratóriumilag bevizsgált, prémium EU minőség.',
        fullDescEn: 'Experience the powerful benefits of HaZe 10% CBD Oil – 1000mg full-spectrum CBD in a 10ml dropper bottle. Contains full range of cannabinoids for complete entourage effect. 0% THC, Made in EU.',
        cbd: '10% (1000mg / 10ml)',
        cbdHu: '10% (1000mg / 10ml)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/HAZE CBD olaj 10 __img1.jpg',
        status: 'available'
    },
    {
        id: 'haze-oil-5',
        machineIds: [1],
        category: 'oils',
        name: 'HaZe 5% Full Spectrum CBD Oil',
        nameHu: 'HaZe 5% Teljes Spektrumú CBD Olaj',
        price: '9,990 HUF',
        shortDesc: 'Balanced 500mg full spectrum CBD oil ideal for daily botanical wellness routines.',
        shortDescHu: 'Kiegyensúlyozott 500mg teljes spektrumú CBD olaj a mindennapi jó közérzetért.',
        fullDesc: 'Kiváló minőségű, 500mg teljes spektrumú CBD-t tartalmazó olaj 10ml-es cseppentős üvegben. Természetes kendermagolaj hordozóval, gazdag természetes terpénekben. Ideális a mindennapi stresszkezelésre és pihenésre. 0% THC.',
        fullDescEn: 'Discover the benefits of HaZe 5% Full Spectrum CBD Oil. 500mg CBD in every 10ml bottle, unlocking the potential of the hemp plant for your daily wellness. 0% THC, Made in EU.',
        cbd: '5% (500mg / 10ml)',
        cbdHu: '5% (500mg / 10ml)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/HAZE CBD olaj 5 __img1.jpg',
        status: 'available'
    },

    // CHOCOLATES (Csokoládék)
    {
        id: 'multitrance-milk-choco',
        machineIds: [1],
        category: 'chocolate',
        name: 'Multitrance Cannabis Milk Chocolate',
        nameHu: 'Multitrance Kenderes Tejcsokoládé',
        price: '2,990 HUF',
        shortDesc: 'Creamy milk chocolate with crunchy shelled hemp seeds and roasted hazelnut kernels.',
        shortDescHu: 'Krémes tejcsokoládé ropogós kendermaggal és pirított mogyoródarabokkal.',
        fullDesc: 'A Multitrance Cannabis Milk Chocolate prémium tejcsokoládét egyesít 10% hántolt kendermaggal és pörkölt mogyoródarabokkal. Gazdag kakaóvajjal és természetes vanília aromával. 80g-os tábla, 100% THC-mentes.',
        fullDescEn: 'Multitrance Cannabis Milk Chocolate combines creamy milk chocolate with 10% crunchy shelled hemp seeds and roasted hazelnuts. 80g bar, 100% THC-free and legal in EU.',
        cbd: '10% Hemp & Hazelnut',
        cbdHu: '10% Kendermag és Mogyoró',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Cannabis tejcsoki_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-dark-choco',
        machineIds: [1],
        category: 'chocolate',
        name: 'Multitrance Cannabis 70% Dark Chocolate',
        nameHu: 'Multitrance Kenderes 70%-os Étcsokoládé',
        price: '2,990 HUF',
        shortDesc: '70% rich dark chocolate blended with crunchy hemp seeds and roasted hazelnuts.',
        shortDescHu: '70%-os intenzív étcsokoládé ropogós kendermaggal és pirított mogyoróval.',
        fullDesc: 'Intenzív 70%-os kakaótartalmú étcsokoládé tábla 10% hántolt kendermaggal és pörkölt mogyoródarabokkal. Erőteljes csokoládéíz és kenderes roppanósság. 80g, 0% THC.',
        fullDescEn: 'Multitrance Cannabis Dark Chocolate blends 70% rich dark chocolate with 10% crunchy hemp seeds and hazelnut pieces. Bold and satisfying flavour, 80g bar, 0% THC.',
        cbd: '10% Hemp & Hazelnut',
        cbdHu: '10% Kendermag és Mogyoró',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Cannabis étcsoki_img1.jpg',
        status: 'available'
    },
    {
        id: 'bob-marley-dark-choco',
        machineIds: [1],
        category: 'chocolate',
        name: 'Bob Marley Hemp Dark Chocolate',
        nameHu: 'Bob Marley Kenderes Étcsokoládé',
        price: '3,290 HUF',
        shortDesc: 'Official Bob Marley artisanal dark chocolate with crunchy hemp seeds.',
        shortDescHu: 'Hivatalos Bob Marley prémium minőségű étcsokoládé ropogós kendermaggal.',
        fullDesc: 'Prémium minőségű kézműves étcsokoládé kendermaggal, ikonikus Bob Marley csomagolásban. Különleges ízharmónia és 100% THC-mentes élvezet. 80g.',
        fullDescEn: 'Official Bob Marley artisanal dark chocolate infused with nutritious hemp seeds. Rich cocoa flavour with iconic branding. 80g bar, 100% THC-free.',
        cbd: 'Hemp Seeds Infused',
        cbdHu: 'Kendermaggal Dúsítva',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bob Marley Hemp Dark Chocolate  80g.jpg',
        status: 'available'
    },
    {
        id: 'bob-marley-milk-choco',
        machineIds: [1],
        category: 'chocolate',
        name: 'Bob Marley Hemp Milk Chocolate',
        nameHu: 'Bob Marley Kenderes Tejcsokoládé',
        price: '3,290 HUF',
        shortDesc: 'Official Bob Marley smooth milk chocolate with nutritious hemp seeds.',
        shortDescHu: 'Hivatalos Bob Marley lágy tejcsokoládé tápláló kendermaggal.',
        fullDesc: 'Krémes, selymes tejcsokoládé ropogós kendermaggal az igazi chill életérzésért. 80g-os kiszerelés, 100% THC-mentes.',
        fullDescEn: 'Creamy, silky milk chocolate paired with crispy hemp seeds celebrating the positive vibes of Bob Marley. 80g bar, 100% THC-free.',
        cbd: 'Hemp Seeds Infused',
        cbdHu: 'Kendermaggal Dúsítva',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bob Marley Hemp Milk Chocolate  80g.jpg',
        status: 'available'
    },

    // COOKIES (Kekszek)
    {
        id: 'multitrance-cream-cookie-10mg',
        machineIds: [1],
        category: 'cookies',
        name: 'Multitrance CBD Cream Cookies – Chocolate',
        nameHu: 'Multitrance Krémes CBD Keksz – Csokoládé',
        price: '1,490 HUF',
        shortDesc: 'Crisp cookie with rich chocolate cream filling and 10mg pure CBD.',
        shortDescHu: 'Ropogós keksz gazdag csokoládékrémmel és 10mg tiszta CBD tartalommal.',
        fullDesc: 'Klasszikus omlós csokoládés keksz gazdag csokikrémes töltelékkel (30%) és 10mg tiszta CBD-vel. Külön-külön csomagolva a maximális frissességért. 17g, 100% THC-mentes.',
        fullDescEn: 'Crisp baked cookie with a smooth 30% chocolate cream filling and 10mg of pure CBD per cookie. Individually packed for freshness, 17g, 100% THC-free.',
        cbd: '10mg CBD per Cookie',
        cbdHu: '10mg CBD kekszként',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance cream cookies 10 mg_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-cookiebites-choco',
        machineIds: [1],
        category: 'cookies',
        name: 'Multitrancebites – Chocolate',
        nameHu: 'Multitrancebites – Csokoládé',
        price: '990 HUF',
        shortDesc: 'Bite-sized chocolate cannabis cookies with no added sugar, rich in hemp flour.',
        shortDescHu: 'Hozzáadott cukor nélküli csokis kenderkeksz falatok, 5% kenderliszttel.',
        fullDesc: 'Klasszikus csokoládés süteményfalat kenderliszttel és cukormentes csokoládéval. Hozzáadott cukor nélkül készült, egyedileg csomagolt, praktikus snack. 22g, 0% THC.',
        fullDescEn: 'Classic chocolate cookie taste in bite-sized format made with 5% hemp flour and sugar-free chocolate drops. Individually wrapped 22g pack, 0% THC.',
        cbd: '5% Hemp Flour',
        cbdHu: '5% Kenderliszt',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Cannabis Cookie csoki leírás_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-cookiebites-cranberry',
        machineIds: [1],
        category: 'cookies',
        name: 'Multitrancebites – Cranberry',
        nameHu: 'Multitrancebites – Vörösáfonya',
        price: '990 HUF',
        shortDesc: 'Fruity cranberry cookie bites with chocolate chips, corn flakes and hemp flour.',
        shortDescHu: 'Gyümölcsös vörösáfonyás kenderkeksz csokidarabokkal és kukoricapehellyel.',
        fullDesc: 'Frissítő vörösáfonyás kekszfalatok csokoládédarabokkal, zabpehellyel és 5% kenderliszttel. Különleges gyümölcsös-kenderes ízvilág. 22g, 0% THC.',
        fullDescEn: 'Baked cookie texture paired with tangy dried cranberries, milk chocolate chips, corn flakes and 5% hemp flour. Individually wrapped 22g pack, 0% THC.',
        cbd: '5% Hemp Flour',
        cbdHu: '5% Kenderliszt',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Cannabis Cookie cranberry leirás_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-space-cookie-choco',
        machineIds: [1],
        category: 'cookies',
        name: 'Multitrance Cannabis Chocolate Space Cookie',
        nameHu: 'Multitrance Kenderes Csokoládés Space Cookie',
        price: '1,490 HUF',
        shortDesc: 'Authentic Amsterdam style chocolate space cookie infused with hemp seed oil.',
        shortDescHu: 'Eredeti amszterdami stílusú csokoládés kenderkeksz kendermagolajjal.',
        fullDesc: 'Híres amszterdami receptúra alapján készült puha csokoládés space cookie valódi kendermagolajjal és tönkölybúzaliszttel. Egyenként csomagolt, 100% legális és THC-mentes.',
        fullDescEn: 'Authentic Amsterdam style soft chocolate space cookie made with spelt flour and genuine hemp seed oil. Individually wrapped for freshness, 100% legal & THC-free.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance Space cookies csoki_img1.jpg',
        status: 'available'
    },

    // BROWNIES (Brownie-k)
    {
        id: 'multitrance-brownie-hazelnut',
        machineIds: [1],
        category: 'brownies',
        name: 'Multitrance Cannabis Hazelnut Brownie (Medium Sativa)',
        nameHu: 'Multitrance Kenderes Mogyorós Brownie (Medium Sativa)',
        price: '1,990 HUF',
        shortDesc: 'Amsterdam space cake brownie blending rich cocoa with roasted hazelnuts and sativa aroma.',
        shortDescHu: 'Amszterdami mogyorós kenderes brownie kakaóval és lágy sativa aromával.',
        fullDesc: 'A Multitrance mogyorós kenderes brownie egyesíti a gazdag kakaós ízt a ropogós pörkölt mogyoróval és a lágy sativa terpénekkel. 100g-os prémium sütemény, 0% THC, bódulatmentes tiszta élvezet.',
        fullDescEn: 'Brings the flavour of Amsterdam’s space cakes into a smooth and nutty brownie. Rich cocoa blended with roasted hazelnuts and medium sativa flavour profile. 100g, 100% THC-free.',
        cbd: 'Medium Sativa Flavour',
        cbdHu: 'Közepes Sativa Aroma',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Hazelnut Brownie (Strong Flavour).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-brownie-blueberry',
        machineIds: [1],
        category: 'brownies',
        name: 'Multitrance Blueberry Haze (Strong Sativa)',
        nameHu: 'Multitrance Áfonyás Haze Kenderes Brownie (Strong Sativa)',
        price: '1,990 HUF',
        shortDesc: 'Soft & rich cocoa brownie with wild blueberries and strong sativa haze terpene aroma.',
        shortDescHu: 'Omlós kakaós brownie valódi erdei áfonyával és intenzív sativa haze aromával.',
        fullDesc: 'Intenzív kenderes-áfonyás ízvilágú puha csokoládés brownie az amszterdami kávézók hagyományai alapján. Valódi áfonyadarabokkal és kendermagolajjal. 100g, 0% THC.',
        fullDescEn: 'Soft and rich cannabis brownie space cake with blueberry sweetness, deep cocoa notes, and strong sativa flavour profile. 100g, 100% THC-free.',
        cbd: 'Strong Sativa Flavour',
        cbdHu: 'Erős Sativa Aroma',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Blueberry Brownie (Strong Flavour).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-brownie-caramel',
        machineIds: [1],
        category: 'brownies',
        name: 'Multitrance Salted Caramel (Strong Flavour)',
        nameHu: 'Multitrance Sós Karamellás Kenderes Brownie (Strong Flavour)',
        price: '1,990 HUF',
        shortDesc: 'Decadent salted caramel cannabis brownie with rich cocoa and strong sativa notes.',
        shortDescHu: 'Kényeztető sós karamellás kenderes brownie intenzív sativa aromával.',
        fullDesc: 'Különleges sós karamellás ízvilágú selymes csokoládés brownie kendermagolajjal. Kézműves holland recept alapján, 100g, 100% THC-mentes.',
        fullDescEn: 'Decadent salted caramel cannabis brownie combining sweet and savoury notes with rich cocoa and strong sativa hemp notes. 100g, 100% THC-free.',
        cbd: 'Strong Sativa Flavour',
        cbdHu: 'Erős Sativa Aroma',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Salted Caramel Brownie (Strong Flavour).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-brownie-sativa-seeds',
        machineIds: [1],
        category: 'brownies',
        name: 'Multitrance Sativa Seeds (Strong Flavour)',
        nameHu: 'Multitrance Sativa Kendermagos Brownie (Strong Flavour)',
        price: '1,990 HUF',
        shortDesc: 'Original Amsterdam cannabis brownie loaded with crunchy sativa hemp seeds.',
        shortDescHu: 'Eredeti amszterdami csokis brownie ropogós sativa kendermagokkal gazdagon szórva.',
        fullDesc: 'A klasszikus amszterdami kenderes sütemény rengeteg hántolt kendermaggal és intenzív csokoládés alappal. 100g, 100% legális és THC-mentes.',
        fullDescEn: 'Classic Amsterdam space brownie loaded with whole crunchy sativa hemp seeds and deep cocoa fudginess. 100g, 100% THC-free.',
        cbd: 'Sativa Seeds Infused',
        cbdHu: 'Sativa Kendermaggal',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Sativa Seeds Brownie (Strong flavour).jpg',
        status: 'available'
    },

    // CHEWING GUM (Rágógumik)
    {
        id: 'medicbd-gum-strawberry',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'MediCBD Chewing Gum – Strawberry',
        nameHu: 'MediCBD Rágógumi – Eper',
        price: '1,790 HUF',
        shortDesc: 'Refreshing strawberry flavoured CBD chewing gum containing 17mg pure CBD oil.',
        shortDescHu: 'Frissítő eper ízű prémium CBD rágógumi 17mg tiszta CBD olajjal.',
        fullDesc: 'A MediCBD epres rágógumi kényelmes és diszkrét módja a CBD fogyasztásának. Minden buborékfólia 17mg hatóanyagot tartalmaz. Cukormentes édesítőkkel, 0% THC.',
        fullDescEn: 'Delicious strawberry flavour with 17mg of CBD oil per blister pack. Convenient, discreet, sugar-free, 100% THC-free.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/MediCBD Strawberry CBD Chewing Gum (17mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'medicbd-gum-mango',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'MediCBD Chewing Gum – Mango',
        nameHu: 'MediCBD Rágógumi – Mangó',
        price: '2,290 HUF',
        shortDesc: 'High potency tropical mango flavoured CBD chewing gum with 36mg CBD per blister.',
        shortDescHu: 'Magas hatóanyagtartalmú trópusi mangó ízű CBD rágógumi 36mg CBD-vel.',
        fullDesc: 'Extra erős 36mg CBD tartalmú mangó ízesítésű funkcionális rágógumi. Gyors felszívódás a szájnyálkahártyán keresztül. Cukormentes, 100% THC-mentes.',
        fullDescEn: 'High potency 36mg CBD chewing gum with luscious mango flavor. Fast oral absorption, sugar-free, 100% THC-free.',
        cbd: '36mg CBD',
        cbdHu: '36mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/MediCBD Mango CBD Chewing Gum (36mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'medicbd-gum-mint',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'MediCBD Chewing Gum – Mint',
        nameHu: 'MediCBD Rágógumi – Menta',
        price: '1,790 HUF',
        shortDesc: 'Cool refreshing peppermint CBD chewing gum with 17mg CBD oil.',
        shortDescHu: 'Hűsítő borsmenta ízű CBD rágógumi 17mg CBD olaj tartalommal.',
        fullDesc: 'Klasszikus hűsítő menta íz és 17mg prémium CBD olaj szinergiája. Hosszan tartó friss lehelet és relaxáló hatás. Cukormentes, 0% THC.',
        fullDescEn: 'Cool refreshing mint flavour combined with 17mg of therapeutic CBD oil per blister. Sugar-free, Made in EU, 0% THC.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/MediCBD Mint CBD Chewing Gum (17mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'bbb-gum-strawberry',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Bubbly Billy Buds Chewing Gum – Strawberry',
        nameHu: 'Bubbly Billy Buds Rágógumi – Eper',
        price: '1,790 HUF',
        shortDesc: 'Bubbly Billy Buds sweet strawberry CBD chewing gum with 17mg CBD.',
        shortDescHu: 'Bubbly Billy Buds édes eper ízű CBD rágógumi 17mg CBD-vel.',
        fullDesc: 'Édes eper ízű prémium kenderkivonatos rágógumi a holland Bubbly Billy Budstól. 17mg CBD levélként, 100% legális és THC-mentes.',
        fullDescEn: 'Sweet strawberry flavoured premium chewing gum with 17mg CBD. Made in EU, 100% THC-free.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds Strawberry Flavoured Chewing Gum (17mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'bbb-gum-mango',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Bubbly Billy Buds Chewing Gum – Mango',
        nameHu: 'Bubbly Billy Buds Rágógumi – Mangó',
        price: '2,290 HUF',
        shortDesc: 'Bubbly Billy Buds potent mango CBD chewing gum with 36mg CBD.',
        shortDescHu: 'Bubbly Billy Buds extra erős mangós CBD rágógumi 36mg CBD-vel.',
        fullDesc: 'Erőteljes 36mg-os CBD formula egzotikus mangó ízesítéssel. Cukormentes, prémium európai alapanyagokból. 0% THC.',
        fullDescEn: 'Potent 36mg CBD formula with exotic tropical mango flavor. Sugar-free, Made in EU, 0% THC.',
        cbd: '36mg CBD',
        cbdHu: '36mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds Mango Flavoured Chewing Gum (36mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'bbb-gum-mint',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Bubbly Billy Buds Chewing Gum – Mint',
        nameHu: 'Bubbly Billy Buds Rágógumi – Menta',
        price: '1,790 HUF',
        shortDesc: 'Crisp mint CBD chewing gum by Bubbly Billy Buds with 17mg CBD.',
        shortDescHu: 'Frissítő mentás CBD rágógumi a Bubbly Billy Buds-tól 17mg CBD-vel.',
        fullDesc: 'Kellemesen mentolos ízű funkcionális rágógumi 17mg tiszta CBD olajjal. Cukormentes, 100% THC-mentes.',
        fullDescEn: 'Crisp, refreshing peppermint flavour infused with 17mg pure CBD. Sugar-free, 100% THC-free.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds Mint Flavoured Chewing Gum (17mg CBD).jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gum-eucalyptus',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Multitrance Cannabis Sativa Chewing Gum',
        nameHu: 'Multitrance Cannabis Sativa Rágógumi',
        price: '1,790 HUF',
        shortDesc: 'Original Amsterdam sativa & eucalyptus flavoured chewing gum with 17mg CBD.',
        shortDescHu: 'Eredeti amszterdami sativa kenderes rágógumi 17mg CBD tartalommal.',
        fullDesc: 'Eredeti amszterdami receptúra alapján készült kenderes-eukaliptuszos rágógumi. 12 db (17g), 17mg CBD buborékfóliánként. 0% THC.',
        fullDescEn: 'Original Amsterdam formula cannabis sativa chewing gum with natural terpenes and 17mg CBD. 12 pieces (17g), 100% THC-free.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Mutitrance eucalyptus rágó_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gum-mango',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Multitrance – Mango Kush',
        nameHu: 'Multitrance Cannabis Rágógumi – Mango Kush',
        price: '2,290 HUF',
        shortDesc: 'Tropical Mango Kush flavoured cannabis chewing gum with high potency 36mg CBD.',
        shortDescHu: 'Trópusi Mango Kush kender rágógumi magas 36mg CBD tartalommal.',
        fullDesc: 'A Mango Kush fajta természetes terpénjeivel és 36mg CBD-vel készült rágógumi az amszterdami Multitrance-tól. 12 db (17g), 0% THC.',
        fullDescEn: 'Infused with Mango Kush cannabis terpenes and 36mg of broad spectrum CBD. 12 pieces (17g), 100% THC-free.',
        cbd: '36mg CBD',
        cbdHu: '36mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Mutitrance mango rágó_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-gum-strawberry',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Multitrance – Strawberry Haze',
        nameHu: 'Multitrance Cannabis Rágógumi – Strawberry Haze',
        price: '1,790 HUF',
        shortDesc: 'Strawberry Haze terpene cannabis chewing gum with 17mg CBD.',
        shortDescHu: 'Strawberry Haze kenderes eper ízű rágógumi 17mg CBD tartalommal.',
        fullDesc: 'A Strawberry Haze sativa aromájával és 17mg CBD-vel gazdagított amszterdami rágógumi. 12 db (17g), 100% legális és THC-mentes.',
        fullDescEn: 'Strawberry Haze terpene profile combined with 17mg therapeutic CBD. 12 pieces (17g), 100% THC-free.',
        cbd: '17mg CBD',
        cbdHu: '17mg CBD',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Mutitrance rágó eper_img1.jpg',
        status: 'available'
    },
    {
        id: 'astra-gum-peppermint',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Astra Hemp Peppermint (Sugar Free)',
        nameHu: 'Astra Kender Borsmenta Cannabis Rágógumi (Cukormentes)',
        price: '1,490 HUF',
        shortDesc: 'Sugar-free peppermint cannabis chewing gum with genuine hemp seed oil.',
        shortDescHu: 'Cukormentes borsmentás kender rágógumi valódi kendermagolajjal.',
        fullDesc: 'Kellemesen frissítő, cukormentes kenderes rágógumi természetes borsmenta kivonattal és kendermagolajjal. 100% THC-mentes.',
        fullDescEn: 'Sugar-free peppermint chewing gum infused with genuine hemp seed oil. Clean breath and relaxing vibes, 0% THC.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Astra Hemp Peppermint Cannabis Chewing Gum (Sugar Free).jpg',
        status: 'available'
    },
    {
        id: 'astra-gum-blueberry',
        machineIds: [1],
        category: 'chewing-gum',
        name: 'Astra Hemp Blueberry (Sugar Free)',
        nameHu: 'Astra Kender Áfonya Cannabis Rágógumi (Cukormentes)',
        price: '1,490 HUF',
        shortDesc: 'Sugar-free blueberry cannabis chewing gum with cold-pressed hemp oil.',
        shortDescHu: 'Cukormentes erdei áfonyás kender rágógumi hidegen sajtolt kenderolajjal.',
        fullDesc: 'Erdei áfonyás aromájú, cukormentes funkcionális rágógumi természetes kenderkivonattal. 100% THC-mentes élvezet.',
        fullDescEn: 'Sugar-free blueberry flavoured chewing gum infused with cold-pressed hemp seed oil. 0% THC.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Astra Hemp Blueberry Cannabis Chewing Gum (Sugar Free).jpg',
        status: 'available'
    },

    // LOLLIPOPS (Nyalókák)
    {
        id: 'bbb-lollipop-sour-raspberry',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Sour Raspberry',
        nameHu: 'Bubbly Billy Buds Nyalóka – Savanyú Málna',
        price: '2,990 HUF',
        shortDesc: 'Pack of 5 sour raspberry CBD lollipops with bubblegum centre, 10mg CBD each.',
        shortDescHu: '5 db-os savanyú málna ízű CBD nyalóka ajándékdobozban, rágógumis maggal és 10mg CBD-vel.',
        fullDesc: 'Savanykás málna és édes rágógumis belső tökéletes kombinációja. 5 db prémium nyalóka díszdobozban, mindegyik 10mg minőségi CBD-t tartalmaz. 100% THC-mentes.',
        fullDescEn: 'Bold tanginess of sour raspberry with a bubblegum core and 10mg of high-quality CBD per lolly. Pack of 5 in decorative gift box. 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Buby Billy nyalóka 5 db os savanyú málna_img1.jpg',
        images: [
            'products/extracted_images/Buby Billy nyalóka 5 db os savanyú málna_img1.jpg',
            'products/extracted_images/Buby Billy nyalóka 5 db os savanyú málna_img2.jpg'
        ],
        status: 'available'
    },
    {
        id: 'bbb-lollipop-passion',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Passion Fruit',
        nameHu: 'Bubbly Billy Buds Nyalóka – Maracuja',
        price: '2,990 HUF',
        shortDesc: 'Tropical passion fruit CBD lollipops, box of 5 lollies with 10mg CBD each.',
        shortDescHu: 'Trópusi maracuja ízű CBD nyalóka válogatás 5 db-os dobozban, 10mg CBD-vel.',
        fullDesc: 'Édes, gyümölcsös és relaxáló élmény trópusi maracuja ízzel és 10mg CBD-vel nyalókánként. 5 db nyalóka elegáns díszdobozban. 100% legális és THC-mentes.',
        fullDescEn: 'Savour the tropical flavour of passionfruit with 10mg CBD per lolly. Box of 5 lollies, crafted in the EU, 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Passion Fruit Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-cotton-candy',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Cotton Candy',
        nameHu: 'Bubbly Billy Buds Nyalóka – Vattacukor',
        price: '2,990 HUF',
        shortDesc: 'Sweet nostalgic cotton candy flavour CBD lollipops, 5 pack with 10mg CBD each.',
        shortDescHu: 'Nosztalgikus édes vattacukor ízű CBD nyalóka 5 db-os díszdobozban, 10mg CBD-vel.',
        fullDesc: 'Nosztalgikus édes vattacukor íz és természetes CBD relaxáció. 5 db 10mg-os nyalóka díszdobozban. 100% THC-mentes.',
        fullDescEn: 'Sweet nostalgic cotton candy flavour infused with 10mg of premium CBD per lolly. Gift box of 5 lollies, 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Cotton Candy Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-pineapple',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Sour Pineapple',
        nameHu: 'Bubbly Billy Buds Nyalóka – Savanyú Ananász',
        price: '2,990 HUF',
        shortDesc: 'Tangy sour pineapple CBD lollipops with 10mg CBD per lolly, 5 pack.',
        shortDescHu: 'Savanykás ananász ízű prémium CBD nyalóka 5 db-os dobozban, 10mg CBD-vel.',
        fullDesc: 'Frissítő trópusi savanyú ananász íz 10mg minőségi CBD-vel nyalókánként. 5 db-os ajándékcsomagolás, 100% legális és THC-mentes.',
        fullDescEn: 'Tropical sour pineapple punch infused with 10mg CBD in each lolly. Pack of 5 in colourful gift box, 0% THC.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Sour Pineapple Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-peach',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Peach Fuzz',
        nameHu: 'Bubbly Billy Buds Nyalóka – Őszibarack',
        price: '2,990 HUF',
        shortDesc: 'Juicy sweet peach fuzz flavoured CBD lollipops, box of 5 with 10mg CBD each.',
        shortDescHu: 'Zamatos édes őszibarack ízű CBD nyalóka 5 db-os dobozban, 10mg CBD-vel.',
        fullDesc: 'Lédús, édes őszibarackos ízvilág és kényeztető CBD élmény. 5 db 10mg-os nyalóka díszdobozban. 0% THC.',
        fullDescEn: 'Juicy and velvety sweet peach flavour with 10mg CBD per piece. Pack of 5 in decorative box, 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Peach Fuzz Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-cola',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Cola Kiss',
        nameHu: 'Bubbly Billy Buds Nyalóka – Kóla',
        price: '2,990 HUF',
        shortDesc: 'Sparkling cola flavoured CBD lollipops, box of 5 with 10mg CBD per lolly.',
        shortDescHu: 'Pezsgő kóla ízű CBD nyalóka 5 db-os díszdobozban, 10mg CBD-vel.',
        fullDesc: 'Klasszikus pezsdítő kóla íz rágógumis belsővel és 10mg CBD kivonattal nyalókánként. 5 db / doboz, 100% THC-mentes.',
        fullDescEn: 'Fizzy classic cola flavour with a bubblegum core and 10mg CBD in each lolly. 5 pack gift box, 0% THC.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Cola Kiss Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-blue-rasp',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Blue Raspberry',
        nameHu: 'Bubbly Billy Buds Nyalóka – Kék Málna',
        price: '2,990 HUF',
        shortDesc: 'Vibrant blue raspberry CBD lollipops with 10mg CBD each in gift box of 5.',
        shortDescHu: 'Élénk kék málna ízű CBD nyalóka 5 db-os díszdobozban, 10mg CBD-vel.',
        fullDesc: 'Karakteres és gyümölcsös kék málna aroma 10mg tiszta CBD-vel darabonként. 5 db-os ajándékcsomag, 100% THC-mentes.',
        fullDescEn: 'Bold and fruity blue raspberry flavour infused with 10mg pure CBD per lolly. Box of 5, 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Blue Raspberry Gift Box.jpg',
        status: 'available'
    },
    {
        id: 'bbb-lollipop-sour-apple',
        machineIds: [1],
        category: 'lollipops',
        name: 'Bubbly Billy Buds Lollipops – Sour Apple',
        nameHu: 'Bubbly Billy Buds Nyalóka – Savanyú Alma',
        price: '2,990 HUF',
        shortDesc: 'Crisp sour green apple CBD lollipops with 10mg CBD each in 5 pack.',
        shortDescHu: 'Frissítő savanyú zöldalma ízű CBD nyalóka 5 db-os díszdobozban, 10mg CBD-vel.',
        fullDesc: 'Ropogós, savanykás zöldalma ízvilág és prémium kenderkivonat. 5 db 10mg-os nyalóka dobozban. 0% THC.',
        fullDescEn: 'Crisp and tangy sour apple flavour with 10mg CBD per piece. 5 lollies per gift box, 100% THC-free.',
        cbd: '10mg per Lolly (50mg total)',
        cbdHu: '10mg nyalókánként (50mg összesen)',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Bubbly Billy Buds 10mg CBD Lollipops – Sour Apple Gift Box.jpg',
        status: 'available'
    },

    // TEAS & FLOWERS (Teák és Virágok)
    {
        id: 'flower-amnesia',
        machineIds: [1],
        category: 'teas',
        name: 'Amnesia Cannabis Flower (1g, 3.1% CBD)',
        nameHu: 'Amnesia Cannabis Virág / Tea (1g, 3,1% CBD)',
        price: '2,990 HUF',
        shortDesc: 'Hand-picked dried hemp leaves & petals with citrus, lime and earthy terpenes.',
        shortDescHu: 'Kézzel szedett szárított kenderlevél és levélszirom citrusos, lime-os terpénekkel.',
        fullDesc: 'Kézzel szedett, szárított, morzsolt kenderlevél és levélszirom természetes terpénekkel (Terpinolén, Kariofilén, Béta-ocimén, Mircén, Limonén). 100%-ban természetes adalékmentes tea alapanyag. CBD: 3,1%, THC: <0,2%. 1 gramm.',
        fullDescEn: 'Hand-picked, naturally dried and crushed hemp leaves and petals with natural terpenes (Terpinolene, Caryophyllene, Limonene). Citrus and earthy aroma. CBD: 3.1%, THC: <0.2%. 1 gram.',
        cbd: '3.1% CBD',
        cbdHu: '3,1% CBD',
        thc: '<0.2% THC',
        thcHu: '<0,2% THC',
        image: 'products/extracted_images/Tea amnesia_img1.jpg',
        status: 'available'
    },
    {
        id: 'flower-gelato',
        machineIds: [1],
        category: 'teas',
        name: 'Gelato Cannabis Flower (1g, 4.1% CBD)',
        nameHu: 'Gelato Cannabis Virág / Tea (1g, 4,1% CBD)',
        price: '3,290 HUF',
        shortDesc: 'Hand-picked premium hemp flower with sweet, fruity, vanilla and spicy kush notes.',
        shortDescHu: 'Kézzel válogatott prémium kenderlevél édes gyümölcsös, vaníliás és fűszeres kush jegyekkel.',
        fullDesc: 'Kézzel szedett, természetes módon szárított és morzsolt kenderlevél-keverék gazdag terpénprofillal (Kariofilén, Limonén, Linalool, Pinén). Vaníliás édesség és citrusos harmónia. CBD: 4,1%, THC: <0,2%. 1 gramm.',
        fullDescEn: 'Hand-picked, naturally dried hemp leaves and petals with complex terpene profile (Caryophyllene, Limonene, Linalool). Sweet, fruity, vanilla and spicy kush aroma. CBD: 4.1%, THC: <0.2%. 1 gram.',
        cbd: '4.1% CBD',
        cbdHu: '4,1% CBD',
        thc: '<0.2% THC',
        thcHu: '<0,2% THC',
        image: 'products/extracted_images/Tea gelato_img1.jpg',
        status: 'available'
    },
    {
        id: 'flower-gorilla-glue',
        machineIds: [1],
        category: 'teas',
        name: 'Gorilla Glue Cannabis Flower (1g, 2.7% CBG)',
        nameHu: 'Gorilla Glue Cannabis Virág / Tea (1g, 2,7% CBG)',
        price: '3,290 HUF',
        shortDesc: 'Intense aroma hemp flower blend with diesel, sweet and spicy earthy terpenes.',
        shortDescHu: 'Intenzív aromájú kenderlevél dízeles, édeskés és mély fűszeres-földes jegyekkel.',
        fullDesc: 'Kézzel válogatott prémium kenderlevél és levélszirom gazdag terpénekkel (Kariofilén, Limonén, Linalool, Mircén, Pinén). Erőteljes és karakteres aroma. CBG/CBD: 2,7%, THC: <0,2%. 1 gramm.',
        fullDescEn: 'Hand-picked premium hemp leaves and petals featuring unique diesel, earthy, and spicy aromas with rich terpenes. CBG: 2.7%, THC: <0.2%. 1 gram.',
        cbd: '2.7% CBG',
        cbdHu: '2,7% CBG',
        thc: '<0.2% THC',
        thcHu: '<0,2% THC',
        image: 'products/extracted_images/Tea gorilla glue_img1.jpg',
        status: 'available'
    },
    {
        id: 'flower-super-lemon',
        machineIds: [1],
        category: 'teas',
        name: 'Super Lemon Haze Cannabis Flower (1g, 4.5% CBD)',
        nameHu: 'Super Lemon Haze Cannabis Virág / Tea (1g, 4,5% CBD)',
        price: '3,490 HUF',
        shortDesc: 'Refreshing citrus & grapefruit aroma with haze herbal terpenes and 4.5% CBD.',
        shortDescHu: 'Frissítő citrus, lime és grapefruit aroma haze gyógynövényes jegyekkel és 4,5% CBD-vel.',
        fullDesc: 'Gondosan válogatott kenderlevél gazdag terpénprofillal (Kariofillén, Pinén, Terpinolén, Limonén). Élénkítő citrusos és trópusi illatok. CBD: 4,5%, THC: <0,2%. 1 gramm.',
        fullDescEn: 'Naturally dried hemp leaves and petals with vibrant lemon, lime, and grapefruit terpenes. CBD: 4.5%, THC: <0.2%. 1 gram.',
        cbd: '4.5% CBD',
        cbdHu: '4,5% CBD',
        thc: '<0.2% THC',
        thcHu: '<0,2% THC',
        image: 'products/extracted_images/Tea SUPER LEMON HAZE_img1.jpg',
        status: 'available'
    },
    {
        id: 'haze-green-tea',
        machineIds: [1],
        category: 'teas',
        name: 'HaZe Cannabis Green Tea',
        nameHu: 'HaZe Cannabis Zöld Tea',
        price: '2,490 HUF',
        shortDesc: 'Soothing premium green tea blend with real hemp leaves and natural antioxidants.',
        shortDescHu: 'Nyugtató prémium zöld tea keverék valódi kenderlevéllel és antioxidánsokkal.',
        fullDesc: 'Prémium zöld tea és gondosan szárított kenderlevél aromás keveréke az amszterdami HaZe kollekcióból. Természetes antioxidánsokban gazdag, nyugtató élmény. 100% THC-mentes.',
        fullDescEn: 'Premium green tea blended with aromatic hemp leaves from the Amsterdam HaZe collection. Rich in natural antioxidants, 100% THC-free.',
        cbd: 'Hemp Infused',
        cbdHu: 'Kenderrel Dúsítva',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/HaZe Cannabis Green Tea.jpg',
        status: 'available'
    },

    // DRINKS (Italok)
    {
        id: 'chillo-ice-tea',
        machineIds: [1],
        category: 'drinks',
        name: 'CHILLO® Cannabis Ice Tea (0.25l)',
        nameHu: 'CHILLO® Kenderes Jegestea (0,25l)',
        price: '1,290 HUF',
        shortDesc: 'Austrian premium ice tea made with black tea, pure spring water, lemon and hemp syrup.',
        shortDescHu: 'Osztrák prémium jegestea fekete teából, forrásvízből, citromléből és kenderszirupból.',
        fullDesc: 'A CHILLO® jegestea több mint 20 éve készül Ausztriában egyedi receptúra alapján. Tiszta forrásvíz, válogatott fekete tea és kenderkivonat (5%) tökéletes harmóniája citromlével. Környezetbarát CartoCan dobozban. 100% THC- és CBD-mentes frissítő.',
        fullDescEn: 'Crafted in Austria for over 20 years. Pure spring water, black tea extract, lemon juice and 5% hemp syrup in eco-friendly CartoCan. 100% THC & CBD free refreshing taste.',
        cbd: 'Hemp Syrup Infused',
        cbdHu: 'Kendersziruppal',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/chillo üditő_img1.jpg',
        status: 'available'
    },
    {
        id: 'multitrance-ice-tea',
        machineIds: [1],
        category: 'drinks',
        name: 'Multitrance Cannabis Ice Tea (0.25l)',
        nameHu: 'Multitrance Cannabis Jegestea (0,25l)',
        price: '1,290 HUF',
        shortDesc: 'Refreshing iced tea infused with authentic cannabis extracts from Amsterdam.',
        shortDescHu: 'Frissítő jegestea autentikus amszterdami kannabisz kivonattal.',
        fullDesc: 'Eredeti holland jegestea természetes kenderkivonattal és gyümölcsös frissességgel. Tökéletes felfrissülés a nap bármely szakában. 100% THC-mentes.',
        fullDescEn: 'Original Dutch cannabis iced tea with natural hemp extracts and refreshing flavour. 100% THC-free, Made in EU.',
        cbd: 'Hemp Extract Infused',
        cbdHu: 'Kenderkivonattal',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/images/Multitrance Cannabis Ice Tea.jpg',
        status: 'available'
    },
    {
        id: 'reset-after-drink',
        machineIds: [1],
        category: 'drinks',
        name: 'Reset AfterDrink Recovery Formula',
        nameHu: 'Reset AfterDrink Regeneráló Ital',
        price: '2,990 HUF',
        shortDesc: 'Two-component recovery drink with 2000mg Vitamin C, L-Cysteine, Glutathione & Choline.',
        shortDescHu: 'Kétkomponensű éjszakai regeneráló ital 2000mg C-vitaminnal, L-ciszteinnel, glutationnal.',
        fullDesc: 'Kétkomponensű prémium ital alkoholfogyasztás után, lefekvés előtt. A kupakban lévő por (C-vitamin 2000mg, B-vitamin komplex, L-cisztein 2143mg, L-glutation 357mg) és a palackban lévő folyadék (L-aszparagin, kolin) összekeverésével azonnali méregtelenítést és másnaposság-megelőzést biztosít. 85g.',
        fullDescEn: 'Two-component advanced recovery drink taken before sleep. Combines powder in cap (2000mg Vitamin C, L-Cysteine, L-Glutathione, B-vitamins) with liquid in bottle (L-Asparagine, Choline) for maximum hangover relief. 85g.',
        cbd: 'Recovery Formula',
        cbdHu: 'Regeneráló Formula',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/RESET AFTER DRINK _img1.jpg',
        status: 'available'
    },
    {
        id: 'reset-after-mix',
        machineIds: [1],
        category: 'drinks',
        name: 'Reset AfterMix Recovery Powder (12.8g)',
        nameHu: 'Reset AfterMix Regeneráló Italpor (12,8g)',
        price: '2,490 HUF',
        shortDesc: 'Dual-sachet recovery drink mix with Vitamin C, Silybin phytosome, L-theanine & Zinc.',
        shortDescHu: 'Két tasakos italpor C-vitaminnal, máriatövis szilibinnel, L-teaninnal és cinkkel.',
        fullDesc: 'Két tasakos (A és B komponens) italpor formula lefekvés előtt. 1779mg C-vitamin, B-vitaminok, cink, máriatövis kivonat, L-teanin, gyömbérpor és L-glutation a másnaposság elleni védelemért. 12,8g.',
        fullDescEn: 'Dual-sachet recovery drink mix (Components A & B) containing 1779mg Vitamin C, B-vitamins, Zinc, Milk Thistle Silybin, L-Theanine, Ginger and L-Glutathione. 12.8g.',
        cbd: 'Recovery Formula',
        cbdHu: 'Regeneráló Formula',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/RESET AFTER MIX leírás_img1.jpg',
        status: 'available'
    },

    // CAPSULES & WELLNESS (Kapszulák & Wellness)
    {
        id: 'happy-caps-energy',
        machineIds: [1],
        category: 'capsules',
        name: 'Happy Caps Energy-E (4 Capsules)',
        nameHu: 'Happy Caps Energy-E Kapszula (4 db)',
        price: '2,990 HUF',
        shortDesc: 'Natural energizing herbal formula with Beta Alanine, Guarana, Rhodiola & L-Arginine.',
        shortDescHu: 'Természetes növényi energizáló formula béta-alaninnal, guaranával és rózsagyökérrel.',
        fullDesc: 'Erőteljes természetes gyógynövény formula az egész éjszakás lendületért vagy stresszes napok utáni feltöltődésért. Hatóanyagok: Béta Alanin (195mg), L-Arginin (90mg), Rhodiola Rosea (80mg), Guarana (80mg koffeinnel), Bioperine és vitaminkomplex. 4 kapszula / csomag.',
        fullDescEn: 'Natural herbal formula with Beta Alanine (195mg), L-Arginine, Rhodiola Rosea, Guarana, and Bioperine for an intense natural energy boost. 4 capsules per pack.',
        cbd: 'Herbal Formula',
        cbdHu: 'Gyógynövény Formula',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Happy caps ENERGY E kapszula_img1.jpg',
        status: 'available'
    },
    {
        id: 'happy-caps-euphory',
        machineIds: [1],
        category: 'capsules',
        name: 'Happy Caps Euphory-E (4 Capsules)',
        nameHu: 'Happy Caps Euphory-E Kapszula (4 db)',
        price: '2,990 HUF',
        shortDesc: 'Mood-enhancing euphoric formula with Kanna 10x extract, Guarana & Theobromine.',
        shortDescHu: 'Hangulatjavító eufórikus formula 10x Kanna kivonattal, guaranával és teobrominnal.',
        fullDesc: 'Érezd magad energikusnak és jókedvűnek az Euphory-E gyógynövény kapszulákkal. Hatóanyagok: Guarana kivonat (150mg), Kanna 10x kivonat (110mg), Teobromin (50mg), Szinéfrin (20mg). 4 kapszula / csomag.',
        fullDescEn: 'Uplifting and euphoric herbal blend featuring Kanna 10x extract (110mg), Guarana (150mg), Theobromine (50mg) and Synephrine. 4 capsules per pack.',
        cbd: 'Herbal Formula',
        cbdHu: 'Gyógynövény Formula',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Happy caps EUPHORY caps_img1.jpg',
        status: 'available'
    },
    {
        id: 'happy-caps-party',
        machineIds: [1],
        category: 'capsules',
        name: 'Happy Caps Party-E (4 Capsules)',
        nameHu: 'Happy Caps Party-E Kapszula (4 db)',
        price: '2,990 HUF',
        shortDesc: 'Party mood booster with Green Tea extract, Yerba Mate, Caffeine & L-Tyrosine.',
        shortDescHu: 'Buli hangulatfokozó formula zöld tea kivonattal, yerba matéval és L-tirozinnal.',
        fullDesc: 'Fokozd a buli hangulatot a Party-E kapszulákkal! 1-2 kapszula után készen állsz a beszélgetésre és az egész éjszakás táncra. Zöld tea kivonat (306mg), koffein (80mg), L-tirozin (50mg), Yerba Mate (33mg), gyömbér és B-vitaminok. 4 kapszula / csomag.',
        fullDescEn: 'Herbal party formula with Green Tea extract (306mg), Caffeine (80mg), L-Tyrosine (50mg), Yerba Mate (33mg), and vitamins for non-stop social energy. 4 capsules per pack.',
        cbd: 'Herbal Formula',
        cbdHu: 'Gyógynövény Formula',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Happy caps PARTY caps_img1.jpg',
        status: 'available'
    },
    {
        id: 'cannadom-condoms',
        machineIds: [1],
        category: 'capsules',
        name: 'Cannadom Marijuana Condoms',
        nameHu: 'Cannadom Kender Ízesítésű Óvszer',
        price: '1,990 HUF',
        shortDesc: 'Quirky cannabis-inspired lime-green condoms in a 3-pack.',
        shortDescHu: 'Különleges kender ízesítésű zöld színű prémium óvszer 3 db-os csomagban.',
        fullDesc: 'Dobd fel a szerelmi életedet a különleges Cannadom kender ízesítésű óvszerrel! Lime zöld csomagolás 3 darab prémium minőségű, biztonságos és vicces óvszerrel. 100% THC-mentes.',
        fullDescEn: 'Cannabis-inspired flavoured condoms in bold lime-green packaging. Safe, fun, and unique keepsake or cheeky gift. Pack of 3.',
        cbd: 'Cannabis Aroma',
        cbdHu: 'Kannabisz Aroma',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Cannadom óvszer 3db-os_img1.jpg',
        status: 'available'
    },

    // DEXTROSE (Szőlőcukor)
    {
        id: 'multitrance-dextrose-mint',
        machineIds: [1],
        category: 'dextrose',
        name: 'Multitrance Cannabis Dextrose Roll – Peppermint',
        nameHu: 'Multitrance Kenderes Szőlőcukor Roll – Borsmenta',
        price: '790 HUF',
        shortDesc: 'Instant energy dextrose candy roll with peppermint and genuine cannabis extracts.',
        shortDescHu: 'Azonnali energiát adó mentolos szőlőcukor korongok valódi kenderkivonattal.',
        fullDesc: 'Kiváló kombinációja a tiszta szőlőcukornak, a hűsítő borsmentának és a természetes kenderkivonatnak. 14 szem / henger, 21g. Ideális gyors energialöket a nap bármely pillanatában. 100% THC-mentes.',
        fullDescEn: 'Sensational combination of cannabis extract and peppermint flavour in an instant energy dextrose roll. 14 candies per roll (21g), 100% THC-free.',
        cbd: 'Hemp Seed Oil',
        cbdHu: 'Kendermagolaj',
        thc: '0% THC',
        thcHu: '0% THC',
        image: 'products/extracted_images/Multitrance szolocukor peppermint_img1.jpg',
        status: 'available'
    }
];

// Helper to get active machine ID from URL query parameters
function getActiveMachineId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? Number(id) : 1;
}

let currentCategory = null;

function renderProducts(categoryId) {
    currentCategory = categoryId;
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
    const machineId = getActiveMachineId();
    const isHu = lang === 'hu';

    // Filter products by active machine and category
    const products = productsDatabase.filter(product => {
        const matchesCategory = product.category === categoryId;
        const matchesMachine = product.machineIds && product.machineIds.includes(machineId);
        return matchesCategory && matchesMachine;
    });

    if (products.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center">
                <p class="text-lg text-emerald-200/60 font-medium">
                    ${isHu ? 'Ebben a kategóriában jelenleg nincs elérhető termék ebben az automatában.' : 'No products currently available in this category for this machine.'}
                </p>
            </div>
        `;
        return;
    }

    grid.innerHTML = products.map(product => {
        const name = isHu ? product.nameHu : product.name;
        const shortDesc = isHu ? product.shortDescHu : product.shortDesc;
        const cbd = isHu ? product.cbdHu : product.cbd;
        const isComingSoon = product.status === 'coming-soon';

        return `
            <div class="product-card group cursor-pointer" onclick="openProductModal('${product.id}')">
                <div class="relative overflow-hidden bg-black/40 rounded-t-2xl" style="height: 280px;">
                    <img src="${product.image}" alt="${name}" loading="lazy" class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500">
                    ${isComingSoon ? `
                        <div class="absolute top-3 right-3">
                            <span class="badge-coming-soon text-xs">${isHu ? 'Hamarosan' : 'Coming Soon'}</span>
                        </div>
                    ` : `
                        <div class="absolute top-3 right-3">
                            <span class="badge-available text-xs">${isHu ? 'Készleten' : 'In Stock'}</span>
                        </div>
                    `}
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <span class="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-xl text-sm font-bold transform translate-y-3 group-hover:translate-y-0 transition-transform shadow-lg">
                            ${isHu ? 'Részletek megtekintése' : 'View Details'}
                        </span>
                    </div>
                </div>
                <div class="p-5 space-y-3">
                    <h3 class="font-bold text-white text-base md:text-lg group-hover:text-emerald-300 transition-colors font-display line-clamp-2 min-h-[3rem]">${name}</h3>
                    <p class="text-emerald-100/70 text-xs line-clamp-2 leading-relaxed min-h-[2.5rem]">${shortDesc}</p>
                    <div class="pt-2 border-t border-emerald-900/30">
                        <span class="text-xs text-emerald-300 font-medium bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg inline-block">${cbd}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }

    if (typeof window.observeAnimatedElements === 'function') {
        window.observeAnimatedElements();
    }
}

function openProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
    const isHu = lang === 'hu';
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // Store current product for carousel
    window.currentProduct = product;
    window.currentImageIndex = 0;

    // Check if product has multiple images
    const hasMultipleImages = product.images && product.images.length > 1;

    // Populate modal content
    const imgEl = document.getElementById('modalImage');
    if (imgEl) {
        imgEl.src = hasMultipleImages ? product.images[0] : product.image;

        // Always enable zoom for images (both carousel and single)
        imgEl.onclick = function() { openImageZoom(this.src); };
        imgEl.classList.add('cursor-zoom-in');
        imgEl.classList.remove('cursor-pointer');
    }

    // Show/hide carousel controls
    const carouselControls = document.getElementById('carouselControls');
    if (carouselControls) {
        if (hasMultipleImages) {
            carouselControls.classList.remove('hidden');
            updateCarouselIndicator();
        } else {
            carouselControls.classList.add('hidden');
        }
    }

    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = isHu ? product.nameHu : product.name;

    const catEl = document.getElementById('modalCategory');
    if (catEl && currentCategory && categoriesData[currentCategory]) {
        catEl.textContent = isHu ? categoriesData[currentCategory].nameHu : categoriesData[currentCategory].name;
    }

    const shortDescEl = document.getElementById('modalShortDesc');
    if (shortDescEl) shortDescEl.textContent = isHu ? product.shortDescHu : product.shortDesc;

    const fullDescEl = document.getElementById('modalFullDesc');
    if (fullDescEl) {
        fullDescEl.textContent = isHu ? product.fullDesc : (product.fullDescEn || product.fullDesc);
    }

    const cbdEl = document.getElementById('modalCBD');
    if (cbdEl) cbdEl.textContent = isHu ? product.cbdHu : product.cbd;

    const cbdLabelEl = document.getElementById('modalCBDLabel');
    if (cbdLabelEl) cbdLabelEl.textContent = isHu ? 'Hatóanyag / CBD' : 'CBD / Active Ingredient';

    const thcLabelEl = document.getElementById('modalTHCLabel');
    if (thcLabelEl) thcLabelEl.textContent = isHu ? 'THC Tartalom' : 'THC Content';

    const thcEl = document.getElementById('modalTHC');
    if (thcEl) thcEl.textContent = isHu ? product.thcHu : product.thc;

    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.textContent = isHu ? 'Bezár' : 'Close';

    const detailsToggle = document.getElementById('detailsToggle');
    if (detailsToggle) detailsToggle.textContent = isHu ? 'Teljes Leírás' : 'Full Description';

    const badge = document.getElementById('modalBadge');
    if (badge) {
        if (product.status === 'coming-soon') {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }

    // Reset details expansion
    const details = document.getElementById('modalDetails');
    const detailsIcon = document.getElementById('detailsIcon');
    if (details) details.classList.add('hidden');
    if (detailsIcon) detailsIcon.style.transform = 'rotate(0deg)';

    // Show modal cleanly
    modal.classList.remove('hidden', 'pointer-events-none');
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.classList.remove('modal-exit');
        modalContent.classList.add('modal-enter');
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.classList.remove('modal-enter');
        modalContent.classList.add('modal-exit');
    }

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 250);
}

function toggleDetails() {
    const details = document.getElementById('modalDetails');
    const icon = document.getElementById('detailsIcon');
    if (!details) return;

    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        details.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

function findProductById(id) {
    return productsDatabase.find(p => p.id === id) || null;
}

// Image Zoom Functions
function openImageZoom(src) {
    const modal = document.getElementById('imageZoomModal');
    if (!modal) return;

    const img = modal.querySelector('img');
    if (img) img.src = src;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    if (!modal) return;

    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Carousel Functions
function nextImage() {
    if (!window.currentProduct || !window.currentProduct.images) return;

    window.currentImageIndex = (window.currentImageIndex + 1) % window.currentProduct.images.length;
    updateCarouselImage();
}

function prevImage() {
    if (!window.currentProduct || !window.currentProduct.images) return;

    window.currentImageIndex = (window.currentImageIndex - 1 + window.currentProduct.images.length) % window.currentProduct.images.length;
    updateCarouselImage();
}

function updateCarouselImage() {
    if (!window.currentProduct || !window.currentProduct.images) return;

    const imgEl = document.getElementById('modalImage');
    if (imgEl) {
        imgEl.src = window.currentProduct.images[window.currentImageIndex];
    }

    updateCarouselIndicator();
}

function updateCarouselIndicator() {
    if (!window.currentProduct || !window.currentProduct.images) return;

    const indicator = document.getElementById('carouselIndicator');
    if (indicator) {
        indicator.textContent = `${window.currentImageIndex + 1} / ${window.currentProduct.images.length}`;
    }
}

// Close modal on background click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (modal && e.target === modal) {
        closeProductModal();
    }
});

// Close image zoom with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const zoomModal = document.getElementById('imageZoomModal');
        if (zoomModal && !zoomModal.classList.contains('hidden')) {
            closeImageZoom();
        }
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});
