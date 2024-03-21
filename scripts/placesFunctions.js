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
        pictoContainer.appendChild(specialityPicto);

        // let specialityPicto = document.createElement("p");
        // specialityPicto.innerText = place.specialities;
        // pictoContainer.appendChild(specialityPicto);

        let pricePicto = document.createElement("img");
        pricePicto.src = "./icons/price_icon.svg";
        pictoContainer.appendChild(pricePicto);

        // let pricePicto = document.createElement("p");
        // pricePicto.innerText = place.priceRange;
        // pictoContainer.appendChild(pricePicto);

        //create a clickable tel picto
        let linkableTel = document.createElement('a');
        linkableTel.href = `"tel:${place.tel}"`

        let telPicto = document.createElement("img");
        telPicto.src = "./icons/tel_icon.png"
        linkableTel.appendChild(telPicto);
        pictoContainer.appendChild(linkableTel);

        // let telPicto = document.createElement("p");
        // telPicto.innerText = place.tel;
        // pictoContainer.appendChild(telPicto);


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

        // TODO : add Gmaps at the bottom of selected card 
        let googleMap = document.createElement("div");
        googleMap.innerHTML = `<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.51167607285!2d-1.5464413!3d47.211576199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb0fd4e831d%3A0xdd6e96d193d8b1c0!2sPapill&#39;!5e0!3m2!1sfr!2sfr!4v1710946394348!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>`
        googleMap.classList.add("google-map");
        moreinfoContainer.appendChild(googleMap);

        /// TODO : add the distance image.inside of a container.

        //Append the main info div to the card
        newCard.appendChild(container);
        //Append the picto div to the card
        newCard.appendChild(pictoContainer);
        //Append the more info div to the card
        newCard.appendChild(moreinfoContainer);
        //Append the Gmaps div to the card

        //Append the card to the Places list
        placesList.appendChild(newCard);

    });
}