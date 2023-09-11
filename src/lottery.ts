import { LotteryGame } from './game';
import { Player } from './player';

const game = new LotteryGame();
const player = new Player();
const runButton = document.getElementById('run_button');

runButton?.addEventListener('click', () => {
  player.buyTicket();

  game.drawLottery();

  const matchedNumbers = game.checkTicket(player.getTicketNumbers());

  //displays the winning numbers in the .balls elements
  updateBalls(game.getWinningNumbers());

  //displays only the player's numbers in the comparison_numbers element
  updateComparisonNumbers(player.getTicketNumbers());

  //displays the result message
  updateResultMessage(matchedNumbers);
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

function updateResultMessage(matchedNumbers: number): void {
  const resultElement = document.getElementById('result');
  if (resultElement) {
    if (matchedNumbers === 0) {
      resultElement.textContent =
        'Sorry, none of your numbers matched. Better luck next time!';
    } else {
      resultElement.textContent = `You matched ${matchedNumbers} number${
        matchedNumbers > 1 ? 's' : ''
      }`;
    }
  }
}
