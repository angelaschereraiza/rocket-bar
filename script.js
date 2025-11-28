/* ===========================
   Rocket Bar - script.js
=========================== */

const track            = document.querySelector('.carousel-track');
const prevButton       = document.querySelector('.prev');
const nextButton       = document.querySelector('.next');
const lightbox         = document.getElementById('lightbox');
const lightboxImg      = document.querySelector('.lightbox-img');
const closeBtn         = document.querySelector('.lightbox .close');

const sectionTitles     = document.querySelectorAll('h2[data-key]');
const aboutText         = document.querySelector('.about-text');
const contactItems      = document.querySelectorAll('.contact-item h3');
const drinkCards        = document.querySelectorAll('.drink-card');
const languageSelectors = document.querySelectorAll('.language-selector');

const userLang = navigator.language ? navigator.language.slice(0,2) : 'de';
const supported = ['de','fr','en'];

/* -------- Carousel state -------- */
const totalImages = 7;    
let srcList = [];          
let visibleSlides = 1;      
let gapPx = 0;              
let slideWidth = 0;       
let stepPx = 0;           
let cloneCount = 0;         
let internalIndex = 0;      
let isTransitioning = false;

function getTrackGap() {
    if (!track) return 0;
    const cs = getComputedStyle(track);
    const gap = cs.gap || cs.columnGap || cs.rowGap || '16px';
    return parseFloat(gap) || 0;
}

function computeMeasurements() {
    if (!track) return;
    gapPx = getTrackGap();
    const first = track.querySelector('img');
    if (!first) return;
    slideWidth = Math.round(first.getBoundingClientRect().width);
    stepPx = Math.round(slideWidth + gapPx);
    visibleSlides = Math.max(1, Math.floor(track.clientWidth / (slideWidth + 0.0001)));
    cloneCount = visibleSlides; 
}

/* -------- Build / rebuild carousel -------- */
function buildCarousel() {
    if (!track) return;

    srcList = [];
    for (let i = 1; i <= totalImages; i++) {
        srcList.push(`images/bild_${i}.jpg`);
    }

    track.innerHTML = '';

    srcList.forEach(src => {
        const img = document.createElement('img');
        img.className = 'carousel-img';
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        track.appendChild(img);
    });

    requestAnimationFrame(() => {
        computeMeasurements();

        const originals = Array.from(track.children).slice(0, srcList.length);
        const cc = Math.min(cloneCount, srcList.length);
        const lastItems = originals.slice(-cc);
        lastItems.forEach(node => {
            const clone = node.cloneNode(true);
            clone.classList.add('clone');
            track.insertBefore(clone, track.firstChild);
        });

        const firstItems = originals.slice(0, cc);
        firstItems.forEach(node => {
            const clone = node.cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
        });

        internalIndex = cc;

        track.style.transition = 'none';
        track.style.transform = `translateX(-${internalIndex * stepPx}px)`;

        setTimeout(() => {
            track.style.transition = '';
            attachSlideClickListeners(); 
            attachTransitionEnd();        
        }, 20);
    });
}

/* -------- Slide click -> Lightbox -------- */
function attachSlideClickListeners() {
    const imgs = track.querySelectorAll('img');
    imgs.forEach(img => {
        img.onclick = () => {
            if (!lightbox || !lightboxImg) return;
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden';
        };
    });
}

/* -------- transitionend handler (fix Jump when hitting clones) -------- */
function attachTransitionEnd() {
    track.removeEventListener('transitionend', onTransitionEnd);
    track.addEventListener('transitionend', onTransitionEnd);
}

function onTransitionEnd() {
    isTransitioning = false;
    const n = srcList.length;

    if (internalIndex < 0) {
        internalIndex = n - 1;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
        track.offsetHeight;
        track.style.transition = '';
    }

    if (internalIndex >= n) {
        internalIndex = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
        track.offsetHeight;
        track.style.transition = '';
    }
}

/* -------- Buttons: Prev / Next -------- */
function prevClick() {
    if (isTransitioning) return;
    isTransitioning = true;
    internalIndex--;
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
}

