import { primaryFilterMenu } from './home.js';
import { primaryFilterButton } from './home.js';
import { distanceMenu } from './home.js';
import { priceMenu } from './home.js';
import { applyFilters } from './filteringFunctions.js';
import { primaryDrinkFilters } from './filters.js';
import { primaryFoodFilters } from './filters.js';
import { secondaryFoodFilters } from './filters.js';


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
const placesList = document.getElementById("places");

function switchMode() {


    const lightMode = body.classList.contains("light-mode");
    if (lightMode) {
        // put elements in dark mode

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

    } else {

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

    }
    // toggle the display mode of all these elements
    toggleDisplayMode(cuisineSwitch);
    toggleDisplayMode(barSwitch);
    toggleDisplayMode(body);
    toggleDisplayMode(placesList);
    toggleDisplayMode(primaryFilterMenu);
    toggleDisplayMode(priceMenu);
    toggleDisplayMode(distanceMenu);
    toggleDisplayMode(footer);
    //apply current filters and display matching places
    applyFilters();
    //display primary filter
    displayPrimaryFilter();
}

function displayPrimaryFilter() {
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) displayFoodFilter()
    else displayDrinkFilter();

}

function toggleDisplayMode(HTMLElement) {
    HTMLElement.classList.toggle("light-mode");
    HTMLElement.classList.toggle("dark-mode");
}

export function switchToDarkMode() {
    const lightMode = body.classList.contains("light-mode");
    if (lightMode) switchMode()
}

export function switchToLightMode() {
    const darkMode = body.classList.contains("dark-mode");
    if (darkMode) switchMode()
}


export function displayFoodFilter() {
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

export function displayDrinkFilter() {
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