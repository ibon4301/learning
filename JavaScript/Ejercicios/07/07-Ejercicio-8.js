let playerHealth = 40;
let playerMaxHealth = 100;

function usePotion(potionHeal) {

// no es necesario return pues es variable global

    playerHealth += potionHeal;
    if (playerHealth > playerMaxHealth) {
        playerHealth = playerMaxHealth;
    }
}

usePotion(30);
usePotion(50);

console.log("Vida final: " + playerHealth);
