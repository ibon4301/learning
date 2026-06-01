function isPlayerAlive(health) {
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}

const alive = isPlayerAlive(80);

console.log(alive);