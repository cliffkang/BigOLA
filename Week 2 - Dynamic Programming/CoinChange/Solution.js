// What is the minimum amount of coins to create every amount up to that amount
minimumCoin = (denominations, changeRequested) => {
    // null base checks
    const dpTable = []; // indexes = amount, and the value = smallest number of coins to make that amount
    for (let amount = 0; amount < changeRequested; amount++) {
        for (let coinIndex = 0; coinIndex < denominations.length; coinIndex++) {
            const coin = denominations[coinIndex];
            if (coin <= amount) {
                const numCoinsFit = Math.floor(amount / coin);
                const smallestPriorAmount = amount - coin;
                const priorAmountPlusCurrentCoin = dpTable[smallestPriorAmount] + 1;
                dpTable[amount] = Math.min(dpTable[amount], priorAmountPlusCurrentCoin);
            }
        }
    }
    return dpTable[changeRequested];
}