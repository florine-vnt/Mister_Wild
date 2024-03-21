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
        let specialityPicto = document.createElement("img");
        specialityPicto.src = "./icons/cupcake.svg";

        // display a function that returns a picto regarding speciality contained in database
        // function displaySpecialityIcon(place) {
        //     const pizzaPlace = place.specialities.includes("pizza");
        //     const patesPlace = place.specialities.includes("pates");
        //     const sandwichPlace = place.specialities.includes("sandwich");
        //     const saladePlace = place.specialities.includes("salade");
        //     const asiatiquePlace = place.specialities.includes("asiatique");
        //     const platcuisinePlace = place.specialities.includes("plat-cuisine");
        //     const patisseriePlace = place.specialities.includes("patisserie");
        //     const cafePlace = place.specialities.includes("cafe");

        //     if (pizzaPlace) {
        //         specialityPicto.src = "./icons/pizza.svg";
        //     } else if (patesPlace) {
        //         specialityPicto.src = "./icons/pates.svg";
        //     } else if (sandwichPlace) {
        //         specialityPicto.src = "./icons/sandwich.svg";
        //     } else if (saladePlace) {
        //         specialityPicto.src = "./icons/salade.svg";
        //     } else if (asiatiquePlace) {
        //         specialityPicto.src = "./icons/ramen.svg";
        //     } else if (platcuisinePlace) {
        //         specialityPicto.src = "./icons/plate.svg"
        //     } else if (patisseriePlace) {
        //         specialityPicto.src = "./icons/cupcake.svg";
        //     } else if (cafePlace) {
        //         specialityPicto.src = "./icons/coffe.svg";
        //     }
        // }
        // specialityPicto.src = displaySpecialityIcon;
        pictoContainer.appendChild(specialityPicto);


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
        });

    });
}
