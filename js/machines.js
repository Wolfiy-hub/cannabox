const featureLabels = {
    hu: {
        'Touchscreen Display': 'Érintőképernyős kijelző',
        'Card Payment': 'Bankkártyás fizetés',
        'Temperature Controlled': 'Hőmérséklet-szabályozás',
        'Real-time Stock': 'Valós idejű készlet',
        '60+ Products': '60+ prémium termék',
        'Biometric Access': 'Biometrikus hozzáférés',
        'Cash & Card': 'Készpénz és bankkártya',
        'Climate Control': 'Klímaszabályozás',
        '20 Products': '20 válogatott termék',
        'Card Only': 'Csak bankkártyás fizetés',
        'Compact Size': 'Kompakt méret',
        'Wall Mountable': 'Falra szerelhető kivitel'
    },
    en: {
        'Touchscreen Display': 'Touchscreen Display',
        'Card Payment': 'Card Payment',
        'Temperature Controlled': 'Temperature Controlled',
        'Real-time Stock': 'Real-time Stock',
        '60+ Products': '60+ Products',
        'Biometric Access': 'Biometric Access',
        'Cash & Card': 'Cash & Card',
        'Climate Control': 'Climate Control',
        '20 Products': '20 Products',
        'Card Only': 'Card Only',
        'Compact Size': 'Compact Size',
        'Wall Mountable': 'Wall Mountable'
    }
};

const machinesData = [
    {
        id: 1,
        name: 'Cannabox',
        nameHu: 'Cannabox',
        location: '1072 Budapest, Dob u. 16. (Gozsdu Udvar entrance)',
        locationHu: '1072 Budapest, Dob u. 16. (A Gozsdu Udvar bejáratánál)',
        hours: '0-24 (Non-stop)',
        hoursHu: '0-24 óráig, nonstop',
        payment: 'Card & NFC Payment',
        paymentHu: 'Bankkártya és okostelefonos fizetés (NFC)',
        googleMaps: 'https://www.google.com/maps/place/CANNABIS-+CANNABOX+CBD+VENDING+MACHINE/@47.4990768,19.0553946,17z/data=!4m10!1m2!2m1!1scannabox!3m6!1s0x4741dd7da9aff23d:0x6ac78ed7fda5cefb!8m2!3d47.498602!4d19.0593287!15sCghjYW5uYWJveJIBGHZlbmRpbmdfbWFjaGluZV9zdXBwbGllcuABAA!16s%2Fg%2F11yd6jm8l1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
        status: 'available',
        description: 'Our flagship smart vending machine with 40+ botanical CBD product capacity and interactive touchscreen interface.',
        descriptionHu: 'Zászlóshajó intelligens automatánk 40+ növényi CBD termékkapacitással és interaktív érintőképernyős kezelőfelülettel.',
        features: ['Touchscreen Display', 'Card Payment', 'Temperature Controlled', 'Real-time Stock'],
        categories: ['gummies', 'oils', 'capsules', 'teas', 'chocolate', 'cookies', 'brownies', 'chewing-gum', 'lollipops', 'drinks', 'dextrose']
    },
    {
        id: 2,
        name: 'Tyson',
        nameHu: 'Tyson',
        location: '1072 Budapest, Dob u. 16. (Gozsdu Udvar entrance)',
        locationHu: '1072 Budapest, Dob u. 16. (A Gozsdu Udvar bejáratánál)',
        hours: '0-24 (Non-stop)',
        hoursHu: '0-24 óráig, nonstop',
        payment: 'Card & NFC Payment',
        paymentHu: 'Bankkártya és okostelefonos fizetés (NFC)',
        googleMaps: 'https://www.google.com/maps/place/CANNABIS-+CANNABOX+CBD+VENDING+MACHINE/@47.4990768,19.0553946,17z/data=!4m10!1m2!2m1!1scannabox!3m6!1s0x4741dd7da9aff23d:0x6ac78ed7fda5cefb!8m2!3d47.498602!4d19.0593287!15sCghjYW5uYWJveZIBGHZlbmRpbmdfbWFjaGluZV9zdXBwbGllcuABAA!16s%2Fg%2F11yd6jm8l1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
        image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80',
        status: 'available',
        description: 'High-capacity luxury dispenser featuring biometric age verification, climate-controlled chambers, and multi-payment options.',
        descriptionHu: 'Nagy kapacitású luxus automata biometrikus életkor-ellenőrzéssel, klímaszabályozott rekeszekkel és többféle fizetési opcióval.',
        features: ['60+ Products', 'Biometric Access', 'Cash & Card', 'Climate Control'],
        categories: ['chocolate', 'cookies', 'gummies', 'chewing-gum']
    }
    // Commented out - Cannabox Compact not in use
    // {
    //     id: 3,
    //     name: 'Cannabox Compact',
    //     nameHu: 'Cannabox Kompakt',
    //     location: 'Debrecen, Piac utca 28.',
    //     locationHu: 'Debrecen, Piac utca 28.',
    //     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    //     status: 'coming-soon',
    //     description: 'Sleek and space-efficient wall-mounted unit crafted for boutique hotels, wellness centers, and exclusive venues.',
    //     descriptionHu: 'Elegáns, helytakarékos falra szerelhető egység butikhotelek, wellness központok és exkluzív helyszínek számára.',
    //     features: ['20 Products', 'Card Only', 'Compact Size', 'Wall Mountable'],
    //     categories: ['gummies', 'oils']
    // }
];

