/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const primoNumero=10
const secondoNumero=50
if(primoNumero <= 50){
  console.log("numero più basso")
}
if(secondoNumero >=50){
  console.log("numero più alto")
}
console.log("questo è il numero più grande:", secondoNumero)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numeroIntero=3
if(numeroIntero !=5){
  console.log("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const numeroDivisibile=50
if(numeroDivisibile !=5){
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numeri={
  numero1: 5,
  numero2: 3,
}
if(numeri.numero1 + numeri.numero2 === 8){
  console.log("bravo")
} else{
  console.log("sbagliato")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart=30
if (totalShoppingCart > 50){
  console.log("Complimenti, spedizione gratuita!")
} else if(totalShoppingCart < 50){
  console.log(totalShoppingCart + 10)
}
else{
  console.log("Costo spedizione 10€")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart=100
const blackFriday=20
function calcolaPercentuale(totalShoppingCart, blackFriday) {
  return (totalShoppingCart * blackFriday) / 100;
}
const risultato = calcolaPercentuale(totalShoppingCart, blackFriday);
console.log("sconto applicato del 20%");

if (totalShoppingCart > 50){
  console.log("Complimenti, spedizione gratuita!")
} 


// }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let z1 = 6
let z2 = 14
let z3 = 10

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const value=15
const value2= "marco"
console.log(typeof value)
console.log(typeof value2)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const number= 10
const result = (number %2)
if(result > 0){
  console.log("numero dispari")
} else {
  console.log("numero pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto",
}
console.log("i miei dati", me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100
console.log(myArray)
