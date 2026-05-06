const playerName = "Ibón";
let level = 1;
let health = 100;
let coins = 20;
let weapon = "Espada básica";
let isAlive = true;

level += 2;
health -= 35;
coins += 80;
weapon = "Arco Legendario"

console.log(`${playerName} es nivel ${level}, tiene ${health} de vida, ${coins} monedas y usa ${weapon}.`)