const categoriesData = {
    gummies: { name: 'CBD Gummies', nameHu: 'CBD Gumicukrok', icon: 'candy' },
    oils: { name: 'CBD Oils & Extracts', nameHu: 'CBD Olajok és Kivonatok', icon: 'droplet' },
    capsules: { name: 'Herbal Capsules', nameHu: 'Gyógynövény Kapszulák', icon: 'pill' },
    teas: { name: 'Cannabis Teas', nameHu: 'Cannabis Teák', icon: 'coffee' },
    chocolate: { name: 'Cannabis Chocolates', nameHu: 'Cannabis Csokoládék', icon: 'cookie' },
    cookies: { name: 'Cannabis Cookies', nameHu: 'Cannabis Kekszek', icon: 'cookie' },
    brownies: { name: 'Cannabis Brownies', nameHu: 'Cannabis Brownie-k', icon: 'cake' },
    'chewing-gum': { name: 'CBD Chewing Gum', nameHu: 'CBD Rágógumi', icon: 'circle' },
    lollipops: { name: 'CBD Lollipops', nameHu: 'CBD Nyalókák', icon: 'lollipop' },
    drinks: { name: 'Cannabis Drinks', nameHu: 'Cannabis Italok', icon: 'cup-soda' },
    dextrose: { name: 'Cannabis Dextrose', nameHu: 'Cannabis Szőlőcukor', icon: 'candy' }
};

