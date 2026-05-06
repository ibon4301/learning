// 05-Operadores.js

/*
Los operadores sirven para hacer operaciones con valores.

En JavaScript usamos operadores para:
- Sumar, restar, multiplicar y dividir.
- Comparar valores.
- Asignar nuevos valores a variables.
- Combinar condiciones.
- Aumentar o reducir números.

Ya hemos usado varios operadores sin darnos cuenta:
- vida -= 20
- edad >= 18
- isAlive === true
- nivel >= 5 && tieneLlave
*/

console.log("=== OPERADORES EN JAVASCRIPT ===");


// -----------------------------------------------------------------------------
// 1. OPERADORES ARITMÉTICOS
// -----------------------------------------------------------------------------

console.log("\n--- 1. OPERADORES ARITMÉTICOS ---");

/*
Los operadores aritméticos sirven para hacer cuentas.

+   suma
-   resta
*   multiplicación
/   división
%   resto de una división
**  potencia
*/

const attackDamage = 20;
const magicDamage = 35;

console.log("Suma:", attackDamage + magicDamage);
console.log("Resta:", magicDamage - attackDamage);
console.log("Multiplicación:", attackDamage * 2);
console.log("División:", magicDamage / 5);
console.log("Resto:", 10 % 3);
console.log("Potencia:", 2 ** 3);

/*
El operador % devuelve el resto de una división.

10 / 3 = 3 y sobra 1
Por eso:
10 % 3 = 1
*/


// -----------------------------------------------------------------------------
// 2. OPERADOR + CON STRINGS
// -----------------------------------------------------------------------------

console.log("\n--- 2. OPERADOR + CON STRINGS ---");

/*
El operador + también sirve para unir textos.

Esto se llama concatenar.
*/

const playerName = "Ibón";
const enemyName = "Orco";

console.log(playerName + " ataca al " + enemyName + ".");

/*
Si sumas un number con un string, JavaScript convierte el number a texto.
*/

console.log("Nivel: " + 5);
console.log("Vida: " + 100);


// -----------------------------------------------------------------------------
// 3. OPERADORES DE ASIGNACIÓN
// -----------------------------------------------------------------------------

console.log("\n--- 3. OPERADORES DE ASIGNACIÓN ---");

/*
Los operadores de asignación sirven para guardar o actualizar valores.

=    asignar valor
+=   sumar y guardar
-=   restar y guardar
*=   multiplicar y guardar
/=   dividir y guardar
%=   sacar resto y guardar
*/

let playerHealth = 100;

console.log("Vida inicial:", playerHealth);

playerHealth = 80;
console.log("Después de asignar 80:", playerHealth);

playerHealth += 10;
console.log("Después de curarse 10:", playerHealth);

playerHealth -= 30;
console.log("Después de recibir 30 de daño:", playerHealth);

playerHealth *= 2;
console.log("Después de duplicar vida:", playerHealth);

playerHealth /= 4;
console.log("Después de dividir vida entre 4:", playerHealth);


// -----------------------------------------------------------------------------
// 4. INCREMENTO Y DECREMENTO
// -----------------------------------------------------------------------------

console.log("\n--- 4. INCREMENTO Y DECREMENTO ---");

/*
++ aumenta una variable en 1.
-- reduce una variable en 1.

Solo se usa con variables que pueden cambiar, normalmente let.
*/

let playerLevel = 1;

console.log("Nivel inicial:", playerLevel);

playerLevel++;
console.log("Después de subir un nivel:", playerLevel);

playerLevel--;
console.log("Después de bajar un nivel:", playerLevel);


// -----------------------------------------------------------------------------
// 5. OPERADORES DE COMPARACIÓN
// -----------------------------------------------------------------------------

console.log("\n--- 5. OPERADORES DE COMPARACIÓN ---");

/*
Los operadores de comparación sirven para comparar valores.

El resultado siempre es un boolean:
true o false.

>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
===  igual estricto
!==  distinto estricto
*/

const requiredLevel = 5;
const currentLevel = 7;

console.log("currentLevel > requiredLevel:", currentLevel > requiredLevel);
console.log("currentLevel < requiredLevel:", currentLevel < requiredLevel);
console.log("currentLevel >= requiredLevel:", currentLevel >= requiredLevel);
console.log("currentLevel <= requiredLevel:", currentLevel <= requiredLevel);
console.log("currentLevel === requiredLevel:", currentLevel === requiredLevel);
console.log("currentLevel !== requiredLevel:", currentLevel !== requiredLevel);


