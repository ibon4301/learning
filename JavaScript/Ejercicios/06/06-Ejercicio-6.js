let bossHealth = 60;

const playerDamage = 15;

let turn = 1;


while (bossHealth > 0) {
    bossHealth -= playerDamage;
    console.log(`Turno ${turn}: haces ${playerDamage} de daño.`);

    if (bossHealth <= 0) {
        console.log(`El jefe ha sido derrotado.`);
    } else {
        console.log(`Vida restante del jefe: ${bossHealth}`);
    }

    turn++;
}

