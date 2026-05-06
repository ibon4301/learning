const playerName = "Ibón";
const playerLevel = 3;
const hasChestKey = true;
const chestName = "Cofre Dorado";

if (playerLevel >= 3 && hasChestKey) {
    console.log(`${playerName} ha abierto el ${chestName}.`);
} else {
    console.log(`${playerName} no puede abrir el ${chestName}.`);

    if (!hasChestKey) {
        console.log("No tienes la llave del cofre.");
    }

    if (playerLevel < 3) {
        console.log("Necesitas ser nivel 3 o superior.");
    }
}