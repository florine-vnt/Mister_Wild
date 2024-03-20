const restaurantDataBase = [
    {
        // Database des restaurants

        // vérifier si besoin de préciser 4400 dans l'adresse
        // rendre le numero de tel cliquable pour envoie vers un appel
        // rendre l'adresse cliquable

        //Salade, poisson, sandwitch, patisserie

        name: 'Papill\'',
        miniDescription: 'Plats mijotés, papillotes et brunch',
        specialities: ['Plats cuisinées', 'Poisson', 'veggie'],
        distance: '85 m',
        priceRange: '€€',
        adress: '8 rue de Saverne 44000 Nantes',
        shortAddress: '8 rue de Saverne',
        tel: '+336 03 13 05 04',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.51167607285!2d-1.5464413!3d47.211576199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb0fd4e831d%3A0xdd6e96d193d8b1c0!2sPapill&#39;!5e0!3m2!1sfr!2sfr!4v1710946394348!5m2!1sfr!2sfr",
        image: "./assets/Restaurants/Papill.jpg",
        description: 'Vous allez vous régaler les papilles, cuisine authentique'
        // plustot un resto de poisson, changer plats mijotés par poisson?
    },
    {
        name: 'Morse',
        miniDescription: 'Petit bistro de la mer : sandwichs et salades aux crevettes, langoustines, crabe...',
        specialities: ['salade', 'sandwich', 'poisson'],
        distance: '400 m',
        priceRange: '€€€€',
        adress: '1 allee de la maison rouge 44000 Nantes',
        shortAddress: '1 allee de la maison rouge',
        tel: '+33253786518',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1923636143792!2d-1.5531711242047563!3d47.2128182711564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef428e1c806d%3A0x218171b273c48dba!2sLE%20MORSE%20-%20Bistrot%20Restaurant%20Nantes%20-%20HUITRES%20-%20LANGOUSTINES%20-%20SEAFOOD%20-%20LOBSTERROLL!5e0!3m2!1sfr!2sfr!4v1710971070643!5m2!1sfr!2sfr",
        image: './assets/Restaurants/Morse.png',
        image: './assets/Restaurants/Morse.png',
        description: 'Restaurant cosz, spécialisé dans les poissons. On retient spécialement leur spécialité, le fish n chips !!'
        // manque le prix
    },
    {
        name: 'La cantine fermière',
        miniDescription: 'Sandwichs, salades et des plats, cuisinés avec des produits de saison et de fermes locales',
        specialities: 'sandwich street food',
        distance: '240 m',
        priceRange: '€',
        adress: '10 rue de Mayence, 44000 Nantes',
        shortAddress: '10 rue de Mayence',
        tel: '+33211444444',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.25636076282!2d-1.5493553242048284!3d47.21156597115623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef5362ab2627%3A0x44ed9f94968615bd!2zTMOAIENhbnRpbmUgZmVybWnDqHJl!5e0!3m2!1sfr!2sfr!4v1710971027161!5m2!1sfr!2sfr",
        image: './assets/Restaurants/la-cantine-fermiere.png',
        description: 'Vous allez vous régaler les papilles, cuisine authentique'
        // manque les prix et les types de plat proposé
    },
    {
        name: 'Ichigo',
        miniDescription: 'Ramen comme au Japon, mais aussi de gyozas et edemame',
        specialities: 'asiatique ramen gyozas edemame',
        distance: '50 m',
        priceRange: '€',
        adress: '31 rue Fouré, 44000, Nantes',
        shortAddress: '31 rue Fouré',
        tel: '+332 40 35 34 30',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.25636076282!2d-1.5493553242048284!3d47.21156597115623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef76986fd60f%3A0x4345ef7eb4e55a65!2sIchi-go%20Ichi-e%20Ramen!5e0!3m2!1sfr!2sfr!4v1710970974319!5m2!1sfr!2sfr",
        image: './assets/Restaurants/ichigo.png',
        description: 'Ramen, un délice des papilles !!'
    },

    {

        name: 'Les triplettes',
        miniDescription: 'Petit plats cuisiné, pâtisseries et café de spécialité. Cuisine local et agriculture raisonnée.',
        specialities: 'Plats cuisinées Pâtisserie café de spécialité',
        distance: '400 m',
        priceRange: '€€€',
        adress: '4 BIS Rue Emile Masson, 44000 Nantes',
        shortAddress: '4 BIS Rue Emile Masson',
        tel: '+332 28 49 76 01',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.130828442781!2d-1.5492309242047029!3d47.214022371156545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef250c8711ad%3A0xb4a4b31811085b0a!2sLes%20Triplettes!5e0!3m2!1sfr!2sfr!4v1710970935984!5m2!1sfr!2sfr",
        image: './assets/Restaurants/Triplettes.jpg',
        description: 'La seul adresse du quartier pour déguster un café de spécialité !'
    },

    {

        name: 'Dakoo',
        miniDescription: 'Restaurant coréen, plats traditionnel avec des plats vegan!. Livraison possible.',
        specialities: 'coréen Streetfood poulet frit veggies livraison',
        distance: '750 m',
        priceRange: '€',
        adress: '17 Rue Bon Secours, 44000 Nantes',
        shortAddress: '17 Rue Bon Secours',
        tel: '+332 72 02 15 96',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1607963895162!2d-1.5559148242046967!3d47.2134359711564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef5441f247af%3A0x5ceda98305f1d96d!2sDakoo!5e0!3m2!1sfr!2sfr!4v1710970892668!5m2!1sfr!2sfr",
        image: './assets/Restaurants/dakoo.png',
        description: 'Véritable restaurant coréen, avec toutes les spécialités de corée, notament le BIBIMBAP ou le DAK (poulet frit) . Livraison possible.'
    },

    {
        // a completer
        name: 'Papa pasta',
        miniDescription: 'Des pâtes maison, fait uniquement avec des produits locaux, avec des portion généreuse !',
        specialities: 'italien',
        distance: '90 m',
        priceRange: '€',
        adress: '27 rue Fouré, 44000 Nantes',
        shortAddress: '27 rue Fouré',
        tel: '+339 81 30 85 44',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2452151415787!2d-1.5492575242048436!3d47.21178407115636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efa3f385f89f%3A0x20f92c9a224db500!2sPap%C3%A0%20Pasta!5e0!3m2!1sfr!2sfr!4v1710970840826!5m2!1sfr!2sfr",
        image: './assets/Restaurants/',
        description: 'Des pâtes maison, fait uniquement avec des produits locaux, avec des portion généreuse !'
    },

    {
        // a completer
        name: 'Virginie\'s café',
        miniDescription: 'Cuisine vivante. Cuisine bio. Cantine végétarienne. ',
        specialities: 'pizza',
        distance: '85 m',
        priceRange: '€€€',
        adress: '6 rue de Saverne, 44000 Nantes',
        shortAddress: '6 rue de Saverne',
        tel: '+336 24 20 43 05',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2562534461495!2d-1.548899224204885!3d47.21156807115642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671dee021b9a5%3A0x220890b6796361bf!2sVirginie&#39;s%20caf%C3%A9!5e0!3m2!1sfr!2sfr!4v1710970696894!5m2!1sfr!2sfr",
        image: './assets/Restaurants/virgines.net',
        description: ''
    },
    {

        name: 'La machine à crêpes',
        miniDescription: 'Des crêpes et des galettes! Prix abordable et que du fait maison! Une galette veggie est proposée',
        specialities: 'galettes crepes veggie',
        distance: '450 m',
        priceRange: '€',
        adress: '11 chaussée de la Madeleine, 44000 Nantes',
        shortAddress: '11 chaussée de la Madeleine',
        tel: '+332 51 82 71 39',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.25978467342!2d-1.5543319242048474!3d47.21149897115633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeafaee42f0b%3A0x4d62d78b740f3d97!2sCr%C3%AAperie%20%C3%A0%20emporter%20Nantes%20-%20La%20Machine%20%C3%A0%20Cr%C3%AApes!5e0!3m2!1sfr!2sfr!4v1710970649419!5m2!1sfr!2sfr",
        image: './assets/Restaurants/la-machine-a-crepes.png',
        description: 'Des crêpes et des galettes! Prix abordable et que du fait maison! Une galette veggie est proposée'
    },
    {

        name: 'MATA boulangerie',
        miniDescription: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!',
        specialities: 'sandwich cookies Pâtisserie pains',
        distance: '260 m',
        priceRange: '€€',
        adress: '6 rue de Rieux, 44000 Nantes',
        shortAddress: '6 rue de Rieux',
        tel: '+339 70 66 95 83',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2806857786895!2d-1.5478410242048788!3d47.21108997115634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef0606bdccdd%3A0xe0b213f66c3a603!2sMATA%20Boulangerie!5e0!3m2!1sfr!2sfr!4v1710970611472!5m2!1sfr!2sfr",
        image: './assets/Restaurants/mataboulangerie.png',
        description: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!'
    },
    {

        name: 'Boulangerie la Fourmi',
        miniDescription: 'Blé ancien moulu avec une meule en pierre, viennoiserie XXL, sandwich au mètre, une boulangerie à découvrir!',
        specialities: 'sandwich Pâtisserie pains',
        distance: '550 m',
        priceRange: '€',
        adress: '1 chaussée de la Madeleine, 44000 Nantes',
        shortAddress: '1 chaussée de la Madeleine',
        tel: '+339 86 64 69 43',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.214067495746!2d-1.555133424204747!3d47.21239357115636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef8151adda07%3A0x717b51b38b78a482!2sBoulangerie%20La%20Fourmi!5e0!3m2!1sfr!2sfr!4v1710970536218!5m2!1sfr!2sfr",
        image: './assets/Restaurants/boulangerie-la-fourmi.net',
        description: 'Véritable institution nantaise, le café la Fourmi a pris un nouveau départ pour devenir une boulangerie! Les viennoiseries XXL sont un petit déjeuner à elle seul! Pour le midi, vous pouvez choisir votre Jambon-beurre au mètre!'
    },
    {

        name: 'Guindaille',
        miniDescription: 'Bar à manger',
        specialities: "",
        distance: '90 m',
        priceRange: '€€€',
        adress: '36 Rue Fouré, 44000 Nantes',
        shortAddress: '36 Rue Fouré',
        tel: '0240755305',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2450465005163!2d-1.5495317242048032!3d47.21178737115633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efbed73c5e01%3A0x187a55601f6097ac!2sGuindaille!5e0!3m2!1sfr!2sfr!4v1710970323186!5m2!1sfr!2sfr",
        image: './assets/Restaurants/',
        description: 'Un style bistro hyper quali le midi. Le soir, des assiettes généreuses à partager.'
    },
    {

        name: 'a',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        shortAddress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'La Mangouste',
        miniDescription: 'Restaurant, bar à cocktails et vins naturels',
        specialities: "",
        distance: '140 m',
        priceRange: '€€€',
        adress: '30 Rue Fouré, 44000 Nantes',
        shortAddress: '30 Rue Fouré',
        tel: '0251723181',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.223802765004!2d-1.5495078242048335!3d47.21220307115638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eff0bc571423%3A0x8bc6e8e73d07dae7!2sLa%20Mangouste!5e0!3m2!1sfr!2sfr!4v1710970160455!5m2!1sfr!2sfr",
        image: './assets/Restaurants/',
        description: 'Cuisine délicate et savoureuse, accompagnée de vins sélectionnés avec passion et de cocktails parfumés.'
    }

]
// Database des Bars

