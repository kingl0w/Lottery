import { Ticket } from './ticket';

export class Player {
  private ticket: Ticket;

  constructor() {
    this.ticket = new Ticket();
  }

  public buyTicket(): void {
    const ticketNumbers: number[] = [];
    while (ticketNumbers.length < 7) {
      const randomNumber: number = Math.floor(Math.random() * 49) + 1;
      if (!ticketNumbers.includes(randomNumber)) {
        ticketNumbers.push(randomNumber);
      }
    }
    this.ticket.setNumbers(ticketNumbers);
  }

  public getTicketNumbers(): number[] {
    return this.ticket.getNumbers();
  }
}
