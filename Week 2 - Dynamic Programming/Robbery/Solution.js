const input1 = [6, 7, 1, 3, 8, 2, 4];
const input2 = [5, 3, 4, 11, 2, 8];
robbery = (houses, i) => {
    if (!houses[i]) return 0;
    if (i + 2 >= houses.length) return houses[i];
    if (i + 3 >= houses.length) return houses[i];
    let norm = robbery(houses, i + 2);
    if (norm) {
        norm += houses[i];
        return norm;
    }
    const abnorm = robbery(houses, i + 3);
    if (abnorm) {
        abnorm += houses[i];
        return abnorm;
    }
}
robbery(input1, 0);

// john's solution
maxValue = (houses) => {
    if (!houses || !houses.length) return 0;
    if (houses.length === 1) return houses[0];
    if (houses.length === 2) return Math.max(houses[0], houses[1]);
    const dpTable = [];
    dpTable[0] = houses[0];
    dpTable[1] = Math.max(houses[0], houses[1]);
    for (let housePointer = 2; housePointer < houses.length; housePointer++) {
        const robTheHouse = house[housePointer] + house[housePointer - 2];
        const leaveHouseAlone = house[housePointer - 1];
        dpTable[housePointer] = Math.max(robTheHouse, leaveHouseAlone);
    }
    return dpTable[houses.length - 1];
}