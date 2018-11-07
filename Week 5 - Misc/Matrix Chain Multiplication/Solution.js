matrixChainMultiplication = m => {
    const solution = {};
    if (m.length === 4) {
        const c1 = m[0] * m[2];
        const c2 = m[1] * m[3];
        const p1 = c1 * m[1] + c1 * m[3];
        const p2 = c2 * m[0] + c2 * m[2];
        solution[m.join('x')] = p1 > p2 ? p2 : p1;
    }
    return solution;
}

const matrix = [40, 30, 10, 30];
console.log('answer is', matrixChainMultiplication(matrix));
