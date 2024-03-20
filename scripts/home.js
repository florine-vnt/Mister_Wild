import { displayPlaces } from './placesFunctions.js';
import { applyFilters } from './filteringFunctions.js';

import { restaurantDataBase } from './filteringFunctions.js';
import { BarDataBase } from './filteringFunctions.js';
import { primaryDrinkFilters } from './filteringFunctions.js';
import { primaryFoodFilters } from './filteringFunctions.js';
import { secondaryFoodFilters } from './filteringFunctions.js';




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
export const distanceMenu = document.getElementById("distance-menu");
const priceMenuButton = document.getElementById("price-range");
export const priceMenu = document.getElementById("price-range-menu");
export const menuContainer = document.getElementById("mini-menus-container");
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

export function sleep(ms) {
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
        const filterButton = document.createElement("button");

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
        const buttonIcon = document.createElement("img");
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
        const filterButton = document.createElement("button");

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
        const buttonIcon = document.createElement("img");

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
        const filterButton = document.createElement("button");
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
        const buttonIcon = document.createElement("img");
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