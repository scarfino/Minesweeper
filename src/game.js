import {
  Board
} from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);

    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('BOOM! Game Over! Final Board:');
      this._board.print();
    } else if (!this._board.hasNonBombEmptySpaces()) {
      console.log('You won!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}
