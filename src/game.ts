export class LotteryGame {
  private winningNumbers: number[];

  constructor() {
    this.winningNumbers = [];
  }

  public drawLottery(): void {
    while (this.winningNumbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!this.winningNumbers.includes(randomNumber)) {
        this.winningNumbers.push(randomNumber);
      }
    }
  }

  public getWinningNumbers(): number[] {
    return this.winningNumbers;
  }

  public checkTicket(playerNumbers: number[]): number {
    let count = 0;
    for (const playerNumber of playerNumbers) {
      if (this.winningNumbers.includes(playerNumber)) {
        count++;
      }
    }
    return count;
  }
}
