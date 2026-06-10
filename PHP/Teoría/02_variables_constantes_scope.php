<?php

declare(strict_types=1);

echo "=== VARIABLES ===" . PHP_EOL;

$name = "Ibón";
$age = 28;
$salary = 1500.50;
$isDeveloper = true;

echo "Nombre: " . $name . PHP_EOL;
echo "Edad: " . $age . PHP_EOL;
echo "Salario: " . $salary . PHP_EOL;

echo PHP_EOL;

echo "=== CONSTANTES ===" . PHP_EOL;

const COMPANY = "Nexus";

echo COMPANY . PHP_EOL;

echo PHP_EOL;

echo "=== CONCATENACION ===" . PHP_EOL;

echo "Hola " . $name . PHP_EOL;

echo PHP_EOL;

echo "=== AMBITO ===" . PHP_EOL;

$globalVariable = "Soy global";

function testScope(): void
{
    $localVariable = "Soy local";

    echo $localVariable . PHP_EOL;
}

testScope();

echo PHP_EOL;
echo "Fin del cheat sheet" . PHP_EOL;