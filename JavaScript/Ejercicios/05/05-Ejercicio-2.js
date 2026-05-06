let playerHealth = 60;
const healAmount = 30;

console.log(`Vida inicial: ${playerHealth}
Te curas ${healAmount} puntos de vida.`);

playerHealth += healAmount;

console.log(`Vida final: ${playerHealth}.`);