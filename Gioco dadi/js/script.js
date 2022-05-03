// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const result = document.getElementById("result")
const btnPlay = document.getElementById("play")
btnPlay.addEventListener("click",
    function(){
        const playerDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById("player").innerHTML = `Player point: ${playerDice}`
        const computerDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById("computer").innerHTML = `Computer point: ${computerDice}`
        console.log(player);
        console.log(computer);
        if (playerDice > computerDice) {
            result.style.display = "block";
            result.innerHTML = `HAI VINTO!!!`
        } else if (playerDice < computerDice) {
            result.style.display = "block";
            result.innerHTML = `HAI PERSO`
        } else {
            result.style.display = "block";
            result.innerHTML = `PAREGGIO`
        }
    }
);