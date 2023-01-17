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
    infoBox.classList.add("text-center")
    infoBox.innerHTML = `<h1>Prix ${priceX2} 🍪</h1><br/>
                          <h3>Multiplie par 2 chaque cookie recuperé</h3>`;

})
buttonX2.addEventListener('mouseout', () => {
    infoBox.classList.remove('text-center');
    infoBox.innerHTML = `<span>
                Statistique :
            </span> <br/>
            <span>
                Total des cookies gagnés: <span id="print-box-win">0</span>
            </span> <br/>
            <span>
                Total des cookies dépensés: <span id="print-box-loose">0</span>
            </span> <br/>`;
})

// x5
buttonX5.addEventListener('mouseover', () => {
    infoBox.classList.add("text-center")
    infoBox.innerHTML = `<h1>Prix ${priceX5} 🍪</h1><br/>
                          <h3>Multiplie par 5 chaque cookie recuperé</h3>`;

})
buttonX5.addEventListener('mouseout', () => {
    infoBox.classList.remove('text-center');
    infoBox.innerHTML = `<span>
                Statistique :
            </span> <br/>
            <span>
                Total des cookies gagnés: <span id="print-box-win">0</span>
            </span> <br/>
            <span>
                Total des cookies dépensés: <span id="print-box-loose">0</span>
            </span> <br/>`;
})

//x10
buttonX10.addEventListener('mouseover', () => {
    infoBox.classList.add("text-center")
    infoBox.innerHTML = `<h1>Prix ${priceX10} 🍪</h1><br/>
                          <h3>Multiplie par 10 chaque cookie recuperé</h3>`;

})
buttonX10.addEventListener('mouseout', () => {
    infoBox.classList.remove('text-center');
    infoBox.innerHTML = `<span>
                Statistique :
            </span> <br/>
            <span>
                Total des cookies gagnés: <span id="print-box-win">0</span>
            </span> <br/>
            <span>
                Total des cookies dépensés: <span id="print-box-loose">0</span>
            </span> <br/>`;
})

// bonus
buttonBonus.addEventListener('mouseover', () => {
    infoBox.classList.add("text-center")
    infoBox.innerHTML = `<h1>Prix ${priceBonus} 🍪</h1><br/>
                          <h5>Multiplie par 200 chaque cookie recuperé pendant 30 secondes</h5>`;

})
buttonBonus.addEventListener('mouseout', () => {
    infoBox.classList.remove('text-center');
    infoBox.innerHTML = `<span>
                Statistique :
            </span> <br/>
            <span>
                Total des cookies gagnés: <span id="print-box-win">0</span>
            </span> <br/>
            <span>
                Total des cookies dépensés: <span id="print-box-loose">0</span>
            </span> <br/>`;
})

//auto-click
buttonAuto.addEventListener('mouseover', () => {
    infoBox.classList.add("text-center")
    infoBox.innerHTML = `<h1>Prix ${priceAutoclicker} 🍪</h1><br/>
                          <h3>Clique a votre place toute les secondes</h3>`;

})
buttonAuto.addEventListener('mouseout', () => {
    infoBox.classList.remove('text-center');
    infoBox.innerHTML = `<span>
                Statistique :
            </span> <br/>
            <span>
                Total des cookies gagnés: <span id="print-box-win">0</span>
            </span> <br/>
            <span>
                Total des cookies dépensés: <span id="print-box-loose">0</span>
            </span> <br/>`;
})