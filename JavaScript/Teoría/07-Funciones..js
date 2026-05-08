// 07 - FUNCIONES EN JAVASCRIPT

/*
Una función es un bloque de código que se guarda con un nombre.

Sirve para no repetir código muchas veces.

Por ejemplo, en vez de escribir muchas veces:
console.log("Atacas al enemigo");

Podemos crear una función llamada atacar() y usarla cuando queramos.
*/


// Ejemplo básico de función

function saludar() {
    console.log("Hola, jugador.");
}

saludar(); // Aquí estamos llamando a la función.



// Función con variables

const playerName = "Ibón";
const playerLevel = 5;

function mostrarJugador() {
    console.log("Nombre del jugador: " + playerName);
    console.log("Nivel del jugador: " + playerLevel);
}

mostrarJugador();



// Función con parámetros

/*
Los parámetros son datos que le pasamos a una función.

En este caso, la función recibe un nombre.
Ese nombre puede cambiar dependiendo de lo que le pasemos.
*/

function saludarJugador(nombre) {
    console.log("Bienvenido, " + nombre);
}

saludarJugador("Ibón");
saludarJugador("Isa");
saludarJugador("Carlos");



// Función con varios parámetros

function mostrarInfoJugador(nombre, nivel) {
    console.log("Jugador: " + nombre);
    console.log("Nivel: " + nivel);
}

mostrarInfoJugador("Ibón", 5);
mostrarInfoJugador("Isa", 10);



// Función para atacar a un enemigo

let enemyHealth = 100;

function atacarEnemigo(daño) {
    enemyHealth = enemyHealth - daño;
    console.log("Vida del enemigo: " + enemyHealth);
}

atacarEnemigo(20);
atacarEnemigo(30);
atacarEnemigo(10);



// Función para curar al jugador

let playerHealth = 60;

function curarJugador(cantidadCura) {
    playerHealth = playerHealth + cantidadCura;
    console.log("Vida del jugador: " + playerHealth);
}

curarJugador(20);
curarJugador(10);



// Función con return

/*
return sirve para devolver un resultado.

console.log solo muestra algo en pantalla.
return devuelve un valor para poder guardarlo en una variable.
*/

function sumar(a, b) {
    return a + b;
}

const resultadoSuma = sumar(5, 3);

console.log("Resultado de la suma: " + resultadoSuma);



// Ejemplo de daño total

function calcularDañoTotal(dañoBase, dañoCritico) {
    return dañoBase + dañoCritico;
}

const dañoTotal = calcularDañoTotal(20, 15);

console.log("Daño total: " + dañoTotal);



// Diferencia entre console.log y return

function mostrarMensaje() {
    console.log("Esto solo se muestra.");
}

mostrarMensaje();



function obtenerMensaje() {
    return "Esto se puede guardar en una variable.";
}

const mensaje = obtenerMensaje();

console.log(mensaje);



// Función con condicional

let vidaOrco = 50;

function atacarOrco(daño) {
    vidaOrco = vidaOrco - daño;

    if (vidaOrco <= 0) {
        console.log("El orco ha sido derrotado.");
    } else {
        console.log("Vida del orco: " + vidaOrco);
    }
}

atacarOrco(20);
atacarOrco(40);



// Otro ejemplo completo

const nombreJugador = "Ibón";
const nombreEnemigo = "Dragón";

let vidaJugador = 100;
let vidaEnemigo = 120;

function mostrarEstado() {
    console.log("Vida de " + nombreJugador + ": " + vidaJugador);
    console.log("Vida de " + nombreEnemigo + ": " + vidaEnemigo);
}

function atacar(daño) {
    vidaEnemigo = vidaEnemigo - daño;

    console.log(nombreJugador + " ataca a " + nombreEnemigo);

    if (vidaEnemigo <= 0) {
        vidaEnemigo = 0;
        console.log(nombreEnemigo + " ha sido derrotado.");
    } else {
        console.log("Vida del enemigo: " + vidaEnemigo);
    }
}

function recibirDaño(daño) {
    vidaJugador = vidaJugador - daño;

    console.log(nombreJugador + " recibe daño.");

    if (vidaJugador <= 0) {
        vidaJugador = 0;
        console.log(nombreJugador + " ha muerto.");
    } else {
        console.log("Vida del jugador: " + vidaJugador);
    }
}

mostrarEstado();

atacar(35);
recibirDaño(20);
atacar(50);
recibirDaño(30);
atacar(40);

mostrarEstado();



// Ejemplo usando template strings

/*
También podemos usar template strings con funciones.
Recuerda que usan comillas invertidas: ``
*/

function mostrarMision(nombre, lugar) {
    console.log(`La misión de ${nombre} empieza en ${lugar}.`);
}

mostrarMision("Ibón", "Madrid");



// Mini resumen

/*
function nombreFuncion() {
    // Código que queremos ejecutar
}

nombreFuncion(); // Así llamamos a la función


function saludar(nombre) {
    console.log("Hola, " + nombre);
}

saludar("Ibón");


function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 4);
console.log(resultado);
*/