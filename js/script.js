// alert('Hello World!');

let userName = prompt('Inserisci il tuo nome');
let userLastname = prompt('Inserisci il tuo cognome');
let userColor = prompt('Inserisci il tuo colore preferito');
let nGen = 21;

let pswGen = userName + userLastname + userColor + nGen;

document.getElementById('psw').innerHTML += ' ' + pswGen;

console.log('Il tuo nome è:', userName);
console.log('Il tuo cognome è:',userLastname);
console.log('Il tuo colore preferito è:',userColor);