const playerName = "Ibón";
const enemyName = "Orco";

let playerHealth = 100;
let enemyHealth = 60;

const playerDamage = 45;
const enemyDamage = 35;

let playerIsAlive = true;
let enemyIsAlive = true;

console.log(`${playerName} ataca al ${enemyName} y le quita ${playerDamage} de vida.`);

enemyHealth -= playerDamage;

if (enemyHealth <= 0) {
    enemyIsAlive = false;
    console.log(`El ${enemyName} ha sido derrotado.`);
} else {
    console.log(`El ${enemyName} sigue vivo con ${enemyHealth} puntos de vida.`);
    console.log(`El ${enemyName} contraataca y le quita ${enemyDamage} de vida a ${playerName}.`);

    playerHealth -= enemyDamage;

    if (playerHealth <= 0) {
        playerIsAlive = false;
        console.log(`${playerName} ha muerto, qué penita.`);
    } else {
        console.log(`${playerName} tiene ${playerHealth} puntos de vida.`);
    }
}

console.log("\n=== RESUMEN FINAL ===");
console.log(`Vida de ${playerName}: ${playerHealth}`);
console.log(`Vida de ${enemyName}: ${enemyHealth}`);
console.log(`${playerName} vivo: ${playerIsAlive}`);
console.log(`${enemyName} vivo: ${enemyIsAlive}`);