import { displayPlaces } from './placesFunctions.js';
import { sleep } from './home.js';
import { distanceMenu } from './home.js';
import { priceMenu } from './home.js';
//const priceMenu = document.getElementById("price-range-menu");
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
        filteredDataBase = filterByArray(filteredDataBase, secondaryFoodFilters);
        filteredDataBase = filterByPrice(filteredDataBase, priceFilterLight);

    } else {
        filteredDataBase = filterByArray(BarDataBase, primaryDrinkFilters);
        filteredDataBase = filterByPrice(filteredDataBase, priceFilterDark);
    }
    /// if darkmode

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
    if (filteringArray.some(filter => filter.active) == false) {
        return originalDataBase
    };

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
let priceFilterLight = 0;
let priceFilterDark = 0;

// Distance menu filtering

// there are 3 buttons and 4 filter choices : 
// "doesn't matter" : 0 
// "low-range" :1
// "mid-range":2
// "high range":3
// These choices will be set in a global variable that is initialized at 0
let distanceFilterLight = 0;
let distanceFilterDark = 0;

// declaring different paths to different icons for light and dark mode
const priceIconLight = './icons/price_icon.svg';
const priceIconDark = './icons/price_darkmode.svg';
const priceIconPink = './icons/price_pink.svg';
const distanceIconLight = './icons/distance_icon.svg';
const distanceIconDark = './icons/distance_darkmode.svg';
const distanceIconPink = './icons/distance_pink.svg';
const footstepsIconLight = './icons/footsteps_light.svg';
const footstepsIconDark = './icons/footsteps_darkmode.svg';
const footstepsIconPink = './icons/footsteps_pink.svg';

export function handleToastMenuButton(menuButton, menu, filterButton, filteringValue) {
    return function () {
        //figure out if we are in light or dark mode. 
        const lightMode = body.classList.contains("light-mode");

        //detect what menu it is : price or distance, and fetch the right icons.
        let menuIcon = '';
        let buttonIcon = '';
        let menuIconPink = '';
        let buttonIconPink = '';
        let targetFilter = '';

        if (menu.id == "price-range-menu") {

            menuIconPink = priceIconPink;
            buttonIconPink = priceIconPink;

            if (lightMode) {
                menuIcon = priceIconLight;
                buttonIcon = priceIconLight;
                targetFilter = priceFilterLight;
            } else {
                console.log("ouioui is dark");
                menuIcon = priceIconDark;
                buttonIcon = priceIconDark;
                targetFilter = priceFilterDark;
            }
        } else {
            
            menuIconPink = distanceIconPink;
            buttonIconPink = footstepsIconPink;
            if (lightMode) {
                menuIcon = distanceIconLight;
                buttonIcon = footstepsIconLight;
                targetFilter = distanceFilterLight;
            } else {
                console.log("ouioui is dark");
                menuIcon = distanceIconDark;
                buttonIcon = footstepsIconDark;
                targetFilter = distanceFilterDark;
            }
        }

        // if filter wasn't already activated
        if (targetFilter !== filteringValue) {
            targetFilter = filteringValue;

            // reset the colour of all filterButtons, if any was selected (brute force and unefficient, but it'll work)
            for (const button of menu.children) {
                for (const image of button.children) {
                    // reset the icon to its normal colour (light or dark)
                    image.src = buttonIcon;
                }
            }

            // change the image(s) inside the filterButton to make it/them pink
            for (const image of filterButton.children) {
                image.src = buttonIconPink;
            }

            // make the menu icon appear pink
            menuButton.firstChild.src = menuIconPink

        }
        // if filter already was activated
        else {
            // set the filter to none 
            targetFilter = 0;

            // change the image(s) inside the button to their normal colour (light or dark)
            for (const image of filterButton.children) {
                image.src = buttonIcon;
            }

            // reset the price menu icon to its normal colour (light or dark)
            menuButton.firstChild.src = menuIcon;
        }

        // after the function is exectued,re-impact the filter globally
        if (menu.id == "price-range-menu") {

            if (lightMode) {
                priceFilterLight = targetFilter;
            } else {
                priceFilterDark = targetFilter;
            }
        } else {
            // if was kept for light/dark filtering distinction later
            if (lightMode) {
                distanceFilterLight = targetFilter;
            } else {
                distanceFilterDark = targetFilter;
            }
        }

        //apply all filters
        applyFilters();

        // close the menu after a little while
        sleep(600).then(() => { menu.classList.add("collapsed") });
        sleep(900).then(() => { menuContainer.style.zIndex = 0; });
    };
};