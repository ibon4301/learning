function calculateLevelUp(currentLevel, levelsGained) {
    return currentLevel + levelsGained;
}

const newLevel = calculateLevelUp(5, 2);

console.log("Nuevo nivel " + newLevel);