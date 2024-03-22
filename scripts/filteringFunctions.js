import { displayPlaces } from './placesFunctions.js';
import { sleep } from './home.js';
import { distanceMenuButton } from './home.js';
import { priceMenuButton } from './home.js';
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
        filteredDataBase = filterByArray(filteredDataBase, primaryFoodFilters);
        filteredDataBase = filterByPrice(filteredDataBase, priceFilterLight);
        filteredDataBase = filterByDistance(filteredDataBase, distanceFilterLight);
    } else {
        filteredDataBase = filterByArray(BarDataBase, primaryDrinkFilters);
        filteredDataBase = filterByPrice(filteredDataBase, priceFilterDark);
        filteredDataBase = filterByDistance(filteredDataBase, distanceFilterDark);
    }

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



// price menu filtering

// there are 3 buttons and 4 filter choices : 
// "doesn't matter" : 0 
// "low-range" :1
// "mid-range":2
// "high range":3

// Filter the restaurant database by price

function filterByPrice(dataBase, priceFilter) {
    if (priceFilter == 0 || priceFilter == 3) { return dataBase; };
    return dataBase.filter(restaurant => {
        console.log("hello");
        return restaurant.priceRange.length <= priceFilter
    });

};
console.log("hello");
// Filter the restaurant database by range 
//  Distance < 350m  = 1
//  Distance > 350m  = 2
//  Distance > 500m  = 3


// MEMO MIKL ParseInt();  toString();

// Convert distance from database to range 1 or 2 or 3

function convertDistance(dataBase, distance) {
    //function convertDistance(originalDatabaseFilterDistance){
    let numberDistance = parseInt(originalDataBase.filter.distance);
    if (numberDistance < 350) { return 1; }
    else if (numberDistance > 200 && numberDistance < 500) { return 2; }
    else { return 3 };
};

function filterByDistance(dataBase, distanceFilter) {

    if (distanceFilter == 0 || distanceFilter == 3) { return dataBase; }
    else {
        return dataBase.filter(place => {
            if (distanceFilter == 1) {
                return parseInt(place.distance) <= 350;
            } else {
                return parseInt(place.distance) <= 500;
            }
        })
    };
};

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
                menuIcon = distanceIconDark;
                buttonIcon = footstepsIconDark;
                targetFilter = distanceFilterDark;
            }
        }

        // if filter wasn't already activated
        if (targetFilter !== filteringValue) {
            targetFilter = filteringValue;
        }
        // if filter already was activated
        else {
            // set the filter to none 
            targetFilter = 0;
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

        displayToastMenuFilterState(menu);

        //apply all filters
        applyFilters();

        // close the menu after a little while
        sleep(600).then(() => { menu.classList.add("collapsed") });
        sleep(900).then(() => { menuContainer.style.zIndex = 0; });
    };
};


export function displayToastMenuFilterState(menu) {
    //figure out if we are in light or dark mode. 
    const lightMode = body.classList.contains("light-mode");

    //detect what menu it is : price or distance, and fetch the right icons.
    let menuIcon = '';
    let buttonIcon = '';
    let menuIconPink = '';
    let buttonIconPink = '';
    let targetFilter = '';

    // elements
    let menuButton = '';


    if (menu.id == "price-range-menu") {

        menuIconPink = priceIconPink;
        buttonIconPink = priceIconPink;
        menuButton = priceMenuButton;

        if (lightMode) {
            menuIcon = priceIconLight;
            buttonIcon = priceIconLight;
            targetFilter = priceFilterLight;
        } else {
            menuIcon = priceIconDark;
            buttonIcon = priceIconDark;
            targetFilter = priceFilterDark;
        }
    } else {

        menuIconPink = distanceIconPink;
        buttonIconPink = footstepsIconPink;
        menuButton = distanceMenuButton;

        if (lightMode) {
            menuIcon = distanceIconLight;
            buttonIcon = footstepsIconLight;
            targetFilter = distanceFilterLight;
        } else {
            menuIcon = distanceIconDark;
            buttonIcon = footstepsIconDark;
            targetFilter = distanceFilterDark;
        }
    }

    /// Check the State of the filter
    if (targetFilter == 1) {
        // make the menu icon appear pink
        menuButton.firstChild.src = menuIconPink;

        // make all buttons appear unselected
        for (const button of menu.children) {
            for (const image of button.children) {
                // reset the icon to its normal colour (light or dark)
                image.src = buttonIcon;
            }
        }

        // light up only the right button
        for (const image of menu.children[2].children) {
            image.src = buttonIconPink;
        }


    } else if (targetFilter == 2) {
        // make the menu icon appear pink
        menuButton.firstChild.src = menuIconPink;

        // make all buttons appear unselected
        for (const button of menu.children) {
            for (const image of button.children) {
                // reset the icon to its normal colour (light or dark)
                image.src = buttonIcon;
            }
        }

        // light up only the right button
        for (const image of menu.children[1].children) {
            image.src = buttonIconPink;
        }

    } else if (targetFilter == 3) {
        // make the menu icon appear pink
        menuButton.firstChild.src = menuIconPink;

        // make all buttons appear unselected
        for (const button of menu.children) {
            for (const image of button.children) {
                // reset the icon to its normal colour (light or dark)
                image.src = buttonIcon;
            }
        }

        // light up only the right button
        for (const image of menu.children[0].children) {
            image.src = buttonIconPink;
        }

    } else {

        // make the menu icon appear normal
        menuButton.firstChild.src = menuIcon;

        // make all buttons appear unselected
        for (const button of menu.children) {
            for (const image of button.children) {
                // reset the icon to its normal colour (light or dark)
                image.src = buttonIcon;
            }
        }


    }

    // change the image(s) inside the filterButton to make it/them pink



}
