/**
 *  Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, 
altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha inserito un numero consentito.
* 
*/

//  # PREPARATION
//  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
//  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
//  3 - Crea un array per ricordare i numeri (scelti) dall'utente
// **** Creo una variable di appoggio per il punteggio

// # GAMEPLAY
// 1) Chiedere un numero all'utente
// 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
// 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
// 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
//  

// # ENDGAME
// a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
// b. Stampiamo il punteggio del giocatore 

//  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe 
let bombNumbers = [];

//  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


for (i = 0; i < 16; i++){
    let createdBomb = getRandomNumber(1, 100);
    bombNumbers.push(createdBomb);
}

console.log(bombNumbers.length)

//  3 - Crea un array per ricordare i numeri (scelti) dall'utente
let userNumbers = [];
let gameScore = 0;
let userAskedNumber = 0;

while (userNumbers.length < (20 - bombNumbers.length)){
    // userAskedNumber = parseInt(prompt('Inserisci un numero!'));
    userAskedNumber = getRandomNumber(1, 100);

    // switch(userAskedNumber){

    //     case isNaN(userAskedNumbers):
    //         alert('inserisci un numero valido!');
    //         break;

    //     case userNumbers.includes(userAskedNumber):
    //         alert('non devi ripetere il numero!');
    //         break;

    //     case bombNumbers.includes(userAskedNumber):
    //         alert('KABOOM! HAI PERSO');
    //         alert('Il tuo punteggio è di ' + gamescore + 'punti');
    //         break;

    //     case userAskedNumber < 1 || userAskedNumber > 100:
    //         alert('inserisci un numero tra 1 e 100 inclusi!');
    //         break;
        
    //     default:
    //         userNumbers.push(userAskedNumber);
    //         gameScore++;
    // }

    if (isNaN(userAskedNumber)){
        alert('inserisci un numero valido!');
    } else if (userNumbers.includes(userAskedNumber)){
        alert('non devi ripetere il numero!');
    } else if (bombNumbers.includes(userAskedNumber)){
        console.log('KABOOM! HAI PERSO');
        console.log('Il tuo punteggio è di ' + gameScore + 'punti');
    } else if (userAskedNumber < 1 || userAskedNumber > 100){
        alert('inserisci un numero tra 1 e 100 inclusi!');
    } else {
        userNumbers.push(userAskedNumber);
        gameScore++;
    }
}

console.log(userNumbers.length);
console.log(userNumbers);
console.log(bombNumbers);
console.log(gameScore);

