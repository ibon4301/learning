let coins = 50;
const itemPrice = 30;

function buyItem() {
    if (coins >= itemPrice) {
        coins -= itemPrice;
        console.log("Has comprado el objeto");
        console.log("Monedas restantes: " + coins) ;
    } else {
        console.log("No tienes suficientes monedas.");
    }
}

buyItem();
buyItem();