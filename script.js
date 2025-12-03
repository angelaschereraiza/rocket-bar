'use strict';

const SUPPORTED_LANGS = ['de', 'fr', 'en'];

const TRANSLATIONS = {
  de: {
    nav: ['Über uns', 'Bilder', 'Getränke'],
    titles: { about: 'Über uns', pictures: 'Bilder', drinks: 'Unsere Drinks' },
    about: 'Willkommen in der Rocket Bar, wo Metal, Rock und gute Drinks verschmelzen. Nur wenige Schritte vom Berner Hauptbahnhof entfernt, bieten wir eine Atmosphäre, in der du dich wie zu Hause fühlst, mit lauter Musik, kaltem Bier und heissen Riffs.',
    contact: ['Adresse', 'Öffnungszeiten', 'Telefon & E-Mail', 'Folge uns'],
    website_note: 'Webseite von ',
    drink_note: 'Alle Preise in CHF inkl. 8.1% MWST',
    drinks: [
      {
        category: 'Lager & Spezialbier (Flasche)',
        items: [
          { name: 'Valaisanne Bière De Cave',  desc: '3.3 dl | 5.4% (CHE)',   price: '7.00' },
          { name: 'Grimbergen Ambrée',         desc: '2.5 dl | 6.5% (BEL)',   price: '7.00' },
          { name: 'Superbock Unfiltered',      desc: '3.3 dl | 4.7% (PRT)',   price: '6.00' },
          { name: 'Corona',                    desc: '3.3 dl | 4.6% (MEX)',   price: '7.00' },
          { name: 'Alhambra',                  desc: '3.3 dl | 6.4% (ESP)',   price: '8.00' },
          { name: 'Andechs Weissbier',         desc: '5 dl | 5.5% (DEU)',     price: '9.00' },
          { name: 'Schlenkerla Rauchbier',     desc: '5 dl | 5.1% (DEU)',     price: '9.00' },
          { name: 'Astra Kiezmische',          desc: '3.3 dl | 2.5% (DEU)',   price: '6.00' },
          { name: 'Cardinal Alkoholfrei',      desc: '3.3 dl | 0.0% (CHE)',   price: '6.00' }
        ]
      },
      {
        category: 'Craft Beer & Cider (Flasche)',
        items: [
          { name: 'Brooklyn Stonewall Inn IPA',   desc: '3.3 dl | 4.6% (USA)',  price: '7.00' },
          { name: 'Coruja IPA',                   desc: '3.3 dl | 6.0% (PRT)',  price: '7.00' },
          { name: "Cooper's Pale Ale",            desc: '3.3 dl | 5.1% (AUS)',  price: '7.00' },
          { name: 'Brewdog Wingman IPA',          desc: '3.3 dl | 4.3% (SCO)',  price: '7.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)',  price: '7.00' },
          { name: 'Lush IPA',                     desc: '3.3 dl | 5.3% (NOR)',  price: '9.00' },
          { name: 'Orval Pale Ale',               desc: '3.3 dl | 6.2% (BEL)',  price: '8.00' },
          { name: 'Möhl Saft vom Fass',           desc: '5 dl | 4.0% (CHE)',    price: '9.00' }
        ]
      },
      {
        category: 'Bier vom Fass',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',          desc: '4.8% (CHE)',      price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',      desc: '6.0% (CHE)',      price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",     desc: '3.8% (IRL)',      price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught',    desc: '4.2% (IRL)',      price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Alkopop',
        items: [
          { name: 'Smirnoff Ice',              desc: '3.3 dl | 4% (GBR)',     price: '7.00' },
          { name: 'White Claw Hard Seltzer',   desc: '3.3 dl | 4.5% (USA)',  price: '8.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Zuckersirup',   price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | Blueberry | Basil | Sweet & Sour', price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso',  price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rum | Cointreau | Bols Blue', price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basil | Sweet & Sour',     price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet & Sour',        price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet & Sour',          price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',          price: '17.00' }
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
          { name: 'Moscow Mule', desc: 'Vodka | Ginger Beer | Limette',     price: '15.00' },
          { name: 'London Mule', desc: 'Gin | Ginger Beer | Limette',       price: '15.00' },
          { name: 'Berner Mule', desc: 'Ingwerer | Ginger Beer | Limette',  price: '15.00' }
        ]
      },
      {
        category: 'Spirituosen',
        items: [
          { name: 'Bunnahabhain 18y', desc: '46.3% (SCO)', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46% (SCO)',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43% (SCO)',   price: '23.00' },
          { name: 'Macallan 12y',     desc: '40% (SCO)',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43% (SCO)',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43% (JPN)',   price: '22.00' },
          { name: 'Absinth',          desc: '53%',         price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40% (BRB)',   price: '18.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',       desc: '24% (CHE)',   price: '6.00' },
          { name: 'Minttu',         desc: '35% (FIN)',   price: '6.00' },
          { name: "Shanky's Whip",  desc: '33% (IRL)',   price: '6.00' },
          { name: 'Nebula Shot',    desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',        desc: '17% (DEU)',   price: '6.00' }
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
    about: 'Bienvenue au Rocket Bar, où le metal, le rock et de bons drinks se fondent en un tout. À quelques pas de la gare centrale de Berne, nous t’offrons une atmosphère où tu te sens comme chez toi, avec de la musique forte, de la bière bien fraîche et des riffs brûlants.',
    contact: ['Adresse', 'Horaires', 'Téléphone & E-mail', 'Suivez-nous'],
    website_note: 'Site web de ',
    drink_note: 'Tous les prix sont indiqués en CHF, TVA de 8,1 % incluse',
    drinks: [
      {
        category: 'Bière blonde et bière spéciale (bouteille)',
        items: [
          { name: 'Valaisanne Bière De Cave', desc: '3.3 dl | 5.4% (CHE)', price: '7.00' },
          { name: 'Grimbergen Ambrée',        desc: '2.5 dl | 6.5% (BEL)', price: '7.00' },
          { name: 'Superbock Unfiltered',     desc: '3.3 dl | 4.7% (PRT)', price: '6.00' },
          { name: 'Corona',                   desc: '3.3 dl | 4.6% (MEX)', price: '7.00' },
          { name: 'Alhambra',                 desc: '3.3 dl | 6.4% (ESP)', price: '8.00' },
          { name: 'Andechs Bière Blanche',    desc: '5 dl | 5.5% (DEU)',   price: '9.00' },
          { name: 'Schlenkerla Bière Fumée',  desc: '5 dl | 5.1% (DEU)',   price: '9.00' },
          { name: 'Astra Kiezmische',         desc: '3.3 dl | 2.5% (DEU)', price: '6.00' },
          { name: 'Cardinal Sans Alcool',     desc: '3.3 dl | 0.0% (CHE)', price: '6.00' }
        ]
      },
      {
        category: 'Craft Beer & Cider (Bouteille)',
        items: [
          { name: 'Brooklyn Stonewall Inn IPA',   desc: '3.3 dl | 4.6% (USA)', price: '7.00' },
          { name: 'Coruja IPA',                   desc: '3.3 dl | 6.0% (PRT)', price: '7.00' },
          { name: "Cooper's Pale Ale",            desc: '3.3 dl | 5.1% (AUS)', price: '7.00' },
          { name: 'Brewdog Wingman IPA',          desc: '3.3 dl | 4.3% (SCO)', price: '7.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)', price: '7.00' },
          { name: 'Lush IPA',                     desc: '3.3 dl | 5.3% (NOR)', price: '9.00' },
          { name: 'Orval Pale Ale',               desc: '3.3 dl | 6.2% (BEL)', price: '8.00' },
          { name: 'Möhl Jus de pomme',            desc: '5 dl | 4.0% (CHE)',   price: '9.00' }
        ]
      },
      {
        category: 'Bière pression',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',       desc: '4.8% (CHE)', price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',   desc: '6.0% (CHE)', price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",  desc: '3.8% (IRL)', price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught', desc: '4.2% (IRL)', price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Alcopops',
        items: [
          { name: 'Smirnoff Ice',            desc: '3.3 dl | 4% (GBR)',   price: '7.00' },
          { name: 'White Claw Hard Seltzer', desc: '3.3 dl | 4.5% (USA)', price: '8.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Sirop de sucre',                         price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | Myrtille | Basilic | Sweet & Sour', price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso',                           price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rhum | Cointreau | Bols Blue',                price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basilic | Sweet & Sour',                            price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet & Sour',                                 price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet & Sour',                                   price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',                                   price: '17.00' }
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
          { name: 'Bunnahabhain 18y', desc: '46.3% (SCO)', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46% (SCO)',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43% (SCO)',   price: '23.00' },
          { name: 'Macallan 12y',     desc: '40% (SCO)',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43% (SCO)',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43% (JPN)',   price: '22.00' },
          { name: 'Absinthe',         desc: '53%',         price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40% (BRB)',   price: '18.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',      desc: '24% (CHE)', price: '6.00' },
          { name: 'Minttu',        desc: '35% (FIN)', price: '6.00' },
          { name: "Shanky's Whip", desc: '33% (IRL)', price: '6.00' },
          { name: 'Nebula Shot',   desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',       desc: '17% (DEU)', price: '6.00' }
        ]
      },
      {
        category: 'Boissons sans alcool',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Thé froid',             desc: 'Lemon-Lemongrass',  price: '4.00 / 7.00' },
          { name: 'Valser',                desc: 'Classic | Silence', price: '4.00 / 7.00' },
          { name: 'Pepsi',                 desc: 'Classic | Zero',    price: '4.00 / 7.00' },
          { name: 'Zitro | Fanta',         desc: '',                  price: '4.00 / 7.00' },
          { name: 'Jus d’orange',          desc: '',                  price: '4.00 / 7.00' },
          { name: 'Jus de canneberge',     desc: '',                  price: '4.00 / 7.00' },
          { name: 'Café crème / Espresso', desc: '',                  price: '4.00' }
        ]
      }
    ]
  },
  en: {
    nav: ['About', 'Pictures', 'Drinks'],
    titles: { about: 'About', pictures: 'Pictures', drinks: 'Our Drinks' },
    about: 'Welcome to the Rocket Bar, where metal, rock and good drinks melt into one. Just a few steps from Bern’s main station, we offer an atmosphere that feels like home, with loud music, cold beer and blazing riffs.',
    contact: ['Address', 'Opening Hours', 'Phone & Email', 'Follow us'],
    website_note: 'Website by ',
    drink_note: 'All prices in CHF incl. 8.1% VAT',
    drinks: [
      {
        category: 'Lager & Speciality Beer (Bottle)',
        items: [
          { name: 'Valaisanne Bière De Cave', desc: '3.3 dl | 5.4% (CHE)', price: '7.00' },
          { name: 'Grimbergen Ambrée',        desc: '2.5 dl | 6.5% (BEL)', price: '7.00' },
          { name: 'Superbock Unfiltered',     desc: '3.3 dl | 4.7% (PRT)', price: '6.00' },
          { name: 'Corona',                   desc: '3.3 dl | 4.6% (MEX)', price: '7.00' },
          { name: 'Alhambra',                 desc: '3.3 dl | 6.4% (ESP)', price: '8.00' },
          { name: 'Andechs Wheat Beer',       desc: '5 dl | 5.5% (DEU)',   price: '9.00' },
          { name: 'Schlenkerla Smoked Beer',  desc: '5 dl | 5.1% (DEU)',   price: '9.00' },
          { name: 'Astra Kiezmische',         desc: '3.3 dl | 2.5% (DEU)', price: '6.00' },
          { name: 'Cardinal Alcohol-free',    desc: '3.3 dl | 0.0% (CHE)', price: '6.00' }
        ]
      },
      {
        category: 'Craft Beer & Cider (Bottle)',
        items: [
          { name: 'Brooklyn Stonewall Inn IPA',   desc: '3.3 dl | 4.6% (USA)', price: '7.00' },
          { name: 'Coruja IPA',                   desc: '3.3 dl | 6.0% (PRT)', price: '7.00' },
          { name: "Cooper's Pale Ale",            desc: '3.3 dl | 5.1% (AUS)', price: '7.00' },
          { name: 'Brewdog Wingman IPA',          desc: '3.3 dl | 4.3% (SCO)', price: '7.00' },
          { name: 'Brooklyn Special Effects IPA', desc: '3.3 dl | 0.4% (USA)', price: '7.00' },
          { name: 'Lush IPA',                     desc: '3.3 dl | 5.3% (NOR)', price: '9.00' },
          { name: 'Orval Pale Ale',               desc: '3.3 dl | 6.2% (BEL)', price: '8.00' },
          { name: 'Möhl Apple Cider',             desc: '5 dl | 4.0% (CHE)',   price: '9.00' }
        ]
      },
      {
        category: 'Beer on Tap',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Valaisanne Lager',       desc: '4.8% (CHE)', price: '5.00 / 7.00' },
          { name: 'Valaisanne White IPA',   desc: '6.0% (CHE)', price: '7.00 / 9.00' },
          { name: "Smithwick's Irish Ale",  desc: '3.8% (IRL)', price: '6.00 / 9.00' },
          { name: 'Guinness Irish Draught', desc: '4.2% (IRL)', price: '6.00 / 9.00' }
        ]
      },
      {
        category: 'Alcopops',
        items: [
          { name: 'Smirnoff Ice',            desc: '3.3 dl | 4% (GBR)',   price: '7.00' },
          { name: 'White Claw Hard Seltzer', desc: '3.3 dl | 4.5% (USA)', price: '8.00' }
        ]
      },
      {
        category: 'Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka | Kahlua | Sugar Syrup',                            price: '20.00' },
          { name: 'Blueberry',        desc: 'Tequila | Cointreau | Blueberry | Basil | Sweet & Sour',  price: '20.00' },
          { name: 'Negroni',          desc: 'Gin | Campari | Martini Rosso',                           price: '16.00' },
          { name: 'Nebula',           desc: 'Berentzen | Rum | Cointreau | Bols Blue',                 price: '17.00' },
          { name: 'Basil Smash',      desc: 'Gin | Basil | Sweet & Sour',                              price: '16.00' },
          { name: 'Amaretto Sour',    desc: 'Amaretto | Sweet & Sour',                                 price: '16.00' },
          { name: 'Whisky Sour',      desc: 'Whisky | Sweet & Sour',                                   price: '16.00' },
          { name: '007 Dry Martini',  desc: 'Gin | Vodka | Martini',                                   price: '17.00' }
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
          { name: 'Bunnahabhain 18y', desc: '46.3% (SCO)', price: '24.00' },
          { name: 'Ardbeg 14y',       desc: '46% (SCO)',   price: '24.00' },
          { name: 'Bowmore 15y',      desc: '43% (SCO)',   price: '23.00' },
          { name: 'Macallan 12y',     desc: '40% (SCO)',   price: '19.00' },
          { name: 'Oban 14y',         desc: '43% (SCO)',   price: '17.00' },
          { name: 'Yamazaki',         desc: '43% (JPN)',   price: '22.00' },
          { name: 'Absinthe',         desc: '53%',         price: '17.00' },
          { name: 'Bumbu Rum',        desc: '40% (BRB)',   price: '18.00' }
        ]
      },
      {
        category: 'Shots',
        note: '2.5 cl',
        items: [
          { name: 'Ingwerer',      desc: '24% (CHE)', price: '6.00' },
          { name: 'Minttu',        desc: '35% (FIN)', price: '6.00' },
          { name: "Shanky's Whip", desc: '33% (IRL)', price: '6.00' },
          { name: 'Nebula Shot',   desc: 'Gin | Berentzen | Cointreau | Bols Blue', price: '5.00' },
          { name: 'Muh-Muh',       desc: '17% (DEU)', price: '6.00' }
        ]
      },
      {
        category: 'Softdrinks',
        note: '3 dl / 5 dl',
        items: [
          { name: 'Iced Tea',               desc: 'Lemon-Lemongrass',  price: '4.00 / 7.00' },
          { name: 'Valser',                 desc: 'Classic | Silence', price: '4.00 / 7.00' },
          { name: 'Pepsi',                  desc: 'Classic | Zero',    price: '4.00 / 7.00' },
          { name: 'Zitro | Fanta',          desc: '',                  price: '4.00 / 7.00' },
          { name: 'Orange juice',           desc: '',                  price: '4.00 / 7.00' },
          { name: 'Cranberry juice',        desc: '',                  price: '4.00 / 7.00' },
          { name: 'Café crème / Espresso',  desc: '',                  price: '4.00' }
        ]
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     DOM ELEMENTS
  ========================================== */
  const CAROUSEL_CONTAINER   = document.querySelector('.carousel-container');
  const TRACK                = document.querySelector('.carousel-track');
  const PREV_BUTTON          = document.querySelector('.prev');
  const NEXT_BUTTON          = document.querySelector('.next');
  const TOTAL_IMG            = 7;

  const LIGHTBOX             = document.getElementById('lightbox');
  const LIGHTBOX_IMG         = document.querySelector('.lightbox-img');
  const CLOSE_BTN            = document.querySelector('.lightbox .close');

  const SECTION_TITLES       = document.querySelectorAll('h2[data-key]');
  const LOGO_LINK            = document.querySelector('header .logo');
  const ABOUT_TEXT           = document.querySelector('.about-text');
  const CONTACT_ITEMS        = document.querySelectorAll('.contact-item h3');
  const LANGUAGE_SELECTORS   = document.querySelectorAll('.language-selector');
  const WEBSITE_NOTE         = document.getElementById('website-note');

  const DRINKS_CONTAINER     = document.getElementById('drinks-menu');
  const DRINK_NOTE           = document.getElementById('drink-note');
  const DRINK_CATEGORY_NAV   = document.getElementById('drink-category-nav');
  const DRINK_MENU_SELECTORS = document.querySelectorAll('.drink-menu-selector');

  const HAMBURGER            = document.querySelector('.hamburger');
  const MOBILE_MENU          = document.getElementById('mobile-menu');

  /* ==========================================
     BASIC CONFIG (LANGUAGE, YEAR)
  ========================================== */

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const browserLang = (navigator.language || 'de').slice(0, 2);
  const storedLang  = localStorage.getItem('language');
  let currentLang   = storedLang || (SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'de');
  localStorage.setItem('language', currentLang);

  /* ==========================================
     CAROUSEL
  ========================================== */
  let srcList          = [];
  let visibleSlides    = 1;
  let gapPx            = 0;
  let slideWidth       = 0;
  let stepPx           = 0;
  let cloneCount       = 0;
  let internalIndex    = 0;
  let isTransitioning  = false;
  let resizeTimeout    = null;

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

  function attachSlideClickListeners() {
    if (!TRACK || !LIGHTBOX || !LIGHTBOX_IMG) return;

    TRACK.querySelectorAll('img').forEach((img, index) => {
      img.onclick = () => {
        LIGHTBOX.style.display = 'flex';
        LIGHTBOX_IMG.src       = img.src;
        LIGHTBOX_IMG.alt       = `Rocket Bar picture ${index + 1}`;
        document.body.style.overflow = 'hidden';
      };
    });
  }

  function onTransitionEnd() {
    isTransitioning = false;
  }

  function attachTransitionEnd() {
    if (!TRACK) return;
    TRACK.removeEventListener('transitionend', onTransitionEnd);
    TRACK.addEventListener('transitionend', onTransitionEnd);
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

    // Prepend clones of last items for infinite effect
    const lastItems = originals.slice(-cc);
    lastItems.forEach(node => {
      const clone = node.cloneNode(true);
      clone.classList.add('clone');
      TRACK.insertBefore(clone, TRACK.firstChild);
    });

    // Append clones of first items for infinite effect
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

  function prevClick() {
    if (isTransitioning || !TRACK) return;
    isTransitioning = true;

    const n = srcList.length;
    if (!n) return;

    if (internalIndex <= cloneCount) {
      TRACK.style.transition = 'none';
      internalIndex += n;
      TRACK.style.transform = `translateX(-${internalIndex * stepPx}px)`;
      TRACK.getBoundingClientRect();
      TRACK.style.transition = 'transform 0.45s ease';
    }

    internalIndex--;
    TRACK.style.transform = `translateX(-${internalIndex * stepPx}px)`;
  }

  function nextClick() {
    if (isTransitioning || !TRACK) return;
    isTransitioning = true;

    const n = srcList.length;
    if (!n) return;

    const originalsEnd = cloneCount + n;

    if (internalIndex >= originalsEnd) {
      TRACK.style.transition = 'none';
      internalIndex -= n;
      TRACK.style.transform = `translateX(-${internalIndex * stepPx}px)`;
      TRACK.getBoundingClientRect();
      TRACK.style.transition = 'transform 0.45s ease';
    }

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

  function attachTouchEvents() {
    if (!CAROUSEL_CONTAINER) return;

    let startX = 0;
    let startY = 0;
    let isTouching = false;
    let isHorizontalSwipe = false;
    const SWIPE_THRESHOLD = 30;

    CAROUSEL_CONTAINER.addEventListener('touchstart', e => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isTouching = true;
      isHorizontalSwipe = false;
    }, { passive: true });

    CAROUSEL_CONTAINER.addEventListener('touchmove', e => {
      if (!isTouching) return;
      if (e.touches.length !== 1) return;

      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      // Detect scroll direction
      if (!isHorizontalSwipe) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
          isHorizontalSwipe = true;
        } else if (Math.abs(dy) > Math.abs(dx)) {
          isTouching = false;
          return;
        }
      }

      if (isHorizontalSwipe) {
        e.preventDefault();
      }
    }, { passive: false });

    CAROUSEL_CONTAINER.addEventListener('touchend', e => {
      if (!isTouching) return;
      isTouching = false;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX;

      if (Math.abs(dx) > SWIPE_THRESHOLD && !isTransitioning) {
        if (dx < 0) {
          nextClick();
        } else {
          prevClick();
        }
      }
    });
  }

  function initCarousel() {
    if (!TRACK) return;

    srcList = [];
    for (let i = 1; i <= TOTAL_IMG; i++) {
      srcList.push(`images/img_${i}.jpg`);
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
          attachTouchEvents();
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

  function renderDrinks(lang) {
    if (!DRINKS_CONTAINER) return;
    const menu = TRANSLATIONS[lang]?.drinks;
    if (!menu) return;

    DRINKS_CONTAINER.innerHTML = '';

    const isDesktopTwoCols = window.matchMedia('(min-width: 801px)').matches;
    const MAX_ITEMS_PER_CARD = 10;

    menu.forEach((category, categoryIndex) => {
      const items = category.items || [];

      if (isDesktopTwoCols && items.length > MAX_ITEMS_PER_CARD) {
        let partIndex = 0;
        for (let i = 0; i < items.length; i += MAX_ITEMS_PER_CARD) {
          const slice = items.slice(i, i + MAX_ITEMS_PER_CARD);
          createDrinkCard(category, slice, partIndex, categoryIndex);
          partIndex++;
        }
      } else {
        createDrinkCard(category, items, 0, categoryIndex);
      }
    });
  }

  function renderMobileDrinkMenu(lang) {
    if (!TRANSLATIONS[lang] || !DRINK_MENU_SELECTORS.length) return;

    const menu = TRANSLATIONS[lang].drinks;
    if (!menu) return;

    DRINK_MENU_SELECTORS.forEach(selector => {
      const optionsList = selector.querySelector('.drink-menu-options');
      const selectedEl  = selector.querySelector('.drink-menu-selected');
      if (!optionsList || !selectedEl) return;

      optionsList.innerHTML = '';

      menu.forEach((category, index) => {
        const li  = document.createElement('li');
        const btn = document.createElement('button');
        btn.type  = 'button';
        btn.textContent = category.category;
        btn.dataset.categoryIndex = String(index);
        li.appendChild(btn);
        optionsList.appendChild(li);
      });

      if (lang === 'de')       selectedEl.textContent = 'Getränke';
      else if (lang === 'fr')  selectedEl.textContent = 'Boissons';
      else                     selectedEl.textContent = 'Drinks';
    });
  }

  function createDrinkCard(category, items, partIndex = 0, categoryIndex = 0) {
    const card = document.createElement('div');
    card.className = 'drink-card';
    card.dataset.categoryIndex = String(categoryIndex);

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

  function renderDrinkCategoryNav(lang) {
    if (!DRINK_CATEGORY_NAV || !DRINKS_CONTAINER) return;
    const menu = TRANSLATIONS[lang]?.drinks;
    if (!menu) return;

    DRINK_CATEGORY_NAV.innerHTML = '';

    const fragment = document.createDocumentFragment();

    menu.forEach((category, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'drink-category-nav-item';
      btn.textContent = category.category;

      if (index === 0) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        DRINK_CATEGORY_NAV
          .querySelectorAll('.drink-category-nav-item')
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        scrollToDrinkCategory(index);
      });

      fragment.appendChild(btn);
    });

    DRINK_CATEGORY_NAV.appendChild(fragment);
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all nav labels
    document.querySelectorAll('nav').forEach(nav => {
      const links = nav.querySelectorAll('a');
      links.forEach((link, i) => {
        if (TRANSLATIONS[lang].nav[i]) link.textContent = TRANSLATIONS[lang].nav[i];
      });
    });

    // Update section titles
    SECTION_TITLES.forEach(title => {
      const key = title.dataset.key.split('-')[0];
      const t   = TRANSLATIONS[lang].titles?.[key];
      if (t) title.textContent = t;
    });

    // About text
    if (ABOUT_TEXT) ABOUT_TEXT.innerHTML = TRANSLATIONS[lang].about;

    // Contact headings
    CONTACT_ITEMS.forEach((item, i) => {
      const label = TRANSLATIONS[lang].contact[i];
      if (label) item.textContent = label;
    });

    // Language selectors display text
    LANGUAGE_SELECTORS.forEach(sel => {
      const selectedDiv = sel.querySelector('.selected');
      const option      = sel.querySelector(`.options li[data-value="${lang}"]`);
      if (selectedDiv && option) selectedDiv.textContent = option.textContent;
    });

    // Drink note
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

    // Website note
    if (WEBSITE_NOTE) {
      const website_note = TRANSLATIONS[lang].website_note;
      if (website_note) {
        WEBSITE_NOTE.innerHTML = `${website_note}<a href="https://aiza.ch" target="_blank" rel="noopener">Aiza GmbH</a>`;
        WEBSITE_NOTE.style.display = 'block';
      } else {
        WEBSITE_NOTE.textContent   = '';
        WEBSITE_NOTE.style.display = 'none';
      }
    }

    // Render drinks UI
    renderDrinks(lang);
    renderDrinkCategoryNav(lang);
    renderMobileDrinkMenu(lang);
  }

  // Language selector behavior with accessibility tweaks
  LANGUAGE_SELECTORS.forEach(sel => {
    const selected = sel.querySelector('.selected');
    const options  = sel.querySelector('.options');

    if (!selected || !options) return;

    selected.setAttribute('role', 'button');
    selected.setAttribute('aria-haspopup', 'listbox');
    selected.setAttribute('aria-expanded', 'false');

    selected.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = options.classList.toggle('show');
      sel.classList.toggle('open', isOpen);
      selected.setAttribute('aria-expanded', String(isOpen));
    });

    options.querySelectorAll('li').forEach(option => {
      option.setAttribute('role', 'option');
      option.addEventListener('click', e => {
        e.stopPropagation();
        const lang = option.dataset.value;
        setLanguage(lang);

        options.classList.remove('show');
        sel.classList.remove('open');
        selected.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // Close language dropdowns on outside click
  document.addEventListener('click', () => {
    document
      .querySelectorAll('.language-selector .options')
      .forEach(o => o.classList.remove('show'));
    document
      .querySelectorAll('.language-selector')
      .forEach(s => s.classList.remove('open'));
  });

  // Initial language setup
  setLanguage(currentLang);

  LANGUAGE_SELECTORS.forEach(sel => {
    const selectedDiv   = sel.querySelector('.selected');
    const initialOption = sel.querySelector(`.options li[data-value="${currentLang}"]`);
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
    MOBILE_MENU.style.transform = '';

    document.body.style.overflow = 'hidden';

    const firstLink = MOBILE_MENU.querySelector('.mobile-nav a');
    firstLink?.focus();
  }

  function closeMobileMenu() {
    if (!MOBILE_MENU || !HAMBURGER) return;

    const active = document.activeElement;
    if (active && MOBILE_MENU.contains(active)) {
      HAMBURGER.focus();
    }

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

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const isInMobileMenu = !!link.closest('#mobile-menu');

      if (isInMobileMenu) {
        closeMobileMenu();

        setTimeout(() => {
          scrollToSection(targetId);
        }, 420);
      } else {
        scrollToSection(targetId);
      }
    });
  });

  // Drink menu selector interactions (desktop & mobile)
  DRINK_MENU_SELECTORS.forEach(selector => {
    const selectedEl  = selector.querySelector('.drink-menu-selected');
    const optionsList = selector.querySelector('.drink-menu-options');

    selectedEl?.addEventListener('click', e => {
      e.stopPropagation();
      selector.classList.toggle('open');
    });

    optionsList?.addEventListener('click', e => {
      const btn = e.target.closest('button[data-category-index]');
      if (!btn) return;
      e.stopPropagation();

      const index = btn.dataset.categoryIndex;

      if (DRINK_CATEGORY_NAV) {
        const navButtons = DRINK_CATEGORY_NAV.querySelectorAll('.drink-category-nav-item');
        navButtons.forEach((b, i) => {
          b.classList.toggle('active', String(i) === String(index));
        });
      }

      selector.classList.remove('open');

      if (selector.closest('#mobile-menu')) {
        closeMobileMenu();
        setTimeout(() => {
          scrollToDrinkCategory(index);
        }, 420);

      } else {
        scrollToDrinkCategory(index);
      }
    });
  });

  document.addEventListener('click', () => {
    DRINK_MENU_SELECTORS.forEach(sel => sel.classList.remove('open'));
  });

  /* ==========================================
     NAVIGATION
  ========================================== */
  
  if (LOGO_LINK) {
    LOGO_LINK.addEventListener('click', (e) => {
      e.preventDefault(); 
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  function getScrollOffset() {
    let offset = 0;

    const header = document.querySelector('header');
    if (header) offset += header.offsetHeight;

    const desktopNav = document.querySelector('.drink-category-nav');
    const mobileSelectorBar = document.querySelector('.drink-menu-selector-container');

    if (window.matchMedia('(max-width: 900px)').matches) {
      if (mobileSelectorBar) offset += mobileSelectorBar.offsetHeight - 4;
    } else {
      if (desktopNav) offset += desktopNav.offsetHeight;
    }

    return offset;
  }

  function scrollToDrinkCategory(index) {
    if (!DRINKS_CONTAINER) return;

    const targetCard = DRINKS_CONTAINER.querySelector(
      `.drink-card[data-category-index="${index}"]`
    );
    if (!targetCard) return;

    const rect = targetCard.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;
    const offset = getScrollOffset();

    window.scrollTo({
      top: absoluteTop - offset,
      behavior: 'smooth'
    });
  }

  function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const y = rect.top + window.pageYOffset;
    const isDesktop = window.matchMedia("(min-width: 901px)").matches;
    const offset = isDesktop ? 120 : 100;

    window.scrollTo({
      top: y - offset,
      behavior: 'smooth'
    });
  }
  
  /* ==========================================
     DRINKS RESPONSIVE RE-RENDER
  ========================================== */

  let lastIsDesktopTwoCols = window.matchMedia('(min-width: 801px)').matches;

  window.addEventListener('resize', () => {
    const isDesktopNow = window.matchMedia('(min-width: 801px)').matches;
    if (isDesktopNow === lastIsDesktopTwoCols) return;
    lastIsDesktopTwoCols = isDesktopNow;

    if (currentLang) {
      renderDrinks(currentLang);
    }
  });
});
