// 02-Condicionales.js

/*
Los condicionales sirven para que nuestro programa tome decisiones.

Ejemplos reales:
- Si tienes suficiente dinero, puedes comprar un objeto.
- Si tu vida llega a 0, mueres.
- Si tienes una llave, puedes abrir una puerta.
- Si tu nota es mayor o igual a 5, apruebas.

La estructura principal es:

if (condicion) {
    // Código que se ejecuta si la condición es true
} else {
    // Código que se ejecuta si la condición es false
}
*/


console.log("=== CONDICIONALES EN JAVASCRIPT ===");


// -----------------------------------------------------------------------------
// 1. IF SIMPLE
// -----------------------------------------------------------------------------

console.log("\n--- 1. IF SIMPLE ---");

const tieneLlave = true;

if (tieneLlave) {
    console.log("Tienes la llave. Puedes abrir la puerta.");
}

/*
Aquí la condición es tieneLlave.

Como tieneLlave vale true, el código dentro del if se ejecuta.

Si tieneLlave fuera false, no se mostraría nada.
*/


// -----------------------------------------------------------------------------
// 2. IF + ELSE
// -----------------------------------------------------------------------------

console.log("\n--- 2. IF + ELSE ---");

const estaVivo = true;

if (estaVivo) {
    console.log("El jugador está vivo.");
} else {
    console.log("El jugador ha muerto.");
}

/*
else significa "si no".

Si la condición del if es true, entra en el if.
Si la condición del if es false, entra en el else.
*/


// -----------------------------------------------------------------------------
// 3. OPERADORES DE COMPARACIÓN
// -----------------------------------------------------------------------------

console.log("\n--- 3. OPERADORES DE COMPARACIÓN ---");

/*
Operadores importantes:

>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
===  igual estricto
!==  distinto estricto

Importante:
Usaremos === en vez de ==.
Usaremos !== en vez de !=.
*/

const edad = 21;

console.log("Edad:", edad);

console.log("edad > 18:", edad > 18);
console.log("edad < 18:", edad < 18);
console.log("edad >= 18:", edad >= 18);
console.log("edad <= 18:", edad <= 18);
console.log("edad === 21:", edad === 21);
console.log("edad !== 21:", edad !== 21);


// -----------------------------------------------------------------------------
// 4. EJEMPLO: MAYOR DE EDAD
// -----------------------------------------------------------------------------

console.log("\n--- 4. MAYOR DE EDAD ---");

const edadUsuario = 21;

if (edadUsuario >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}


// -----------------------------------------------------------------------------
// 5. DIFERENCIA ENTRE == Y ===
// -----------------------------------------------------------------------------

console.log("\n--- 5. DIFERENCIA ENTRE == Y === ---");

/*
== compara valores, pero puede convertir tipos automáticamente.
=== compara valor y tipo.

Por eso se recomienda usar siempre ===.
*/

console.log(20 == "20");   // true, porque JS convierte el texto "20" a número
console.log(20 === "20");  // false, porque uno es number y el otro string

/*
Regla:
Usa siempre === y !== para evitar errores raros.
*/


// -----------------------------------------------------------------------------
// 6. ELSE IF
// -----------------------------------------------------------------------------

console.log("\n--- 6. ELSE IF ---");

/*
else if sirve para comprobar varias condiciones.

JavaScript lee de arriba hacia abajo.
Cuando encuentra una condición verdadera, ejecuta ese bloque y ya no mira los demás.
*/

const nota = 8;

if (nota >= 9) {
    console.log("Sobresaliente.");
} else if (nota >= 7) {
    console.log("Notable.");
} else if (nota >= 5) {
    console.log("Aprobado.");
} else {
    console.log("Suspendido.");
}


// -----------------------------------------------------------------------------
// 7. BOOLEANOS EN CONDICIONALES
// -----------------------------------------------------------------------------

console.log("\n--- 7. BOOLEANOS EN CONDICIONALES ---");

const isAlive = true;

/*
Si una variable ya es true o false, podemos usarla directamente.
*/

if (isAlive) {
    console.log("El jugador sigue vivo.");
} else {
    console.log("El jugador está muerto.");
}

/*
Esto también funcionaría:

if (isAlive === true) {
    console.log("El jugador sigue vivo.");
}

Pero normalmente se escribe simplemente:

if (isAlive) {
    ...
}
*/


// -----------------------------------------------------------------------------
// 8. OPERADOR NOT (!)
// -----------------------------------------------------------------------------

console.log("\n--- 8. OPERADOR NOT (!) ---");

/*
El símbolo ! significa "no" o "lo contrario".

!true  da false
!false da true
*/

const tienePocion = false;

if (!tienePocion) {
    console.log("No tienes poción.");
} else {
    console.log("Tienes una poción.");
}


// -----------------------------------------------------------------------------
// 9. OPERADOR AND (&&)
// -----------------------------------------------------------------------------

