'use strict';

const SUPPORTED_LANGS = ['de', 'fr', 'en'];

const TRANSLATIONS = {
  de: {
    nav: ['Über uns', 'Bilder', 'Take-Away', 'Getränke'],
    titles: { about: 'Über uns', pictures: 'Bilder', takeaway: 'Take-Away', drinks: 'Unsere Drinks' },
    about: 'Willkommen in der Rocket Bar, wo Metal, Rock und gute Drinks verschmelzen. Nur wenige Schritte vom Berner Hauptbahnhof entfernt, bieten wir eine Atmosphäre, in der du dich wie zu Hause fühlst, mit lauter Musik, kaltem Bier und heissen Riffs.',
    contact: ['Adresse', 'Öffnungszeiten', 'Telefon & E-Mail', 'Folge uns'],
    takeaway: 'Exklusiv in der Rocket Bar: Die besten Bành-Mì´s der Stadt im vietnamesischen Mittagsrestaurant und als Take-Away von Saigon Pearl.',
    takeaway_hours_title: 'Öffnungszeiten',
    food: [
      {
        category: 'Bánh Mì',
        items: [
          { 
            name: 'Bánh Mì Rind',
            desc: 'Rindfleisch in Knoblauch-Marinade, Pickles, Gurke, Koriander',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì Poulet',
            desc: 'Poulet in Zitronengras-Marinade, Pickles, Gurke, Koriander',
            price: '14.00'
          },
          { 
            name: 'Bánh Mì «Char Siu»',
            desc: 'Hausgemachter Schweinebauch «Char Siu», Pickles, Gurke, Koriander',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì Vegan',
            desc: 'Tofu, Avocadocreme, Pickles, Gurke, Koriander',
            price: '14.00'
          }
        ]
      },
      {
        category: 'Bowls & Suppe',
        items: [
          { 
            name: '«Char Siu» Reisteller',
            desc: 'Schweinebauch «Char Siu» mit Reis & Pickles',
            price: '18.00'
          },
          { 
            name: 'Phở Bò',
            desc: 'Vietnamesische Rindfleisch-Nudelsuppe mit Reisnudeln, Kräutern & Sprossen',
            price: '20.00'
          }
        ]
      }
    ],
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
    ],
    vat_note: 'Alle Preise in CHF inkl. 8.1% MWST',
    website_note: 'Webseite von ',
  },
  fr: {
    nav: ['À propos', 'Images', 'Takeaway', 'Boissons'],
    titles: { about: 'À propos', pictures: 'Images', takeaway: 'Takeaway', drinks: 'Nos Boissons' },
    about: 'Bienvenue au Rocket Bar, où le metal, le rock et de bons drinks se fondent en un tout. À quelques pas de la gare centrale de Berne, nous t’offrons une atmosphère où tu te sens comme chez toi, avec de la musique forte, de la bière bien fraîche et des riffs brûlants.',
    contact: ['Adresse', 'Horaires', 'Téléphone & E-mail', 'Suivez-nous'],
    takeaway: 'Exclusivement à la Rocket Bar : Les meilleurs Bánh Mì de la ville dans le restaurant vietnamien du midi et en take-away de Saigon Pearl.',
    takeaway_hours_title: 'Horaires',
    food: [
      {
        category: 'Bánh Mì',
        items: [
          { 
            name: 'Bánh Mì boeuf',
            desc: 'Boeuf mariné à l’ail, pickles, concombre, coriandre',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì poulet',
            desc: 'Poulet mariné à la citronnelle, pickles, concombre, coriandre',
            price: '14.00'
          },
          { 
            name: 'Bánh Mì «Char Siu»',
            desc: 'Poitrine de porc grillée «Char Siu», pickles, concombre, coriandre',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì vegan',
            desc: 'Tofu, crème d’avocat, pickles, concombre, coriandre',
            price: '14.00'
          }
        ]
      },
      {
        category: 'Bowls & soupe',
        items: [
          { 
            name: 'Assiette de riz «Char Siu»',
            desc: 'Porc «Char Siu» maison avec riz & pickles',
            price: '18.00'
          },
          { 
            name: 'Phở Bò',
            desc: 'Soupe vietnamienne de nouilles au boeuf avec nouilles de riz, herbes & pousses de soja',
            price: '20.00'
          }
        ]
      }
    ],
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
    ],
    vat_note: 'Tous les prix sont indiqués en CHF, TVA de 8,1 % incluse',
    website_note: 'Site web de ',
  },
  en: {
    nav: ['About', 'Pictures', 'Takeaway', 'Drinks'],
    titles: { about: 'About', pictures: 'Pictures', takeaway: 'Takeaway', drinks: 'Our Drinks' },
    about: 'Welcome to the Rocket Bar, where metal, rock and good drinks melt into one. Just a few steps from Bern’s main station, we offer an atmosphere that feels like home, with loud music, cold beer and blazing riffs.',
    contact: ['Address', 'Opening Hours', 'Phone & Email', 'Follow us'],
    takeaway: 'Exclusive at the Rocket Bar: The best Bánh Mì in town from the Vietnamese lunch restaurant and as take-away from Saigon Pearl.',
    takeaway_hours_title: 'Opening Hours',
    food: [
      {
        category: 'Bánh Mì',
        items: [
          { 
            name: 'Bánh Mì Beef',
            desc: 'Beef in garlic marinade, pickles, cucumber, coriander',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì Chicken',
            desc: 'Chicken in lemongrass marinade, pickles, cucumber, coriander',
            price: '14.00'
          },
          { 
            name: 'Bánh Mì «Char Siu»',
            desc: 'Homemade pork belly «Char Siu», pickles, cucumber, coriander',
            price: '14.50'
          },
          { 
            name: 'Bánh Mì Vegan',
            desc: 'Tofu, avocado cream, pickles, cucumber, coriander',
            price: '14.00'
          }
        ]
      },
      {
        category: 'Bowls & Soup',
        items: [
          { 
            name: '«Char Siu» Rice Plate',
            desc: 'Pork belly «Char Siu» with rice & pickles',
            price: '18.00'
          },
          { 
            name: 'Phở Bò',
            desc: 'Vietnamese beef noodle soup with rice noodles, herbs & bean sprouts',
            price: '20.00'
          }
        ]
      }
    ],
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
    ],
    vat_note: 'All prices in CHF incl. 8.1% VAT',
    website_note: 'Website by ',
  }
};

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     DOM ELEMENTS
  ========================================== */
  const CAROUSEL_CONTAINER        = document.querySelector('.carousel-container');
  const TRACK                     = document.querySelector('.carousel-track');
  const PREV_BUTTON               = document.querySelector('.prev');
  const NEXT_BUTTON               = document.querySelector('.next');
  const TOTAL_IMG                 = 14;
  const CAROUSEL_FOOD_CONTAINER   = document.querySelector('.carousel-container-food');
  const TRACK_FOOD                = document.querySelector('.carousel-track-food');
  const PREV_FOOD_BUTTON          = document.querySelector('.prev-food');
  const NEXT_FOOD_BUTTON          = document.querySelector('.next-food');
  const TOTAL_FOOD_IMG            = 4;

  const LIGHTBOX                  = document.getElementById('lightbox');
  const LIGHTBOX_IMG              = document.querySelector('.lightbox-img');
  const CLOSE_BTN                 = document.querySelector('.lightbox .close');
  const LIGHTBOX_PREV             = document.querySelector('.lightbox-prev');
  const LIGHTBOX_NEXT             = document.querySelector('.lightbox-next');

  const SECTION_TITLES            = document.querySelectorAll('h2[data-key]');
  const LOGO_LINK                 = document.querySelector('header .logo');
  const ABOUT_TEXT                = document.querySelector('.about-text');
  const TAKEAWAY_TEXT             = document.querySelector('.takeaway-text');
  const CONTACT_ITEMS             = document.querySelectorAll('.contact-item h3');
  const LANGUAGE_SELECTORS        = document.querySelectorAll('.language-selector');
  const WEBSITE_NOTE              = document.getElementById('website-note');

  const TAKEAWAY_HOURS_HEADING    = document.querySelector('#takeaway .takeaway-item h3');
  const FOOD_MENU_CONTAINER       = document.getElementById('food-menu');
  const DRINKS_CONTAINER          = document.getElementById('drinks-menu');
  const DRINK_CATEGORY_NAV        = document.getElementById('drink-category-nav');
  const DRINK_MENU_SELECTORS      = document.querySelectorAll('.drink-menu-selector');
  const VAT_NOTE_FOOD             = document.getElementById('vat-note-food');
  const VAT_NOTE_DRINKS           = document.getElementById('vat-note-drinks');

  const HAMBURGER                 = document.querySelector('.hamburger');
  const MOBILE_MENU               = document.getElementById('mobile-menu');

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
     CAROUSEL (Images & Food)
  ========================================== */

  function setupCarousel({
    container,
    track,
    prevBtn,
    nextBtn,
    totalImages,
    imgPathPattern
  }) {
    if (!track || !container || !totalImages) return;

    let srcList         = [];
    let visibleSlides   = 1;
    let gapPx           = 0;
    let slideWidth      = 0;
    let stepPx          = 0;
    let cloneCount      = 0;
    let internalIndex   = 0;
    let isTransitioning = false;
    let resizeTimeout   = null;

    function getTrackGap() {
      const cs  = getComputedStyle(track);
      const gap = cs.gap || cs.columnGap || cs.rowGap || '16px';
      return parseFloat(gap) || 0;
    }

    function computeMeasurements() {
      gapPx = getTrackGap();
      const first = track.querySelector('img');
      if (!first) return;

      const rect = first.getBoundingClientRect();
      slideWidth = rect.width;
      stepPx     = slideWidth + gapPx;

      const containerWidth = container.getBoundingClientRect().width || slideWidth;
      visibleSlides = Math.max(
        1,
        Math.min(srcList.length, Math.round(containerWidth / stepPx))
      );

      cloneCount = visibleSlides;
    }

    function attachSlideClickListeners() {
      if (!LIGHTBOX || !LIGHTBOX_IMG) return;

      track.querySelectorAll('img').forEach((img, index) => {
        img.onclick = e => {
          e.stopPropagation();
          const srcAttr = img.getAttribute('src');
          let imgIndex = srcList.indexOf(srcAttr);

          if (imgIndex === -1) {
            imgIndex = index % srcList.length;
          }

          openLightboxFromList(srcList, imgIndex);
        };
      });
    }

    function onTransitionEnd() {
      isTransitioning = false;
    }

    function attachTransitionEnd() {
      track.removeEventListener('transitionend', onTransitionEnd);
      track.addEventListener('transitionend', onTransitionEnd);
    }

    function buildCarousel() {
      // Reset track
      track.innerHTML = '';

      // Add original images
      srcList.forEach(src => {
        const img = document.createElement('img');
        img.className = 'carousel-img';
        img.src       = src;
        img.alt       = '';
        img.loading   = 'lazy';
        track.appendChild(img);
      });

      computeMeasurements();

      const originals = Array.from(track.children);
      const n         = originals.length;
      const cc        = Math.min(cloneCount, n);

      if (!n || !cc) return;

      // Prepend clones of last items (for infinite effect)
      const lastItems = originals.slice(-cc);
      lastItems.forEach(node => {
        const clone = node.cloneNode(true);
        clone.classList.add('clone');
        track.insertBefore(clone, track.firstChild);
      });

      // Append clones of first items (for infinite effect)
      const firstItems = originals.slice(0, cc);
      firstItems.forEach(node => {
        const clone = node.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
      });

      // Start position: after the prepended clones
      internalIndex = cc;
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${internalIndex * stepPx}px)`;
      track.getBoundingClientRect(); // force reflow
      track.style.transition = 'transform 0.45s ease';

      attachSlideClickListeners();
      attachTransitionEnd();
    }

    function prevClick() {
      if (isTransitioning) return;
      isTransitioning = true;

      const n = srcList.length;
      if (!n) return;

      // If we are in the first clone zone, jump to the corresponding real items
      if (internalIndex <= cloneCount) {
        track.style.transition = 'none';
        internalIndex += n;
        track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
        track.getBoundingClientRect();
        track.style.transition = 'transform 0.45s ease';
      }

      internalIndex--;
      track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
    }

    function nextClick() {
      if (isTransitioning) return;
      isTransitioning = true;

      const n = srcList.length;
      if (!n) return;

      const originalsEnd = cloneCount + n;

      // If we are past the last real item (in the end-clone zone), jump back
      if (internalIndex >= originalsEnd) {
        track.style.transition = 'none';
        internalIndex -= n;
        track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
        track.getBoundingClientRect();
        track.style.transition = 'transform 0.45s ease';
      }

      internalIndex++;
      track.style.transform = `translateX(-${internalIndex * stepPx}px)`;
    }

    function attachButtonListeners() {
      if (prevBtn) {
        prevBtn.removeEventListener('click', prevClick);
        prevBtn.addEventListener('click', prevClick);
      }
      if (nextBtn) {
        nextBtn.removeEventListener('click', nextClick);
        nextBtn.addEventListener('click', nextClick);
      }
    }

    function handleResize() {
      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        // Rebuild carousel on resize so measurements stay correct
        buildCarousel();
        attachButtonListeners();
      }, 150);
    }

    function attachTouchEvents() {
      let startX = 0;
      let startY = 0;
      let isTouching = false;
      let isHorizontalSwipe = false;
      const SWIPE_THRESHOLD = 30;

      container.addEventListener('touchstart', e => {
        if (e.touches.length !== 1) return;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        isTouching = true;
        isHorizontalSwipe = false;
      }, { passive: true });

      container.addEventListener('touchmove', e => {
        if (!isTouching) return;
        if (e.touches.length !== 1) return;

        const touch = e.touches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;

        // Detect whether the user is trying to swipe horizontally or scroll vertically
        if (!isHorizontalSwipe) {
          if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
            isHorizontalSwipe = true;
          } else if (Math.abs(dy) > Math.abs(dx)) {
            // User is scrolling vertically, abort swipe handling
            isTouching = false;
            return;
          }
        }

        if (isHorizontalSwipe) {
          // Prevent vertical scroll when we are in horizontal swipe mode
          e.preventDefault();
        }
      }, { passive: false });

      container.addEventListener('touchend', e => {
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
      // Build list of image sources using the provided pattern
      srcList = [];
      for (let i = 1; i <= totalImages; i++) {
        srcList.push(imgPathPattern(i));
      }

      // Preload images and only build the carousel once all are done
      const imgs = [];
      track.innerHTML = '';

      srcList.forEach(src => {
        const img = document.createElement('img');
        img.className = 'carousel-img';
        img.src       = src;
        img.alt       = '';
        img.loading   = 'lazy';
        track.appendChild(img);
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
  }

  // Image carousel
  setupCarousel({
    container: CAROUSEL_CONTAINER,
    track: TRACK,
    prevBtn: PREV_BUTTON,
    nextBtn: NEXT_BUTTON,
    totalImages: TOTAL_IMG,
    imgPathPattern: i => `images/img_${i}.jpg`
  });

  // Food carousel
  setupCarousel({
    container: CAROUSEL_FOOD_CONTAINER,
    track: TRACK_FOOD,
    prevBtn: PREV_FOOD_BUTTON,
    nextBtn: NEXT_FOOD_BUTTON,
    totalImages: TOTAL_FOOD_IMG,
    imgPathPattern: i => `images/food_${i}.png`
  });

  /* ==========================================
     LIGHTBOX
  ========================================== */

  let lightboxSources = [];
  let lightboxIndex   = 0;

  function closeLightbox() {
    if (!LIGHTBOX) return;
    LIGHTBOX.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (CLOSE_BTN) {
    CLOSE_BTN.addEventListener('click', e => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (LIGHTBOX) {
    LIGHTBOX.addEventListener('click', e => {
      if (e.target === LIGHTBOX) {
        closeLightbox();
      }
    });
  }

  if (LIGHTBOX_PREV) {
    LIGHTBOX_PREV.addEventListener('click', e => {
      e.stopPropagation();
      showPrevLightbox();
    });
  }

  if (LIGHTBOX_NEXT) {
    LIGHTBOX_NEXT.addEventListener('click', e => {
      e.stopPropagation();
      showNextLightbox();
    });
  }

  function showLightboxImage() {
    if (!LIGHTBOX_IMG || !lightboxSources.length) return;
    LIGHTBOX_IMG.src = lightboxSources[lightboxIndex];
    LIGHTBOX_IMG.alt = `Rocket Bar picture ${lightboxIndex + 1}`;
  }

  function openLightboxFromList(sources, startIndex = 0) {
    if (!LIGHTBOX) return;
    if (!Array.isArray(sources) || !sources.length) return;

    lightboxSources = sources.slice(); // Kopie
    lightboxIndex   = Math.max(0, Math.min(startIndex, lightboxSources.length - 1));

    LIGHTBOX.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    showLightboxImage();
  }

  function showNextLightbox() {
    if (!lightboxSources.length) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxSources.length;
    showLightboxImage();
  }

  function showPrevLightbox() {
    if (!lightboxSources.length) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxSources.length) % lightboxSources.length;
    showLightboxImage();
  }

  /* ==========================================
     LANGUAGE / TRANSLATIONS
  ========================================== */

  function renderFoodMenu(lang) {
    if (!FOOD_MENU_CONTAINER) return;
    const menu = TRANSLATIONS[lang]?.food;
    if (!menu) return;

    FOOD_MENU_CONTAINER.innerHTML = '';

    menu.forEach(category => {
      const card = document.createElement('div');
      card.className = 'food-card';

      const h3 = document.createElement('h3');
      h3.className = 'food-category';
      h3.textContent = category.category;
      card.appendChild(h3);

      const ul = document.createElement('ul');
      ul.className = 'food-list';

      category.items.forEach(item => {
        const li   = document.createElement('li');
        const line = document.createElement('div');
        line.className = 'food-line';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'food-name';
        nameSpan.textContent = item.name;
        line.appendChild(nameSpan);

        if (item.price) {
          const priceSpan = document.createElement('span');
          priceSpan.className = 'food-price';
          priceSpan.textContent = `${item.price}`;
          line.appendChild(priceSpan);
        }

        li.appendChild(line);

        if (item.desc) {
          const descDiv = document.createElement('div');
          descDiv.className = 'food-desc';
          descDiv.textContent = item.desc;
          li.appendChild(descDiv);
        }

        ul.appendChild(li);
      });

      card.appendChild(ul);
      FOOD_MENU_CONTAINER.appendChild(card);
    });
  }

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
    document.querySelectorAll('a[data-key]').forEach(link => {
      const key = link.dataset.key; // z.B. "nav-about"
      const index = ['nav-about','nav-pictures','nav-takeaway','nav-drinks'].indexOf(key);
      if (index >= 0) {
        link.textContent = TRANSLATIONS[lang].nav[index];
      }
    });

    // Update section titles
    SECTION_TITLES.forEach(title => {
      const key = title.dataset.key.split('-')[0];
      const t   = TRANSLATIONS[lang].titles?.[key];
      if (t) title.textContent = t;
    });

    // About text
    if (ABOUT_TEXT) ABOUT_TEXT.innerHTML = TRANSLATIONS[lang].about;

    // Takeaway text
    if (TAKEAWAY_TEXT) TAKEAWAY_TEXT.innerHTML = TRANSLATIONS[lang].takeaway;

    // Takeaway "Öffnungszeiten" Heading
    if (TAKEAWAY_HOURS_HEADING) {
      const title = TRANSLATIONS[lang].takeaway_hours_title;
      if (title) TAKEAWAY_HOURS_HEADING.textContent = title;
    }

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

    const note = TRANSLATIONS[lang].vat_note;

    // Takeaway VAT note
    if (VAT_NOTE_FOOD) {
        VAT_NOTE_FOOD.textContent = note;
        VAT_NOTE_FOOD.style.display = 'block';
    }

    // Drinks VAT note
    if (VAT_NOTE_DRINKS) {
        VAT_NOTE_DRINKS.textContent = note;
        VAT_NOTE_DRINKS.style.display = 'block';
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

    renderFoodMenu(lang);
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
      if (LIGHTBOX && LIGHTBOX.style.display === 'flex') {
        closeLightbox();
      } else {
        closeMobileMenu();
      }
    }

    if (LIGHTBOX && LIGHTBOX.style.display === 'flex') {
      if (e.key === 'ArrowRight') {
        showNextLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevLightbox();
      }
    }
  });

  // Swipe in der Lightbox
  if (LIGHTBOX) {
    let startX = 0;
    let startY = 0;
    let isTouching = false;
    const SWIPE_THRESHOLD = 30;

    LIGHTBOX.addEventListener('touchstart', e => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isTouching = true;
    }, { passive: true });

    LIGHTBOX.addEventListener('touchend', e => {
      if (!isTouching) return;
      isTouching = false;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) {
          showNextLightbox();
        } else {
          showPrevLightbox();
        }
      }
    });
  }

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
      renderFoodMenu(currentLang);
      renderDrinks(currentLang);
      renderDrinkCategoryNav(currentLang);
      renderMobileDrinkMenu(currentLang);
    }
  });
});
