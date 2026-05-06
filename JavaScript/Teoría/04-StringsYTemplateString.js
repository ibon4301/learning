// 04-StringsYTemplateStrings.js

/*
Los strings son textos.

En JavaScript podemos escribir strings con:
- Comillas dobles: "Hola"
- Comillas simples: 'Hola'
- Backticks: `Hola`

Los backticks permiten usar template strings.
*/

console.log("=== STRINGS Y TEMPLATE STRINGS ===");


// -----------------------------------------------------------------------------
// 1. STRINGS
// -----------------------------------------------------------------------------

console.log("\n--- 1. STRINGS ---");

const playerName = "Ibón";
const enemyName = "Orco";
const cityName = "Madrid";

console.log(playerName);
console.log(enemyName);
console.log(cityName);


// -----------------------------------------------------------------------------
// 2. CONCATENACIÓN
// -----------------------------------------------------------------------------

console.log("\n--- 2. CONCATENACIÓN ---");

/*
Concatenar significa unir textos.

Cuando usamos +, tenemos que acordarnos de poner espacios manualmente.
*/

console.log(playerName + " ataca al " + enemyName + ".");
console.log("Bienvenido, " + playerName + ".");
console.log("La ciudad inicial es " + cityName + ".");


// -----------------------------------------------------------------------------
// 3. ERROR COMÚN CON ESPACIOS
// -----------------------------------------------------------------------------

console.log("\n--- 3. ERROR COMÚN CON ESPACIOS ---");

console.log(playerName + "ataca al" + enemyName);
console.log(playerName + " ataca al " + enemyName);

/*
El primer console.log sale mal porque no tiene espacios.
El segundo sale bien porque añadimos espacios dentro de los strings.
*/


// -----------------------------------------------------------------------------
// 4. TEMPLATE STRINGS
// -----------------------------------------------------------------------------

console.log("\n--- 4. TEMPLATE STRINGS ---");

/*
Los template strings usan backticks: ` `

Dentro podemos meter variables usando ${variable}
*/

console.log(`${playerName} ataca al ${enemyName}.`);
console.log(`Bienvenido, ${playerName}.`);
console.log(`La ciudad inicial es ${cityName}.`);


// -----------------------------------------------------------------------------
// 5. TEMPLATE STRINGS CON OPERACIONES
// -----------------------------------------------------------------------------

console.log("\n--- 5. TEMPLATE STRINGS CON OPERACIONES ---");

const playerDamage = 30;
let enemyHealth = 100;

console.log(`Vida inicial del ${enemyName}: ${enemyHealth}`);

enemyHealth -= playerDamage;

console.log(`${playerName} le quita ${playerDamage} de vida al ${enemyName}.`);
console.log(`Vida actual del ${enemyName}: ${enemyHealth}`);


// -----------------------------------------------------------------------------
// 6. STRINGS EN VARIAS LÍNEAS
// -----------------------------------------------------------------------------

console.log("\n--- 6. STRINGS EN VARIAS LÍNEAS ---");

const characterInfo = `
Ficha del personaje:
Nombre: ${playerName}
Ciudad: ${cityName}
Daño: ${playerDamage}
`;

console.log(characterInfo);


// -----------------------------------------------------------------------------
// 7. LENGTH
// -----------------------------------------------------------------------------

console.log("\n--- 7. LENGTH ---");

/*
.length nos dice cuántos caracteres tiene un string.
Cuenta letras, espacios y símbolos.
*/

console.log(`El nombre ${playerName} tiene ${playerName.length} caracteres.`);

const gameTitle = "La mazmorra perdida";

console.log(`El título "${gameTitle}" tiene ${gameTitle.length} caracteres.`);


// -----------------------------------------------------------------------------
// 8. RESUMEN FINAL
// -----------------------------------------------------------------------------

console.log("\n--- RESUMEN ---");

/*
Resumen:

string:
Texto.

Concatenar:
Unir textos con +.

Template string:
Texto con backticks que permite meter variables usando ${}.

.length:
Sirve para saber cuántos caracteres tiene un string.

Recomendación:
Para mensajes largos o con variables, usa template strings.
*/

console.log("Fin de la lección 04 - Strings y Template Strings.");