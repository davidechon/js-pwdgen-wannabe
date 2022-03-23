// flowchart TD
//    A[INIZIO] --> B[Richiedi di inserie il nome]
//    B --> C[memorizza il nome nella variabile 'userName']
//    C --> D[Richiedi di inserire il cognome]
//    D --> E[memorizza il cognome nella variabile 'userLastname'] 
//    E --> F[Richiedi il di inserire il colore preferito]
//    F --> G[memorizza il colore nella variabile 'userColor']
//    G --> H[memorizza '21' nella variabile 'nGen']
//    H --> I[in script.js, nella variabile 'pswGen' concatena le variabili 'userName' + 'userLastname' + 'userColor' + 'nGen']
//    I --> L[stampa  index.html.#psw concatenata con pswGen]
//    L --> M[stampa in console 'userName']
//    M --> N[stampa in console 'userLastname']
//    N --> O[stampa in console 'userColor']
//    O --> P[FINE]
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