const titre = document.querySelector(".score");
titre.textContent = "0";

const button = document.getElementById("increment-button");
const bonus3 = document.querySelector(".button-bonus3");

const macIntoshButton = document.querySelector('.button-bonus2');
const diskatorButton = document.querySelector('.button-container3'); 

//************************** BONUS ACTIFS GAMING MOUSE & PC **************************************************** */
let userClickValue = 1;
let score = 9999;

let bonusUse = false; // indicateur pour savoir si le bonus a été utilisé
button.addEventListener("click", function () {
  score+= userClickValue;
  titre.textContent = score;
updatePassives(score);
  if (score > 10000 && !bonusUse) {
    bonus3.style.display = "block"; // affiche le bouton bonus si score >=10000
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

//************************** BONUS PASSIFS DISK & DISKO **************************************************** */
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

//**************************************** BONUS ACTIF MAC INTOSH & BONUS PASSIF DISKATOR ************************************** */
let bonusValue2 = false;
const bonusValueButton2 = 1000;
let valueBonus2 = 50;

macIntoshButton.addEventListener('click', function(){
    if ( score >= bonusValueButton2 && !bonusValue2){
        score -= bonusValueButton2;
        console.log("click", valueBonus2)
        userClickValue += valueBonus2; 
        titre.textContent = score;

        setTimeout(() => {
            userClickValue = 1;
            bonusValueButton2 = false;
        }, 30000);
    }
});
let bonusValue3 = 5000;
let bonusPassif3 = false;
const buttonBonusPassif3 = document.querySelector(".button-container3")
buttonBonusPassif3.addEventListener ("click",function boostBonusValueButton2(){
    console.log ("Bonus passif")
    if(score >= bonusValue3 && !bonusPassif3){
        score -= bonusValue3;
        bonusPassif3 = true;
        console.log("before", valueBonus2)
        valueBonus2 = 100
        console.log("after", valueBonus2)
    }
 })
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
const passives = [
    { colorImage: "images-floppypassifs/diskette_1083346.png", cost: 500 },
    { colorImage: "images-floppypassifs/diskette_1602224.png", cost: 2000 },
    { colorImage: "images-floppypassifs/disc_9849805.png", cost: 5000 },
];
function updatePassives(score) {
    const passiveImages = document.querySelectorAll(".button-container1, .button-container2, .button-container3");
    passiveImages.forEach((image, index) => {
        const passive = passives[index];
        if (score >= passive.cost) {
            image.children[0].src = passive.colorImage;  
        }});
        
}
  

