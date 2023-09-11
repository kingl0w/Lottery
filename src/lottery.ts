import { LotteryGame } from './game';
import { Player } from './player';

const game = new LotteryGame();
const player = new Player();
const runButton = document.getElementById('run_button');

runButton?.addEventListener('click', () => {
  player.buyTicket();

  game.drawLottery();

  const didWin = game.checkTicket(player.getTicketNumbers());

  updateUI(game.getWinningNumbers(), didWin);
});

function updateUI(winningNumbers: number[], didWin: boolean): void {
  const ballElements = document.querySelectorAll('.balls');
  for (let i = 0; i < ballElements.length; i++) {
    ballElements[i].textContent = winningNumbers[i].toString();
  }

  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = didWin
      ? 'Contrats!! You won!'
      : 'Sorry, better luck next time';
  }
}
