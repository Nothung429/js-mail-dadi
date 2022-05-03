// lancio dei dadi:
// 1. genera un numero randomico da 1 a 6 per il giocatore
// 2. genera un numero randomico da 1 a 6 per il computer
// 3. calcola qual è il numero più alto
// 4. dichiara il vincitore del lancio dei dadi
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
            result.innerHTML = `VICTORY!!!`
        } else if (playerDice < computerDice) {
            result.style.display = "block";
            result.innerHTML = `DEFEAT`
        } else {
            result.style.display = "block";
            result.innerHTML = `TIE`
        }
    }
);