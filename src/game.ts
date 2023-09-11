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

  public checkTicket(playerNumbers: number[]): boolean {
    if (playerNumbers == this.winningNumbers) {
      return true;
    } else {
      return false;
    }
  }
}
