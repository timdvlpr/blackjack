export class Card {
  suit: string;
  type: string;
  value: number;

  constructor(suit: string, type: string) {
    this.suit = suit;
    this.type = type;
    this.value = this.setValue();
  }

  private setValue(): number {
    if (this.type === 'J' || this.type === 'Q' || this.type === 'K') {
      return 10;
    } else if (this.type === 'A') {
      return 11;
    } else {
      return Number(this.type);
    }
  }
}
