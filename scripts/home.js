import { displayPlaces } from './placesFunctions.js';
import { switchToDarkMode } from './lightDarkFunction.js'
import { switchToLightMode } from './lightDarkFunction.js'
import { displayFoodFilter } from './lightDarkFunction.js'
import { restaurantDataBase } from './restaurants.js';
import { handleToastMenuButton } from './filteringFunctions.js';


/* JS switch dark-light mode */
const cuisineSwitch = document.querySelector("#cuisine-switch");
const barSwitch = document.querySelector("#bar-switch");
export const distanceMenuButton = document.getElementById("distance");
export const distanceMenu = document.getElementById("distance-menu");
export const priceMenuButton = document.getElementById("price-range");
export const priceMenu = document.getElementById("price-range-menu");
export const menuContainer = document.getElementById("mini-menus-container");
export const primaryFilterButton = document.getElementById("primary-filter");
export const primaryFilterMenu = document.getElementById("primary-filter-container");
const homeButton = document.getElementById("home");
// get HTML elements of the buttons
const priceFilterButtonLow = document.getElementById("price-range-low");
const priceFilterButtonMid = document.getElementById("price-range-mid");
const priceFilterButtonHigh = document.getElementById("price-range-high");
// declare the three mini-menu buttons
const distanceFilterButtonLow = document.getElementById("distance-low");
const distanceFilterButtonMid = document.getElementById("distance-mid");
const distanceFilterButtonHigh = document.getElementById("distance-high");


// Buttons in the header that enable the user to swithch from light to dark and vice-versa
barSwitch.addEventListener('click', switchToDarkMode);
cuisineSwitch.addEventListener('click', switchToLightMode);

// Reset the app with the home button
homeButton.addEventListener('click', () => {
    switchToLightMode();
    collapseAllMenus();
    // TODO RESET ALL FILTERS
    // TODO Remove all of the zoomed in classes from the cards
});

// populate the places list with restaurants at init
displayPlaces(restaurantDataBase);
//init with a food filter
displayFoodFilter();


/// activate toast menu buttons
// price menu 
priceFilterButtonLow.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonLow, 1));
priceFilterButtonMid.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonMid, 2));
priceFilterButtonHigh.addEventListener("click", handleToastMenuButton(priceMenuButton, priceMenu, priceFilterButtonHigh, 3));
// distance menu 
distanceFilterButtonLow.addEventListener("click", handleToastMenuButton(distanceMenuButton, distanceMenu, distanceFilterButtonLow, 1));
distanceFilterButtonMid.addEventListener("click", handleToastMenuButton(distanceMenuButton, distanceMenu, distanceFilterButtonMid, 2));
distanceFilterButtonHigh.addEventListener("click", handleToastMenuButton(distanceMenuButton, distanceMenu, distanceFilterButtonHigh, 3));

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

// make distance menu appear/dissapear
distanceMenuButton.addEventListener("click", toggleMenu(distanceMenu));

// make price menu appear/dissapear
priceMenuButton.addEventListener("click", toggleMenu(priceMenu));

//make all menus dissapear when clicking somewhere else
menuContainer.addEventListener("click", function (event) {

    //if either menu is clicked, do nothing.
    // the event.target makes us able to knwo wether the user clicked on a menu or somewhere else, it is AMAZING.
    if (distanceMenu.contains(event.target) || priceMenu.contains(event.target) || primaryFilterMenu.contains(event.target)) {

    } else {
        collapseAllMenus();
    }

})

function toggleMenu(menu){
    return function () {
        menuContainer.classList.remove("hidden");
        sleep(10).then(() => {
            menu.classList.toggle("collapsed");
            primaryFilterMenu.classList.add("collapsed");
            menuContainer.style.zIndex = 3;
            //if all menus are collapsed, put the container to the background
            if (distanceMenu.classList.contains("collapsed") && priceMenu.classList.contains("collapsed") && primaryFilterMenu.classList.contains("collapsed")) {
                // bring the menu container to the front
                sleep(300).then(() => {
                    menu.style.zIndex = 0;
                    menu.classList.add("hidden")
                });
            }
        });
    }
}

export function collapseAllMenus(){
    priceMenu.classList.add("collapsed");
    distanceMenu.classList.add("collapsed");
    primaryFilterMenu.classList.add("collapsed");
    sleep(300).then(() => {
        menuContainer.style.zIndex = 0;;
        menuContainer.classList.add("hidden")
    });
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




///// FILTERS NEED TO ALL BE RESET TO FALSE WHEN SWITCHING MODES !!!!!





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


/// BUGFIX CHILDREN DES FAFA. 
function dipsplayAllSpecialities (dataBase){
    for (let place in dataBase){
        console.log(dataBase[place].specialities);
    }

}

dipsplayAllSpecialities(restaurantDataBase);