import { displayPlaces } from './placesFunctions.js';
import { sleep } from './home.js';
import { distanceMenu } from './home.js';
//import { priceMenu } from './home.js';
const priceMenu = document.getElementById("price-range-menu");
import { menuContainer } from './home.js';
import { restaurantDataBase } from './restaurants.js';
import { BarDataBase } from './bars.js';
import { primaryDrinkFilters } from './filters.js';
import { primaryFoodFilters } from './filters.js';
import { secondaryFoodFilters } from './filters.js';





export function applyFilters() {
    let filteredDataBase = [];
    /// if lightmode
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        filteredDataBase = filterByArray(restaurantDataBase, primaryFoodFilters);
        filteredDataBase = filterByArray(restaurantDataBase, secondaryFoodFilters);

    } else {
        filteredDataBase = filterByArray(BarDataBase, primaryDrinkFilters);
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






function filterByArray(originalDataBase, filteringArray) {

    //Make sure there is at least one primary filter activated, otherwise retrun the original DB
    if (filteringArray.some(filter => filter.active) == false) { return originalDataBase };

    //filter the original database
    let filteredDataBase = [];
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



priceFilterButtonMid.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonMid, 2));
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



/// FACTORISATION A TERMINER

// sleep(10).then(() => {
//     priceFilterButtonLow.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonLow, 1))
//     priceFilterButtonMid.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonMid, 2))
//     priceFilterButtonHigh.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonHigh, 3));
// });

function handleToastMenuButton(menuButton, menu, filterButton, filteringValue) {
    return function () {
        //figure out if we are in light or dark mode. 
        const lightMode = body.classList.contains("light-mode");

        // if filter wasn't already activated
        if (priceFilter !== filteringValue) {
            priceFilter = filteringValue;

            // reset the colour of all filterButtons, if any was selected (brute force and unefficient, but it'll work)
            console.log('voici ton log maggle ', menu.children)
            console.log('voila les enfants du bouton',filterButton.children)
            for (let i = 0; i < menu.children.length; i++) {
                for (const image of menu.children[i]) {
                    // reset the icon to its normal colour (light or dark)
                    if (lightMode) { image.src = './icons/price_icon.svg' }
                    else { image.src = './icons/price_darkmode.svg' };
                }
            }

            // change the image(s) inside the filterButton to make it/them pink
            for (const image of filterButton.children) {
                image.src = './icons/price_pink.svg';
            }

            // make the price menu icon appear pink
            menuButton.firstChild.src = './icons/price_pink.svg'

        }
        // if filter already was activated
        else {
            // set the filter to none 
            priceFilter = 0;

            // change the image(s) inside the button to their normal colour (light or dark)
            for (const image of filterButton.children) {
                if (lightMode) { image.src = './icons/price_icon.svg' }
                else { image.src = './icons/price_darkmode.svg' };
            }

            // reset the price menu icon to its normal colour (light or dark)
            if (lightMode) { menuButton.firstChild.src = './icons/price_icon.svg' }
            else { menuButton.firstChild.src = './icons/price_darkmode.svg' };
        }

        //apply all filters
        applyFilters();

        // close the menu after a little while
        sleep(600).then(() => { menu.classList.add("collapsed") });
        sleep(900).then(() => { menuContainer.style.zIndex = 0; });
    };
};