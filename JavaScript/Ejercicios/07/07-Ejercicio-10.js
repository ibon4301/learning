function showPlayerStatus(playerName, health) {
    if (health > 0) {
        console.log(playerName + " sigue vivo con " + health + " de vida.");
    } else {
        console.log(playerName + " ha sido derrotado.");
    }
}

showPlayerStatus("Ibón", 80);
showPlayerStatus("Ibón", 0);