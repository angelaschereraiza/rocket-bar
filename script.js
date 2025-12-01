'use strict';

/* ==========================================
   GLOBAL CONSTANTS (DOM, CONFIG, DATA)
========================================== */

/* --- DOM Elements --- */
const CAROUSEL_CONTAINER = document.querySelector('.carousel-container');
const TRACK              = document.querySelector('.carousel-track');
const PREV_BUTTON        = document.querySelector('.prev');
const NEXT_BUTTON        = document.querySelector('.next');
const TOTAL_IMG          = 7;

const LIGHTBOX           = document.getElementById('lightbox');
const LIGHTBOX_IMG       = document.querySelector('.lightbox-img');
const CLOSE_BTN          = document.querySelector('.lightbox .close');

const SECTION_TITLES     = document.querySelectorAll('h2[data-key]');
const ABOUT_TEXT         = document.querySelector('.about-text');
const CONTACT_ITEMS      = document.querySelectorAll('.contact-item h3');
const DRINK_CARDS        = document.querySelectorAll('.drink-card');
const LANGUAGE_SELECTORS = document.querySelectorAll('.language-selector');
const DRINKS_CONTAINER   = document.getElementById('drinks-menu');
const DRINK_NOTE         = document.getElementById('drink-note');

const HAMBURGER          = document.querySelector('.hamburger');
const MOBILE_MENU        = document.getElementById('mobile-menu');
const MOBILE_CLOSE       = document.querySelector('.mobile-close');

/* --- App Config --- */
const USER_LANG          = navigator.language ? navigator.language.slice(0, 2) : 'de';
const SUPPORTED_LANGS    = ['de', 'fr', 'en'];

