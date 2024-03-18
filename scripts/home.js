const restaurantDataBase = [
    {
        // Database des restaurants

        // vérifier si besoin de préciser 4400 dans l'adresse
        // rendre le numero de tel cliquable pour envoie vers un appel
        // rendre l'adresse cliquable

        name: 'Papill\'',
        miniDescription: 'Plats mijotés, papillotes et brunch',
        specialities: ['Plats cuisinées', 'Poisson', 'veggie'],
        distance: '85m',
        priceRange: '€',
        adress: '8 rue de Saverne 44000 Nantes',
        tel: '+336 03 13 05 04',
        linkToMaps: 'a',
        image: "./assets/Restaurants/Papill.jpg",
        description: 'Vous allez vous régaler les papilles, cuisine authentique'
        // plustot un resto de poisson, changer plats mijotés par poisson?
    },
    {
        name: 'Morse',
        miniDescription: 'petit bistro de la mer : sandwichs et salades aux crevettes, langoustines, crabe...',
        miniDescription: 'petit bistro de la mer : sandwichs et salades aux crevettes, langoustines, crabe...',
        specialities: ['salade', 'sandwich', 'poisson'],
        distance: '400m',
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
        specialities: ['Sandwiches', 'street food', 'aaaaaa'],
        distance: '240m',
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
        specialities: ['ramen', 'gyozas', 'edemame'],
        distance: '50m',
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
        specialities: ['Plats cuisinées', 'Pâtisserie', 'café de spécialité'],
        distance: '400m',
        priceRange: '€€€',
        adress: '4 BIS Rue Emile Masson, 44000 Nantes',
        tel: '+332 28 49 76 01',
        linkToMaps: '',
        image: './assets/Restaurants/Triplettes.jpg',
        description: 'La seul adresse du quartier pour déguster un café de spécialité !'
    },

    {
        //mettre photo
        name: 'Dakoo',
        miniDescription: 'Restaurant coréen, plats traditionnel avec des plats vegan!. Livraison possible.',
        specialities: ['coréen', 'Streetfood', 'poulet frit', 'veggies', 'livraison'],
        distance: '750m',
        priceRange: '€',
        adress: '17 Rue Bon Secours, 44000 Nantes',
        tel: '+332 72 02 15 96',
        linkToMaps: '',
        image: './assets/Restaurants/dakoo.png',
        description: 'Véritable restaurant coréen, avec toutes les spécialités de corée, notament le BIBIMBAP ou le DAK (poulet frit) . Livraison possible.'
    },

    {

        name: 'Papa pasta',
        miniDescription: '',
        specialities: ['', '', ''],
        distance: '400m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },

    {

        name: 'Virginie\'s café',
        miniDescription: '',
        specialities: ['', '', ''],
        distance: '400m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'La machine à crêpes',
        miniDescription: '',
        specialities: ['', '', ''],
        distance: '400m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'MATA boulangerie',
        miniDescription: '',
        specialities: ['', '', ''],
        distance: '400m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'boulangerie la fourmi',
        miniDescription: '',
        specialities: ['', '', ''],
        distance: '400m',
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
        specialities: ['', '', ''],
        distance: '400m',
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
        specialities: ['', '', ''],
        distance: '400m',
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
        specialities: ['', '', ''],
        distance: '400m',
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
        specialities: ['', '', ''],
        distance: '400m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    }

]
// Database des Bars

const BarDataBase = [
    {
        name: 'Napoleone',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: ["Cocktails, vins,bières,tapas"],
        distance: '85m',
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
        specialities: ['bieres artisanales,vins raffinés,cocktails maison'],
        distance: '400m',
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
        specialities: ['bieres artisanales,vins raffinés,cocktails maison'],
        distance: '400m',
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
        specialities: ['bieres artisanales,vins raffinés,cocktails maison'],
        distance: '400m',
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
        specialities: ['Bar à cocktails'],
        distance: '400m',
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
        specialities: ['bieres artisanales,vins raffinés,cocktails maison'],
        distance: '400m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
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
console.log("Hey", priceFilterImg);

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

        let imageFrame = document.createElement("div")
        imageFrame.classList.add("picture-frame");
        let image = document.createElement("img");
        image.classList.add("place-picture");
        image.src = place.image;
        image.alt = "Logo du restaurant"
        imageFrame.appendChild(image)
        newCard.appendChild(imageFrame);

        //create a div for the place name and mini-description
        let container = document.createElement("div");

        //create a name  
        let placeName = document.createElement("h2");
        placeName.classList.add("place-name");
        placeName.innerText = place.name;
        container.appendChild(placeName);

        //create a mini-description
        let miniDescription = document.createElement("p");
        miniDescription.classList.add("mini-description");
        miniDescription.innerText = place.miniDescription;
        container.appendChild(miniDescription);

        /// TODO : add the distance image.inside of a container.

        //Append the div to the card
        newCard.appendChild(container);
        //Append the card to the Places list
        placesList.appendChild(newCard);
        console.log(place.name);
    });
}

displayPlaces(restaurantDataBase);




//START OF MINI MENUS BEHAVIOUR
/// Functions to display/hide the mini-menus
const distanceMenuButton = document.getElementById("distance");
const distanceMenu = document.getElementById("distance-menu");
const priceMenuButton = document.getElementById("price-range");
const priceMenu = document.getElementById("price-range-menu");
const menuContainer = document.getElementById("mini-menus-container");
const filterBar = document.getElementById("filter-bar");


// make distance menu appear
distanceMenuButton.addEventListener("click", function () {

    distanceMenu.classList.toggle("collapsed");

    // check if another menu is already open
    if (priceMenu.classList.contains("collapsed")) {

        // bring the menu container to the front
        menuContainer.classList.toggle("to-front");
        menuContainer.classList.toggle("to-back");
    }
});


// make price menu appear
priceMenuButton.addEventListener("click", function () {
    priceMenu.classList.toggle("collapsed");


    // check if another menu is already open
    if (distanceMenu.classList.contains("collapsed")) {

        // bring the menu container to the front
        menuContainer.classList.toggle("to-front");
        menuContainer.classList.toggle("to-back");
    }

});

//make all menus dissapear when clicking somewhere else
menuContainer.addEventListener("click", function () {
    priceMenu.classList.add("collapsed");
    distanceMenu.classList.add("collapsed");
    menuContainer.classList.add("to-back");
    menuContainer.classList.remove("to-front");
})


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
        console.log('selected range price', priceFilter);
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

    }
    // if filter already was activated
    else {
        // set the price filter to none 
        priceFilter = 0;
        console.log('selected range price', priceFilter);

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of priceFilterButtonLow.children) {
            if (lightMode) { image.src = './icons/price_icon.svg' }
            else { image.src = './icons/price_darkmode.svg' };
        }

        // reset the price menu icon to its normal colour (light or dark)
        if (lightMode) { priceMenuButton.firstChild.src = './icons/price_icon.svg' }
        else { priceMenuButton.firstChild.src = './icons/price_darkmode.svg' };
    }


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
        console.log('selected distance filter', distanceFilter);
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
        console.log('selected distance range', priceFilter);

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonHigh.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }


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
        console.log('selected distance filter', distanceFilter);
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
        console.log('selected distance range', priceFilter);

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonMid.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }


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
        console.log('selected distance filter', distanceFilter);
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
        console.log('selected distance range', priceFilter);

        // change the image(s) inside the button to their normal colour (light or dark)
        for (const image of distanceFilterButtonLow.children) {
            image.src = footstepsIcon;
        }

        // reset the price menu icon to its normal colour (light or dark)
        distanceMenuButton.firstChild.src = distanceIcon;
    }


});

//END OF MINI MENUS BEHAVIOUR


//START OF PRIMARY FILTER BEHAVIOUR
const primaryFilterButton = document.getElementById("primary-filter");
const primaryFilterMenu = document.getElementById("primary-filter-container");

// make primary filter menu appear
primaryFilterButton.addEventListener("click", function () {

    primaryFilterMenu.classList.toggle("collapsed");

});

//END OF PRIMARY FILTER BEHAVIOUR

