<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| 03 - Tipado Estricto (strict_types=1)
|--------------------------------------------------------------------------
|
| Este archivo explica cómo PHP trata los tipos de datos.
|
| En Symfony se usa muchísimo porque permite que el código sea más seguro,
| más fácil de leer y más fácil de mantener.
|
| Cuando ves algo como:
|
| public function findUser(string $id): User
|
| PHP está diciendo:
| - esta función recibe un string
| - esta función devuelve un objeto User
|
*/

/*
|--------------------------------------------------------------------------
| 1. Tipos básicos
|--------------------------------------------------------------------------
|
| string  => texto
| int     => número entero
| float   => número decimal
| bool    => true o false
|
*/

$characterName = "Luke Skywalker";
$characterLevel = 80;
$criticalChance = 25.5;
$isJedi = true;

echo "=== TIPOS BASICOS ===" . PHP_EOL;
echo "Nombre: " . $characterName . PHP_EOL;
echo "Nivel: " . $characterLevel . PHP_EOL;
echo "Probabilidad crítica: " . $criticalChance . PHP_EOL;
echo "¿Es Jedi?: " . ($isJedi ? "sí" : "no") . PHP_EOL;

echo PHP_EOL;

/*
|--------------------------------------------------------------------------
| 2. Parámetros tipados
|--------------------------------------------------------------------------
|
| Podemos indicar qué tipo debe recibir una función.
|
| En este ejemplo, showCharacter() solo acepta string.
|
*/

function showCharacter(string $name): void
{
    echo "Personaje: " . $name . PHP_EOL;
}

showCharacter("Luffy");

echo PHP_EOL;

/*
|--------------------------------------------------------------------------
| 3. Retornos tipados
|--------------------------------------------------------------------------
|
| También podemos indicar qué tipo debe devolver una función.
|
| En este ejemplo, getPowerLevel() debe devolver un int.
|
*/

function getPowerLevel(): int
{
    return 9000;
}

echo "Nivel de poder: " . getPowerLevel() . PHP_EOL;

echo PHP_EOL;

/*
|--------------------------------------------------------------------------
| 4. void
|--------------------------------------------------------------------------
|
| void significa que una función NO devuelve nada.
|
| Puede hacer cosas, como mostrar texto, guardar datos o llamar a otro
| servicio, pero no devuelve un valor con return.
|
*/

function castSpell(string $spellName): void
{
    echo "Lanzando hechizo: " . $spellName . PHP_EOL;
}

castSpell("Frostbolt");

echo PHP_EOL;

/*
|--------------------------------------------------------------------------
| 5. strict_types=1
|--------------------------------------------------------------------------
|
| Con declare(strict_types=1), PHP no intenta convertir automáticamente
| ciertos tipos en las llamadas a funciones.
|
| Ejemplo conceptual:
|
| function addMana(int $amount): int
| {
|     return $amount;
| }
|
| addMana("50");
|
| Con strict_types=1 daría TypeError, porque "50" es string,
| no int.
|
| Esto ayuda a detectar errores antes.
|
*/

echo "strict_types=1 ayuda a que PHP no adivine tipos incorrectos." . PHP_EOL;

echo PHP_EOL;

/*
|--------------------------------------------------------------------------
| 6. Relación con Symfony
|--------------------------------------------------------------------------
|
| Symfony usa tipado constantemente:
|
| - En servicios
| - En controladores
| - En repositorios
| - En DTOs
| - En comandos de consola
|
| Ejemplo típico:
|
| public function __construct(
|     private UserRepository $userRepository
| ) {
| }
|
| PHP sabe exactamente qué tipo de objeto necesita.
|
| Eso permite que Symfony pueda hacer autowiring.
|
*/

echo "En Symfony, los tipos ayudan al autowiring y a la claridad del código." . PHP_EOL;

echo PHP_EOL;

echo "Fin del archivo de teoría del punto 03." . PHP_EOL;