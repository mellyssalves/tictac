import  { useState } from 'react';
import './App.css';

const initialBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (row, col) => {
    if (gameOver || board[row][col] !== '') {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[row][col] = currentPlayer;
    setBoard(updatedBoard);

    const winner = checkWinner();
    if (winner) {
      if (winner === 'tie') {
        alert('O jogo terminou em empate!');
      } else {
        alert('O jogador ' + winner + ' venceu!');
      }
      setGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ''
      ) {
        return board[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ''
      ) {
        return board[0][i];
      }
    }

    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ''
    ) {
      return board[0][0];
    }

    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ''
    ) {
      return board[0][2];
    }

    let isTie = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          isTie = false;
          break;
        }
      }
    }
    if (isTie) {
      return 'tie';
    }

    return null;
  };

  const renderCell = (row, col) => (
    <div
      className="cell"
      onClick={() => handleCellClick(row, col)}
    >
      {board[row][col]}
    </div>
  );

  const renderBoard = () => (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      {renderBoard()}
    </div>
  );
};

export default App;
