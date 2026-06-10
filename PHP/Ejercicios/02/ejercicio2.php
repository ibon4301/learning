<?php

declare(strict_types=1);

const FRAMEWORK = "Symfony";
$version = 8.4;

echo "Framework: " . FRAMEWORK . PHP_EOL;
echo "Versión PHP: " . $version . PHP_EOL;

function showMessage(): void
{
    echo "Estoy dentro de una función" . PHP_EOL;
}

showMessage();