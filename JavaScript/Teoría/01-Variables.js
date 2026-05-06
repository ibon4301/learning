const nombre = "Ibón"; // Const no se puede cambiar.
let edad = 21; // Let se puede cambiar.
var esProgramador = true; // Var apenas se usa... Bastante antiguo.
const ciudad = "Madrid"; // Se pueden usar comillas simples o dobles. Importante siempre usar el mismo tipo
const precio = 19.99; // Para números decimales, se usa el punto, no la coma.

/* Habitualmente usaremos const, a no ser que sepamos que cambiaremos un valor. Entonces usaremos let.
Var no se recomienda, ya que tiene un ámbito de función 
(significa que solo existe dentro de la función donde se declara),
lo que puede llevar a errores difíciles de depurar.
*/
console.log(nombre, edad, esProgramador);

console.log("Tu nombre es: " + nombre);
console.log("Tu edad es: " + edad);
console.log("Eres programador?" + esProgramador);
console.log("Vives en: " + ciudad);


let vida = 100;
console.log("Tu vida es: " + vida);

vida = 80;
console.log("Tu vida es: " + vida);

// Probemos a cambiar const, a ver qué ocurre..

// nombre = "Isabel"; // Esto dará un error, ya que nombre es una constante.

// Efectivamente, dió error. No se puede cambiar el valor de una constante.



console.log("Vamos a hacer unas operaciones con monedas...");
let monedas = 2;
console.log("Tienes " + monedas + " monedas al comienzo.");
monedas = monedas + 5;
console.log("Tienes " + monedas + " monedas después de ganar 5.");
monedas = monedas +9;
console.log("Tienes " + monedas + " monedas después de ganar 9.");
monedas = monedas - 2;
console.log("Tienes " + monedas  + " monedas después de gastar 2.");
// Operación final, vamos a multiplicar por 2 las monedas que tenemos.
monedas = monedas * 2;
console.log("Tienes " + monedas + " monedas después de multiplicar por 2.");
console.log("Y por ultimo...");
console.log("Tienes " + monedas + " monedas al final!");


const vidaInicial = 100;
const daño = 25;

const vidaFinal = vidaInicial - daño;

console.log(vidaFinal); // 75