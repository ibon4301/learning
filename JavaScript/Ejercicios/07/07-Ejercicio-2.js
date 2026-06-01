let enemyHealth = 100;

function attackEnemy(damage) {
    enemyHealth = enemyHealth - damage;
    console.log("Enemy health: " + enemyHealth);

}

attackEnemy(25);
attackEnemy(40);