const BarDataBase = [
    {
        name: 'Napoleone',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: 'cocktail vin biere tapas',
        distance: '85 m',
        priceRange: '€€-€€€',
        adress: ' 1 rue baron',
        shortAddress: ' 1 rue baron',
        tel: '02 53 78 40 61',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2721409788555!2d-1.5495075489104218!3d47.21125717905818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb05311c6ab%3A0x1a10a632301380c9!2s1+Rue+Baron%2C+44000+Nantes!5e0!3m2!1sfr!2sfr!4v1564840539599!5m2!1sfr!2sfr',
        image: "./assets/Bars/Napoleone.png",
        description: 'Cocktails créations, vins et bières locales, Bar a tapas'

    },
    {
        name: 'Le lovecraft',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: 'biere artisanales vin cocktails',
        distance: '120 m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        shortAddress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2317902627647!2d-1.5494068242048158!3d47.21204677115631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef704711943f%3A0x2dda1953527242c9!2sLe%20Lovecraft!5e0!3m2!1sfr!2sfr!4v1710969970907!5m2!1sfr!2sfr',
        image: './assets/Bars/Lelovecraft.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Le lieu unique',
        miniDescription: 'bar dans une ancienne biscuiterie',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '750 m',
        priceRange: '€',
        adress: 'Rue de la Biscuiterie, 44000 Nantes',
        shortAddress: 'Rue de la Biscuiterie',
        tel: '0228499855',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.131940339935!2d-1.5481929242046188!3d47.215291471156554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeba3859f48d%3A0xf0c18b7c67ccd561!2sLe%20Lieu%20Unique%2C%20Rue%20de%20la%20Biscuiterie%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1710969907138!5m2!1sfr!2sfr',
        image: './assets/Bars/barlu.png',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Le bain rouge',
        miniDescription: 'Lieu de spectacles et de tenue d’évènements',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '450 m',
        priceRange: '€',
        adress: '7 All. de la Maison Rouge, 44000 Nantes',
        shortAddress: '7 All. de la Maison Rouge',
        tel: '0986774418',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2017923261346!2d-1.554120424204762!3d47.21263377115634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef40828c1e0f%3A0x62f8d83844e834d5!2sLe%20Bain%20Rouge!5e0!3m2!1sfr!2sfr!4v1710969792441!5m2!1sfr!2sfr',
        image: './assets/Bars/bainrouge.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Coco bandit',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: 'cocktail',
        distance: '400 m',
        priceRange: '€',
        adress: '15 Rue Crucy ',
        shortAddress: '15 Rue Crucy',
        tel: '0640784675',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1339458583834!2d-1.550784424204726!3d47.21396137115651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ef5f977ceedd%3A0xad8f7c4835e4824a!2sCoco%20Bandit!5e0!3m2!1sfr!2sfr!4v1710969625041!5m2!1sfr!2sfr",
        image: './assets/Bars/cocobandit.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Delirium cafe',
        miniDescription: 'sélection de bières pression et soirées musicales ou sportives.',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '450 m',
        priceRange: '€',
        adress: '19 allée Baco 44000 Nantes',
        shortAddress: '19 allée Baco 44000 Nantes',
        tel: '0240089077',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1663259148286!2d-1.5529110242047228!3d47.213327771156436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeaff7048cb1%3A0xc13327c40bf626a1!2sDelirium%20cafe!5e0!3m2!1sfr!2sfr!4v1710969470725!5m2!1sfr!2sfr",
        image: './assets/Bars/Delirium-Cafe.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    }
]

/* JS switch dark-light mode */
const cuisineSwitch = document.querySelector("#cuisine-switch");
const barSwitch = document.querySelector("#bar-switch");
const body = document.querySelector("#body");
const footer = document.querySelector("#ul-footer");
const homeImg = document.querySelector("#home-img");
const cuisineImg = document.querySelector("#primary-filter-img");
const distanceImg = document.querySelector("#distance-img");
const priceImg = document.querySelector("#price-range-img");
const footstepImg = document.querySelectorAll("#footstep-img");
const priceFilterImg = document.querySelectorAll("#price-img");



cuisineSwitch.addEventListener('click', function () {

    const darkMode = body.classList.contains("dark-mode");
    if (darkMode) {
        // put elements in light mode
        cuisineSwitch.classList.toggle("light-mode");
        cuisineSwitch.classList.remove("dark-mode");
        barSwitch.classList.toggle("light-mode");
        barSwitch.classList.remove("dark-mode");
        body.classList.toggle("light-mode");
        body.classList.remove("dark-mode");
        placesList.classList.add("light-mode");
        placesList.classList.remove("dark-mode");
        primaryFilterMenu.classList.add("light-mode");
        primaryFilterMenu.classList.remove("dark-mode");
        footer.classList.toggle("light-mode");
        footer.classList.remove("dark-mode");
        distanceMenu.classList.toggle("light-mode");
        distanceMenu.classList.remove("dark-mode");
        priceMenu.classList.toggle("light-mode");
        priceMenu.classList.remove("dark-mode");
        homeImg.src = "./icons/home_icon.svg";
        cuisineImg.src = "./icons/cuisine_icon.svg";
        distanceImg.src = "./icons/distance_icon.svg";
        priceImg.src = "./icons/price_icon.svg";
        for (let i = 0; i < footstepImg.length; i++) {
            footstepImg[i].src = "./icons/footsteps_light.svg"
        }
        for (let i = 0; i < priceFilterImg.length; i++) {
            priceFilterImg[i].src = "./icons/price_icon.svg"
        }
        //display restaurants
        displayPlaces(restaurantDataBase);
        //display food filters
        displayFoodFilter();
    } else {
        // do nothing, we are already in light mode.
    }
})

barSwitch.addEventListener('click', function () {

    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        // put elements in dark mode
        cuisineSwitch.classList.toggle("dark-mode");
        cuisineSwitch.classList.remove("light-mode");
        barSwitch.classList.toggle("dark-mode");
        barSwitch.classList.remove("light-mode");
        body.classList.toggle("dark-mode");
        body.classList.remove("light-mode");
        placesList.classList.remove("light-mode");
        placesList.classList.add("dark-mode");
        primaryFilterMenu.classList.remove("light-mode");
        primaryFilterMenu.classList.add("dark-mode");
        footer.classList.toggle("dark-mode");
        footer.classList.remove("light-mode");
        distanceMenu.classList.toggle("dark-mode");
        distanceMenu.classList.remove("light-mode");
        priceMenu.classList.toggle("dark-mode");
        priceMenu.classList.remove("light-mode");
        homeImg.src = "./icons/home_darkmode.svg";
        cuisineImg.src = "./icons/drinks_icon.svg";
        distanceImg.src = "./icons/distance_darkmode.svg";
        priceImg.src = "./icons/price_darkmode.svg";
        for (let i = 0; i < footstepImg.length; i++) {
            footstepImg[i].src = "./icons/footsteps_darkmode.svg"
        }
        for (let i = 0; i < priceFilterImg.length; i++) {
            priceFilterImg[i].src = "./icons/price_darkmode.svg"
        }
        //display bars
        displayPlaces(BarDataBase);

        // display drink filters
        displayDrinkFilter();
    } else {
        // do nothing, we are already in dark mode.
    }
})


