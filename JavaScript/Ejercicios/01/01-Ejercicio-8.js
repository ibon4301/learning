const playerName = "Ibón";
const enemyName = "Orco";

let playerHealth = 100;
let enemyHealth = 80;

const playerDamage = 35;
const enemyDamage = 20;

// Jugador ataca primero

enemyHealth -= playerDamage;
console.log(`${playerName} ataca al ${enemyName} y le quita ${playerDamage} de vida.`);
console.log(`Vida del ${enemyName}: ${enemyHealth}`);

playerHealth -= enemyDamage;
console.log(`El ${enemyName} contraataca y le quita ${enemyDamage} de vida a ${playerName}.`)
console.log(`Vida de ${playerName}: ${playerHealth}`)