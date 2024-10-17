const titre = document.querySelector(".score");
titre.textContent = "0";

const button = document.getElementById("increment-button");
const bonus3 = document.querySelector(".button-bonus3");

const macIntoshButton = document.querySelector('.button-bonus2');
const diskatorButton = document.querySelector('.button-container3'); 

let userClickValue = 1;
let score = 9998;
let bonusUse = false; // indicateur pour savoir si le bonus a été utilisé
button.addEventListener("click", function () {
  score+= userClickValue;
  titre.textContent = score;

  if (score > 10000 && !bonusUse) {
    bonus3.style.display = "block"; // affiche le boouton bonus si score >=10000
  }
});

bonus3.addEventListener("click", function () {
  if (!bonusUse && score > 10000) {
    score = (score - 10000) * 10000; // Multiplier le reste par 10 000
    titre.textContent = score;
    bonusUse = true; // Indique que le bonus a été utilisé
    // bonus3.style.display = 'none'; // Ne pas cacher le bouton bonus
  }
});

let autoClickvalue = 1;
let bonus1price = 100;
const gamingMouse = document.querySelector(".button-bonus1");
function autoClicker() {
  if (score >= bonus1price) {
    score -= bonus1price;
    setInterval(function () {
      score+= autoClickvalue;
      titre.textContent = score;
    }, 1000);
  }
}
gamingMouse.addEventListener("click", function () {
  autoClicker();
  bonus1price *= 2;
});
//************************** BONUS PASSIFS **************************************************** */
let bonusPassif1 = false;
const buttonContainer1Price = 500;
const diskPassiv = document.querySelector('.button-container1')
diskPassiv.addEventListener("click", function() {
  if (score >= buttonContainer1Price && !bonusPassif1){
    score -= buttonContainer1Price;
    autoClickvalue *= 5;
    userClickValue *= 7;
    bonusPassif1 = true;
}});



let bonusPassif2 = false;
const buttonContainer2Price = 2000;
const diskoPassiv = document.querySelector('.button-container2')
diskoPassiv.addEventListener("click", function() {
  if (score >= buttonContainer2Price && !bonusPassif2){
    score -= buttonContainer2Price;
    autoClickvalue *= 3;
    userClickValue *= 2;
    bonusPassif2 = true;
}});

//**************************************** RAPH CODE************************************** */
let macIntoshActive = false
let bonusValue2 = false;
const bonusValueButton2 = 1000;
macIntoshButton.addEventListener('click', function(){
    if ( score >= bonusValueButton2 && !bonusValue2){
        score -= bonusValueButton2;
        userClickValue += 50; 
        titre.textContent = score;

        setTimeout(() => {
            userClickValue = 1;
            bonusValueButton2 = false;
        }, 30000);
    }});

     let diskatorPurchased = false
     let bonusPassif3 = false;
     const buttonContainer3Price = 5000;
     const diskator = document.querySelector('.button-container3');
     diskator.addEventListener('click', function(){
        if ( score >= buttonContainer3Price && !bonusPassif3){
            score-= buttonContainer3Price;
            diskatorPurchased = true
            boostBonusValueButton2();
            updateScoreDisplay();
        } 
 })
 function boostBonusValueButton2(){
    userClickValue += 100
 }
          

/*let bonusClickValue = 0; 
let macIntoshCost = 1000; 
let diskatorCost = 5000; 
let macIntoshBonusValue = 50; 
let macIntoshActive = false; 
let diskatorPurchased = false; 

function updateScoreDisplay() {
    titre.textContent = score;
}

function playerClick() {
    score += userClickValue + bonusClickValue; 
    updateScoreDisplay(); 
}
function buyMacIntoshBonus() {
    if (score >= macIntoshCost && !macIntoshActive) {
        score -= macIntoshCost; 
        activateMacIntoshBonus();
        updateScoreDisplay(); 
    } 
}

function buyDiskatorBonus() {
    if (score >= diskatorCost && !diskatorPurchased) {
        score -= diskatorCost; 
        diskatorPurchased = true; 
        boostMacIntoshBonus(); 
        updateScoreDisplay(); 
    }
}

function activateMacIntoshBonus() {
    macIntoshActive = true;
    bonusClickValue = macIntoshBonusValue; 


    setTimeout(() => {
        bonusClickValue = 0; 
        macIntoshActive = false;
    }, 30000); 
}

function boostMacIntoshBonus() {
    macIntoshBonusValue = 100; 

incrementButton.addEventListener("click", playerClick);
macIntoshButton.addEventListener("click", buyMacIntoshBonus);
diskatorButton.addEventListener("click", buyDiskatorBonus);

updateScoreDisplay();
};
*/


/*setInterval(function() {
                score ++ 
                titre.textContent = score;
              }, 1000);*/

// scoreElement.textContent = Finalement, on dit à notre jouet (scoreElement) de montrer le nouveau score.
// Si le score était 0 et que quelqu'un a cliqué, il va maintenant afficher 1.
//Si quelqu’un clique encore, il affichera 2, et ainsi de suite.


// Bonus passifs => afficher infos de chaque bonus au survol
/* créer bouton sur chaque image
créer un tableau recensant les infos de chaque bonus
au survol afficher infos correspondant au bonus
*/

const arrayPassiveButtons = [
    {name : "Floppy Disk",
    price : "500 octets"
},
    {name : "Floppy Disko",
    price : "2000 octets"
},
    {name : "Floppy Diskator",
    price : "5000 octets"
}
]
    const buttonContainers = document.querySelectorAll(".button-container1, .button-container2, .button-container3");

    arrayPassiveButtons.forEach((item, index) => {
    const buttonContainer = buttonContainers[index];
    const passiveButton = document.createElement("button"); 
    passiveButton.classList.add("passive-button"); 
    passiveButton.textContent =`${item.name} - Prix: ${item.price}`;

    passiveButton.addEventListener('mouseover', function () {
        passiveButton.classList.add("visible") ; 
    });

    passiveButton.addEventListener('mouseout', function () {
        passiveButton.classList.remove("visible") ;     
    });

    buttonContainer.appendChild(passiveButton);
});


// Bonus actifs => afficher infos de chaque bonus au survol
/* le bouton est déjà créé => j'ai retiré le bouton de la plage html et ai créé un bouton via JS, 
ajouter une classe 
au survol afficher les infos sur chaque image */

const arrayActiveButtons = [
    {name : "Gaming Mouse",
    price : "100 octets"
},
    {name : "Mac Intosh",
    price : "1000 octets"
},
    {name : "PC",
    price : "10000 octets"
}
]

const activeButtonsContainer = document.querySelectorAll(".button-bonus1, .button-bonus2, .button-bonus3");


arrayActiveButtons.forEach((item, index) => {
    const activeButtons = activeButtonsContainer[index]; 
    const activeButton = document.createElement("button"); 

    activeButton.classList.add("active-button");
    activeButton.textContent =`${item.name} - Prix: ${item.price}`;

    activeButton.addEventListener('mouseover', function () {
        activeButton.classList.add("visible") ; 
    });

    activeButton.addEventListener('mouseout', function () {
        activeButton.classList.remove("visible") ;     
    });

    activeButtons.appendChild(activeButton);
 

});

/* Disk : il coûte 500 octets et se déclenche au click du joueur 
=> il multiplie le Gaming Mouse par 5 et augmente le click du joueur par 7 */

/* étape 0 : le joueur clique sur le bouton bonus passif Disk 
étape 1 : s'assurer que le joueur a bien 500 o pour déclencher le bonus
étape 2 : */
    
  