/// Function to display all the places
const placesList = document.getElementById("places");


function displayPlaces(dataBase) {
    // clear the places list
    placesList.innerHTML = ""

    //figure out if we are in light or dark mode. 
    const lightMode = body.classList.contains("light-mode");


    dataBase.forEach(place => {
        //Create a card 
        let newCard = document.createElement("li");
        newCard.classList.add("card");

        //This determins if we're in light or dark mode and applies the correct class 
        if (lightMode) { newCard.classList.add("light-mode"); } else { newCard.classList.add("dark-mode"); };


        //create a frame and add an image to it, then append to the card
        // the frame is used later in the CSS for cropping

        let imageFrame = document.createElement("div");
        imageFrame.classList.add("picture-frame");
        let image = document.createElement("img");
        image.classList.add("place-picture");
        image.src = place.image;
        image.alt = "Logo du restaurant"
        imageFrame.appendChild(image)
        newCard.appendChild(imageFrame);

        //create a div for the place name, distance and mini-description
        let container = document.createElement("div");

        //create a name  
        let placeName = document.createElement("h2");
        placeName.classList.add("place-name");
        placeName.innerText = place.name;
        container.appendChild(placeName);

        //create a distance
        let placeDistance = document.createElement("p");
        placeDistance.classList.add("place-distance");
        placeDistance.innerText = place.distance;
        container.appendChild(placeDistance);

        //create a mini-description
        let miniDescription = document.createElement("p");
        miniDescription.classList.add("mini-description");
        miniDescription.innerText = place.miniDescription;
        container.appendChild(miniDescription);

        //create a div for the pictos
        let pictoContainer = document.createElement("div")
        pictoContainer.classList.add("picto-container")

        //create speciality, maps, price, tel picto
        let specialityPicto = document.createElement("img");
        specialityPicto.src = "./icons/cupcake.svg";
        pictoContainer.appendChild(specialityPicto);

        // let specialityPicto = document.createElement("p");
        // specialityPicto.innerText = place.specialities;
        // pictoContainer.appendChild(specialityPicto);

        let pricePicto = document.createElement("img");
        pricePicto.src = "./icons/price_icon.svg";
        pictoContainer.appendChild(pricePicto);

        // let pricePicto = document.createElement("p");
        // pricePicto.innerText = place.priceRange;
        // pictoContainer.appendChild(pricePicto);

        //create a clickable tel picto
        let linkableTel = document.createElement('a');
        linkableTel.href = `"tel:${place.tel}"`

        let telPicto = document.createElement("img");
        telPicto.src = "./icons/tel_icon.png"
        linkableTel.appendChild(telPicto);
        pictoContainer.appendChild(linkableTel);

        // let telPicto = document.createElement("p");
        // telPicto.innerText = place.tel;
        // pictoContainer.appendChild(telPicto);


        //create a div for full-description and address
        let moreinfoContainer = document.createElement("div")
        moreinfoContainer.classList.add("more-info-container")

        // create a full-description
        let fullDescription = document.createElement("p");
        fullDescription.innerText = place.description;
        moreinfoContainer.appendChild(fullDescription);

        // create a short address 
        let shortAddress = document.createElement("p");
        shortAddress.innerText = place.shortAddress;
        moreinfoContainer.appendChild(shortAddress);

        // TODO : add Gmaps at the bottom of selected card 
        let googleMap = document.createElement("div");
        googleMap.innerHTML = `<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.51167607285!2d-1.5464413!3d47.211576199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb0fd4e831d%3A0xdd6e96d193d8b1c0!2sPapill&#39;!5e0!3m2!1sfr!2sfr!4v1710946394348!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style="border:0; border-radius:2vh" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>`
        googleMap.classList.add("google-map");
        moreinfoContainer.appendChild(googleMap);

        /// TODO : add the distance image.inside of a container.

        //Append the main info div to the card
        newCard.appendChild(container);
        //Append the picto div to the card
        newCard.appendChild(pictoContainer);
        //Append the more info div to the card
        newCard.appendChild(moreinfoContainer);
        //Append the Gmaps div to the card

        //Append the card to the Places list
        placesList.appendChild(newCard);

    });
}

