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


const scoreElement = document.querySelector('.Score');
const bonus = getElementByName('bonus1');
let Score = 20;
button.addEventListener('click', function(){
    score*10;
    scoreElement.textContent = score;

});