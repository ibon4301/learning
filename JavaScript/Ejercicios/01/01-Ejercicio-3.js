const itemName = "Poción de vida"
const itemPrice = 30;
let playerCoins = 100;

playerCoins = playerCoins - itemPrice;

console.log(`Has comprado ${itemName} por ${itemPrice} monedas. Te quedan ${playerCoins}.`)