// =====================
// YEAR
// =====================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =====================
// MOBILE MENU TOGGLE
// =====================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close menu when a nav link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

// =====================
// SCROLL HEADER EFFECT
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
// EXPAND / COLLAPSE PROJECT DETAILS
// =====================
document.querySelectorAll(".expand-btn").forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        const isOpen = details.classList.toggle("open");
        button.textContent = isOpen ? "Hide Details" : "View Details";
    });
});

// =====================
// PHOTO GALLERY LIGHTBOX
// =====================
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('img-overlay');
        overlay.innerHTML = `<img src="${img.src}" alt="">`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());
    });
});
