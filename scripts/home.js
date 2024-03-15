/* JS DataBase */

const restaurantDataBase = [
    {
        name: 'Papill\'',
        miniDescription: 'Plats mijotés, papillotes et brunch',
        specialities: ['chinois', 'Japonais', 'Thai'],
        distance: '70m',
        priceRange: '€€',
        adress: ' 3 rue du truc',
        tel: '0244444444',
        linkToMaps: 'a',
        image: './assets/papill.jpg',
        description: 'Vous allez vous régaler les papilles, cuisine authentique, et le batron offre le digestif !!'

    },

    {
        name: 'Morse',
        miniDescription: 'j\'ai pas encore de descri de faite.',
        specialities: ['salade', 'sandwich', 'poisson'],
        distance: '750m',
        priceRange: '€€€€',
        adress: '4 avennue des champs elysee',
        tel: '0275757575',
        linkToMaps: '',
        image: './assets/papill.jpg',
        description: 'Restaurant cosz, spécialisé dans les poissons. On retient spécialement leur spécialité, le fish n chips !!'
    },

    {
        name: 'La cantine fermière',
        miniDescription: 'Sandwichs et salades de produits de saison et de fermes locales',
        specialities: ['chinois', 'Japonais', 'Thai'],
        distance: '50m',
        priceRange: '€€',
        adress: ' 3 rue du truc',
        tel: '0211444444',
        linkToMaps: '',
        image: './assets/papill.jpg',
        description: 'Vous allez vous régaler les papilles, cuisine authentique, et le batron offre le digestif !!'

    },

    {
        name: 'Ichigo',
        miniDescription: 'Ramen, c\'est brûlant, mais c\'est délicieux.',
        specialities: ['ramen', 'trucVapeur', 'poisson'],
        distance: '150m',
        priceRange: '€',
        adress: '14 rue baron',
        tel: '0222757575',
        linkToMaps: '',
        image: './assets/papill.jpg',
        description: 'Ramen, un délice des papilles !!'
    }
]

const BarDataBase = [
    {
        name: 'nom du bar',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: ['Biére', 'vin', 'Soft'],
        distance: '10m',
        priceRange: '€',
        adress: ' 5 rue baron',
        tel: '0233444444',
        linkToMaps: '',
        image: '',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    }

]

/* JS NavBar */
const cuisineSwitch = document.querySelector("#cuisine-switch");
const barSwitch = document.querySelector("#bar-switch");
const body = document.querySelector("#body");

cuisineSwitch.addEventListener('click', function () {
    barSwitch.classList.remove("dark-mode-nav");
    cuisineSwitch.classList.remove("dark-mode-button");
    barSwitch.classList.remove("dark-mode-button");
    body.classList.remove("dark-mode-body");
    cuisineSwitch.classList.toggle("light-mode-nav");
    body.classList.toggle("light-mode-body");
})

barSwitch.addEventListener('click', function () {
    cuisineSwitch.classList.remove("light-mode-nav");
    body.classList.remove("light-mode-body");
    barSwitch.classList.toggle("dark-mode-nav");
    cuisineSwitch.classList.toggle("dark-mode-button");
    barSwitch.classList.toggle("dark-mode-button");
    body.classList.toggle("dark-mode-body");
})


/// Function to display all the places
const placesList = document.getElementById("places");

function displayPlaces(dataBase) {
    // clear the places list
    placesList.innerHTML = ""

    dataBase.forEach(place => {
        //Create a card 
        let newCard = document.createElement("li");
        newCard.classList.add("card");

        //create and add an image to the card
        let image = document.createElement("img");
        image.classList.add("place-picture");
        image.src = place.image;
        image.alt = "Logo du restaurant"
        newCard.appendChild(image);

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
//END OF MINI MENUS BEHAVIOUR

