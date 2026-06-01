// 08 - ARRAYS EN JAVASCRIPT

/*
Un array es una lista de datos.

Sirve para guardar varios valores dentro de una sola variable.

Por ejemplo, en vez de tener esto:
*/

const player1 = "Ibón";
const player2 = "Isa";
const player3 = "Carlos";

/*
Podemos tener todos los jugadores dentro de un array:
*/

const players = ["Ibón", "Isa", "Carlos"];

console.log(players);



// Cómo crear arrays

const numbers = [10, 20, 30, 40];

const fruits = ["Manzana", "Plátano", "Naranja"];

const mixedArray = ["Ibón", 21, true, 99.5];

/*
Aunque JavaScript permite mezclar tipos de datos en un array,
normalmente es mejor que un array tenga datos del mismo tipo.

Por ejemplo:
*/

const enemies = ["Orco", "Dragón", "Goblin"];



// Posiciones dentro de un array

/*
Los arrays empiezan a contar desde 0.

Esto es muy importante.

En este array:
*/

const weapons = ["Espada", "Arco", "Hacha"];

/*
Las posiciones son:

"Espada" está en la posición 0
"Arco" está en la posición 1
"Hacha" está en la posición 2
*/

console.log(weapons[0]); // Espada
console.log(weapons[1]); // Arco
console.log(weapons[2]); // Hacha



// Cambiar un valor de un array

let inventory = ["Poción", "Espada", "Escudo"];

console.log(inventory);

inventory[0] = "Poción grande";

console.log(inventory);

/*
Hemos cambiado el primer elemento del array.

Antes:
["Poción", "Espada", "Escudo"]

Después:
["Poción grande", "Espada", "Escudo"]
*/



// Saber cuántos elementos tiene un array

const missions = ["Bosque", "Castillo", "Mazmorra"];

console.log(missions.length); // 3

/*
.length nos dice cuántos elementos tiene el array.
*/



// Añadir elementos al final con push()

let coins = [10, 20, 30];

coins.push(40);

console.log(coins); // [10, 20, 30, 40]

/*
push() añade un elemento al final del array.
*/



// Quitar el último elemento con pop()

let items = ["Poción", "Llave", "Mapa"];

items.pop();

console.log(items); // ["Poción", "Llave"]

/*
pop() elimina el último elemento del array.
*/



// Añadir elementos al principio con unshift()

let enemiesList = ["Orco", "Dragón"];

enemiesList.unshift("Goblin");

console.log(enemiesList); // ["Goblin", "Orco", "Dragón"]

/*
unshift() añade un elemento al principio del array.
*/



// Quitar el primer elemento con shift()

let queue = ["Jugador 1", "Jugador 2", "Jugador 3"];

queue.shift();

console.log(queue); // ["Jugador 2", "Jugador 3"]

/*
shift() elimina el primer elemento del array.
*/



// Recorrer un array con bucle for

const levels = ["Nivel 1", "Nivel 2", "Nivel 3"];

for (let i = 0; i < levels.length; i++) {
    console.log(levels[i]);
}

/*
Explicación:

let i = 0;
Empieza en la posición 0.

i < levels.length;
El bucle sigue mientras i sea menor que el número de elementos.

i++;
Va aumentando i de 1 en 1.

levels[i];
Accede al elemento actual del array.
*/



// Ejemplo con inventario

const playerInventory = ["Espada", "Poción", "Escudo", "Mapa"];

for (let i = 0; i < playerInventory.length; i++) {
    console.log("Objeto: " + playerInventory[i]);
}



// Buscar un elemento con includes()

const skills = ["Ataque", "Defensa", "Magia"];

console.log(skills.includes("Magia")); // true
console.log(skills.includes("Curación")); // false

/*
includes() comprueba si un elemento existe dentro del array.

Devuelve true o false.
*/



// Saber la posición de un elemento con indexOf()

const characters = ["Ibón", "Isa", "Carlos"];

console.log(characters.indexOf("Isa")); // 1
console.log(characters.indexOf("Laura")); // -1

/*
indexOf() devuelve la posición de un elemento.

Si no lo encuentra, devuelve -1.
*/



// Arrays con números

const damages = [10, 20, 15, 30];

let totalDamage = 0;

for (let i = 0; i < damages.length; i++) {
    totalDamage = totalDamage + damages[i];
}

console.log("Daño total: " + totalDamage);

/*
Aquí recorremos el array de daños y vamos sumando cada número.
*/



// Funciones con arrays

function showItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log("Item: " + items[i]);
    }
}

const shopItems = ["Poción", "Armadura", "Espada"];

showItems(shopItems);

/*
Una función puede recibir un array como parámetro.

En este caso, showItems recibe una lista de objetos y los muestra uno por uno.
*/



// Función que devuelve el número de elementos

function countItems(items) {
    return items.length;
}

const totalItems = countItems(shopItems);

console.log("Total de objetos: " + totalItems);

/*
Aquí sí usamos return porque queremos que la función nos devuelva un dato.
*/



// Array vacío

let completedMissions = [];

console.log(completedMissions);

completedMissions.push("Misión del bosque");
completedMissions.push("Misión del castillo");

console.log(completedMissions);

/*
Podemos crear un array vacío e ir metiendo elementos después.
*/



// Mini ejemplo completo

const playerName = "Ibón";

let inventoryGame = ["Espada", "Poción"];
let enemiesGame = ["Goblin", "Orco", "Dragón"];

function showInventory() {
    console.log("Inventario de " + playerName + ":");

    for (let i = 0; i < inventoryGame.length; i++) {
        console.log("- " + inventoryGame[i]);
    }
}

function addItem(item) {
    inventoryGame.push(item);
    console.log("Has añadido: " + item);
}

function showEnemies() {
    console.log("Enemigos disponibles:");

    for (let i = 0; i < enemiesGame.length; i++) {
        console.log("- " + enemiesGame[i]);
    }
}

showInventory();

addItem("Escudo");

showInventory();

showEnemies();



// Mini resumen

/*
Un array guarda varios valores en una sola variable.
*/

const exampleArray = ["Dato 1", "Dato 2", "Dato 3"];

/*
Las posiciones empiezan en 0.
*/

console.log(exampleArray[0]); // Dato 1

/*
.length dice cuántos elementos tiene.
*/

console.log(exampleArray.length); // 3

/*
push() añade al final.
pop() elimina el último.
unshift() añade al principio.
shift() elimina el primero.
includes() comprueba si existe un valor.
indexOf() devuelve la posición de un valor.
*/

exampleArray.push("Dato 4");

console.log(exampleArray);

/*
Los arrays se pueden recorrer con for.
*/

for (let i = 0; i < exampleArray.length; i++) {
    console.log(exampleArray[i]);
}