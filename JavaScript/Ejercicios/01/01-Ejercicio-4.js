const enemyName = "Goblin";
const enemyDamage = 25;
let playerHealth = 100;

playerHealth = playerHealth - enemyDamage;

console.log(`El ${enemyName} te ha atacado y te ha quitado ${enemyDamage} de vida. Ahora tienes ${playerHealth} de vida.`)