function nextClick() {
    if (isTransitioning) return;
    isTransitioning = true;
    internalIndex++;
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
}

/* -------- Attach button listeners -------- */
function attachButtonListeners() {
    if (prevButton) {
        prevButton.removeEventListener('click', prevClick);
        prevButton.addEventListener('click', prevClick);
    }
    if (nextButton) {
        nextButton.removeEventListener('click', nextClick);
        nextButton.addEventListener('click', nextClick);
    }
}

/* -------- Rebuild on resize -------- */
let resizeTimeout = null;
function handleResize() {
    if (!track) return;
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const oldVisible = cloneCount;
        computeMeasurements();
        const newVisible = Math.min(visibleSlides, srcList.length);
        if (newVisible !== oldVisible) {
            buildCarousel();
            attachButtonListeners();
        } else {
            track.style.transition = 'none';
            track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
            track.offsetHeight;
            track.style.transition = '';
        }
    }, 150);
}

/* -------- Add images to track initially and wait for load, then build carousel -------- */
function initImagesAndCarousel() {
    if (!track) return;

    srcList = [];
    for (let i = 1; i <= totalImages; i++) {
        srcList.push(`images/bild_${i}.jpg`);
    }

    track.innerHTML = '';
    const imgs = [];
    srcList.forEach(src => {
        const img = document.createElement('img');
        img.className = 'carousel-img';
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        track.appendChild(img);
        imgs.push(img);
    });

    // Wait until all images either loaded or error
    let done = 0;
    function oneDone() {
        done++;
        if (done >= imgs.length) {
            setTimeout(() => {
                computeMeasurements();
                buildCarousel();
                attachButtonListeners();
                window.addEventListener('resize', handleResize);
            }, 30);
        }
    }
    imgs.forEach(img => {
        if (img.complete) {
            oneDone();
        } else {
            img.addEventListener('load', oneDone, { once: true });
            img.addEventListener('error', oneDone, { once: true });
        }
    });
}

/* -------- Lightbox close handling -------- */
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (!lightbox) return;
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    });
}
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

