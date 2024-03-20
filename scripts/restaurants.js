export const restaurantDataBase = [
    {
        // Database des restaurants

        // vérifier si besoin de préciser 4400 dans l'adresse
        // rendre le numero de tel cliquable pour envoie vers un appel
        // rendre l'adresse cliquable

        //Salade, poisson, sandwitch, patisserie

        name: 'Papill\'',
        miniDescription: 'Plats mijotés, papillotes et brunch',
        specialities: ['Plats cuisinées', 'Poisson', 'veggie'],
        distance: '85 m',
        priceRange: '€',
        adress: '8 rue de Saverne 44000 Nantes',
        shortAddress: '8 rue de Saverne',
        tel: '+336 03 13 05 04',
        linkToMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.51167607285!2d-1.5464413!3d47.211576199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb0fd4e831d%3A0xdd6e96d193d8b1c0!2sPapill&#39;!5e0!3m2!1sfr!2sfr!4v1710946394348!5m2!1sfr!2sfr",
        image: "./assets/Restaurants/Papill.jpg",
        description: 'Vous allez vous régaler les papilles, cuisine authentique'
        // plustot un resto de poisson, changer plats mijotés par poisson?
    },
    {
        name: 'Morse',
        miniDescription: 'Petit bistro de la mer : sandwichs et salades aux crevettes, langoustines, crabe...',
        specialities: ['salade', 'sandwich', 'poisson'],
        distance: '400 m',
        priceRange: '€€€€',
        adress: '1 allee de la maison rouge 44000 Nantes',
        tel: '+33253786518',
        linkToMaps: '',
        image: './assets/Restaurants/Morse.png',
        image: './assets/Restaurants/Morse.png',
        description: 'Restaurant cosz, spécialisé dans les poissons. On retient spécialement leur spécialité, le fish n chips !!'
        // manque le prix
    },
    {
        name: 'La cantine fermière',
        miniDescription: 'Sandwichs, salades et des plats, cuisinés avec des produits de saison et de fermes locales',
        specialities: 'sandwich street food',
        distance: '240 m',
        priceRange: '€',
        adress: '10 rue de Mayence, 44000 Nantes',
        tel: '+33211444444',
        linkToMaps: '',
        image: './assets/Restaurants/la-cantine-fermiere.png',
        description: 'Vous allez vous régaler les papilles, cuisine authentique'
        // manque les prix et les types de plat proposé
    },
    {
        name: 'Ichigo',
        miniDescription: 'Ramen comme au Japon, mais aussi de gyozas et edemame',
        specialities: 'asiatique ramen gyozas edemame',
        distance: '50 m',
        priceRange: '€',
        adress: '31 rue Fouré, 44000, Nantes',
        tel: '+332 40 35 34 30',
        linkToMaps: '',
        image: './assets/Restaurants/ichigo.png',
        description: 'Ramen, un délice des papilles !!'
    },

    {

        name: 'Les triplettes',
        miniDescription: 'Petit plats cuisiné, pâtisseries et café de spécialité. Cuisine local et agriculture raisonnée.',
        specialities: 'Plats cuisinées Pâtisserie café de spécialité',
        distance: '400 m',
        priceRange: '€€€',
        adress: '4 BIS Rue Emile Masson, 44000 Nantes',
        tel: '+332 28 49 76 01',
        linkToMaps: '',
        image: './assets/Restaurants/Triplettes.jpg',
        description: 'La seul adresse du quartier pour déguster un café de spécialité !'
    },

    {

        name: 'Dakoo',
        miniDescription: 'Restaurant coréen, plats traditionnel avec des plats vegan!. Livraison possible.',
        specialities: 'coréen Streetfood poulet frit veggies livraison',
        distance: '750 m',
        priceRange: '€',
        adress: '17 Rue Bon Secours, 44000 Nantes',
        tel: '+332 72 02 15 96',
        linkToMaps: '',
        image: './assets/Restaurants/dakoo.png',
        description: 'Véritable restaurant coréen, avec toutes les spécialités de corée, notament le BIBIMBAP ou le DAK (poulet frit) . Livraison possible.'
    },

    {
        // a completer
        name: 'Papa pasta',
        miniDescription: 'Des pâtes maison, fait uniquement avec des produits locaux, avec des portion généreuse !',
        specialities: 'italien',
        distance: '90 m',
        priceRange: '€',
        adress: '27 rue Fouré, 44000 Nantes',
        tel: '+339 81 30 85 44',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: 'Des pâtes maison, fait uniquement avec des produits locaux, avec des portion généreuse !'
    },

    {
        // a completer
        name: 'Virginie\'s café',
        miniDescription: 'Cuisine vivante. Cuisine bio. Cantine végétarienne. ',
        specialities: 'pizza',
        distance: '85 m',
        priceRange: '€€€',
        adress: '6 rue de Saverne, 44000 Nantes',
        tel: '+336 24 20 43 05',
        linkToMaps: '',
        image: './assets/Restaurants/virgines.net',
        description: ''
    },
    {

        name: 'La machine à crêpes',
        miniDescription: 'Des crêpes et des galettes! Prix abordable et que du fait maison! Une galette veggie est proposée',
        specialities: 'galettes crepes veggie',
        distance: '450 m',
        priceRange: '€',
        adress: '11 chaussée de la Madeleine, 44000 Nantes',
        tel: '+332 51 82 71 39',
        linkToMaps: '',
        image: './assets/Restaurants/la-machine-a-crepes.png',
        description: 'Des crêpes et des galettes! Prix abordable et que du fait maison! Une galette veggie est proposée'
    },
    {

        name: 'MATA boulangerie',
        miniDescription: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!',
        specialities: 'sandwich cookies Pâtisserie pains',
        distance: '400 m',
        priceRange: '€€',
        adress: '6 rue de Rieux, 44000 Nantes',
        tel: '+339 70 66 95 83',
        linkToMaps: '',
        image: './assets/Restaurants/mataboulangerie.png',
        description: 'Boulangerie de quartier, leurs cookies aux chocolat avec une pointe de gros sel est une tuerie!'
    },
    {

        name: 'boulangerie la fourmi',
        miniDescription: 'Blé ancien moulu avec une meule en pierre, viennoiserie XXL, sandwich au mètre, une boulangerie à découvrir!',
        specialities: 'sandwich Pâtisserie pains',
        distance: '550 m',
        priceRange: '€',
        adress: '1 chaussée de la Madeleine, 44000 Nantes',
        tel: '+339 86 64 69 43',
        linkToMaps: '',
        image: './assets/Restaurants/boulangerie-la-fourmi.net',
        description: 'Véritable institution nantaise, le café la Fourmi a pris un nouveau départ pour devenir une boulangerie! Les viennoiseries XXL sont un petit déjeuner à elle seul! Pour le midi, vous pouvez choisir votre Jambon-beurre au mètre!'
    },
    {

        name: 'la mangouste',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'Guindaille',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'a',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    },
    {

        name: 'la mangouste',
        miniDescription: '',
        specialities: "",
        distance: '400 m',
        priceRange: '€€€',
        adress: '',
        tel: '+33',
        linkToMaps: '',
        image: './assets/Restaurants/',
        description: ''
    }

]