displayPlaces(restaurantDataBase);

// ZOOM ON A SELECTED CARD 
// first card selected. TO DO : select all cards
let selectedCard = document.querySelector(".card");
// adding an EventListener when clicking the selected card and adding a new class
selectedCard.addEventListener('click', function () {
    selectedCard.classList.toggle("card-selected");

    // // variables had to be re-called since they were declared in the fonction
    // let pictoContainer = document.querySelector(".picto-container");
    // let moreinfoContainer = document.querySelector(".more-info-container");

    // //display hidden container
    // pictoContainer.style.display = "block";
    // moreinfoContainer.style.display = "block";
})


//START OF MINI MENUS BEHAVIOUR
/// Functions to display/hide the mini-menus
const distanceMenuButton = document.getElementById("distance");
const distanceMenu = document.getElementById("distance-menu");
const priceMenuButton = document.getElementById("price-range");
const priceMenu = document.getElementById("price-range-menu");
const menuContainer = document.getElementById("mini-menus-container");
const placesContainer = document.getElementById("places-container");
const filterBar = document.getElementById("filter-bar");
const primaryFilterButton = document.getElementById("primary-filter");
const primaryFilterMenu = document.getElementById("primary-filter-container");

// make primary filter menu appear
primaryFilterButton.addEventListener("click", function () {

    menuContainer.style.zIndex = 3;
    menuContainer.classList.remove("hidden");
    sleep(10).then(() => {

        primaryFilterMenu.classList.toggle("collapsed");


        if (priceMenu.classList.contains("collapsed") === false) { priceMenu.classList.add("collapsed") };
        if (distanceMenu.classList.contains("collapsed") === false) { distanceMenu.classList.add("collapsed") };

        //if all menus are collapsed, put the container to the background
        if (distanceMenu.classList.contains("collapsed") && priceMenu.classList.contains("collapsed") && primaryFilterMenu.classList.contains("collapsed")) {
            // bring the menu container to the front
            sleep(300).then(() => {
                menuContainer.style.zIndex = 0;
                menuContainer.classList.add("hidden")
            });
        }
    });
});

