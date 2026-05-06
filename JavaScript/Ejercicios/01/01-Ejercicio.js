/*
Crea un mini perfil de jugador:

Nombre: Ibón
Nivel: 1
Vida: 100
Monedas: 50
Arma: Espada básica
Está vivo: true

Luego modifica:

Sube el nivel a 2
Resta 20 de vida
Suma 30 monedas
Cambia el arma a "Espada de fuego"

Frase final:
"Ibón ahora es nivel 2, tiene 80 de vida, 80 monedas y usa Espada de fuego."
*/

const playerName = "Ibón";
let level = 1;
let health = 100;
let coins = 50;
let weapon = "Espada básica";
let isAlive = true;

// Frase de bienvenida
// El operador += es una forma abreviada de escribir: variable = variable + valor;
// Realmente es concatenar la frase de bienvenida con la información del jugador, creando una frase completa que se muestra al inicio del juego.
let greeting = "¡Bienvenido al juego, " + playerName + "!";
greeting += " Estás en el nivel " + level + " con " + health + " de vida, " + coins + " monedas y tu arma es " + weapon + "."; 

console.log(greeting);

console.log("=== PERSONAJE INICIAL ===");
console.log(`Nombre: ${playerName}`);
console.log(`Nivel: ${level}`);
console.log(`Vida: ${health}`);
console.log(`Monedas: ${coins}`);
console.log(`Arma: ${weapon}`);
console.log(`Está vivo: ${isAlive}`);

console.log("\n=== DESPUÉS DE LA PARTIDA ===");

level += 1;
health -= 20;
coins += 30;
weapon = "Espada de fuego";

if (isAlive) {
    console.log(`${playerName} ahora es nivel ${level}, tiene ${health} de vida, ${coins} monedas y usa ${weapon}`);
} else {
    console.log("El personaje perdió!");
}

