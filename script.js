

/* const titre = document.querySelector('.Score');
titre.textContent = "0";

const scoreElement = document.querySelector('.Score');
const button = document.getElementById('increment-button');

let score = 999;
button.addEventListener('click', function(){
    score++; 
    scoreElement.textContent = score;
});


// scoreElement.textContent = Finalement, on dit à notre jouet (scoreElement) de montrer le nouveau score.
// Si le score était 0 et que quelqu'un a cliqué, il va maintenant afficher 1.
 //Si quelqu’un clique encore, il affichera 2, et ainsi de suite.



// Bonus passifs => afficher infos de chaque bonus au survol
/* créer bouton sur chaque image
créer un tableau recensant les infos de chaque bonus
au survol afficher infos correspondant au bonus


const arrayPassiveButtons = [
    {name : "Floppy Disk",
    price : 100,
    reward : 500
},
    {name : "Floppy Disko",
    price : 500,
    reward : 1000
},
    {name : "Floppy Diskator",
    price : 3000,
    reward : 5000
},
    {name : "Floppy Diskount",
    price : 10000,
    reward : 50000
}
]

    const buttonContainers = document.querySelectorAll(".button-container");

    arrayPassiveButtons.forEach((item, index) => {
    const buttonContainer = buttonContainers[index];
    const passiveButton = document.createElement("button"); 
    passiveButton.classList.add("passive-button"); 
    passiveButton.textContent =`${item.name} - Prix: ${item.price} - Récompense: ${item.reward}`;
    passiveButton.style.opacity = 0;
    passiveButton.style.fontFamily = "'Jersey 10', sans serif";
    passiveButton.style.color= "#139A43";
    passiveButton.style.position = "absolute";
    passiveButton.style.top = "50%";
    passiveButton.style.left = "50%";
    passiveButton.style.transform = "translate(-50%, -50%)";
    passiveButton.style.zIndex = 10;

    passiveButton.addEventListener('mouseover', function () {
        passiveButton.style.opacity = 1 ; 
    });

    passiveButton.addEventListener('mouseout', function () {
        passiveButton.style.opacity = 0; 
    });

code raphaël :

    let bonusClickValue = 0; // Valeur additionnelle des clics lorsque le bonus est actif
    const macIntoshCost = 1000; // Coût du bonus Mac Intosh
    let macIntoshActive = false; // Indicateur si le bonus est actif ou non
    
    // Sélection des éléments du DOM
    const macIntoshButton = document.querySelector(".bonus2");
    const scoreElement = document.querySelector(".Score");
    const incrementButton = document.getElementById("increment-button");


    // Fonction pour mettre à jour l'affichage du score
function updateScoreDisplay() {
    scoreElement.textContent = score;
}

// Fonction pour gérer le clic du joueur
function playerClick() {
    score += baseClickValue + bonusClickValue; // Ajoute la valeur de base et la valeur bonus si active
    updateScoreDisplay(); // Met à jour l'affichage du score
}

// Fonction pour acheter et activer le bonus Mac Intosh
function buyMacIntoshBonus() {
    if (score >= macIntoshCost && !macIntoshActive) {
        score -= macIntoshCost; // Réduit le score du joueur par le coût du bonus
        activateMacIntoshBonus(); // Active le bonus
        updateScoreDisplay(); // Met à jour l'affichage du score
    } 
}

// Fonction pour activer le bonus Mac Intosh
function activateMacIntoshBonus() {
    macIntoshActive = true;
    bonusClickValue = 50; // Ajoute 50 octets par clic en plus du clic de base

    console.log("Bonus Mac Intosh activé ! Chaque clic vaut maintenant 50 octets supplémentaires pendant 30 secondes.");

    

    setTimeout(() => {
        bonusClickValue = 0; // Rétablit la valeur additionnelle à 0 après 30 secondes
        macIntoshActive = false;
        console.log("Bonus Mac Intosh terminé. Retour à la valeur de clic de base.");
    }, 30000); // 30000 millisecondes = 30 secondes
}

// Ajout des écouteurs d'événements pour les boutons
incrementButton.addEventListener("click", playerClick);
macIntoshButton.addEventListener("click", buyMacIntoshBonus);

// Initialisation de l'affichage du score
updateScoreDisplay();

});
*/