// make distance menu appear
distanceMenuButton.addEventListener("click", function () {

    menuContainer.classList.remove("hidden");
    sleep(10).then(() => {
        distanceMenu.classList.toggle("collapsed");
        primaryFilterMenu.classList.add("collapsed");

        menuContainer.style.zIndex = 3;

        console.log("tu débugge le bon truc");
        //if all menus are collapsed, put the container to the background
        if (distanceMenu.classList.contains("collapsed") && priceMenu.classList.contains("collapsed") && primaryFilterMenu.classList.contains("collapsed")) {
            // bring the menu container to the front
            sleep(300).then(() => {
                menuContainer.style.zIndex = 0;
                menuContainer.classList.add("hidden")
            });
        }
    });
});

// make price menu appear
priceMenuButton.addEventListener("click", function () {

    priceMenu.classList.toggle("collapsed");

    menuContainer.style.zIndex = 3;
    // check if another menu is already open
    if (distanceMenu.classList.contains("collapsed")) {

        // bring the menu container to the front

    }


    menuContainer.classList.remove("hidden");
    sleep(10).then(() => {
        priceMenu.classList.toggle("collapsed");
        primaryFilterMenu.classList.add("collapsed");

        menuContainer.style.zIndex = 3;
        //if all menus are collapsed, put the container to the background
        if (distanceMenu.classList.contains("collapsed") && priceMenu.classList.contains("collapsed") && primaryFilterMenu.classList.contains("collapsed")) {
            // bring the menu container to the front
            sleep(300).then(() => {
                menuContainer.style.zIndex = 0;
                menuContainer.classList.add("hidden")
            });
        }
    });
});

//make all menus dissapear when clicking somewhere else