/* --- Translations --- */
const TRANSLATIONS = {
  de: {
    nav: ['Über uns', 'Bilder', 'Getränke'],
    titles: { about: 'Über uns', pictures: 'Bilder', drinks: 'Unsere Drinks' },
    about: "Willkommen in der Rocket Bar, wo Metal, Rock und gute Drinks verschmelzen. Inmitten der Berner Altstadt und nur wenige Schritte vom Berner Hauptbahnhof entfernt, bieten wir eine Atmosphäre, in der du dich wie zu Hause fühlst, mit lauter Musik, kaltem Bier und heissen Riffs.",
    contact: ['Adresse', 'Öffnungszeiten', 'Telefon & E-Mail', 'Folge uns'],
    drink_note: "Alle Preise in CHF inkl. 8.1% MWST",
    drinks: [
      {
        category: 'Bier in der Flasche',
        items: [
          { name: 'Valaisanne Bière De Cave',  desc: '3.3 dl | 5.4% (CH)',   price: '7.00' },
          { name: 'Grimbergen Ambrée',         desc: '2.5 dl | 6.5% (BE)',   price: '7.00' },
          { name: 'Brooklyn Stonewall Inn IPA',desc: '3.3 dl | 4.6% (US)',   price: '7.00' },
          { name: 'Superbock Unfiltered',      desc: '3.3 dl | 4.9% (PT)',   price: '6.00' },
          { name: 'Coruja IPA',                desc: '3.3 dl | 6.0% (PT)',   price: '7.00' },
          { name: 'Corona',                    desc: '3.3 dl | 4.6% (MEX)',  price: '7.00' },
          { name: 'Alhambra',                  desc: '3.3 dl | 6.4% (GRA)',  price: '8.00' },
          { name: "Cooper's Pale Ale",         desc: '3.3 dl | 5.1% (AUS)',  price: '7.00' },
          { name: 'Lush',                      desc: '3.3 dl | 5.3% (NOR)',  price: '9.00' },
          { name: 'Orval',                     desc: '3.3 dl | 6.2% (BE)',   price: '8.00' },
          { name: 'Andechs Weissbier',         desc: '5 dl | 5.5% (DE)',     price: '9.00' },
          { name: 'Schlenkerla Rauchbier',     desc: '5 dl | 5.5% (DE)',     price: '9.00' },
          { name: 'Brewdog Wingman IPA',       desc: '3.3 dl | 4.3% (SCO)',  price: '7.00' },
          { name: 'Astra Kiezmische',          desc: '3.3 dl | 2.5% (DE)',   price: '6.00' },
          { name: 'Möhl Saft vom Fass',        desc: '5 dl | 2.5% (CH)',     price: '9.00' },
          { name: 'Smirnoff Ice',              desc: '3.3 dl | 4% (GB)',     price: '7.00' },
          { name: 'White Claw Hard Seltzer',   desc: '3.3 dl | 4.5% (USA)',  price: '8.00' },
          { name: 'Cardinal Alkoholfrei',      desc: '3.3 dl | 0.0% (CH)',   price: '6.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)', price: '7.00' }
        ]
      },
      {
        category: 'Bier vom Fass',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',          desc: '4.8%',      price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',      desc: '6.0%',      price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",     desc: '3.8%',      price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught',    desc: '5.0%',      price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',   desc: '24%', price: '6.00' },
          { name: 'Minttu',     desc: '35%', price: '6.00' },
          { name: "Shanky's Whip", desc: '33%', price: '6.00' },
          { name: 'Nebula Shot', desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',    desc: '17%', price: '6.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Zuckersirup', price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | Blueberry | Basil | Sweet&Sour', price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso', price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rum | Cointreau | Bols Blue', price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basil | Sweet&Sour', price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet&Sour',    price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet&Sour',      price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',    price: '17.00' }
        ]
      },
      {
        category: 'Longdrinks',
        items: [
          { name: 'Lemmy',          desc: "Jack Daniel's | Pepsi",          price: '15.00' },
          { name: 'Cuba Libre',     desc: 'Rum | Pepsi',                    price: '14.00' },
          { name: 'Gin Tonic',      desc: 'Gin | Tonic',                    price: '14.00' },
          { name: 'Gin Lemon',      desc: 'Gin | Bitter Lemon Soda',        price: '14.00' },
          { name: 'Vodka Red Bull', desc: 'Vodka | Red Bull',               price: '15.00' },
          { name: 'Turbo Mate',     desc: 'Vodka | El Tony Mate',           price: '14.00' }
        ]
      },
      {
        category: 'Spritz',
        items: [
          { name: 'Aperol Spritz',  desc: 'Aperol | Prosecco',   price: '12.00' },
          { name: 'Campari Spritz', desc: 'Campari | Prosecco',  price: '12.00' },
          { name: 'Ingwer Spritz',  desc: 'Ingwerer | Prosecco', price: '12.00' }
        ]
      },
      {
        category: 'Mules',
        items: [
          { name: 'Moscow Mule', desc: 'Vodka | Ginger Bier | Limette',     price: '15.00' },
          { name: 'London Mule', desc: 'Gin | Ginger Bier | Limette',       price: '15.00' },
          { name: 'Berner Mule', desc: 'Ingwerer | Ginger Bier | Limette',  price: '15.00' }
        ]
      },
      {
        category: 'Spirituosen',
        items: [
          { name: 'Bunnahabhain 18y', desc: '46.3%', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46%',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43%',   price: '23.00' },
          { name: 'Macallen 12y',     desc: '40%',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43%',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43%',   price: '22.00' },
          { name: 'Absinth',          desc: '53%',   price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40%',   price: '18.00' }
        ]
      },
      {
        category: 'Softdrinks',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Eistee',                desc: 'Lemon-Lemongrass',      price: '4.00 / 7.00' },
          { name: 'Valser',                desc: 'Classic | Silence',     price: '4.00 / 7.00' },
          { name: 'Pepsi',                 desc: 'Classic | Zero',        price: '4.00 / 7.00' },
          { name: 'Zitro | Fanta',         desc: '',                      price: '4.00 / 7.00' },
          { name: 'Orangensaft',           desc: '',                      price: '4.00 / 7.00' },
          { name: 'Cranberrysaft',         desc: '',                      price: '4.00 / 7.00' },
          { name: 'Café Crème / Espresso', desc: '',                      price: '4.00' }
        ]
      }
    ]
  },
  fr: {
    nav: ['À propos', 'Images', 'Boissons'],
    titles: { about: 'À propos', pictures: 'Images', drinks: 'Nos Boissons' },
    about: "Bienvenue au Rocket Bar, où le metal, le rock et de bons drinks se fondent en un seul élan. Au cœur de la vieille ville de Berne, à quelques pas de la gare centrale, nous offrons une atmosphère qui te donne l’impression d’être chez toi, avec de la musique forte, de la bière glacée et des riffs brûlants.",
    contact: ['Adresse', 'Horaires', 'Téléphone & E-mail', 'Suivez-nous'],
    drink_note: "Tous les prix sont indiqués en CHF, TVA de 8,1 % incluse",
    drinks: [
      {
        category: 'Bière en bouteille',
        items: [
          { name: 'Valaisanne Bière De Cave',     desc: '3.3 dl | 5.4% (CH)', price: '7.00' },
          { name: 'Grimbergen Ambrée',            desc: '2.5 dl | 6.5% (BE)', price: '7.00' },
          { name: 'Brooklyn Stonewall Inn IPA',   desc: '3.3 dl | 4.6% (US)', price: '7.00' },
          { name: 'Superbock Unfiltered',         desc: '3.3 dl | 4.9% (PT)', price: '6.00' },
          { name: 'Coruja IPA',                   desc: '3.3 dl | 6.0% (PT)', price: '7.00' },
          { name: 'Corona',                       desc: '3.3 dl | 4.6% (MEX)',price: '7.00' },
          { name: 'Alhambra',                     desc: '3.3 dl | 6.4% (GRA)',price: '8.00' },
          { name: "Cooper's Pale Ale",            desc: '3.3 dl | 5.1% (AUS)',price: '7.00' },
          { name: 'Lush',                         desc: '3.3 dl | 5.3% (NOR)',price: '9.00' },
          { name: 'Orval',                        desc: '3.3 dl | 6.2% (BE)', price: '8.00' },
          { name: 'Andechs Bière Blanche',        desc: '5 dl | 5.5% (DE)',   price: '9.00' },
          { name: 'Schlenkerla Bière Fumée',      desc: '5 dl | 5.5% (DE)',   price: '9.00' },
          { name: 'Brewdog Wingman IPA',          desc: '3.3 dl | 4.3% (SCO)',price: '7.00' },
          { name: 'Astra Kiezmische',             desc: '3.3 dl | 2.5% (DE)', price: '6.00' },
          { name: 'Möhl Jus de pomme',            desc: '5 dl | 2.5% (CH)',   price: '9.00' },
          { name: 'Smirnoff Ice',                 desc: '3.3 dl | 4% (GB)',   price: '7.00' },
          { name: 'White Claw Hard Seltzer',      desc: '3.3 dl | 4.5% (USA)',price: '8.00' },
          { name: 'Cardinal Sans Alcool',         desc: '3.3 dl | 0.0% (CH)', price: '6.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)', price: '7.00' }
        ]
      },
      {
        category: 'Bière pression',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',          desc: '4.8%',     price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',      desc: '6.0%',     price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",     desc: '3.8%',     price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught',    desc: '5.0%',     price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',   desc: '24%', price: '6.00' },
          { name: 'Minttu',     desc: '35%', price: '6.00' },
          { name: "Shanky's Whip", desc: '33%', price: '6.00' },
          { name: 'Nebula Shot', desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',    desc: '17%', price: '6.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Sirop de sucre', price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | myrtille | Basilic | Sweet&Sour', price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso',   price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rhum | Cointreau | Bols Blue', price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basilic | Sweet&Sour',      price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet&Sour',           price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet&Sour',             price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',           price: '17.00' }
        ]
      },
      {
        category: 'Longdrinks',
        items: [
          { name: 'Lemmy',          desc: "Jack Daniel's | Pepsi",   price: '15.00' },
          { name: 'Cuba Libre',     desc: 'Rhum | Pepsi',            price: '14.00' },
          { name: 'Gin Tonic',      desc: 'Gin | Tonic',             price: '14.00' },
          { name: 'Gin Lemon',      desc: 'Gin | Bitter Lemon Soda', price: '14.00' },
          { name: 'Vodka Red Bull', desc: 'Vodka | Red Bull',        price: '15.00' },
          { name: 'Turbo Mate',     desc: 'Vodka | El Tony Mate',    price: '14.00' }
        ]
      },
      {
        category: 'Spritz',
        items: [
          { name: 'Aperol Spritz',       desc: 'Aperol | Prosecco',   price: '12.00' },
          { name: 'Campari Spritz',      desc: 'Campari | Prosecco',  price: '12.00' },
          { name: 'Spritz au gingembre', desc: 'Ingwerer | Prosecco', price: '12.00' }
        ]
      },
      {
        category: 'Mules',
        items: [
          { name: 'Moscow Mule', desc: 'Vodka | Ginger Beer | Lime',     price: '15.00' },
          { name: 'London Mule', desc: 'Gin | Ginger Beer | Lime',       price: '15.00' },
          { name: 'Berner Mule', desc: 'Ingwerer | Ginger Beer | Lime',  price: '15.00' }
        ]
      },
      {
        category: 'Spiritueux',
        items: [
          { name: 'Bunnahabhain 18y', desc: '46.3%', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46%',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43%',   price: '23.00' },
          { name: 'Macallen 12y',     desc: '40%',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43%',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43%',   price: '22.00' },
          { name: 'Absinthe',         desc: '53%',   price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40%',   price: '18.00' }
        ]
      },
      {
        category: 'Boissons sans alcool',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Thé froid',              desc: 'Lemon-Lemongrass',   price: '4.00 / 7.00' },
          { name: 'Valser',                 desc: 'Classic | Silence',  price: '4.00 / 7.00' },
          { name: 'Pepsi',                  desc: 'Classic | Zero',     price: '4.00 / 7.00' },
          { name: 'Zitro | Fanta',          desc: '',                   price: '4.00 / 7.00' },
          { name: 'Jus d´orange',           desc: '',                   price: '4.00 / 7.00' },
          { name: 'Jus de canneberge',      desc: '',                   price: '4.00 / 7.00' },
          { name: 'Café crème / Espresso',  desc: '',                   price: '4.00' }
        ]
      }
    ]
  },
  en: {
    nav: ['About', 'Pictures', 'Drinks'],
    titles: { about: 'About', pictures: 'Pictures', drinks: 'Our Drinks' },
    about: "Welcome to the Rocket Bar, where metal, rock and good drinks fuse into one roaring vibe. In the middle of Bern’s old town and only a few steps from the main station, we offer an atmosphere that feels like home, filled with loud music, cold beer and hot riffs.",
    contact: ['Address', 'Opening Hours', 'Phone & Email', 'Follow us'],
    drink_note: "All prices in CHF incl. 8.1% VAT",
    drinks: [
      {
        category: 'Bottled Beer',
        items: [
          { name: 'Valaisanne Bière De Cave',     desc: '3.3 dl | 5.4% (CH)', price: '7.00' },
          { name: 'Grimbergen Ambrée',            desc: '2.5 dl | 6.5% (BE)', price: '7.00' },
          { name: 'Brooklyn Stonewall Inn IPA',   desc: '3.3 dl | 4.6% (US)', price: '7.00' },
          { name: 'Superbock Unfiltered',         desc: '3.3 dl | 4.9% (PT)', price: '6.00' },
          { name: 'Coruja IPA',                   desc: '3.3 dl | 6.0% (PT)', price: '7.00' },
          { name: 'Corona',                       desc: '3.3 dl | 4.6% (MEX)',price: '7.00' },
          { name: 'Alhambra',                     desc: '3.3 dl | 6.4% (GRA)',price: '8.00' },
          { name: "Cooper's Pale Ale",            desc: '3.3 dl | 5.1% (AUS)',price: '7.00' },
          { name: 'Lush',                         desc: '3.3 dl | 5.3% (NOR)',price: '9.00' },
          { name: 'Orval',                        desc: '3.3 dl | 6.2% (BE)', price: '8.00' },
          { name: 'Andechs Wheat Beer',            desc: '5 dl | 5.5% (DE)',  price: '9.00' },
          { name: 'Schlenkerla Smoked Beer',       desc: '5 dl | 5.5% (DE)',  price: '9.00' },
          { name: 'Brewdog Wingman IPA',          desc: '3.3 dl | 4.3% (SCO)',price: '7.00' },
          { name: 'Astra Kiezmische',             desc: '3.3 dl | 2.5% (DE)', price: '6.00' },
          { name: 'Möhl Apple Cider',             desc: '5 dl | 2.5% (CH)',   price: '9.00' },
          { name: 'Smirnoff Ice',                 desc: '3.3 dl | 4% (GB)',   price: '7.00' },
          { name: 'White Claw Hard Seltzer',      desc: '3.3 dl | 4.5% (USA)',price: '8.00' },
          { name: 'Cardinal Alcohol-free',        desc: '3.3 dl | 0.0% (CH)', price: '6.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)', price: '7.00' }
        ]
      },
      {
        category: 'Beer on Tap',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',          desc: '4.8%',     price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',      desc: '6.0%',     price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",     desc: '3.8%',     price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught',    desc: '5.0%',     price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',   desc: '24%', price: '6.00' },
          { name: 'Minttu',     desc: '35%', price: '6.00' },
          { name: "Shanky's Whip", desc: '33%', price: '6.00' },
          { name: 'Nebula Shot', desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',    desc: '17%', price: '6.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Sugar Syrup', price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | Blueberry | Basil | Sweet&Sour', price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso', price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rum | Cointreau | Bols Blue',               price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basil | Sweet&Sour',                              price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet&Sour',                                 price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet&Sour',                                   price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',                                 price: '17.00' }
        ]
      },
      {
        category: 'Longdrinks',
        items: [
          { name: 'Lemmy',          desc: "Jack Daniel's | Pepsi",    price: '15.00' },
          { name: 'Cuba Libre',     desc: 'Rum | Pepsi',              price: '14.00' },
          { name: 'Gin Tonic',      desc: 'Gin | Tonic',              price: '14.00' },
          { name: 'Gin Lemon',      desc: 'Gin | Bitter Lemon Soda',  price: '14.00' },
          { name: 'Vodka Red Bull', desc: 'Vodka | Red Bull',         price: '15.00' },
          { name: 'Turbo Mate',     desc: 'Vodka | El Tony Mate',     price: '14.00' }
        ]
      },
      {
        category: 'Spritz',
        items: [
          { name: 'Aperol Spritz',  desc: 'Aperol | Prosecco',   price: '12.00' },
          { name: 'Campari Spritz', desc: 'Campari | Prosecco',  price: '12.00' },
          { name: 'Ginger Spritz',  desc: 'Ingwerer | Prosecco', price: '12.00' }
        ]
      },
      {
        category: 'Mules',
        items: [
          { name: 'Moscow Mule', desc: 'Vodka | Ginger Beer | Lime',     price: '15.00' },
          { name: 'London Mule', desc: 'Gin | Ginger Beer | Lime',       price: '15.00' },
          { name: 'Berner Mule', desc: 'Ingwerer | Ginger Beer | Lime',  price: '15.00' }
        ]
      },
      {
        category: 'Spirits',
        items: [
          { name: 'Bunnahabhain 18y', desc: '46.3%', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46%',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43%',   price: '23.00' },
          { name: 'Macallen 12y',     desc: '40%',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43%',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43%',   price: '22.00' },
          { name: 'Absinthe',         desc: '53%',   price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40%',   price: '18.00' }
        ]
      },
      {
        category: 'Soft drinks',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Iced Tea',              desc: 'Lemon-Lemongrass',  price: '4.00 / 7.00' },
          { name: 'Valser',                desc: 'Classic | Silence', price: '4.00 / 7.00' },
          { name: 'Pepsi',                 desc: 'Classic | Zero',    price: '4.00 / 7.00' },
          { name: 'Zitro | Fanta',         desc: '',                  price: '4.00 / 7.00' },
          { name: 'Orange juice',          desc: '',                  price: '4.00 / 7.00' },
          { name: 'Cranberry juice',       desc: '',                  price: '4.00 / 7.00' },
          { name: 'Café crème / Espresso', desc: '',                  price: '4.00' }
        ]
      }
    ]
  }
};


