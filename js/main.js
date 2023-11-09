// Questo è il file che contiene tutto il codice JS della pagina web

//prompt info iniziali
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let firstNumber = prompt("Inserisci il primo numero");
let secondNumber = prompt("Inserisci il secondo numero");

//variante password2
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
let quotient = firstNumber / secondNumber;

//variante password3
let randomNumber = Math.floor((Math.random() * 100) + 0);



console.log(`----------Password Generator 2023 (No Scam)----------

----------Passowrd:  ${name}${surname}${favoriteColor}21----------
----------Password2: ${name}${surname}${favoriteColor}${quotient}----------
----------Password3: ${name}${surname}${favoriteColor}${randomNumber}----------
`);

//visualizzazione HTML
document.getElementById("password1").innerHTML = name+surname+favoriteColor+21;
document.getElementById("password2").innerHTML = name+surname+favoriteColor+quotient;
document.getElementById("password3").innerHTML = name+surname+favoriteColor+randomNumber;