menuContainer.addEventListener("click", function (event) {

    //if either menu is clicked, do nothing.
    // the event.target makes us able to knwo wether the user clicked on a menu or somewhere else, it is AMAZING.
    if (distanceMenu.contains(event.target) || priceMenu.contains(event.target) || primaryFilterMenu.contains(event.target)) {
        console.log("clic sur un menu");
    } else {
        priceMenu.classList.add("collapsed");
        distanceMenu.classList.add("collapsed");
        primaryFilterMenu.classList.add("collapsed");
        sleep(300).then(() => {
            menuContainer.style.zIndex = 0;;
            menuContainer.classList.add("hidden")
        });
    }

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// price menu filtering

// there are 3 buttons and 4 filter choices : 
// "doesn't matter" : 0 
// "low-range" :1
// "mid-range":2
// "high range":3
// These choices will be set in a global variable that is initialized at 0
let priceFilter = 0;

const priceFilterButtonLow = document.getElementById("price-range-low");
const priceFilterButtonMid = document.getElementById("price-range-mid");
const priceFilterButtonHigh = document.getElementById("price-range-high");

priceFilterButtonLow.addEventListener("click", function () {
    //figure out if we are in light or dark mode. 
    const lightMode = body.classList.contains("light-mode");

    // if filter wasn't already activated
    if (priceFilter !== 1) {
        priceFilter = 1;

        // change the image(s) inside the button to make it/them pink
        for (const image of priceFilterButtonLow.children) {
            image.src = './icons/price_pink.svg';
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of priceFilterButtonMid.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }
        for (const image of priceFilterButtonHigh.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // make the price menu icon appear pink
        priceMenuButton.firstChild.src = './icons/price_pink.svg'




        // re-display la selection
    }
    // if filter already was activated
    else {
        // set the price filter to none 
        priceFilter = 0;

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of priceFilterButtonLow.children) {
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // reset the price menu icon to its normal colour (light or dark)
        if (lightMode) { priceMenuButton.firstChild.src = './icons/price_icon.svg' }
        else { priceMenuButton.firstChild.src = './icons/price_darkmode.svg' };
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { priceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });
});


priceFilterButtonMid.addEventListener("click", function () {

    //figure out if we are in light or dark mode. 
    const lightMode = body.classList.contains("light-mode");

    // if filter wasn't already activated
    if (priceFilter !== 2) {
        priceFilter = 2;

        // change the image(s) inside the button to make it/them pink
        for (const image of priceFilterButtonMid.children) {
            image.src = './icons/price_pink.svg';
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of priceFilterButtonLow.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }
        for (const image of priceFilterButtonHigh.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // make the price menu icon appear pink
        priceMenuButton.firstChild.src = './icons/price_pink.svg'

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        priceFilter = 0;


        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of priceFilterButtonMid.children) {
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // reset the price menu icon to its normal colour (light or dark)
        if (lightMode) { priceMenuButton.firstChild.src = './icons/price_icon.svg' }
        else { priceMenuButton.firstChild.src = './icons/price_darkmode.svg' };
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { priceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });

});

priceFilterButtonHigh.addEventListener("click", function () {

    //figure out if we are in light or dark mode. 
    const lightMode = body.classList.contains("light-mode");

    // if filter wasn't already activated
    if (priceFilter !== 3) {
        priceFilter = 3;

        // change the image(s) inside the button to make it/them pink
        for (const image of priceFilterButtonHigh.children) {
            image.src = './icons/price_pink.svg';
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of priceFilterButtonLow.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }
        for (const image of priceFilterButtonMid.children) {
            // reset the icon to its normal colour (light or dark)
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // make the price menu icon appear pink
        priceMenuButton.firstChild.src = './icons/price_pink.svg'

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        priceFilter = 0;

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of priceFilterButtonHigh.children) {
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // reset the price menu icon to its normal colour (light or dark)
        if (lightMode) { priceMenuButton.firstChild.src = './icons/price_icon.svg' }
        else { priceMenuButton.firstChild.src = './icons/price_darkmode.svg' };
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { priceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });
});


// Distance menu filtering

// there are 3 buttons and 4 filter choices : 
// "doesn't matter" : 0 
// "low-range" :1
// "mid-range":2
// "high range":3
// These choices will be set in a global variable that is initialized at 0
let distanceFilter = 0;

// declare the three mini-menu buttons
const distanceFilterButtonLow = document.getElementById("distance-low");
const distanceFilterButtonMid = document.getElementById("distance-mid");
const distanceFilterButtonHigh = document.getElementById("distance-high");

// declaring different paths to different icons for light and dark mode
const distanceIconLight = './icons/distance_icon.svg';
const distanceIconDark = './icons/distance_darkmode.svg';
const distanceIconPink = './icons/distance_pink.svg';
const footstepsIconLight = './icons/footsteps_light.svg';
const footstepsIconDark = './icons/footsteps_darkmode.svg';
const footstepsIconPink = './icons/footsteps_pink.svg';

distanceFilterButtonHigh.addEventListener("click", function () {

    //figure out if we are in light or dark mode and fetch the correct icons
    let footstepsIcon = '';
    let distanceIcon = '';
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        distanceIcon = distanceIconLight;
        footstepsIcon = footstepsIconLight;
    }
    else {
        distanceIcon = distanceIconDark;
        footstepsIcon = footstepsIconDark;
    }

    // if filter wasn't already activated
    if (distanceFilter !== 3) {
        distanceFilter = 3;

        // change the image(s) inside the button to make it/them pink
        for (const image of distanceFilterButtonHigh.children) {
            image.src = footstepsIconPink;
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of distanceFilterButtonMid.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }
        for (const image of distanceFilterButtonLow.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }

        // make the price menu icon appear pink
        distanceMenuButton.firstChild.src = distanceIconPink;

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        distanceFilter = 0;

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonHigh.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { distanceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });
});


distanceFilterButtonMid.addEventListener("click", function () {

    //figure out if we are in light or dark mode and fetch the correct icons
    let footstepsIcon = '';
    let distanceIcon = '';
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        distanceIcon = distanceIconLight;
        footstepsIcon = footstepsIconLight;
    }
    else {
        distanceIcon = distanceIconDark;
        footstepsIcon = footstepsIconDark;
    }

    // if filter wasn't already activated
    if (distanceFilter !== 2) {
        distanceFilter = 2;

        // change the image(s) inside the button to make it/them pink
        for (const image of distanceFilterButtonMid.children) {
            image.src = footstepsIconPink;
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of distanceFilterButtonHigh.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }
        for (const image of distanceFilterButtonLow.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }

        // make the price menu icon appear pink
        distanceMenuButton.firstChild.src = distanceIconPink;

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        distanceFilter = 0;

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonMid.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { distanceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });
});


distanceFilterButtonLow.addEventListener("click", function () {

    //figure out if we are in light or dark mode and fetch the correct icons
    let footstepsIcon = '';
    let distanceIcon = '';
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        distanceIcon = distanceIconLight;
        footstepsIcon = footstepsIconLight;
    }
    else {
        distanceIcon = distanceIconDark;
        footstepsIcon = footstepsIconDark;
    }

    // if filter wasn't already activated
    if (distanceFilter !== 1) {
        distanceFilter = 1;

        // change the image(s) inside the button to make it/them pink
        for (const image of distanceFilterButtonLow.children) {
            image.src = footstepsIconPink;
        }

        // reset the colour of all other buttons, if any was selected (brute force and unefficient, but it'll work)
        for (const image of distanceFilterButtonMid.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }
        for (const image of distanceFilterButtonHigh.children) {
            // reset the icon to its normal colour (light or dark)
            image.src = footstepsIcon;
        }

        // make the price menu icon appear pink
        distanceMenuButton.firstChild.src = distanceIconPink;

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        distanceFilter = 0;

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonLow.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }

    //apply all filters
    applyFilters();

    // close the menu after a little while
    sleep(600).then(() => { distanceMenu.classList.add("collapsed") });
    sleep(900).then(() => { menuContainer.style.zIndex = 0; });
});

//END OF MINI MENUS BEHAVIOUR


//START OF PRIMARY FILTER BEHAVIOUR



primaryFoodFilters = [
    {
        name: 'italien',
        icon: './icons/pizza.svg',
        iconPink: './icons/pizza_pink.svg',
        active: false
    },
    {
        name: 'sandwich',
        icon: './icons/sandwich.svg',
        iconPink: './icons/sandwich_pink.svg',
        active: false
    },
    {
        name: 'asiatique',
        icon: './icons/ramen.svg',
        iconPink: './icons/ramen_pink.svg',
        active: false
    },
    {
        name: 'burger',
        icon: './icons/burger.svg',
        iconPink: './icons/burger_pink.svg',
        active: false
    },
    {
        name: 'dessert',
        icon: './icons/cupcake.svg',
        iconPink: './icons/cupcake_pink.svg',
        active: false
    },
    {
        name: 'salade',
        icon: './icons/salade.svg',
        iconPink: './icons/salade_pink.svg',
        active: false
    }
];

secondaryFoodFilters = [
    {
        name: 'vegan',
        icon: './icons/vegan.svg',
        iconPink: './icons/vegan_pink.svg',
        active: false
    },
    {
        name: 'halal',
        icon: './icons/halal.svg',
        iconPink: './icons/halal_pink.svg',
        active: false
    },
    {
        name: 'sans gluten',
        icon: './icons/glutenfree.svg',
        iconPink: './icons/glutenfree_pink.svg',
        active: false
    }
];


primaryDrinkFilters = [
    {
        name: 'biere',
        icon: './icons/beer.svg',
        iconPink: './icons/beer_pink.svg',
        active: false
    },
    {
        name: 'cafe',
        icon: './icons/coffee.svg',
        iconPink: './icons/coffee_pink.svg',
        active: false
    },
    {
        name: 'vin',
        icon: './icons/wine.svg',
        iconPink: './icons/wine_pink.svg',
        active: false
    },
    {
        name: 'cocktails',
        icon: './icons/cocktail.svg',
        iconPink: './icons/cocktail_pink.svg',
        active: false
    }

];

///// FILTERS NEED TO ALL BE RESET TO FALSE WHEN SWITCHING MODES !!!!!

function displayFoodFilter() {
    primaryFilterMenu.innerHTML = "";

    /// create the different "cuisines" section

    let firstLabel = document.createElement("p");
    firstLabel.innerText = "Catégories"
    primaryFilterMenu.appendChild(firstLabel);

    let mainFiltersList = document.createElement("ul");

    // create one clickable button for each primary filter
    primaryFoodFilters.forEach((filter, index) => {
        console.log(index)
        console.log(primaryFoodFilters[index])
        //create a button
        filterButton = document.createElement("button");

        filterButton.setAttribute("id", filter.name);

        //add the behaviour to the button.
        filterButton.addEventListener("click", function () {
            //maybe these two variables are useless, i can't decide. 
            let targetFilter = filter.name;
            let targetIndex = index;
            // this one sure isn't : removing it prevents the function form target the right button.
            let targetButton = document.getElementById(targetFilter);

            //toggle primary filter
            if (primaryFoodFilters[targetIndex].active == false) {

                //deactivate all other primary filters  -> BUG : how to target all of the buttons ? 
                primaryFoodFilters.forEach(filter => {
                    filter.active = false;
                    let targetButton = document.getElementById(filter.name);
                    targetButton.firstChild.src = filter.icon;

                })

                // activate the one that was clicked
                primaryFoodFilters[targetIndex].active = true;
                targetButton.firstChild.src = primaryFoodFilters[targetIndex].iconPink

            } else {
                console.log("le filtre etait inactif")
                primaryFoodFilters[targetIndex].active = false;
                targetButton.firstChild.src = primaryFoodFilters[targetIndex].icon
            }

            //impact on the primary filter icon
            if (isPrimaryFilterActive()) {
                primaryFilterButton.firstChild.src = './icons/cuisine_pink.svg'
            } else {
                primaryFilterButton.firstChild.src = './icons/cuisine_icon.svg'
            };

            //apply all filters
            applyFilters();
        });


        //create and append an image
        buttonIcon = document.createElement("img");
        if (filter.active == true) {
            buttonIcon.src = filter.iconPink;
        } else {
            buttonIcon.src = filter.icon;
        }
        buttonIcon.alt = filter.name;
        filterButton.appendChild(buttonIcon);

        //append the button to the ul
        mainFiltersList.appendChild(filterButton);
    });

    primaryFilterMenu.appendChild(mainFiltersList);

    /// create the "special menus" section
    let secondLabel = document.createElement("p");
    secondLabel.innerText = "Régimes alimentaires particuliers"
    primaryFilterMenu.appendChild(secondLabel);

    let secondaryFiltersList = document.createElement("ul");

    // create one clickable button for each secondary filter
    secondaryFoodFilters.forEach((filter, index) => {
        console.log(filter.name);

        //create a button
        filterButton = document.createElement("button");

        filterButton.setAttribute("id", filter.name);

        //add the behaviour to the button.
        filterButton.addEventListener("click", function () {
            //maybe these two variables are useless, i can't decide. 
            let targetFilter = filter.name;
            let targetIndex = index;
            // this one sure isn't : removing it prevents the function form target the right button.
            let targetButton = document.getElementById(targetFilter);

            //toggle primary filter
            if (secondaryFoodFilters[targetIndex].active == false) {
                secondaryFoodFilters[targetIndex].active = true;
                targetButton.firstChild.src = secondaryFoodFilters[targetIndex].iconPink

            } else {
                console.log("le filtre etait inactif")
                secondaryFoodFilters[targetIndex].active = false;
                targetButton.firstChild.src = secondaryFoodFilters[targetIndex].icon
            }

            //impact on the primary filter icon
            if (isPrimaryFilterActive()) {
                primaryFilterButton.firstChild.src = './icons/cuisine_pink.svg'
            } else {
                primaryFilterButton.firstChild.src = './icons/cuisine_icon.svg'
            };

            //apply all filters
            applyFilters();
        });


        //create and append an image
        buttonIcon = document.createElement("img");
        //create and append an image
        buttonIcon = document.createElement("img");
        if (filter.active == true) {
            buttonIcon.src = filter.iconPink;
        } else {
            buttonIcon.src = filter.icon;
        }
        buttonIcon.alt = filter.name;
        filterButton.appendChild(buttonIcon);

        //append the button to the ul
        secondaryFiltersList.appendChild(filterButton);
    });
    primaryFilterMenu.appendChild(secondaryFiltersList);

}

function displayDrinkFilter() {
    primaryFilterMenu.innerHTML = "";

    /// create the different "drinks" section

    let firstLabel = document.createElement("p");
    firstLabel.innerText = "Catégories"
    primaryFilterMenu.appendChild(firstLabel);

    let mainFiltersList = document.createElement("ul");

    // create one clickable button for each primary filter
    primaryDrinkFilters.forEach((filter, index) => {

        //create a button
        filterButton = document.createElement("button");
        filterButton.setAttribute("id", filter.name);

        //add the behaviour to the button.
        filterButton.addEventListener("click", function () {
            //maybe these two variables are useless, i can't decide. 
            let targetFilter = filter.name;
            let targetIndex = index;
            // this one sure isn't : removing it prevents the function form target the right button.
            let targetButton = document.getElementById(targetFilter);

            //toggle primary filter
            if (primaryDrinkFilters[targetIndex].active == false) {

                //deactivate all other primary filters  -> BUG : how to target all of the buttons ? 
                primaryDrinkFilters.forEach(filter => {
                    filter.active = false;
                    let targetButton = document.getElementById(filter.name);
                    targetButton.firstChild.src = filter.icon;

                })

                primaryDrinkFilters[targetIndex].active = true;
                targetButton.firstChild.src = primaryDrinkFilters[targetIndex].iconPink

            } else {
                console.log("le filtre etait inactif")
                primaryDrinkFilters[targetIndex].active = false;
                targetButton.firstChild.src = primaryDrinkFilters[targetIndex].icon
            }

            //impact on the primary filter icon
            if (isPrimaryFilterActive()) {
                primaryFilterButton.firstChild.src = './icons/drinks_pink.svg'
            } else {
                primaryFilterButton.firstChild.src = './icons/drinks_icon.svg'
            };

            //apply all filters
            applyFilters();
        });

        //create and append an image
        buttonIcon = document.createElement("img");
        if (filter.active == true) {
            buttonIcon.src = filter.iconPink;
        } else {
            buttonIcon.src = filter.icon;
        }
        buttonIcon.alt = filter.name;
        filterButton.appendChild(buttonIcon);

        //append the button to the ul
        mainFiltersList.appendChild(filterButton);
    });

    primaryFilterMenu.appendChild(mainFiltersList);

}

function isPrimaryFilterActive() {

    let atLeastOneFilterIsActive = false;

    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        primaryFoodFilters.forEach((filter) => {
            if (filter.active) { atLeastOneFilterIsActive = true };
        });
        secondaryFoodFilters.forEach((filter) => {
            if (filter.active) { atLeastOneFilterIsActive = true };
        });
    } else {
        primaryDrinkFilters.forEach((filter) => {
            if (filter.active) { atLeastOneFilterIsActive = true };
        });
    }

    return atLeastOneFilterIsActive;
}

//init with a food filter
displayFoodFilter();

//END OF PRIMARY FILTER BEHAVIOUR

/// A little animation, a little after the page loads the primary filter button will blink. 

function blink(element) {
    element.style.transform = 'scale(2)'
    sleep(310).then(() => {
        element.style.transform = 'scale(1)'
        sleep(310).then(() => {
            element.style.transform = 'scale(2)'
            sleep(310).then(() => {
                element.style.transform = 'scale(1)'
            });
        });
    });
}

sleep(1500).then(() => {
    blink(primaryFilterButton);
});
// sleep(2800).then(() => {
//     blink(distanceMenuButton);
// });
// sleep(3200).then(() => {
//     blink(priceMenuButton);
// });



//// FILTERING "INTELLIGENCE"

function filterByPrimary(originalDataBase, filteringArray) {

    //Make sure there is at least one primary filter activated, otherwise retrun the original DB
    if (filteringArray.some(filter => filter.active) == false) { return originalDataBase };

    //filter the original database
    return filteredDataBase = originalDataBase.filter((place) => {

        let atLeastOneMatch = false;
        // check all of the filters one by one. SUB-OPTIMAL, but it works.
        filteringArray.forEach(filter => {

            // only for active filters
            if (filter.active) {

                if (place.specialities.includes(filter.name)) {
                    atLeastOneMatch = true;
                };

            }
        });

        return atLeastOneMatch;

    });
}

function applyFilters() {
    let filteredDataBase = [];
    /// if lightmode
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        filteredDataBase = filterByPrimary(restaurantDataBase, primaryFoodFilters);
    } else {
        filteredDataBase = filterByPrimary(BarDataBase, primaryDrinkFilters);
    }
    /// if darkmode

    ///then filter by price and by distance
    filteredDataBase = filterByPrice(filteredDataBase, priceFilter)
    //filteredDataBase = filterByDistance(filteredDataBase, distanceFilter)

    // check wether empty or not, if so, put an object to inform the user.
    if (filteredDataBase.length === 0) {
        filteredDataBase = [{
            name: 'Pas de résultat',
            miniDescription: 'Soyez moins exigeant. La vie vous le rendra.',
            specialities: ['salade', 'sandwich', 'poisson'],
            distance: '',
            priceRange: '',
            adress: '',
            tel: '',
            linkToMaps: '',
            image: './assets/noResult.png',
            description: ''
            // manque le prix
        }]
    }
    // adjust display
    displayPlaces(filteredDataBase);
}

// Filter the restaurant database by price
function filterByPrice(dataBase, priceFilter) {
    if (priceFilter == 0) { return dataBase; };
    return dataBase.filter(restaurant => {
        return restaurant.priceRange.length <= priceFilter
    });
}