function getCurrentLanguage() {
    return (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
}

function renderMachines() {
    const grid = document.getElementById('machinesGrid');
    if (!grid) return;

    const lang = getCurrentLanguage();
    const isHu = lang === 'hu';

    grid.innerHTML = machinesData.map(machine => {
        const name = isHu ? machine.nameHu : machine.name;
        const location = isHu ? machine.locationHu : machine.location;
        const description = isHu ? machine.descriptionHu : machine.description;
        const isComingSoon = machine.status === 'coming-soon';
        const featureText = (feat) => (featureLabels[lang] && featureLabels[lang][feat]) ? featureLabels[lang][feat] : feat;
        const link = isComingSoon ? 'javascript:void(0);' : `machine-detail.html?id=${machine.id}`;

        return `
            <a href="${link}" class="machine-card group block ${isComingSoon ? 'cursor-not-allowed opacity-80' : ''}">
                <div class="relative aspect-video overflow-hidden">
                    <img src="${machine.image}" alt="${name}" loading="lazy" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#050b08] via-transparent to-black/30"></div>

                    <div class="absolute right-4 top-4">
                        <span class="${isComingSoon ? 'badge-coming-soon' : 'badge-available'}">
                            <span class="w-2 h-2 rounded-full ${isComingSoon ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse"></span>
                            ${isComingSoon ? (isHu ? 'Hamarosan' : 'Coming Soon') : (isHu ? 'Elérhető' : 'Available')}
                        </span>
                    </div>

                    <div class="absolute inset-x-5 bottom-5">
                        <h3 class="text-2xl font-bold text-white mb-1.5 font-display group-hover:text-emerald-300 transition-colors">${name}</h3>
                        <div class="flex items-center gap-2 text-sm text-emerald-300/80">
                            <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                            <span>${location}</span>
                        </div>
                    </div>
                </div>

                <div class="p-6 bg-[#0a1810]/70 border-t border-emerald-900/30 space-y-4">
                    <p class="text-sm text-emerald-100/70 leading-relaxed">${description}</p>

                    <div class="flex flex-wrap gap-2 pt-1">
                        ${machine.features.map(feat => `
                            <span class="rounded-lg border border-emerald-800/40 bg-emerald-950/40 px-2.5 py-1 text-xs text-emerald-200/80 font-medium">
                                ${featureText(feat)}
                            </span>
                        `).join('')}
                    </div>

                    ${!isComingSoon ? `
                        <div class="pt-2 flex items-center justify-between text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                            <span>${isHu ? 'Készlet és Részletek megtekintése' : 'View Stock & Details'}</span>
                            <div class="w-8 h-8 rounded-lg bg-emerald-900/40 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-emerald-800/60 transition-all">
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </a>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }

    if (typeof window.observeAnimatedElements === 'function') {
        window.observeAnimatedElements();
    }
}

function getMachineById(id) {
    return machinesData.find(machine => machine.id === Number(id));
}

function renderMachineHeader(machine) {
    const header = document.getElementById('machineHeader');
    if (!header) return;

    const lang = getCurrentLanguage();
    const isHu = lang === 'hu';
    const name = isHu ? machine.nameHu : machine.name;
    const location = isHu ? machine.locationHu : machine.location;
    const description = isHu ? machine.descriptionHu : machine.description;
    const hours = isHu ? machine.hoursHu : machine.hours;
    const payment = isHu ? machine.paymentHu : machine.payment;

    header.innerHTML = `
        <div class="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden border border-emerald-700/30 shadow-2xl">
            <img src="${machine.image}" alt="${name}" class="w-full h-80 lg:h-96 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        <div class="flex-1 space-y-5">
            <div class="inline-flex items-center gap-2">
                <span class="${machine.status === 'coming-soon' ? 'badge-coming-soon' : 'badge-available'}">
                    <span class="w-2 h-2 rounded-full ${machine.status === 'coming-soon' ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse"></span>
                    ${machine.status === 'coming-soon' ? (isHu ? 'Hamarosan' : 'Coming Soon') : (isHu ? 'Aktív Automata' : 'Active Machine')}
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-white font-display tracking-tight">${name}</h1>

            <!-- Location with Google Maps -->
            <div class="space-y-3">
                <div class="flex items-center gap-2.5 text-emerald-300 font-medium">
                    <i data-lucide="map-pin" class="w-5 h-5 text-emerald-400 flex-shrink-0"></i>
                    <span class="text-base">${location}</span>
                </div>
                ${machine.hours ? `
                <div class="flex items-center gap-2.5 text-emerald-300 font-medium">
                    <i data-lucide="clock" class="w-5 h-5 text-emerald-400 flex-shrink-0"></i>
                    <span class="text-base">${hours}</span>
                </div>
                ` : ''}
                ${machine.payment ? `
                <div class="flex items-center gap-2.5 text-emerald-300 font-medium">
                    <i data-lucide="credit-card" class="w-5 h-5 text-emerald-400 flex-shrink-0"></i>
                    <span class="text-base">${payment}</span>
                </div>
                ` : ''}
                ${machine.googleMaps ? `
                <a href="${machine.googleMaps}" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/30 px-4 py-2 rounded-lg border border-emerald-800/40">
                    <i data-lucide="navigation" class="w-4 h-4"></i>
                    <span>${isHu ? 'Útvonal Tervezése' : 'Get Directions'}</span>
                </a>
                ` : ''}
            </div>

            <p class="text-base leading-relaxed text-gray-300 max-w-2xl">${description}</p>

            <div class="grid grid-cols-2 gap-3 pt-2">
                ${machine.features.map(feat => `
                    <div class="flex items-center gap-2.5 rounded-xl border border-emerald-800/30 bg-emerald-950/30 p-3">
                        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                        <span class="text-xs md:text-sm text-gray-200 font-medium">${(featureLabels[lang] && featureLabels[lang][feat]) || feat}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderCategories(machine) {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    const lang = getCurrentLanguage();
    const isHu = lang === 'hu';

    grid.innerHTML = machine.categories.map(catId => {
        const cat = categoriesData[catId];
        if (!cat) return '';
        const name = isHu ? cat.nameHu : cat.name;

        return `
            <div class="category-card cursor-pointer" onclick="showProducts('${catId}')">
                <div class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900/40 border border-emerald-700/30 text-emerald-400 shadow-inner">
                    <i data-lucide="${cat.icon}" class="h-7 w-7"></i>
                </div>
                <h3 class="font-bold text-white text-base md:text-lg mb-1">${name}</h3>
                <p class="text-xs text-emerald-400/80 font-medium">${isHu ? 'Kattintson a termékekhez →' : 'View products →'}</p>
            </div>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}

function initMachineDetail() {
    const params = new URLSearchParams(window.location.search);
    const machineId = params.get('id') || '1';

    const machine = getMachineById(machineId);
    if (!machine) {
        window.location.href = 'machines.html';
        return;
    }

    renderMachineHeader(machine);
    renderCategories(machine);
}

function showCategories() {
    const categoriesSection = document.getElementById('categoriesSection');
    const productsSection = document.getElementById('productsSection');
    if (!categoriesSection || !productsSection) return;

    categoriesSection.classList.remove('hidden');
    productsSection.classList.add('hidden');

    categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showProducts(categoryId) {
    const categoriesSection = document.getElementById('categoriesSection');
    const productsSection = document.getElementById('productsSection');
    if (!categoriesSection || !productsSection) return;

    categoriesSection.classList.add('hidden');
    productsSection.classList.remove('hidden');

    const cat = categoriesData[categoryId];
    const title = document.getElementById('productsTitle');
    if (title && cat) {
        title.textContent = getCurrentLanguage() === 'hu' ? cat.nameHu : cat.name;
    }

    if (typeof renderProducts === 'function') {
        renderProducts(categoryId);
    }

    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Auto-run on page load
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('machines.html') || document.getElementById('machinesGrid')) {
        renderMachines();
    }
    if (path.includes('machine-detail.html') || document.getElementById('machineHeader')) {
        initMachineDetail();
    }
});
