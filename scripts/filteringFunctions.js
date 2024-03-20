import { displayPlaces } from './placesFunctions.js';
import { sleep } from './home.js';
import { distanceMenu } from './home.js';
import { priceMenu } from './home.js';
import { menuContainer } from './home.js';


export function applyFilters() {
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






function filterByPrimary(originalDataBase, filteringArray) {

    //Make sure there is at least one primary filter activated, otherwise retrun the original DB
    if (filteringArray.some(filter => filter.active) == false) { return originalDataBase };

    //filter the original database
    let filteredDataBase=[];
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




// Filter the restaurant database by price
function filterByPrice(dataBase, priceFilter) {
    if (priceFilter == 0) { return dataBase; };
    return dataBase.filter(restaurant => {
        return restaurant.priceRange.length <= priceFilter
    });
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
const priceMenuButton = document.getElementById("price-range");

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
const distanceMenuButton = document.getElementById("distance");

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





export const restaurantDataBase = [
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
        priceRange: '€',
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
        tel: '+33253786518',
        linkToMaps: '',
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
        tel: '+33211444444',
        linkToMaps: '',
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
        tel: '+332 40 35 34 30',
        linkToMaps: '',
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
        tel: '+332 28 49 76 01',
        linkToMaps: '',
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
        tel: '+332 72 02 15 96',
        linkToMaps: '',
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
        tel: '+339 81 30 85 44',
        linkToMaps: '',
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
        tel: '+336 24 20 43 05',
        linkToMaps: '',
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
        tel: '+332 51 82 71 39',
        linkToMaps: '',
        image: './assets/Restaurants/la-machine-a-crepes.png',
        description: 'Des crêpes et des galettes! Prix abordable et que du fait maison! Une galette veggie est proposée'
    },
    {

        name: 'MATA boulangerie',
        miniDescription: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!',
        specialities: 'sandwich cookies Pâtisserie pains',
        distance: '400 m',
        priceRange: '€€',
        adress: '6 rue de Rieux, 44000 Nantes',
        tel: '+339 70 66 95 83',
        linkToMaps: '',
        image: './assets/Restaurants/mataboulangerie.png',
        description: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!'
    },
    {

        name: 'boulangerie la fourmi',
        miniDescription: 'Blé ancien moulu avec une meule en pierre, viennoiserie XXL, sandwich au mètre, une boulangerie à découvrir!',
        specialities: 'sandwich Pâtisserie pains',
        distance: '550 m',
        priceRange: '€',
        adress: '1 chaussée de la Madeleine, 44000 Nantes',
        tel: '+339 86 64 69 43',
        linkToMaps: '',
        image: './assets/Restaurants/boulangerie-la-fourmi.net',
        description: 'Véritable institution nantaise, le café la Fourmi a pris un nouveau départ pour devenir une boulangerie! Les viennoiseries XXL sont un petit déjeuner à elle seul! Pour le midi, vous pouvez choisir votre Jambon-beurre au mètre!'
    },
    {

        name: 'la mangouste',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'Guindaille',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'a',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'la mangouste',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    }

]
// Database des Bars

export const BarDataBase = [
    {
        name: 'Napoleone',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: 'cocktail vin biere tapas',
        distance: '85 m',
        priceRange: '€€-€€€',
        adress: ' 1 rue baron',
        tel: '02 53 78 40 61',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2721409788555!2d-1.5495075489104218!3d47.21125717905818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb05311c6ab%3A0x1a10a632301380c9!2s1+Rue+Baron%2C+44000+Nantes!5e0!3m2!1sfr!2sfr!4v1564840539599!5m2!1sfr!2sfr',
        image: "./assets/Bars/Napoleone.png",
        description: 'Cocktails créations, vins et bières locales, Bar a tapas'

    },
    {
        name: 'Le lovecraft',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: 'biere artisanales vin cocktails',
        distance: '400 m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
        image: './assets/Bars/Lelovecraft.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Le lieu unique',
        miniDescription: 'bar dans une ancienne biscuiterie',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '400 m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
        image: './assets/Bars/barlu.png',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'le bain rouge',
        miniDescription: 'Lieu de spectacles et de tenue d’évènements',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '400 m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
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
        tel: '0640784675',
        linkToMaps: '',
        image: './assets/Bars/cocobandit.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Delirium cafe',
        miniDescription: 'sélection de bières pression et soirées musicales ou sportives.',
        specialities: 'bieres artisanales vins raffinés cocktails maison',
        distance: '400 m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
        image: './assets/Bars/Delirium-Cafe.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    }
]


export const primaryFoodFilters = [
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

export const secondaryFoodFilters = [
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


export const primaryDrinkFilters = [
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