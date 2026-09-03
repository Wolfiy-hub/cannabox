let hasScrolledToBottom = false;

function initDisclaimerScroll() {
    const content = document.getElementById('disclaimerContent');
    const checkbox = document.getElementById('disclaimerCheck');
    const enterBtn = document.getElementById('enterBtn');

    if (!content || !checkbox || !enterBtn) return;

    // Reset state
    hasScrolledToBottom = false;
    checkbox.disabled = true;
    checkbox.checked = false;
    enterBtn.disabled = true;

    function checkIfScrollNeeded() {
        // If content is short enough that no scrolling is needed, unlock immediately
        if (content.scrollHeight <= content.clientHeight + 50) {
            hasScrolledToBottom = true;
            checkbox.disabled = false;
        }
    }

    // Check after a short delay to let image load and push content height
    setTimeout(checkIfScrollNeeded, 300);

    // Also check once any image inside finishes loading
    const images = content.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            checkIfScrollNeeded();
        } else {
            img.addEventListener('load', checkIfScrollNeeded);
        }
    });

    // Check scroll position as user scrolls
    content.addEventListener('scroll', function () {
        const scrollTop = content.scrollTop;
        const scrollHeight = content.scrollHeight - content.clientHeight;

        if (scrollTop >= scrollHeight - 50 && !hasScrolledToBottom) {
            hasScrolledToBottom = true;
            checkbox.disabled = false;
            checkbox.classList.add('animate-pulse');
            setTimeout(() => checkbox.classList.remove('animate-pulse'), 1000);
        }
    });

    // Enable enter button when checked
    checkbox.addEventListener('change', () => {
        enterBtn.disabled = !checkbox.checked;
        if (checkbox.checked) {
            enterBtn.classList.add('animate-pulse');
            setTimeout(() => enterBtn.classList.remove('animate-pulse'), 500);
        }
    });
}

function acceptDisclaimer() {
    const checkbox = document.getElementById('disclaimerCheck');
    if (!checkbox || !checkbox.checked) return;

    disclaimerAccepted = true;
    sessionStorage.setItem('cannabox_disclaimer', 'true');

    const modal = document.getElementById('disclaimerModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        setTimeout(() => {
            modal.classList.add('hidden');
            if (typeof renderMachines === 'function') renderMachines();
            if (typeof initMachineDetail === 'function') initMachineDetail();
        }, 300);
    }
}

function closeDisclaimer() {
    const content = document.getElementById('disclaimerContent');
    if (content) {
        content.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Open disclaimer in viewer mode (no scroll check, direct close)
function openDisclaimerViewer() {
    ensureDisclaimerModal();

    const modal = document.getElementById('disclaimerModal');
    if (!modal) return;

    const activeLang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
    const t = translations[activeLang];

    if (t) {
        const titleEl = document.getElementById('disclaimerTitle');
        const textEl = document.getElementById('disclaimerText');

        if (titleEl) titleEl.textContent = t.disclaimerViewerTitle || t.disclaimerTitle;
        if (textEl) textEl.innerHTML = t.disclaimerText;
    }

    // Hide checkbox and agreement controls, show only close button
    const checkboxContainer = modal.querySelector('label');
    const enterBtn = document.getElementById('enterBtn');
    const scrollHint = document.getElementById('disclaimerScrollHint');

    if (checkboxContainer) checkboxContainer.style.display = 'none';
    if (scrollHint) scrollHint.style.display = 'none';

    if (enterBtn) {
        enterBtn.textContent = t?.disclaimerViewerClose || 'Close';
        enterBtn.disabled = false;
        enterBtn.onclick = closeDisclaimerViewer;
        enterBtn.style.display = 'block';
    }

    // Add zoom click handlers to disclaimer images
    addImageZoomHandlers();

    modal.classList.remove('hidden');
    modal.offsetHeight;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

function closeDisclaimerViewer() {
    const modal = document.getElementById('disclaimerModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        setTimeout(() => {
            modal.classList.add('hidden');

            // Restore normal disclaimer controls
            const checkboxContainer = modal.querySelector('label');
            const scrollHint = document.getElementById('disclaimerScrollHint');
            if (checkboxContainer) checkboxContainer.style.display = 'flex';
            if (scrollHint) scrollHint.style.display = 'flex';

            const enterBtn = document.getElementById('enterBtn');
            if (enterBtn) {
                const activeLang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (sessionStorage.getItem('cannabox_lang') || 'en');
                const t = translations[activeLang];
                enterBtn.textContent = t?.enterBtn || 'Enter Website';
                enterBtn.onclick = acceptDisclaimer;
            }
        }, 300);
    }
}

// Image zoom modal functionality
function addImageZoomHandlers() {
    const disclaimerImages = document.querySelectorAll('#disclaimerText img');

    disclaimerImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = (e) => {
            e.preventDefault();
            openImageZoom(img.src, img.alt);
        };
    });
}

function openImageZoom(src, alt) {
    ensureImageZoomModal();

    const modal = document.getElementById('imageZoomModal');
    const zoomImg = document.getElementById('zoomImage');

    if (modal && zoomImg) {
        zoomImg.src = src;
        zoomImg.alt = alt;

        modal.classList.remove('hidden');
        modal.offsetHeight;
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';

        // Enable ESC key to close
        document.addEventListener('keydown', handleZoomEscape);
    }
}

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');

    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        setTimeout(() => {
            modal.classList.add('hidden');
            const zoomImg = document.getElementById('zoomImage');
            if (zoomImg) zoomImg.src = '';
        }, 300);

        document.removeEventListener('keydown', handleZoomEscape);
    }
}

function handleZoomEscape(e) {
    if (e.key === 'Escape') {
        closeImageZoom();
    }
}

function ensureImageZoomModal() {
    if (document.getElementById('imageZoomModal')) return;

    const html = `
    <div id="imageZoomModal" class="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-opacity duration-300 opacity-0 pointer-events-none hidden">
        <button onclick="closeImageZoom()" class="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 z-20">
            <i data-lucide="x" class="h-6 w-6"></i>
        </button>

        <div class="relative max-w-7xl max-h-[90vh] w-full mx-4 overflow-auto custom-scrollbar p-4">
            <img id="zoomImage" src="" alt="" class="w-full h-auto rounded-2xl shadow-2xl border border-emerald-700/30" />
        </div>

        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            <span id="zoomHintText">Press ESC or click X to close • Scroll to pan</span>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Reset (for testing only)
function resetDisclaimer() {
    sessionStorage.removeItem('cannabox_disclaimer');
    sessionStorage.removeItem('cannabox_lang');
    location.reload();
}