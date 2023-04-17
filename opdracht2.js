//OPDRACHT 2 - ELEMENTEN IN DE DOM PLAATSEN

//Opdracht 2a:
//Deze functie (map) plaats van alle entries in de array (inventory) het aantal verkochte exemplaren in een nieuwe
// array:
const tvSold = inventory.map((tv) => {
    return tv.sold;
});
// voor mezelf een check of deze functie ook doet wat ik wil dat hij doet:
console.log(tvSold);

//vervolgens dmv een for loop de waarde van alle entries bij elkaar op tellen en deze opslaan in een variabele:
let totalSold = 0;
for (let i = 0; i < tvSold.length; i++) {
    totalSold += tvSold[i];
}
console.log("het totaal aantal verkochte tv's is: " + totalSold);

//Opdracht 2b:
const element1 = document.getElementById("sold");
element1.textContent = totalSold;

//Opdracht 2c:
//korter alternatief dan hierboven:
let totalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    totalStock += inventory[i].originalStock;
}
console.log(totalStock);

//opdracht 2d:
const element2 = document.getElementById("stock");
element2.textContent = totalStock;

//opdracht 2e:
const element3 = document.getElementById("toBeSold");
element3.textContent = totalStock - totalSold;