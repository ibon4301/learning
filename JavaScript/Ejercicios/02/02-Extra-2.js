const itemName = "Armadura de cuero";
let itemPrice = 100;
let playerCoins = 80;
const hasDiscount = true;

if (hasDiscount) {
    itemPrice -= 30;
    console.log(`Tienes descuento. El precio final es de ${itemPrice} monedas.`);
} else {
    console.log(`No tienes descuento. El precio es de ${itemPrice} monedas.`);
}

if (playerCoins >= itemPrice) {
    playerCoins -= itemPrice;
    console.log(`Has comprado ${itemName}. Te quedan ${playerCoins} monedas.`);
} else {
    const missingCoins = itemPrice - playerCoins;
    console.log(`No tienes suficientes monedas. Te faltan ${missingCoins} monedas.`);
}