const baseDamage = 20;
const isCriticalHit = true;
let finalDamage = baseDamage;

if (isCriticalHit) {
    finalDamage *= 2;
    console.log(`¡Golpe crítico! El daño se duplica a ${finalDamage}.`);
} else {
    console.log(`Golpe normal. El daño es ${finalDamage}.`);
}