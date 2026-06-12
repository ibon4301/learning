<?php

declare(strict_types=1);

function getCharacterLevel(): int
{
    return 80;
}

function showCharacterLevel(int $level): void
{
    echo "Nivel del personaje: " . $level . PHP_EOL;
}

$level = getCharacterLevel();

showCharacterLevel($level);