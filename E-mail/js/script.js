// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
const emailRequest = prompt("inserisci la tua e-mail");
console.log(emailRequest);
const emailUser = ["pino@gmail.it" , "maria@gmail.it" , "ugo@gmail.it"]
if (emailUser.includes ("pino@gmail.it")) {
    console.log(emailUser);
    alert("Welcome back");
} else {
    alert("User not valid");
}