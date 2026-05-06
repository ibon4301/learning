// 06-Bucles.js

/*
Los bucles sirven para repetir código varias veces.

Ejemplos reales:
- Mostrar los números del 1 al 10.
- Repetir ataques en un combate.
- Recorrer una lista de enemigos.
- Mostrar todos los objetos de un inventario.
- Repetir algo mientras una condición se cumpla.

Los bucles principales que veremos son:

for:
Se usa cuando sabemos cuántas veces queremos repetir algo.

while:
Se usa cuando queremos repetir algo mientras una condición sea true.

do while:
Se ejecuta al menos una vez y luego comprueba la condición.
*/

console.log("=== BUCLES EN JAVASCRIPT ===");


// -----------------------------------------------------------------------------
// 1. BUCLE FOR
// -----------------------------------------------------------------------------

console.log("\n--- 1. BUCLE FOR ---");

/*
Un bucle for tiene esta estructura:

for (inicio; condición; actualización) {
    // código que se repite
}

Ejemplo:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Partes:
- let i = 1       empieza en 1
- i <= 5         se repite mientras i sea menor o igual que 5
- i++            aumenta i en 1 en cada vuelta

La variable i suele usarse como contador.
*/

for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}


// -----------------------------------------------------------------------------
// 2. FOR CONTANDO DESDE 0
// -----------------------------------------------------------------------------

console.log("\n--- 2. FOR CONTANDO DESDE 0 ---");

/*
En programación muchas veces se empieza a contar desde 0.

Esto será muy importante cuando veamos arrays.
*/

for (let i = 0; i < 5; i++) {
    console.log(`Índice: ${i}`);
}

/*
Este bucle muestra:

0
1
2
3
4

No muestra 5 porque la condición es i < 5.
*/


// -----------------------------------------------------------------------------
// 3. FOR HACIA ATRÁS
// -----------------------------------------------------------------------------

console.log("\n--- 3. FOR HACIA ATRÁS ---");

/*
También podemos contar hacia atrás usando i--.
*/

for (let i = 5; i >= 1; i--) {
    console.log(`Cuenta atrás: ${i}`);
}


// -----------------------------------------------------------------------------
// 4. EJEMPLO: ATAQUES
// -----------------------------------------------------------------------------

console.log("\n--- 4. EJEMPLO: ATAQUES ---");

/*
Podemos usar un bucle para repetir ataques.
*/

const playerName = "Ibón";
const enemyName = "Orco";

for (let attackNumber = 1; attackNumber <= 3; attackNumber++) {
    console.log(`${playerName} ataca al ${enemyName}. Ataque número ${attackNumber}.`);
}


// -----------------------------------------------------------------------------
// 5. EJEMPLO: DAÑO REPETIDO
// -----------------------------------------------------------------------------

console.log("\n--- 5. EJEMPLO: DAÑO REPETIDO ---");

let enemyHealth = 100;
const playerDamage = 20;

console.log(`Vida inicial del ${enemyName}: ${enemyHealth}`);

for (let turn = 1; turn <= 3; turn++) {
    enemyHealth -= playerDamage;

    console.log(`Turno ${turn}: ${playerName} hace ${playerDamage} de daño.`);
    console.log(`Vida del ${enemyName}: ${enemyHealth}`);
}


// -----------------------------------------------------------------------------
// 6. BUCLE WHILE
// -----------------------------------------------------------------------------

console.log("\n--- 6. BUCLE WHILE ---");

/*
while significa "mientras".

Se repite mientras la condición sea true.

Estructura:

while (condición) {
    // código que se repite
}

Importante:
Hay que asegurarse de que la condición deje de cumplirse en algún momento.
Si no, se crea un bucle infinito.
*/

let coins = 0;

while (coins < 5) {
    coins++;
    console.log(`Has conseguido una moneda. Monedas: ${coins}`);
}


// -----------------------------------------------------------------------------
// 7. WHILE EN COMBATE
// -----------------------------------------------------------------------------

console.log("\n--- 7. WHILE EN COMBATE ---");

/*
Podemos atacar mientras el enemigo tenga vida.
*/

let bossHealth = 60;
const swordDamage = 15;
let turnNumber = 1;

while (bossHealth > 0) {
    bossHealth -= swordDamage;

    console.log(`Turno ${turnNumber}: golpeas al jefe y haces ${swordDamage} de daño.`);

    if (bossHealth <= 0) {
        console.log("El jefe ha sido derrotado.");
    } else {
        console.log(`Vida restante del jefe: ${bossHealth}`);
    }

    turnNumber++;
}


// -----------------------------------------------------------------------------
// 8. DO WHILE
// -----------------------------------------------------------------------------

console.log("\n--- 8. DO WHILE ---");

/*
do while se ejecuta al menos una vez.

Estructura:

do {
    // código que se ejecuta
} while (condición);

La diferencia con while:
- while comprueba la condición antes de entrar.
- do while ejecuta el código una vez y después comprueba la condición.
*/

let energy = 0;

do {
    console.log("Intentas correr aunque no tengas energía.");
} while (energy > 0);


// -----------------------------------------------------------------------------
// 9. BREAK
// -----------------------------------------------------------------------------

console.log("\n--- 9. BREAK ---");

/*
break sirve para cortar un bucle antes de tiempo.
*/

for (let i = 1; i <= 10; i++) {
    console.log(`Buscando llave... intento ${i}`);

    if (i === 4) {
        console.log("Has encontrado la llave.");
        break;
    }
}


// -----------------------------------------------------------------------------
// 10. CONTINUE
// -----------------------------------------------------------------------------

console.log("\n--- 10. CONTINUE ---");

/*
continue sirve para saltar una vuelta del bucle.

No corta todo el bucle, solo salta esa repetición.
*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Turno 3 saltado.");
        continue;
    }

    console.log(`Turno ${i}`);
}


// -----------------------------------------------------------------------------
// 11. RESUMEN FINAL
// -----------------------------------------------------------------------------

console.log("\n--- RESUMEN ---");

/*
Resumen de bucles:

for:
Se usa cuando sabemos cuántas veces queremos repetir algo.

Ejemplo:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

while:
Se usa mientras una condición sea true.

Ejemplo:
while (vida > 0) {
    vida -= daño;
}

do while:
Se ejecuta al menos una vez.

break:
Corta el bucle.

continue:
Salta una vuelta y continúa con la siguiente.

Cuidado:
Si la condición nunca se vuelve false, tendrás un bucle infinito.
*/

console.log("Fin de la lección 06 - Bucles.");