let playerCoins = 80;
const itemPrice = 50;
const itemName = "Escudo";

if (playerCoins >= itemPrice) {
    playerCoins-= itemPrice
    console.log(`Has comprado ${itemName}`);
    console.log(`Te quedan ${playerCoins} monedas.`);
} else {
    console.log("No tienes suficientes monedas.");
}