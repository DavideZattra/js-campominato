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

//FUNZIONI
function getRandomNumber(min, max) { //crea un numero randomico tra un intervallo
    return Math.floor(Math.random() * (max - min) + min);
}

function isBetweenIntegers(variable, min, max){ //controlla che una variabile sia nell'intervallo stabilito

    if (variable < min || variable > max){
        return false;
    }

    return true;
} 

//  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe 
let bombList = [];


// inserisco un prompt per scegliere la difficoltà
let difficultyLevel = parseInt(prompt('inserisci un livello di difficoltà tra 1 e 5 in cui 1 è facilissimo e 5 impossibile'))
while (!isBetweenIntegers(difficultyLevel, 1, 5)){
    difficultyLevel = parseInt(prompt('inserisci un livello di difficoltà tra 1 e 5 in cui 1 è facilissimo e 5 impossibile'))
}
console.log(difficultyLevel)

let lenghtOfBombList= Math.floor(difficultyLevel * 7.5);

//  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
for (i = 0; i < lenghtOfBombList; i++){
    let createdBomb = getRandomNumber(1, 100);
    bombList.push(createdBomb);
}

console.log(bombList.length)
console.log(bombList)

//  3 - Crea un array per ricordare i numeri (scelti) dall'utente
let userNumbers = [];
let gameScore = 0;
let userAskedNumber = 0;
let lengthOfBombArray = bombList.length;
let lengthOfUserAskedNumbersArray = userNumbers.length;

while (lengthOfUserAskedNumbersArray < (100 - lengthOfBombArray)){
    userAskedNumber = parseInt(prompt('Inserisci un numero!')); //!!! da utilizzare come standard per il gioco
    // userAskedNumber = getRandomNumber(1, 100); // !!! da usare in caso di test

    if (isNaN(userAskedNumber)){

        console.log('inserisci un numero valido!');

    } else if (userNumbers.includes(userAskedNumber)){ // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)

        console.log('non devi ripetere il numero!');

    } else if (bombList.includes(userAskedNumber)){ // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM

        console.log('KABOOM! HAI PERSO');
        console.log('Il tuo punteggio è di ' + gameScore + 'punti');
        lengthOfUserAskedNumbersArray = 100 - lengthOfBombArray;

    } else if (!isBetweenIntegers(userAskedNumber, 1, 100)){ // 2) Controllare che il numero sia compreso tra il minimo e il massimo (1, 100)

        console.log('inserisci un numero tra 1 e 100 inclusi!');

    } else { //4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti

        userNumbers.push(userAskedNumber);
        lengthOfUserAskedNumbersArray++;
        gameScore++;

    }

}

if (userNumbers.length === 100 - bombList.length){ //a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    alert('Hai Vinto, il tuo punteggio è di ' + gameScore);
    
}

console.log(userNumbers.length);
console.log(userNumbers);
console.log(bombList);
console.log(gameScore);

