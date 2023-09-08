function drawLottery(): number[] {
  const lotteryNumbers: number[] = [];
  while (lotteryNumbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!lotteryNumbers.includes(randomNumber)) {
      lotteryNumbers.push(randomNumber);
    }
  }
  return lotteryNumbers;
}

function updateUI(numbers: number[]): void {
  const ballElements = document.querySelectorAll('.balls');
  for (let i = 0; i < ballElements.length; i++) {
    ballElements[i].textContent = numbers[i].toString();
  }
}

const runButton = document.getElementById('run_button');

runButton?.addEventListener('click', () => {
  const drawnNumbers = drawLottery();
  updateUI(drawnNumbers);
});
