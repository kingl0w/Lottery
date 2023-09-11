import { LotteryGame } from './game';
import { Player } from './player';

const game = new LotteryGame();
const player = new Player();
const runButton = document.getElementById('run_button');

runButton?.addEventListener('click', () => {
  player.buyTicket();

  game.drawLottery();

  const didWin = game.checkTicket(player.getTicketNumbers());

  //displays the winning numbers in the .balls elements
  updateBalls(game.getWinningNumbers());

  //displays only the player's numbers in the comparison_numbers element
  updateComparisonNumbers(player.getTicketNumbers());

  //displays the result message
  updateResultMessage(didWin);
});

function updateBalls(winningNumbers: number[]): void {
  const ballElements = document.querySelectorAll('.balls');
  for (let i = 0; i < ballElements.length; i++) {
    ballElements[i].textContent = winningNumbers[i].toString();
  }
}

function updateComparisonNumbers(playerNumbers: number[]): void {
  const comparisonElement = document.getElementById('comparison_numbers');
  if (comparisonElement) {
    const playerNumbersText = playerNumbers.join(' ');

    comparisonElement.textContent = playerNumbersText;
  }
}

function updateResultMessage(didWin: boolean): void {
  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = didWin
      ? 'Congratulations! You won!'
      : 'Sorry, better luck next time';
  }
}
