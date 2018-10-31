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
  
  /*
    Constraints:
      -board is solvable
      -board has length
      -snake & ladder does not exist at same location
  */
  function getMinThrows(board, numberOfCells) {
    // visited tracks memoization
    const visited = {};
    let q = [{ position: 0, moves: 0, positionsVisited: '' }];
    while (q.length) {
      const current = q.shift();
      for (let i = 1; i < 7; i++) {
        const newPosition = board[current.position + i] === -1 ? current.position + i : board[current.position + i];
        if (!visited[newPosition]) {
          visited[newPosition] = true;
          if (newPosition === numberOfCells - 1) { 
            current.positionsVisited += ` ${newPosition}`;
            return current;
          }
          q.push({ position: newPosition, moves: current.moves + 1, positionsVisited: `${current.positionsVisited} ${newPosition}` });
        }
      }
      // not reasonable solution
      if (current.moves === 20) return -1;
    }
  }
  
  function snakesAndLadders(numberOfCells, ladders, snakes) {
    const board = createBoard(numberOfCells, ladders, snakes);
    return getMinThrows(board, numberOfCells);
  }
  console.log('test', snakesAndLadders(6,{},{}));
  
  console.log('answer should be 3:', snakesAndLadders(
    30,
    { 2: 21, 4: 7, 10: 25, 19: 28 },
    { 26: 0, 20: 8, 16: 3, 18: 6 },
  ));

  console.log('answer should be 4:', snakesAndLadders(
    36,
   { 1: 14,  4:6,  8: 26 , 24: 34},
   { 33: 11 , 31: 29 ,  23: 15 ,  16:3 }
  ));

  console.log('unknowlable:', snakesAndLadders(
    64,
    { 1: 14,  4:6,  8: 26 , 24: 34, 30: 50, 35: 45, 38: 40 },
    { 45: 36, 33: 11 , 31: 29 ,  23: 15 , 16:3}
  ))
