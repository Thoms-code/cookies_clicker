// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let score = 0; // nombre de cookies gagnes depuis le debut
let cpt = 0; // nombre de cookies actuels (prend en charge les depenses)
let cart = 0; // nombre de cookies depensés
let multiplier = 1; // sera modifié en fonction du bonus (par defaut 1)

// prix multplier
let priceX2 = 5;
let priceX5 = 10;
let priceX10 = 50;
let priceUnblockPanel = 500;
let priceBonus = 600;
let priceAutoclicker = 550;


//INPUT / BUTTONS
//titre
let printCpt = document.querySelector("#print-cpt");
// box statistique
let infoBox = document.querySelector("#info_box");
let spanBoxWin = document.querySelector("#print-box-win");
let spanBoxLoose = document.querySelector("#print-box-loose");
// box prix
let infoPrice = document.querySelector("#info_price");

// Bouton image cookie (+1 a chaque clic)
let buttonCookie = document.querySelector("#button-cookie");

// bouton multiplier
let buttonX2 = document.querySelector("#button-x2");
let buttonX5 = document.querySelector("#button-x5");
let buttonX10 = document.querySelector("#button-x10");
let bonusPanel = document.querySelector("#bonus-panel");
let buttonBonus = document.querySelector("#bonus_button");
let buttonAuto = document.querySelector("#button-autoclicker");

// Fonctions

// fonction qui retire "clicker" du titre
let spanTitleDisabled = document.querySelector("#title_disabled");

let removeClickerTitle = () => {
    spanTitleDisabled.setAttribute("hidden", true);
}

// fonction ajout de cookie

const addCookies = () => {
    cpt += multiplier;
    printCpt.innerHTML = cpt;
    spanBoxLoose.innerHTML = cart;
    removeClickerTitle();
    unBlockMultiplier();
    addCptToScore();
}
buttonCookie.addEventListener("click", () => {addCookies()})

// function mise a jour score
const addCptToScore = () => {
    score = cpt + cart;
    spanBoxWin.innerHTML = score;
}

// fonction modification multiplier

buttonX2.addEventListener("click", () => {multiplier = 2; cpt -= priceX2; cart += priceX2});
buttonX5.addEventListener("click", () => {multiplier = 5; cpt -= priceX5; cart += priceX5});
buttonX10.addEventListener("click", () => {multiplier = 10; cpt -= priceX10; cart += priceX10});


// fonction bonus x200
buttonBonus.addEventListener("click", () => {
    let count = 30;
    cart += priceBonus;
    const intervalId = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(intervalId);
            buttonBonus.innerHTML = "Bonus";
            multiplier = 10;
        }else{
            buttonBonus.innerHTML = `${count} sec`;
            multiplier = 200;
        }}, 1000);
})

// fonction auto-clicker
buttonAuto.addEventListener("click", () => {
    setInterval(() => {
        addCookies();
    },1000);
});

// fonction de deblocage
const unBlockMultiplier = ()=> {
    if (cpt >= priceX2) {
        buttonX2.classList.remove("disabled");
    }
    if (cpt >= priceX5) {
        buttonX5.classList.remove("disabled");
    }
    if (cpt >= priceX10) {
        buttonX10.classList.remove("disabled");
    }
    if (cpt >= priceUnblockPanel) {
        bonusPanel.classList.remove("d-none");
    }
    if (cpt >= priceAutoclicker) {
        buttonAuto.classList.remove("disabled");
    }
    if (cpt >= priceBonus) {
        buttonBonus.classList.remove("disabled");
    }
}

// fonction hover montre les prix

// X2
buttonX2.addEventListener('mouseover', () => {

    infoPrice.classList.remove("d-none");
    infoPrice.classList.add("text-center");
    infoPrice.innerHTML = `<h3>Prix ${priceX2} 🍪</h3><br/>
                          <h5>Multiplie par 2 chaque cookie recuperé</h5>`;
})
buttonX2.addEventListener('mouseout', () => {
    infoPrice.classList.add("d-none");

})

// x5
buttonX5.addEventListener('mouseover', () => {
    infoPrice.classList.remove("d-none");
    infoPrice.classList.add("text-center");
    infoPrice.innerHTML = `<h3>Prix ${priceX5} 🍪</h3><br/>
                          <h5>Multiplie par 5 chaque cookie recuperé</h5>`;
})
buttonX5.addEventListener('mouseout', () => {
    infoPrice.classList.add("d-none");
})
//x10
buttonX10.addEventListener('mouseover', () => {
    infoPrice.classList.remove("d-none")
    infoPrice.classList.add("text-center")
    infoPrice.innerHTML = `<h3>Prix ${priceX10} 🍪</h3><br/>
                          <h5>Multiplie par 10 chaque cookie recuperé</h5>`;
})
buttonX10.addEventListener('mouseout', () => {
    infoPrice.classList.add("d-none");
})
// bonus
buttonBonus.addEventListener('mouseover', () => {
    infoPrice.classList.remove("d-none");
    infoPrice.classList.add("text-center");
    infoPrice.innerHTML = `<h3>Prix ${priceBonus} 🍪</h3><br/>
                          <h5>Multiplie par 200 chaque cookie recuperé pendant 30 secondes</h5>`;
})
buttonBonus.addEventListener('mouseout', () => {
    infoPrice.classList.add("d-none");
})
//auto-click
buttonAuto.addEventListener('mouseover', () => {
    infoPrice.classList.remove("d-none");
    infoPrice.classList.add("text-center");
    infoPrice.innerHTML = `<h3>Prix ${priceAutoclicker} 🍪</h3><br/>
                          <h5>Clique a votre place toute les secondes</h5>`;
})
buttonAuto.addEventListener('mouseout', () => {
    infoPrice.classList.add("d-none");
})
//autre

buttonCookie.setAttribute("src", "./assets/img/cookie.png");