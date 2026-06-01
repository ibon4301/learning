function calculateCoins(currentCoins, rewardCoins) {
    return currentCoins + rewardCoins;
}

const totalCoins = calculateCoins(10, 25);

console.log("Monedas totales: " + totalCoins);