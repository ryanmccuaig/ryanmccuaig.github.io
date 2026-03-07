// =====================
// YEAR
// =====================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =====================
// MOBILE MENU (slide-in)
// =====================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.nav-overlay');

function openMenu() {
    if (navLinks) navLinks.classList.add('show');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (navLinks) navLinks.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
}

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.contains('show') ? closeMenu() : openMenu();
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

if (overlay) {
    overlay.addEventListener('click', closeMenu);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// =====================
// SCROLL HEADER
// =====================
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
    });
}

// =====================
// ACTIVE NAV LINK
// =====================
(function () {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();

// =====================
// EXPAND / COLLAPSE
// =====================
document.querySelectorAll(".expand-btn").forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        const isOpen = details.classList.toggle("open");
        button.textContent = isOpen ? "Hide Details" : "View Details";
    });
});

// =====================
// LIGHTBOX
// =====================
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('img-overlay');
        lightbox.innerHTML = `<img src="${img.src}" alt="">`;
        document.body.appendChild(lightbox);

        const closeLightbox = () => lightbox.remove();
        lightbox.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', handler);
            }
        });
    });
});
