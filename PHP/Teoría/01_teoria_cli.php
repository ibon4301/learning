<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| 01 - Entorno de Desarrollo y CLI
|--------------------------------------------------------------------------
|
| Este archivo se ejecuta desde terminal con:
|
| php 01_teoria_cli.php
|
| CLI significa Command Line Interface.
| En Symfony, bin/console también se ejecuta mediante PHP CLI.
|
*/

echo "=== PHP CLI ===" . PHP_EOL;

echo "PHP puede ejecutarse desde terminal." . PHP_EOL;
echo "No necesitamos navegador, HTML ni servidor web." . PHP_EOL;

echo PHP_EOL;

echo "Comando usado:" . PHP_EOL;
echo "php 01_teoria_cli.php" . PHP_EOL;

echo PHP_EOL;

// PHP_EOL representa un salto de línea compatible con el sistema operativo.
echo "PHP_EOL sirve para escribir saltos de línea correctamente." . PHP_EOL;

echo PHP_EOL;

echo "Relación con Symfony:" . PHP_EOL;
echo "Cuando usas php bin/console, estás usando PHP CLI." . PHP_EOL;

echo PHP_EOL;

echo "Fin del archivo de teoría." . PHP_EOL;