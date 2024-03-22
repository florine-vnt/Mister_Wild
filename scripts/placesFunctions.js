import { primaryFoodFilters } from "./filters.js";

export function displayPlaces(dataBase) {
    //redefining placesList within the context of the function
    const placesList = document.getElementById("places");

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

        let imageFrame = document.createElement("div");
        imageFrame.classList.add("picture-frame");
        let image = document.createElement("img");
        image.classList.add("place-picture");
        image.src = place.image;
        image.alt = "Logo du restaurant"
        imageFrame.appendChild(image)
        newCard.appendChild(imageFrame);


        //create a div for the place name, distance and mini-description
        let container = document.createElement("div");

        //create a name  
        let placeName = document.createElement("h2");
        placeName.classList.add("place-name");
        placeName.innerText = place.name;
        container.appendChild(placeName);

        //create a distance
        let placeDistance = document.createElement("p");
        placeDistance.classList.add("place-distance");
        placeDistance.innerText = place.distance;
        container.appendChild(placeDistance);

        //create a mini-description
        let miniDescription = document.createElement("p");
        miniDescription.classList.add("mini-description");
        miniDescription.innerText = place.miniDescription;
        container.appendChild(miniDescription);

        //create a div for the pictos
        let pictoContainer = document.createElement("div")
        pictoContainer.classList.add("picto-container")

        //create speciality, maps, price, tel picto
        //display a function that returns a picto regarding speciality contained in database

        primaryFoodFilters.forEach(filter => {
            console.log("nom du filtre", filter.name, " nom du place", place.name, "icone",)
            if (place.specialities.includes(filter.name)) {
                // filter.icon;
                console.log("it's a match")
                let specialityPicto = document.createElement("img");
                specialityPicto.src = filter.icon;
                pictoContainer.appendChild(specialityPicto);
            }
        });

        // if ( === "light-mode") {
        //     primaryFoodFilters.forEach(filter => {
        //         console.log("nom du filtre", filter.name, " nom du place", place.name, "icone",)
        //         if (place.specialities.includes(filter.name)) {
        //             // filter.icon;
        //             console.log("it's a match")
        //             let specialityPicto = document.createElement("img");
        //             specialityPicto.src = filter.icon;
        //             pictoContainer.appendChild(specialityPicto);
        //         }
        //     });
        // } else {
        //     primaryDrinkFilters.forEach(filter => {
        //         console.log("nom du filtre", filter.name, " nom du place", place.name, "icone",)
        //         if (place.specialities.includes(filter.name)) {
        //             // filter.icon;
        //             console.log("it's a match")
        //             let specialityPicto = document.createElement("img");
        //             specialityPicto.src = filter.icon;
        //             pictoContainer.appendChild(specialityPicto);
        //         }
        //     });
        // }




        let pricePicto = document.createElement("img");
        pricePicto.src = "./icons/price_icon.svg";

        // display a function that returns a picto regarding price range contained in database
        // function displayPriceIcon(place) {
        //     if (place.priceRange === '€') {
        //         pricePicto.src = "./icons/price_icon.svg";
        //     } else if (place.priceRange === '€€') {
        //         pricePicto.src = "./icons/price_icon.svg";
        //     } else {
        //         pricePicto.src = "./icons/price_icon.svg";
        //     }

        //     pricePicto.src = displayPriceIcon;
        pictoContainer.appendChild(pricePicto);

        //create a clickable tel picto
        let linkableTel = document.createElement('a');
        linkableTel.href = `tel:${place.tel}`;

        let telPicto = document.createElement("img");
        telPicto.src = "./icons/tel_icon.png"
        linkableTel.appendChild(telPicto);
        pictoContainer.appendChild(linkableTel);


        //create a div for full-description and address
        let moreinfoContainer = document.createElement("div")
        moreinfoContainer.classList.add("more-info-container")
        
        // create a full-description
        let fullDescription = document.createElement("p");
        fullDescription.innerText = place.description;
        moreinfoContainer.appendChild(fullDescription);
        
        // create a short address 
        let shortAddress = document.createElement("p");
        shortAddress.innerText = place.shortAddress;
        moreinfoContainer.appendChild(shortAddress);
        
        // create a div for a Google map at the bottom of the selected card
        let googleMap = document.createElement("div");
        googleMap.innerHTML = `<iframe 
        src= ${place.linkToMaps}
        width="100%" 
        height="100%" 
        style="border:0; border-radius:2vh" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>`
        googleMap.classList.add("google-map");
        moreinfoContainer.appendChild(googleMap);
        
        //Append the main info div to the card
        newCard.appendChild(container);
        //Append the picto div to the card
        newCard.appendChild(pictoContainer);
        //Append the more info div to the card
        newCard.appendChild(moreinfoContainer);
        
        //Append the card to the Places list
        placesList.appendChild(newCard);
        
        //Zoom on a selected card
        newCard.addEventListener('click', function () {
            newCard.classList.toggle("card-selected");
            
            const mapImage = document.querySelector(".map-desktop")
            mapImage.innerHTML = `<iframe 
            src= ${place.linkToMaps}
            width="100%" 
            height="100%" 
            style="border:0; border-radius:2vh" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>`
        });
        
    });
}

// function displaySpecialityIcon(dataBase, filters) {
//     console.log("Début de la nouvelle fonction")

//     let specialityPicto = document.createElement("img");

//     for (place in dataBase) {
//         for (filter in filters) {
//             if (place.specialities.includes(filter.name)) {
//                 filter.icon;
//             }
//         }
//     }
//     pictoContainer.appendChild(specialityPicto);
// }
