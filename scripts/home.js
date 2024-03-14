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
        name: 'la cantine fermière',
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
        name: 'ichigo',
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

/* JS switch dark-light mode */
const cuisineSwitch = document.querySelector("#cuisine-switch");
const barSwitch = document.querySelector("#bar-switch");
const body = document.querySelector("#body");


cuisineSwitch.addEventListener('click', function () {
    const cardsDarkMode = document.querySelector(".card");

    cuisineSwitch.classList.toggle("light-mode");
    cuisineSwitch.classList.remove("dark-mode");
    barSwitch.classList.toggle("light-mode");
    barSwitch.classList.remove("dark-mode");
    body.classList.toggle("light-mode");
    body.classList.remove("dark-mode");
    cardsDarkMode.classList.remove("dark-mode");
    cardsDarkMode.classList.toggle("light-mode");
})

barSwitch.addEventListener('click', function () {
    const cardsDarkMode = document.querySelector(".card");

    cuisineSwitch.classList.toggle("dark-mode");
    cuisineSwitch.classList.remove("light-mode");
    barSwitch.classList.toggle("dark-mode");
    barSwitch.classList.remove("light-mode");
    body.classList.toggle("dark-mode");
    body.classList.remove("light-mode");
    cardsDarkMode.classList.toggle("dark-mode");
    cardsDarkMode.classList.remove("light-mode");
})


/// Function to display all the places
const placesList = document.getElementById("places")

function displayPlaces(dataBase) {
    // clear the places list
    placesList.innerHTML = ""

    dataBase.forEach(place => {
        //Create a card 
        let newCard = document.createElement("li");
        newCard.classList.add("card");
        //TODO add an if to check if restaurant or bar
        newCard.classList.add("light-mode");

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
        miniDescription.innerText = place.name;
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