/* -------- Start everything -------- */
initImagesAndCarousel();
/* -------- Translations -------- */
const translations = {
    de: {
        nav: ['Über uns', 'Bilder', 'Getränke'],
        titles: { about: 'Über uns', pictures: 'Bilder', drinks: 'Unsere Drinks' },
        about: "Willkommen in der <strong>Rocket Bar</strong>, wo Metal, Rock und gute Drinks verschmelzen. Inmitten der Berner Altstadt bieten wir eine Atmosphäre, in der du dich wie zu Hause fühlst, mit lauter Musik, kaltem Bier und heissen Riffs.",
        contact: ['Adresse', 'Öffnungszeiten', 'Telefon & E-Mail', 'Folge uns'],
        drinks: [
            { name: 'Rocket Mule', desc: 'Wodka • Limette • Ginger Beer' },
            { name: 'Whisky Sour', desc: 'Whisky • Zitronensaft • Zuckersirup' },
            { name: 'Hausbier', desc: "Bern's Finest Craft Brew" }
        ]
    },
    fr: {
        nav: ['À propos', 'Images', 'Boissons'],
        titles: { about: 'À propos', pictures: 'Images', drinks: 'Nos Boissons' },
        about: "Bienvenue au <strong>Rocket Bar</strong>, où le Metal, le Rock et de bons drinks se rencontrent. Au cœur de la vieille ville de Berne, nous offrons une atmosphère où vous vous sentirez chez vous, avec de la musique forte, de la bière fraîche et des riffs brûlants.",
        contact: ['Adresse', 'Horaires', 'Téléphone & E-mail', 'Suivez-nous'],
        drinks: [
            { name: 'Rocket Mule', desc: 'Vodka • Citron vert • Ginger Beer' },
            { name: 'Whisky Sour', desc: 'Whisky • Jus de citron • Sirop de sucre' },
            { name: 'Bière maison', desc: 'Meilleure bière artisanale de Berne' }
        ]
    },
    en: {
        nav: ['About', 'Pictures', 'Drinks'],
        titles: { about: 'About', pictures: 'Pictures', drinks: 'Our Drinks' },
        about: "Welcome to <strong>Rocket Bar</strong>, where Metal, Rock, and great drinks come together. In the heart of Bern's Old Town, we offer an atmosphere where you feel at home, with loud music, cold beer, and hot riffs.",
        contact: ['Address', 'Opening Hours', 'Phone & Email', 'Follow us'],
        drinks: [
            { name: 'Rocket Mule', desc: 'Vodka • Lime • Ginger Beer' },
            { name: 'Whisky Sour', desc: 'Whisky • Lemon Juice • Sugar Syrup' },
            { name: 'House Beer', desc: "Bern's Finest Craft Brew" }
        ]
    }
};

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('language', lang);

    document.querySelectorAll('nav').forEach(nav => {
        const links = nav.querySelectorAll('a');
        for (let i = 0; i < Math.min(3, links.length); i++) {
            links[i].textContent = translations[lang].nav[i];
        }
    });

    sectionTitles.forEach(title => {
        const key = title.dataset.key.split('-')[0];
        if (translations[lang].titles && translations[lang].titles[key]) {
            title.textContent = translations[lang].titles[key];
        }
    });

    if (aboutText) aboutText.innerHTML = translations[lang].about;

    drinkCards.forEach((card, i) => {
        if (translations[lang].drinks[i]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = translations[lang].drinks[i].name;
            if (p) p.textContent = translations[lang].drinks[i].desc;
        }
    });

    contactItems.forEach((item, i) => {
        if (translations[lang].contact[i]) item.textContent = translations[lang].contact[i];
    });

    languageSelectors.forEach(sel => {
        const selectedDiv = sel.querySelector('.selected');
        const option = sel.querySelector(`.options li[data-value="${lang}"]`);
        if (selectedDiv && option) selectedDiv.textContent = option.textContent;
    });
}

/* -------- language selector behavior -------- */
languageSelectors.forEach(sel => {
    const selected = sel.querySelector('.selected');
    const options = sel.querySelectorAll('.options li');

    selected && selected.addEventListener('click', (e) => {
        e.stopPropagation();
        sel.classList.toggle('open');
        sel.querySelector('.options').classList.toggle('show');
    });

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.value;
            setLanguage(lang);
            document.querySelectorAll('.language-selector .options').forEach(o => o.classList.remove('show'));
            document.querySelectorAll('.language-selector').forEach(s => s.classList.remove('open'));
        });
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.language-selector .options').forEach(o => o.classList.remove('show'));
    document.querySelectorAll('.language-selector').forEach(s => s.classList.remove('open'));
});

/* -------- initialize language from localStorage or browser -------- */
let initialLang = localStorage.getItem('language');
if (!initialLang) {
    initialLang = supported.includes(userLang) ? userLang : 'de';
    localStorage.setItem('language', initialLang);
}
setLanguage(initialLang);

languageSelectors.forEach(sel => {
    const selVal = localStorage.getItem('language') || initialLang;
    const initialOption = sel.querySelector(`.options li[data-value="${selVal}"]`);
    const selectedDiv = sel.querySelector('.selected');
    if (selectedDiv && initialOption) selectedDiv.textContent = initialOption.textContent;
});

/* -------- Hamburger Menu -------- */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

function openMobileMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.hidden = false;
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
        mobileMenu.style.transform = '';
    });
    document.body.style.overflow = 'hidden';
    const firstLink = mobileMenu.querySelector('.mobile-nav a');
    if (firstLink) firstLink.focus();
}

function closeMobileMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (mobileMenu) mobileMenu.hidden = true;
    }, 380);
}

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        if (expanded) closeMobileMenu(); else openMobileMenu();
    });
}
if (mobileClose) {
    mobileClose.addEventListener('click', () => closeMobileMenu());
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

if (mobileMenu) {
    const links = mobileMenu.querySelectorAll('.mobile-nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}