/* Language / misc */
let initialLang = null;
let currentLang = null;

/* ==========================================
   CAROUSEL
========================================== */

/* Carousel state */
let srcList        = [];
let visibleSlides  = 1;
let gapPx          = 0;
let slideWidth     = 0;
let stepPx         = 0;
let cloneCount     = 0;
let internalIndex  = 0;
let isTransitioning = false;
let resizeTimeout  = null;

function getTrackGap() {
  if (!TRACK) return 0;
  const cs  = getComputedStyle(TRACK);
  const gap = cs.gap || cs.columnGap || cs.rowGap || '16px';
  return parseFloat(gap) || 0;
}

function computeMeasurements() {
  if (!TRACK || !CAROUSEL_CONTAINER) return;

  gapPx = getTrackGap();
  const first = TRACK.querySelector('img');
  if (!first) return;

  const rect = first.getBoundingClientRect();
  slideWidth = rect.width;
  stepPx     = slideWidth + gapPx;

  const containerWidth = CAROUSEL_CONTAINER.getBoundingClientRect().width || slideWidth;

  visibleSlides = Math.max(
    1,
    Math.min(srcList.length, Math.round(containerWidth / stepPx))
  );

  cloneCount = visibleSlides;
}

function buildCarousel() {
  if (!TRACK) return;

  TRACK.innerHTML = '';

  srcList.forEach(src => {
    const img = document.createElement('img');
    img.className = 'carousel-img';
    img.src       = src;
    img.alt       = '';
    img.loading   = 'lazy';
    TRACK.appendChild(img);
  });

  computeMeasurements();

  const originals = Array.from(TRACK.children);
  const n         = originals.length;
  const cc        = Math.min(cloneCount, n);

  if (!n || !cc) return;

  const lastItems = originals.slice(-cc);
  lastItems.forEach(node => {
    const clone = node.cloneNode(true);
    clone.classList.add('clone');
    TRACK.insertBefore(clone, TRACK.firstChild);
  });

  const firstItems = originals.slice(0, cc);
  firstItems.forEach(node => {
    const clone = node.cloneNode(true);
    clone.classList.add('clone');
    TRACK.appendChild(clone);
  });

  internalIndex = cc;
  TRACK.style.transition = 'none';
  TRACK.style.transform  = `translateX(-${internalIndex * stepPx}px)`;
  TRACK.getBoundingClientRect();
  TRACK.style.transition = 'transform 0.45s ease';

  attachSlideClickListeners();
  attachTransitionEnd();
}

