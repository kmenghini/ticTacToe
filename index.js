console.log('Welcome to Tic Tac Toe');

class Game {
  constructor() {
    this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    console.log(this.drawBoard())
  }
  drawBoard() {
    //logs to console the current board
    return `${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}\n---------\n${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}\n---------\n${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}`
  }
  checkSquare(row, column) {
    //returns value at that place
    return this.board[row][column];
  }
  newMove(row, column, player) {
    //change board at [row, column] to player
    if (player !== 'X' && player !== 'O') {
      console.log('use X or O to make your move')
    } else {
      if (!this.checkSquare(row, column)) {
        this.board[row][column] = player;
        if (this.checkForWin(row, column, player)) {
          console.log(`player ${player} wins!`);
        }
      } else {
        console.log('square already taken - try a different one!')
      }
      console.log(this.drawBoard())
    }
  }
  checkForWin(row, column, player) {
    //check rows, columns, and diagonals
    return this.checkRow(row, player) || this.checkColumn(column, player) || this.checkDiagonalOne(player) || this.checkDiagonalTwo(player)
  }
  checkRow(row, player) {
    //see if all elements in that row are === player
    return this.board[row].reduce((acc, element) => acc && (element === player), true)
  }
  checkColumn(column, player) {
    //see if all elements in that column are === player
    var currentColumn = [this.board[0][column], this.board[1][column], this.board[2][column]];
    return currentColumn.reduce((acc, element) => acc && (element === player), true);
  }
  checkDiagonalOne(player) {
    //check [0,0], [1,1], and [2,2]
    var currentDiag = [this.board[0][0], this.board[1][1], this.board[2][2]];
    return currentDiag.reduce((acc, element) => acc && (element === player), true);
  }
  checkDiagonalTwo(player) {
    //check [2,0], [1,1], and [0,2]
    var currentDiag = [this.board[2][0], this.board[1][1], this.board[0][2]];
    return currentDiag.reduce((acc, element) => acc && (element === player), true);
  }

}

var test = new Game();
test.newMove(0, 0, 'X')
test.newMove(0, 1, 'X')
test.newMove(0, 2, 'X')
console.log(test.checkRow(0, 'X'))



