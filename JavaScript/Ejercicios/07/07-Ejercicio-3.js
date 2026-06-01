function calculateTotalDamage(baseDamage, criticalDamage) {
    return baseDamage + criticalDamage;
}
let totalDamage = calculateTotalDamage(20, 15);

console.log(totalDamage);
