# ticTacToe
1. run 'npm install'
2. run 'npm start'

sample play:
var test = new Game();
test.newMove(0, 0, 'X')
test.newMove(0, 1, 'X') // -> 'not your turn'
test.newMove(0, 1, 'O') 
test.newMove(0, 1, 'X') // -> 'square already taken'
test.newMove(1, 0, 'X')
test.newMove(1, 1, 'O')
test.newMove(2, 0, 'X') // -> 'X wins!'
