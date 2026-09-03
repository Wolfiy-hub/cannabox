// Stuck Product Modal Functions

function openStuckProductModal() {
    ensureStuckProductModal();

    const modal = document.getElementById('stuckProductModal');
    if (!modal) return;

    // Update image based on current language
    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
    const img = document.getElementById('stuckProductImage');
    if (img) {
        img.src = lang === 'hu' ? 'images/stuck_product_hu.png' : 'images/stuck_product_en.png';
        img.alt = lang === 'hu' ? 'Elakadt Termék Utasítások' : 'Stuck Product Instructions';
    }

    modal.classList.remove('hidden');
    modal.offsetHeight;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
}

function closeStuckProductModal() {
    const modal = document.getElementById('stuckProductModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

function openStuckProductZoom(src) {
    if (!src) {
        const img = document.getElementById('stuckProductImage');
        src = img ? img.src : '';
    }

    const modal = document.getElementById('stuckProductZoomModal');
    const zoomImg = document.getElementById('stuckProductZoomImage');

    if (modal && zoomImg) {
        zoomImg.src = src;
        modal.classList.remove('hidden');
        modal.offsetHeight;
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
    }
}

function closeStuckProductZoom() {
    const modal = document.getElementById('stuckProductZoomModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

function ensureStuckProductModal() {
    // Check if already exists
    if (document.getElementById('stuckProductModal')) return;

    // Get translations
    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
    const t = translations[lang] || translations['en'];

    const stuckProductTitle = t.stuckProductTitle || 'Stuck Product Information';
    const stuckProductIntro = t.stuckProductIntro || 'If your product gets stuck in the vending machine, please follow the instructions below:';
    const stuckProductClickToZoom = t.stuckProductClickToZoom || 'Click to zoom';
    const imgSrc = lang === 'hu' ? 'images/stuck_product_hu.png' : 'images/stuck_product_en.png';
    const imgAlt = lang === 'hu' ? 'Elakadt Termék Utasítások' : 'Stuck Product Instructions';

    const html = `
    <!-- Stuck Product Modal -->
    <div id="stuckProductModal" class="fixed inset-0 z-[120] hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onclick="closeStuckProductModal()">
        <div class="relative max-w-4xl w-full bg-gradient-to-b from-[#0a1810] to-[#050b08] rounded-3xl border border-emerald-700/30 p-8 max-h-[90vh] overflow-y-auto custom-scrollbar" onclick="event.stopPropagation()">
            <button onclick="closeStuckProductModal()" class="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white transition-all hover:bg-emerald-600 hover:scale-110 backdrop-blur-sm border border-white/20 shadow-lg z-10">
                <i data-lucide="x" class="h-6 w-6"></i>
            </button>

            <h2 id="stuckProductTitle" class="text-2xl md:text-3xl font-bold text-white mb-6 font-display">${stuckProductTitle}</h2>

            <div class="space-y-6">
                <p id="stuckProductIntro" class="text-emerald-100/80 leading-relaxed">
                    ${stuckProductIntro}
                </p>

                <div class="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4 md:p-6 cursor-pointer hover:bg-emerald-950/40 transition-colors" onclick="openStuckProductZoom()">
                    <img id="stuckProductImage" src="${imgSrc}" alt="${imgAlt}" class="w-full rounded-lg border border-emerald-700/30 shadow-lg" />
                    <p class="text-center text-sm text-emerald-300 mt-3">
                        <i data-lucide="zoom-in" class="w-4 h-4 inline mr-2"></i>
                        <span id="stuckProductClickToZoom">${stuckProductClickToZoom}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Stuck Product Zoom Modal -->
    <div id="stuckProductZoomModal" class="fixed inset-0 z-[130] hidden bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onclick="closeStuckProductZoom()">
        <button onclick="closeStuckProductZoom()" class="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 z-20">
            <i data-lucide="x" class="h-6 w-6"></i>
        </button>
        <img id="stuckProductZoomImage" src="" alt="Stuck Product Instructions - Zoomed" class="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl cursor-zoom-out" onclick="event.stopPropagation()" />
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            Press ESC or click outside to close
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    // Create icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Add ESC key handler
    document.addEventListener('keydown', handleStuckProductEscape);
}

function handleStuckProductEscape(e) {
    if (e.key === 'Escape') {
        const zoomModal = document.getElementById('stuckProductZoomModal');
        const mainModal = document.getElementById('stuckProductModal');

        if (zoomModal && !zoomModal.classList.contains('hidden')) {
            closeStuckProductZoom();
        } else if (mainModal && !mainModal.classList.contains('hidden')) {
            closeStuckProductModal();
        }
    }
}

// Initialize on page load if modal exists
document.addEventListener('DOMContentLoaded', function() {
    // The modal will be created when first opened via openStuckProductModal()
    // But we can pre-create it if needed for smoother UX
});
