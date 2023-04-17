//OPDRACHT 4 - FUNCTIES


//Opdracht 4a:
function showTv(inventory) {
     const strings = inventory.map((tv) => {
        return `${tv.brand} ${tv.type} - ${tv.name}`;
    });
     return strings
}
console.log(showTv(inventory));

// Helaas de andere opdrachten niet op tijd af kunnen krijgen.