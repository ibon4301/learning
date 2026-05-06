const playerName = "Ibón";
const enemyName = "Orco";

let playerHealth = 100;
let enemyHealth = 40;

const playerDamage = 50;
const enemyDamage = 25;

console.log(`${playerName} ataca al ${enemyName} y le quita ${playerDamage} de vida.`);

enemyHealth -= playerDamage;

if (enemyHealth <= 0) {
    console.log(`El ${enemyName} ha sido derrotado.`);
} else {
    console.log(`El ${enemyName} sigue vivo con ${enemyHealth} de vida.`);

    console.log(`El ${enemyName} contraataca y le quita ${enemyDamage} de vida a ${playerName}.`);

    playerHealth -= enemyDamage;

    if (playerHealth <= 0) {
        console.log(`${playerName} ha muerto.`);
    } else {
        console.log(`${playerName} sigue vivo con ${playerHealth} de vida.`);
    }
}