console.log("\n--- 9. OPERADOR AND (&&) ---");

/*
&& significa "y".

Para que la condición sea true, se tienen que cumplir las dos partes.
*/

const nivelJugador = 5;
const tieneLlaveMagica = true;

if (nivelJugador >= 5 && tieneLlaveMagica) {
    console.log("Puedes entrar a la mazmorra.");
} else {
    console.log("No puedes entrar a la mazmorra.");
}

/*
En este caso:
- nivelJugador >= 5 es true
- tieneLlaveMagica es true

true && true = true
*/


// -----------------------------------------------------------------------------
// 10. OPERADOR OR (||)
// -----------------------------------------------------------------------------

console.log("\n--- 10. OPERADOR OR (||) ---");

/*
|| significa "o".

Para que la condición sea true, basta con que una de las partes sea true.
*/

const tieneEspada = false;
const tieneArco = true;

if (tieneEspada || tieneArco) {
    console.log("Puedes atacar.");
} else {
    console.log("No tienes armas para atacar.");
}

/*
En este caso:
- tieneEspada es false
- tieneArco es true

false || true = true
*/


// -----------------------------------------------------------------------------
// 11. EJEMPLO: VIDA DEL JUGADOR
// -----------------------------------------------------------------------------

console.log("\n--- 11. VIDA DEL JUGADOR ---");

let vida = 40;

vida -= 50;

if (vida <= 0) {
    console.log("Has muerto.");
} else {
    console.log("Sigues vivo con " + vida + " de vida.");
}

/*
Importante:
Usamos <= 0 porque si la vida llega exactamente a 0, también está muerto.
*/


// -----------------------------------------------------------------------------
// 12. EJEMPLO: COMPRAR OBJETO
// -----------------------------------------------------------------------------

console.log("\n--- 12. COMPRAR OBJETO ---");

const nombreObjeto = "Espada de hierro";
const precioObjeto = 75;
let monedasJugador = 100;

if (monedasJugador >= precioObjeto) {
    monedasJugador -= precioObjeto;
    console.log("Has comprado " + nombreObjeto + ".");
    console.log("Te quedan " + monedasJugador + " monedas.");
} else {
    console.log("No tienes suficientes monedas para comprar " + nombreObjeto + ".");
}

/*
Aquí solo restamos monedas si el jugador puede comprar el objeto.
Esto es importante para evitar errores de lógica.
*/


// -----------------------------------------------------------------------------
// 13. MISMO EJEMPLO CON TEMPLATE STRINGS
// -----------------------------------------------------------------------------

console.log("\n--- 13. TEMPLATE STRINGS EN CONDICIONALES ---");

const itemName = "Poción de vida";
const itemPrice = 30;
let playerCoins = 20;

if (playerCoins >= itemPrice) {
    playerCoins -= itemPrice;
    console.log(`Has comprado ${itemName}. Te quedan ${playerCoins} monedas.`);
} else {
    console.log(`No tienes suficientes monedas para comprar ${itemName}.`);
}


// -----------------------------------------------------------------------------
// 14. MINI COMBATE
// -----------------------------------------------------------------------------

console.log("\n--- 14. MINI COMBATE ---");

const playerName = "Ibón";
const enemyName = "Orco";

let playerHealth = 100;
let enemyHealth = 40;

const playerDamage = 50;
const enemyDamage = 25;

console.log(`${playerName} ataca al ${enemyName} y le quita ${playerDamage} de vida.`);

enemyHealth -= playerDamage;

if (enemyHealth <= 0) {
    console.log(`El ${enemyName} ha sido derrotado.`);
} else {
    console.log(`El ${enemyName} sigue vivo con ${enemyHealth} de vida.`);

    console.log(`El ${enemyName} contraataca y le quita ${enemyDamage} de vida a ${playerName}.`);

    playerHealth -= enemyDamage;

    if (playerHealth <= 0) {
        console.log(`${playerName} ha muerto.`);
    } else {
        console.log(`${playerName} sigue vivo con ${playerHealth} de vida.`);
    }
}


// -----------------------------------------------------------------------------
// 15. RESUMEN FINAL
// -----------------------------------------------------------------------------

console.log("\n--- RESUMEN ---");

/*
Resumen de condicionales:

if:
Se usa para ejecutar código si una condición se cumple.

else:
Se usa para ejecutar otro código si la condición no se cumple.

else if:
Se usa para comprobar varias condiciones.

Operadores importantes:
>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
===  igual estricto
!==  distinto estricto

Operadores lógicos:
&&   y
||   o
!    no

Reglas importantes:
- Usa === en vez de ==
- Usa !== en vez de !=
- Si una variable es boolean, puedes hacer if (variable)
- Para comprobar si es falso, puedes usar if (!variable)
- Si la vida llega a 0, normalmente usamos health <= 0
*/

console.log("Fin de la lección 02 - Condicionales.");