//code simplifié raphaël : 

// Variables globales
const scoreElement = document.querySelector('.Score');
const incrementButton = document.getElementById('increment-button');
const macIntoshButton = document.getElementById('macIntoshButton');
const diskatorButton = document.getElementById('diskator-button'); // Sélection du bouton Diskator
const bonusButtons = document.querySelectorAll('[data-price]');

// Crée un élément tooltip
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

let score = 999; // Score initial
let baseClickValue = 1; // Valeur de clic de base
let bonusClickValue = 0; // Valeur bonus de clic, initialement à 0
let macIntoshCost = 1000; // Coût du bonus Mac Intosh
let diskatorCost = 5000; // Coût du bonus Diskator
let macIntoshBonusValue = 50; // Valeur initiale du bonus Mac Intosh par clic
let macIntoshActive = false; // Indicateur si le bonus Mac Intosh est actif
let diskatorPurchased = false; // Indicateur si le bonus Diskator a été acheté

// Fonction pour mettre à jour l'affichage du score
function updateScoreDisplay() {
    scoreElement.textContent = score;
}

// Fonction pour gérer le clic du joueur
function playerClick() {
    score += baseClickValue + bonusClickValue; // Ajoute la valeur de base et la valeur bonus si active
    updateScoreDisplay(); // Met à jour l'affichage du score
}

// Fonction pour acheter et activer le bonus Mac Intosh
function buyMacIntoshBonus() {
    if (score >= macIntoshCost && !macIntoshActive) {
        score -= macIntoshCost; // Réduit le score du joueur par le coût du bonus
        activateMacIntoshBonus(); // Active le bonus
        updateScoreDisplay(); // Met à jour l'affichage du score
    } 
}

// Fonction pour acheter le bonus Diskator
function buyDiskatorBonus() {
    if (score >= diskatorCost && !diskatorPurchased) {
        score -= diskatorCost; // Réduit le score du joueur par le coût du bonus
        diskatorPurchased = true; // Marque le bonus comme acheté
        boostMacIntoshBonus(); // Augmente la valeur du bonus Mac Intosh
        updateScoreDisplay(); // Met à jour l'affichage du score
        console.log("Bonus Diskator acheté ! Le clic du Mac Intosh vaut maintenant 100 octets.");
    }
}

// Fonction pour activer le bonus Mac Intosh
function activateMacIntoshBonus() {
    macIntoshActive = true;
    bonusClickValue = macIntoshBonusValue; // Définit la valeur du bonus Mac Intosh

    console.log(`Bonus Mac Intosh activé ! Chaque clic vaut maintenant ${bonusClickValue} octets supplémentaires pendant 30 secondes.`);

    setTimeout(() => {
        bonusClickValue = 0; // Rétablit la valeur additionnelle à 0 après 30 secondes
        macIntoshActive = false;
        console.log("Bonus Mac Intosh terminé. Retour à la valeur de clic de base.");
    }, 30000); // 30000 millisecondes = 30 secondes
}

// Fonction pour augmenter la valeur du bonus Mac Intosh après l'achat du Diskator
function boostMacIntoshBonus() {
    macIntoshBonusValue = 100; // Augmente la valeur du bonus Mac Intosh de 50 à 100 octets
}

// Fonction pour afficher le tooltip au survol
function showTooltip(event) {
    const price = event.currentTarget.getAttribute('data-price');
    tooltip.textContent = `Prix : ${price} octets`;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

// Fonction pour masquer le tooltip quand la souris sort
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Fonction pour mettre à jour la position du tooltip lorsque la souris bouge
function moveTooltip(event) {
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

// Ajout des écouteurs d'événements à chaque bouton
bonusButtons.forEach(button => {
    button.addEventListener('mouseover', showTooltip);
    button.addEventListener('mouseout', hideTooltip);
    button.addEventListener('mousemove', moveTooltip);


// Ajout des écouteurs d'événements pour les boutons
incrementButton.addEventListener("click", playerClick);
macIntoshButton.addEventListener("click", buyMacIntoshBonus);
diskatorButton.addEventListener("click", buyDiskatorBonus);

// Initialisation de l'affichage du score
updateScoreDisplay();

});




    
  