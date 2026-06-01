let playerHealth = 60;

function healPlayer(healAmount) {
    playerHealth = playerHealth + healAmount;
    console.log("Vida del jugador: " + playerHealth);
}

healPlayer(20);