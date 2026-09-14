const productMenuCategories = [
    { id: 'teas', name: 'Tea', nameHu: 'Tea' },
    { id: 'brownies', name: 'Brownies', nameHu: 'Brownie' },
    { id: 'gummies', name: 'Gummies', nameHu: 'Gumicukor' },
    { id: 'chewing-gum', name: 'Chewing Gum', nameHu: 'Rágógumi' },
    { id: 'chocolate', name: 'Chocolate', nameHu: 'Csokoládé' },
    { id: 'cookies', name: 'Cookies', nameHu: 'Keksz' },
    { id: 'capsules', name: 'Capsules', nameHu: 'Kapszula' },
    { id: 'dextrose', name: 'Dextrose', nameHu: 'Szőlőcukor' },
    { id: 'lollipops', name: 'Lollipops', nameHu: 'Nyalóka' },
    { id: 'drinks', name: 'Drinks', nameHu: 'Italok' },
    { id: 'oils', name: 'Oils', nameHu: 'Olajok' }
];

function renderProductMenuGroup(machineId, title, titleHu, categories) {
    const lang = typeof currentLang !== 'undefined' && currentLang ? currentLang : 'en';
    const isHu = lang === 'hu';
    const links = categories
        .map(categoryId => productMenuCategories.find(category => category.id === categoryId))
        .filter(Boolean)
        .map(category => `<a href="machine-detail.html?id=${machineId}&category=${category.id}">${isHu ? category.nameHu : category.name}</a>`)
        .join('');

    return `<div class="product-nav-group"><h3>${isHu ? titleHu : title}</h3>${links}</div>`;
}

function renderProductMenus() {
    const lang = typeof currentLang !== 'undefined' && currentLang ? currentLang : 'en';
    const productLabel = lang === 'hu' ? 'Termékek' : 'Products';
    const groups = [
        renderProductMenuGroup(1, 'Cannabox', 'Cannabox', ['teas', 'brownies', 'gummies', 'chewing-gum', 'chocolate', 'cookies', 'capsules', 'dextrose', 'lollipops', 'drinks', 'oils']),
        renderProductMenuGroup(2, 'Tyson', 'Tyson', ['gummies', 'chewing-gum', 'chocolate', 'cookies'])
    ].join('');

    document.querySelectorAll('.product-nav-menu, .mobile-product-nav-menu').forEach(menu => {
        menu.innerHTML = groups;
    });
    document.querySelectorAll('.product-nav-label, .mobile-product-nav-label').forEach(label => {
        label.textContent = productLabel;
    });
}

function addProductMenus() {
    document.querySelectorAll('nav').forEach(nav => {
        if (nav.querySelector('.product-nav')) return;
        const machineLink = nav.querySelector('[id="navMachines"]');
        if (!machineLink) return;
        const productNav = document.createElement('div');
        productNav.className = 'product-nav';
        productNav.innerHTML = `
            <button type="button" class="product-nav-toggle" aria-expanded="false">
                <span class="product-nav-label">Products</span><i data-lucide="chevron-down" class="product-nav-chevron" aria-hidden="true"></i>
            </button>
            <div class="product-nav-menu" role="menu"></div>
        `;
        machineLink.after(productNav);
        productNav.querySelector('button').addEventListener('click', () => {
            const isOpen = productNav.classList.toggle('is-open');
            productNav.querySelector('button').setAttribute('aria-expanded', String(isOpen));
        });
    });

    document.querySelectorAll('#mobileMenu').forEach(menu => {
        if (menu.querySelector('.mobile-product-nav')) return;
        const machineLink = menu.querySelector('[id="mobileNavMachines"]');
        if (!machineLink) return;
        const productNav = document.createElement('div');
        productNav.className = 'mobile-product-nav';
        productNav.innerHTML = `
            <button type="button" class="flex w-full items-center justify-between rounded-xl px-5 py-3 text-left text-gray-300 transition-colors hover:bg-emerald-900/10 hover:text-white" aria-expanded="false">
                <span class="mobile-product-nav-label">Products</span><i data-lucide="chevron-down" class="product-nav-chevron" aria-hidden="true"></i>
            </button>
            <div class="mobile-product-nav-menu"></div>
        `;
        machineLink.after(productNav);
        productNav.querySelector('button').addEventListener('click', () => {
            const isOpen = productNav.classList.toggle('is-open');
            productNav.querySelector('button').setAttribute('aria-expanded', String(isOpen));
        });
    });

    renderProductMenus();
    if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', addProductMenus);