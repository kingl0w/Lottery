export class Ticket {
  private numbers: number[];

  constructor() {
    this.numbers = [];
  }

  public setNumbers(numbers: number[]): void {
    this.numbers = numbers;
  }

  public getNumbers(): number[] {
    return this.numbers;
  }
}