// -----------------------------------------------------------------------------
// 6. DIFERENCIA ENTRE == Y ===
// -----------------------------------------------------------------------------

console.log("\n--- 6. DIFERENCIA ENTRE == Y === ---");

/*
== compara valores, pero puede convertir tipos automáticamente.
=== compara valor y tipo.

Por eso usaremos siempre ===.
*/

console.log(10 == "10");
console.log(10 === "10");

/*
10 == "10" devuelve true porque JavaScript convierte el string "10" a number.
10 === "10" devuelve false porque uno es number y el otro string.
*/


// -----------------------------------------------------------------------------
// 7. OPERADORES LÓGICOS
// -----------------------------------------------------------------------------

console.log("\n--- 7. OPERADORES LÓGICOS ---");

/*
Los operadores lógicos sirven para combinar condiciones.

&& significa "y".
|| significa "o".
! significa "no" o "lo contrario".
*/

const hasKey = true;
const level = 8;
const hasSword = false;
const hasBow = true;

if (hasKey && level >= 5) {
    console.log("Puedes entrar a la mazmorra.");
} else {
    console.log("No puedes entrar a la mazmorra.");
}

/*
Con && se tienen que cumplir las dos condiciones.

true && true = true
true && false = false
false && true = false
false && false = false
*/

if (hasSword || hasBow) {
    console.log("Puedes atacar.");
} else {
    console.log("No tienes armas.");
}

/*
Con || basta con que una condición sea true.

true || true = true
true || false = true
false || true = true
false || false = false
*/

if (!hasSword) {
    console.log("No tienes espada.");
}

/*
! cambia el valor contrario.

!true = false
!false = true
*/


// -----------------------------------------------------------------------------
// 8. EJEMPLO: COMPRAR OBJETO
// -----------------------------------------------------------------------------

console.log("\n--- 8. EJEMPLO: COMPRAR OBJETO ---");

const itemName = "Poción";
const itemPrice = 30;
let playerCoins = 50;

console.log(`Monedas iniciales: ${playerCoins}`);

if (playerCoins >= itemPrice) {
    playerCoins -= itemPrice;
    console.log(`Has comprado ${itemName}.`);
    console.log(`Te quedan ${playerCoins} monedas.`);
} else {
    console.log(`No tienes suficientes monedas para comprar ${itemName}.`);
}


// -----------------------------------------------------------------------------
// 9. EJEMPLO: SUBIR DE NIVEL
// -----------------------------------------------------------------------------

console.log("\n--- 9. EJEMPLO: SUBIR DE NIVEL ---");

let xp = 90;
const xpNeeded = 100;

console.log(`XP actual: ${xp}`);

xp += 15;

console.log(`XP después de ganar experiencia: ${xp}`);

if (xp >= xpNeeded) {
    playerLevel++;
    xp -= xpNeeded;

    console.log(`Has subido de nivel.`);
    console.log(`Nivel actual: ${playerLevel}`);
    console.log(`XP restante: ${xp}`);
} else {
    console.log(`Todavía no tienes suficiente XP para subir de nivel.`);
}


// -----------------------------------------------------------------------------
// 10. EJEMPLO: ATAQUE CRÍTICO
// -----------------------------------------------------------------------------

console.log("\n--- 10. EJEMPLO: ATAQUE CRÍTICO ---");

const baseDamage = 25;
const isCriticalHit = true;

let finalDamage = baseDamage;

if (isCriticalHit) {
    finalDamage *= 2;
}

console.log(`Daño base: ${baseDamage}`);
console.log(`¿Golpe crítico?: ${isCriticalHit}`);
console.log(`Daño final: ${finalDamage}`);


// -----------------------------------------------------------------------------
// 11. RESUMEN FINAL
// -----------------------------------------------------------------------------

console.log("\n--- RESUMEN ---");

/*
Resumen de operadores:

Aritméticos:
+   suma
-   resta
*   multiplicación
/   división
%   resto
**  potencia

Asignación:
=    asigna un valor
+=   suma y guarda
-=   resta y guarda
*=   multiplica y guarda
/=   divide y guarda

Incremento/decremento:
++   suma 1
--   resta 1

Comparación:
>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
===  igual estricto
!==  distinto estricto

Lógicos:
&&   y
||   o
!    no

Reglas importantes:
- Usa siempre === en vez de ==
- Usa siempre !== en vez de !=
- Usa let cuando el valor vaya a cambiar
- Usa const cuando el valor no vaya a cambiar
*/

console.log("Fin de la lección 05 - Operadores.");