### Snakes and Ladders Matrix
Given a snakes and ladders rectangular MxN board game,
find the minimum number of dice throws required to reach the final cell from the first cell
Snakes and Ladders rules:
- From square x, you throw a six-sided die which lands on result y, and you end up at square x + y
- If the square you land has a ladder, you go up the ladder
- If the square you land has a snake, you go down from the head to the tail.

In the board given below, it will take minimum 4 throws to get from 1 to 36.
Sequence: [1,6,4,1]
There may be more than one such sequence. [4,2,6,4]

![snakesandladders](https://i.imgur.com/Sw2iVNO.jpg)

```
function createBoard(numberOfCells, ladders, snakes) {
  // create a board of to cellNumber cells
  // move 0 is the start of the board
  const board = Array(numberOfCells).fill(-1);
  Object.keys(ladders).forEach(ladder => {
    // key is where the player has to be to take the ladder
    // value is where the player ends up after taking the ladder
    board[ladder] = ladders[ladder];
  });
  Object.keys(snakes).forEach(snake => {
    // key is where the player has to be to take the snake
    // value is where the player ends up after taking the snake
    board[snake] = snakes[snake];
  });
  return board;
}

function getMinThrows(board, numberOfCells) {
 // fill me
}

function snakesAndLadders(numberOfCells, ladders, snakes) {
  const board = createBoard(numberOfCells, ladders, snakes);
  return getMinThrows(board, numberOfCells);
}

snakesAndLadders(
  30,
  { 2: 21, 4: 7, 10: 25, 19: 28 },
  { 26: 0, 20: 8, 16: 3, 18: 6 },
);

// returns 3

snakesAndLadders(
  36,
 { 1: 14,  4:6,  8: 26 , 24: 34},
 { 33: 11 , 31: 29 ,  23: 15 ,  16:3 }
);

// returns 4
```

Board for above:

![graphs](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/snake-and-ladders.jpg)

