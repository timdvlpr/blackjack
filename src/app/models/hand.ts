import { Card } from './card';
import { Result } from '../enums/result';

export class Hand {
  cards: Card[];
  total: number;
  result: Result;

  constructor(cards: Card[]) {
    this.cards = cards;
    this.total = this.calcTotal();
    this.result = Result.NONE;
  }

  private calcTotal(): number {
    return this.cards.reduce(
      (accumulator, card) => accumulator + card.value,
      0
    );
  }

  private checkAceValues(): void {
    if (this.total <= 21) {
      return;
    }
    const ace = this.cards.find((card) => Number(card.value) === 11);
    if (!ace) {
      return;
    }
    ace.value = 1;
    this.total -= 10;
    this.checkAceValues();
  }

  addCard(card: Card, checkAces: boolean): void {
    this.cards.push(card);
    this.total = this.calcTotal();
    if (checkAces) {
      this.checkAceValues();
    }
  }

  hasTripleSeven(): boolean {
    return (
      this.cards.length === 3 &&
      this.cards[0].value === 7 &&
      this.cards[1].value === 7 &&
      this.cards[2].value === 7
    );
  }

  hasBlackJack(): boolean {
    return this.total === 21 && this.cards.length === 2;
  }

  isSplittable(): boolean {
    if (this.cards.length !== 2) {
      return false;
    }
    return this.cards[0].value === this.cards[1].value;
  }
}
