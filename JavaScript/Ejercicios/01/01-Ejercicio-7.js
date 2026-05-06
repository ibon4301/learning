let health = 40;
let isAlive = true;

health -= 50;

if (health <= 0) {
    isAlive = false;
    console.log(`¡Has muerto!`);
} else {
    console.log(`Sigues vivo con ${health} de vida.`);
}