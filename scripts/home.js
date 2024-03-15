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
        name: 'Napoleone',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: ["Cocktails, vins,bières,tapas"],
        distance: '85m',
        priceRange: '€€-€€€',
        adress: ' 1 rue baron',
        tel: '02 53 78 40 61',
        linkToMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2721409788555!2d-1.5495075489104218!3d47.21125717905818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb05311c6ab%3A0x1a10a632301380c9!2s1+Rue+Baron%2C+44000+Nantes!5e0!3m2!1sfr!2sfr!4v1564840539599!5m2!1sfr!2sfr',
        image: "./asset/Databarimg/Napoleone.jpg"
        description: 'Cocktails créations, vins et bières locales, Bar a tapas'

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
        image: './asset/Databarimg/cocobandit.jpg',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
    {
        name: 'Lelovecraft',
        miniDescription: 'le QG des wilder, à boire et à manger',
        specialities: ['bieres artisanales,vins raffinés,cocktails maison'],
        distance: '400m',
        priceRange: '€',
        adress: '32 bis Rue Fouré',
        tel: '0228499855',
        linkToMaps: '',
        image: './asset/Databarimg/Lelovecraft.jpg',
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
        image: './asset/Databarimg/barlu',
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
        image: './asset/Databarimg/bainrouge.jpg',
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
        image: './asset/Databarimg/delirium-cafe',
        description: 'le qg des wilder et aussi des buveurs! Pour les amateur de soft, le cocktail papaye est un incontournable'

    },
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

    },
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

/* JS switch dark-light mode */
const cuisineSwitch = document.querySelector("#cuisine-switch");
const barSwitch = document.querySelector("#bar-switch");
const body = document.querySelector("#body");
const footer = document.querySelector("#ul-footer");

cuisineSwitch.addEventListener('click', function () {
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
    //display restaurants
    displayPlaces(restaurantDataBase);
})

barSwitch.addEventListener('click', function () {
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
    //display bars
    displayPlaces(BarDataBase);
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
        //TODO add an if to check if restaurant or bar
        if (lightMode) { newCard.classList.add("light-mode"); } else { newCard.classList.add("dark-mode"); };


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

