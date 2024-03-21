function handleToastMenuButton(menuButton, menu, filterButton, filteringValue) {
    function () {
        //figure out if we are in light or dark mode. 
        const lightMode = body.classList.contains("light-mode");

        // if filter wasn't already activated
        if (priceFilter !== filteringValue) {
            priceFilter = filteringValue;

            // reset the colour of all filterButtons, if any was selected (brute force and unefficient, but it'll work)
            for (const button of menu){
                for (const image of menu.children) {
                    // reset the icon to its normal colour (light or dark)
                    if (lightMode) { image.src = './icons/price_icon.svg' }
                    else { image.src = './icons/price_darkmode.svg' };
                }
            }

            // change the image(s) inside the filterButton to make it/them pink
            for (const image of filterButton.children) {
                image.src = './icons/price_pink.svg';
            }

            // make the price menu icon appear pink
            menuButton.firstChild.src = './icons/price_pink.svg'




            // re-display la selection
        }
        // if filter already was activated
        else {
            // set the price filter to none 
            priceFilter = 0;

            // change the image(s) inside the button to their normal colour (light or dark)
            for (const image of filterButton.children) {
                if (lightMode) { image.src = './icons/price_icon.svg' }
                else { image.src = './icons/price_darkmode.svg' };
            }

            // reset the price menu icon to its normal colour (light or dark)
            if (lightMode) { menuButton.firstChild.src = './icons/price_icon.svg' }
            else { menuButton.firstChild.src = './icons/price_darkmode.svg' };
        }

        //apply all filters
        applyFilters();

        // close the menu after a little while
        sleep(600).then(() => { menu.classList.add("collapsed") });
        sleep(900).then(() => { menuContainer.style.zIndex = 0; });
    };
};