export class QueenPosition {
    /**
     * @param {number} rowIndex
     * @param {number} columnIndex
     */
    constructor(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }
}
  
function nQueens(queensCount) {
    const noNeedToVisit = {};
    const row = [];
    for (let i = 0; i < queensCount; i++) row.push(i);
    row.forEach(e => noNeedToVisit[e] = row);

    addLeftDiagonal = (visited, pos) => {
        let currentRow = pos[0] + 1;
        let currentCol = pos[1] - 1;
        const notVisited = visited[currentRow];
        while (currentRow < queensCount && currentCol < queensCount) {
            const index = notVisited.findIndex(currentCol);
            notVisited.splice(index, 1);
        }
        return visited;
    }

    addRightDiagonal = (visited, pos) => {

    }

    addColumn = (visited, pos) => {

    }

    recurse = (row, positions) => {
        for (let i = row; i < queensCount; i++) {
            positions[i].forEach(pos => {
                positions = addLeftDiagonal(positions, [i, pos]);
                positions = addRightDiagonal(positions, [i, pos]);
                positions = addColumn(positions, [i, pos]);
                recurse(i + 1, positions);
            });
        }

    }

    recurse(0, noNeedToVisit)
}

nQueens(4)
// returns [
[new QueenPosition(0,2), new QueenPosition(1,0), new QueenPosition(2,3), new QueenPosition(3,1)]
// other solutions here
]