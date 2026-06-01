let enemyHealth = 50;

function attackEnemy(damage) {
    enemyHealth -= damage;

    if (enemyHealth <= 0) {
        console.log("El enemigo ha sido derrotado.");
    } else {
        console.log("Vida del enemigo: " + enemyHealth);
    }
}

attackEnemy(20);
attackEnemy(40);