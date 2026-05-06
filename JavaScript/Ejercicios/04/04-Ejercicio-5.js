const playerName = "Ibón";
const enemyName = "Orco";
const playerDamage = 35;

let enemyHealth = 100;

console.log(`${playerName} ataca al ${enemyName}`);

enemyHealth -= playerDamage

console.log(`Le quita ${playerDamage} puntos de vida.`);
console.log(`Vida restante del ${enemyName}: ${enemyHealth}`);