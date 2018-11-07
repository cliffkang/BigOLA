numberOfPathsInMatrixRecursive = (row, column) => {
    if (row === 1 || column === 1) return 1;
    return (
        numberOfPathsInMatrixRecursive(row - 1, column) + 
        numberOfPathsInMatrixRecursive(row, column - 1)
    );
}

createMultiDimensionalArray = (row, column) => {
    const m = new Array(row);
    for (let i = 0; i < row; i++) m[i] = new Array(column);
    return m;
}

numberOfPathsInMatrixDpTable = (row, column) => {
    if (row === 1 || column === 1) return 1;
    const dpTable = createMultiDimensionalArray(row, column);
    for (let i = 0; i < row; i++) dpTable[i][0] = 1;
    for (let j = 0; j < column; j++) dpTable[0][j] = 1;
    for (let r = 1; r < row; r++) {
        for (c = 1; c < column; c++) {
            
        }
    }
    console.log('dpTable', dpTable);
}


// console.log('answer is', numberOfPathsInMatrixRecursive(3, 3));
console.log(numberOfPathsInMatrixDpTable(3,3));
