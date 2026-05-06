// 02-TiposDeDatos.js

/*
Los tipos de datos sirven para saber qué clase de valor tiene una variable.

Ejemplos:
- "Ibón" es texto, por tanto es string.
- 21 es número, por tanto es number.
- true o false son booleanos.
- undefined significa que una variable existe, pero todavía no tiene valor.
- null significa que hemos dejado algo vacío a propósito.
*/

console.log("=== TIPOS DE DATOS EN JAVASCRIPT ===");


// -----------------------------------------------------------------------------
// 1. STRING
// -----------------------------------------------------------------------------

console.log("\n--- 1. STRING ---");

/*
Un string es texto.

Se puede escribir con:
- Comillas dobles: "Hola"
- Comillas simples: 'Hola'
- Backticks: `Hola ${variable}`
*/

const playerName = "Ibón";
const enemyName = 'Orco';
const welcomeMessage = `Bienvenido, ${playerName}`;

console.log(playerName);
console.log(enemyName);
console.log(welcomeMessage);


// -----------------------------------------------------------------------------
// 2. NUMBER
// -----------------------------------------------------------------------------

console.log("\n--- 2. NUMBER ---");

/*
Un number es un número.

Puede ser:
- Entero: 10
- Decimal: 10.5
*/

const playerLevel = 5;
let playerHealth = 100;
const weaponDamage = 12.5;

console.log("Nivel:", playerLevel);
console.log("Vida:", playerHealth);
console.log("Daño del arma:", weaponDamage);

/*
Con números podemos hacer operaciones.
*/

playerHealth -= 30;

console.log(`Después del ataque, la vida es ${playerHealth}.`);


// -----------------------------------------------------------------------------
// 3. BOOLEAN
// -----------------------------------------------------------------------------

console.log("\n--- 3. BOOLEAN ---");

/*
Un boolean solo puede tener dos valores:

true  = verdadero
false = falso

Se usa mucho en condicionales.
*/

const isAlive = true;
const hasKey = false;

console.log("Está vivo:", isAlive);
console.log("Tiene llave:", hasKey);

if (isAlive) {
    console.log(`${playerName} sigue vivo.`);
} else {
    console.log(`${playerName} ha muerto.`);
}

if (hasKey) {
    console.log("Puedes abrir la puerta.");
} else {
    console.log("No tienes la llave.");
}


// -----------------------------------------------------------------------------
// 4. UNDEFINED
// -----------------------------------------------------------------------------

console.log("\n--- 4. UNDEFINED ---");

/*
undefined significa que una variable existe,
pero todavía no tiene ningún valor asignado.
*/

let selectedWeapon;

console.log("Arma seleccionada:", selectedWeapon);

selectedWeapon = "Espada";

console.log("Arma seleccionada:", selectedWeapon);


// -----------------------------------------------------------------------------
// 5. NULL
// -----------------------------------------------------------------------------

console.log("\n--- 5. NULL ---");

/*
null significa que una variable está vacía a propósito.

La diferencia rápida:

undefined = todavía no se ha asignado nada
null = lo he dejado vacío intencionadamente
*/

let currentMission = null;

console.log("Misión actual:", currentMission);

currentMission = "Derrotar al Orco";

console.log("Misión actual:", currentMission);


// -----------------------------------------------------------------------------
// 6. TYPEOF
// -----------------------------------------------------------------------------

console.log("\n--- 6. TYPEOF ---");

/*
typeof sirve para saber qué tipo de dato tiene un valor.
*/

console.log(typeof playerName);
console.log(typeof playerLevel);
console.log(typeof isAlive);
console.log(typeof selectedWeapon);
console.log(typeof currentMission);

console.log(typeof undefined);
console.log(typeof null);

/*
Cuidado:
typeof null devuelve "object".

Esto es una rareza antigua de JavaScript.
Nosotros recordaremos que null significa "vacío a propósito".
*/


// -----------------------------------------------------------------------------
// 7. EJEMPLO COMPLETO DE PERSONAJE
// -----------------------------------------------------------------------------

console.log("\n--- 7. EJEMPLO COMPLETO DE PERSONAJE ---");

const characterName = "Ibón";
const characterClass = "Guerrero";
let characterHealth = 100;
let characterCoins = 50;
const characterIsAlive = true;
let characterPet = null;
let characterSpecialPower;

console.log(`Nombre: ${characterName}`);
console.log(`Clase: ${characterClass}`);
console.log(`Vida: ${characterHealth}`);
console.log(`Monedas: ${characterCoins}`);
console.log(`Está vivo: ${characterIsAlive}`);
console.log(`Mascota: ${characterPet}`);
console.log(`Poder especial: ${characterSpecialPower}`);

console.log("\nTipos de cada dato:");

console.log("characterName:", typeof characterName);
console.log("characterClass:", typeof characterClass);
console.log("characterHealth:", typeof characterHealth);
console.log("characterCoins:", typeof characterCoins);
console.log("characterIsAlive:", typeof characterIsAlive);
console.log("characterPet:", typeof characterPet);
console.log("characterSpecialPower:", typeof characterSpecialPower);


// -----------------------------------------------------------------------------
// 8. RESUMEN FINAL
// -----------------------------------------------------------------------------

console.log("\n--- RESUMEN ---");

/*
Tipos principales vistos:

string:
Texto.
Ejemplo: "Ibón"

number:
Números.
Ejemplo: 21, 100, 12.5

boolean:
Verdadero o falso.
Ejemplo: true, false

undefined:
Variable declarada, pero sin valor asignado.

null:
Valor vacío puesto intencionadamente.

typeof:
Sirve para consultar el tipo de dato.

Rareza importante:
typeof null devuelve "object", aunque nosotros usamos null como valor vacío.
*/

console.log("Fin de la lección 02 - Tipos de Datos.");