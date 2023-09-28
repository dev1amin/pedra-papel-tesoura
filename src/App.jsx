import React, { useState } from 'react';

const choices = ['Pedra', 'Papel', 'Tesoura'];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
    setWinner(null);
    setGameOver(false);
  };

  const playRound = (choice) => {
    if (gameOver) {
      return;
    }

    const computer = getRandomChoice();

    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
    } else if (
      (choice === 'Pedra' && computer === 'Tesoura') ||
      (choice === 'Papel' && computer === 'Pedra') ||
      (choice === 'Tesoura' && computer === 'Papel')
    ) {
      setPlayerScore(playerScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }

    if (playerScore === 2) {
      setWinner('Jogador');
      setGameOver(true);
    } else if (computerScore === 2) {
      setWinner('Máquina');
      setGameOver(true);
    }
  };

  return (
    <div className="app">
      <div className="choices">
        <button onClick={() => playRound('Pedra')} disabled={gameOver}>
          🗿
        </button>
        <button onClick={() => playRound('Papel')} disabled={gameOver}>
          🧻
        </button>
        <button onClick={() => playRound('Tesoura')} disabled={gameOver}>
          ✂️
        </button>
      </div>
      <div className="results">
        <p style={{display:"flex", gap:"10px", alignItems: "center"}}>Jogador escolheu: {playerChoice && <p>{playerChoice}</p>}</p>
        <p style={{display:"flex", gap:"10px", alignItems: "center"}}>Máquina escolheu: {computerChoice && <p>{computerChoice}</p>}</p>
        <p style={{display:"flex", gap:"10px", alignItems: "center"}}>Vencedor: {winner && <p>{winner}</p>}</p>
        {gameOver && (
          <div>
            <button onClick={resetGame}>Recomeçar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
