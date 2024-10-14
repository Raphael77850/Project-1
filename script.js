

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

    buttonContainer.style.position ="relative";
    buttonContainer.appendChild(passiveButton);
});






    
  