function attachSlideClickListeners() {
  if (!TRACK || !LIGHTBOX || !LIGHTBOX_IMG) return;

  TRACK.querySelectorAll('img').forEach(img => {
    img.onclick = () => {
      LIGHTBOX.style.display = 'flex';
      LIGHTBOX_IMG.src       = img.src;
      document.body.style.overflow = 'hidden';
    };
  });
}

function onTransitionEnd() {
  isTransitioning = false;
  const n = srcList.length;
  if (!TRACK || !n) return;

  const originalsStart = cloneCount;
  const originalsEnd   = cloneCount + n;

  if (internalIndex < originalsStart) {
    internalIndex += n;
    TRACK.style.transition = 'none';
    TRACK.style.transform  = `translateX(-${internalIndex * stepPx}px)`;
    TRACK.getBoundingClientRect();
    TRACK.style.transition = 'transform 0.45s ease';
  }
  else if (internalIndex >= originalsEnd) {
    internalIndex -= n;
    TRACK.style.transition = 'none';
    TRACK.style.transform  = `translateX(-${internalIndex * stepPx}px)`;
    TRACK.getBoundingClientRect();
    TRACK.style.transition = 'transform 0.45s ease';
  }
}

function attachTransitionEnd() {
  if (!TRACK) return;
  TRACK.removeEventListener('transitionend', onTransitionEnd);
  TRACK.addEventListener('transitionend', onTransitionEnd);
}

