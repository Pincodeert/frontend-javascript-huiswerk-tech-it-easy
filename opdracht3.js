//OPDRACHT 3 - ARRAY METHODEN EN FUNCTIES

//Opdracht 3a:
//Deze array-methode haalt van alle entries het tv-mekr op en slaat deze op in een nieuwe lijst:
const tvBrands = inventory.map((tv) => {
    return tv.brand;
});

const tvsByBrand = document.getElementById("tvsByBrand");
tvsByBrand.innerHTML = `${tvBrands}`;

//opdracht 3b:

function showTvsByBrand(inventory) {
    const brands = inventory.map((tv) => {
        return tv.brand;
})
    //return brands; // dit te gebruiken als je alleen in de console wil checken of de functie werkt
    //als je de lijst op de pagina willen laten terugkomen:
    const brandzs = document.getElementById("brands");
    brandzs.innerHTML = `${brands}`;

};

//check voor mezelf:
//console.log("dit zijn alle merken: " + showTvsByBrand(inventory));

