### N-Queens
The **eight queens puzzle** is the problem of placing eight chess queens 
on an `8×8` chessboard so that no two queens threaten each other. 
Thus, a solution requires that no two queens share the same row, 
column, or diagonal. The eight queens puzzle is an example of the 
more general *n queens problem* of placing n non-attacking queens 
on an `n×n` chessboard, for which solutions exist for all natural 
numbers `n` with the exception of `n=2` and `n=3`.

For example, following is a solution for 4 Queen problem.

![N Queens](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/N_Queen_Problem.jpg)

The expected output is an array of QueenSolution. QueenSolution is an array of QueenPositions that makes up a possible solution. QueenPositions is a class that holds the row and index that queen is placed in. This class can hold other methods.

```
/**
 * Class that represents queen position on the chessboard.
 */
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

export default function nQueens(queensCount) {
  // fill me
}

nQueens(4)
// returns [
[new QueenPosition(0,2), new QueenPosition(1,0), new QueenPosition(2,3), new QueenPosition(3,1)]
// other solutions here
]
```