function prevClick() {
  if (isTransitioning || !TRACK) return;
  isTransitioning = true;
  internalIndex--;
  TRACK.style.transform = `translateX(-${internalIndex * stepPx}px)`;
}

function nextClick() {
  if (isTransitioning || !TRACK) return;
  isTransitioning = true;
  internalIndex++;
  TRACK.style.transform = `translateX(-${internalIndex * stepPx}px)`;
}

function attachButtonListeners() {
  if (PREV_BUTTON) {
    PREV_BUTTON.removeEventListener('click', prevClick);
    PREV_BUTTON.addEventListener('click', prevClick);
  }
  if (NEXT_BUTTON) {
    NEXT_BUTTON.removeEventListener('click', nextClick);
    NEXT_BUTTON.addEventListener('click', nextClick);
  }
}

function handleResize() {
  if (!TRACK) return;
  if (resizeTimeout) clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
    buildCarousel();
    attachButtonListeners();
  }, 150);
}

function initCarousel() {
  if (!TRACK) return;

  srcList = [];
  for (let i = 1; i <= TOTAL_IMG; i++) {
    srcList.push(`images/bild_${i}.jpg`);
  }

  TRACK.innerHTML = '';
  const imgs = [];

  srcList.forEach(src => {
    const img = document.createElement('img');
    img.className = 'carousel-img';
    img.src       = src;
    img.alt       = '';
    img.loading   = 'lazy';
    TRACK.appendChild(img);
    imgs.push(img);
  });

  let done = 0;
  function oneDone() {
    done++;
    if (done >= imgs.length) {
      setTimeout(() => {
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
      img.addEventListener('load', oneDone,  { once: true });
      img.addEventListener('error', oneDone, { once: true });
    }
  });
}

initCarousel();

/* ==========================================
   LIGHTBOX
========================================== */

if (CLOSE_BTN) {
  CLOSE_BTN.addEventListener('click', () => {
    if (!LIGHTBOX) return;
    LIGHTBOX.style.display = 'none';
    document.body.style.overflow = '';
  });
}

if (LIGHTBOX) {
  LIGHTBOX.addEventListener('click', e => {
    if (e.target === LIGHTBOX) {
      LIGHTBOX.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================
   LANGUAGE / TRANSLATIONS
========================================== */

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('language', lang);

  document.querySelectorAll('nav').forEach(nav => {
    const links = nav.querySelectorAll('a');
    links.forEach((link, i) => {
      if (TRANSLATIONS[lang].nav[i]) link.textContent = TRANSLATIONS[lang].nav[i];
    });
  });

  SECTION_TITLES.forEach(title => {
    const key = title.dataset.key.split('-')[0];
    const t   = TRANSLATIONS[lang].titles?.[key];
    if (t) title.textContent = t;
  });

  if (ABOUT_TEXT) ABOUT_TEXT.innerHTML = TRANSLATIONS[lang].about;

  CONTACT_ITEMS.forEach((item, i) => {
    const label = TRANSLATIONS[lang].contact[i];
    if (label) item.textContent = label;
  });

  LANGUAGE_SELECTORS.forEach(sel => {
    const selectedDiv = sel.querySelector('.selected');
    const option      = sel.querySelector(`.options li[data-value="${lang}"]`);
    if (selectedDiv && option) selectedDiv.textContent = option.textContent;
  });

  if (DRINK_NOTE) {
    const note = TRANSLATIONS[lang].drink_note;
    if (note) {
      DRINK_NOTE.textContent   = note;
      DRINK_NOTE.style.display = 'block';
    } else {
      DRINK_NOTE.textContent   = '';
      DRINK_NOTE.style.display = 'none';
    }
  }

  renderDrinks(lang);
}

/* Language selector behavior */
LANGUAGE_SELECTORS.forEach(sel => {
  const selected = sel.querySelector('.selected');
  const options  = sel.querySelectorAll('.options li');

  selected?.addEventListener('click', e => {
    e.stopPropagation();
    sel.classList.toggle('open');
    sel.querySelector('.options')?.classList.toggle('show');
  });

  options.forEach(option => {
    option.addEventListener('click', e => {
      e.stopPropagation();
      const lang = option.dataset.value;
      setLanguage(lang);
      document
        .querySelectorAll('.language-selector .options')
        .forEach(o => o.classList.remove('show'));
      document
        .querySelectorAll('.language-selector')
        .forEach(s => s.classList.remove('open'));
    });
  });
});

document.addEventListener('click', () => {
  document
    .querySelectorAll('.language-selector .options')
    .forEach(o => o.classList.remove('show'));
  document
    .querySelectorAll('.language-selector')
    .forEach(s => s.classList.remove('open'));
});

/* Initial language from localStorage or browser */
initialLang = localStorage.getItem('language');
if (!initialLang) {
  initialLang = SUPPORTED_LANGS.includes(USER_LANG) ? USER_LANG : 'de';
  localStorage.setItem('language', initialLang);
}
setLanguage(initialLang);

LANGUAGE_SELECTORS.forEach(sel => {
  const selVal        = localStorage.getItem('language') || initialLang;
  const initialOption = sel.querySelector(`.options li[data-value="${selVal}"]`);
  const selectedDiv   = sel.querySelector('.selected');
  if (selectedDiv && initialOption) selectedDiv.textContent = initialOption.textContent;
});

/* ==========================================
   MOBILE / HAMBURGER MENU
========================================== */

function openMobileMenu() {
  if (!MOBILE_MENU || !HAMBURGER) return;
  MOBILE_MENU.hidden = false;
  MOBILE_MENU.setAttribute('aria-hidden', 'false');
  HAMBURGER.setAttribute('aria-expanded', 'true');

  requestAnimationFrame(() => {
    MOBILE_MENU.style.transform = '';
  });

  document.body.style.overflow = 'hidden';

  const firstLink = MOBILE_MENU.querySelector('.mobile-nav a');
  firstLink?.focus();
}

function closeMobileMenu() {
  if (!MOBILE_MENU || !HAMBURGER) return;
  MOBILE_MENU.setAttribute('aria-hidden', 'true');
  HAMBURGER.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  setTimeout(() => {
    MOBILE_MENU.hidden = true;
  }, 380);
}

HAMBURGER?.addEventListener('click', () => {
  const expanded = HAMBURGER.getAttribute('aria-expanded') === 'true';
  expanded ? closeMobileMenu() : openMobileMenu();
});

MOBILE_CLOSE?.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileMenu();
});

if (MOBILE_MENU) {
  MOBILE_MENU.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/* ==========================================
   DRINKS
========================================== */

function renderDrinks(lang) {
  if (!DRINKS_CONTAINER) return;
  const menu = TRANSLATIONS[lang]?.drinks;
  if (!menu) return;

  DRINKS_CONTAINER.innerHTML = '';

  const isDesktopTwoCols = window.matchMedia('(min-width: 801px)').matches;
  const MAX_ITEMS_PER_CARD = 10;

  menu.forEach(category => {
    const items = category.items || [];

    if (isDesktopTwoCols && items.length > MAX_ITEMS_PER_CARD) {
      let partIndex = 0;
      for (let i = 0; i < items.length; i += MAX_ITEMS_PER_CARD) {
        const slice = items.slice(i, i + MAX_ITEMS_PER_CARD);
        createDrinkCard(category, slice, partIndex);
        partIndex++;
      }
    } else {
      createDrinkCard(category, items, 0);
    }
  });
}

function createDrinkCard(category, items, partIndex = 0) {
  const card = document.createElement('div');
  card.className = 'drink-card';

  const h3 = document.createElement('h3');
  h3.className = 'drink-category';
  h3.textContent = category.category;
  card.appendChild(h3);

  if (category.note && partIndex === 0) {
    const note = document.createElement('div');
    note.className = 'softdrink-note';
    note.textContent = category.note;
    card.appendChild(note);
  }

  const ul = document.createElement('ul');
  ul.className = 'drink-list';

  items.forEach(item => {
    const li = document.createElement('li');

    const line = document.createElement('div');
    line.className = 'drink-line';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'drink-name';
    nameSpan.textContent = item.name;
    line.appendChild(nameSpan);

    if (item.price) {
      const priceSpan = document.createElement('span');
      priceSpan.className = 'drink-price';
      priceSpan.textContent = item.price;
      line.appendChild(priceSpan);
    }

    li.appendChild(line);

    if (item.desc) {
      const descDiv = document.createElement('div');
      descDiv.className = 'drink-desc';
      descDiv.textContent = item.desc;
      li.appendChild(descDiv);
    }

    ul.appendChild(li);
  });

  card.appendChild(ul);
  DRINKS_CONTAINER.appendChild(card);
}

let lastIsDesktopTwoCols = window.matchMedia('(min-width: 801px)').matches;

window.addEventListener('resize', () => {
  const isDesktopNow = window.matchMedia('(min-width: 801px)').matches;
  if (isDesktopNow === lastIsDesktopTwoCols) return;
  lastIsDesktopTwoCols = isDesktopNow;

  if (currentLang) {
    renderDrinks(currentLang);
  }
});