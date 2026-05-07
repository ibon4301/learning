const playerName = "Ibón";
const enemyName = "Orco";
const playerDamage = 20;

let enemyHealth = 100;

console.log(`Vida inicial del ${enemyName}: ${enemyHealth}`);

for (let i = 1; i <= 3; i++) {
    enemyHealth -= playerDamage;

    console.log(`Turno ${i}: ${playerName} hace ${playerDamage} de daño.`);
    console.log(`Vida del ${enemyName}: ${enemyHealth}`);
}