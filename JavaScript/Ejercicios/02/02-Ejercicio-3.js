const itemName = "Espada de hierro";
const itemPrice = 75;
let playerCoins = 50;

if (playerCoins >= itemPrice) {
    playerCoins -= itemPrice
    console.log(`Has comprado ${itemName}. Te quedan ${playerCoins} monedas.`)
} else {
    console.log(`No tienes suficientes monedas para comprar ${itemName}`)
}