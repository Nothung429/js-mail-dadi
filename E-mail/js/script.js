// Log-in wannabe:
// 1. chiedi all'utente la sua e-mail
// 2. controlla nella lista delle persone registrate se la mail inserita è presente
// 3. stampa un benvenuto per gli utenti registrati
// 4. stampa un registrati per gli utenti non registrati
const emailRequest = prompt("Insert your E-Mail");
console.log(emailRequest);
let newUser = false;
const emailUser = ["pino@gmail.it" , "maria@gmail.it" , "ugo@gmail.it"]
for (let i=0 ; i < emailUser.length ; i++) {
    if (emailUser[i] === emailRequest) {
        newUser = true;
    }
}
const control = document.getElementById("control")
if (newUser == true) {
    control.innerHTML = `Welcome back`
} else {
    control.innerHTML = `Sign in`
}
console.log(newUser);