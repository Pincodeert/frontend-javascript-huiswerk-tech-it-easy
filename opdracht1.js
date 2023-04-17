//OPDRACHT 1 - ARRAY METHODEN

//check of dit js bestand goed is gekoppeld aan de index.html-pagina
console.log("zo zo");

//Opdracht 1a:
// stap 1: maak een variabele aan waar je de nieuw array straks in kan gaan op laten slaan
// stap 2: maak een mapfunctie en sla resultaat op de nieuwe variabele
// stap 3: log de nieuwe array naar de console
const tvTypes = inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypes);

//Opdracht 1b:
//filtert alle entries, waarvan de originalstock gelijk is aan sold, uit de inventory en slaat deze op in een nieuwe array
// en logt deze vervolgens in de console
const soldOut = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
});
console.log(soldOut);

//of alternatief:
const op = inventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0;
});
console.log(op);

//Opdracht 1c:
//filtert alle entries binnen de Array, waarvan in de array options de property ambilight true is, slaat deze op in een
// nieuwe array en logt deze vervolgens in de console:

const tvsWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
});
console.log(tvsWithAmbilight);

//Opdracht 1d:
//Deze functie bekijkt van alle entries binnen de Array de prijs en sorteert de entries van laagste naar hoogste prijs.
// De volgorde van de array wordt veranderd en we kunnen de array nu loggen naar de console.
inventory.sort((a,b) => {
    return a.price - b.price;
});
console.log(inventory);