const health = 65;

if (health <= 0) {
    console.log("Muerto.")
} else if (health <= 30) {
    console.log("Vida crítica.")
} else if (health < 70) {
    console.log("Vida media.")
} else {
    console.log("Vida alta.")
}