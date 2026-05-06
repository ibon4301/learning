let enemyHealth = 100;
const playerDamage = 25;

console.log(`Vida inicial del enemigo: ${enemyHealth}.`);
console.log(`El jugador hace ${playerDamage} de daño.`);
enemyHealth -= playerDamage;
console.log(`Vida final del enemigo: ${enemyHealth}.`);