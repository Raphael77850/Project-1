

const titre = document.querySelector('.Score');
titre.textContent = "0";

const scoreElement = document.querySelector('.Score');
const button = document.getElementById('increment-button');

let score = 0;
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
    
  