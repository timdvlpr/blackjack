import { Card } from './card';

export class Deck {
  cards: Card[];

  constructor() {
    this.cards = this.init();
  }

  private init(): Card[] {
    const suites = ['♥', '♦', '♣', '♠'];
    const types = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ];
    return suites.flatMap((suit) => {
      return types.map((type) => {
        return new Card(suit, type);
      });
    });
  }
}
