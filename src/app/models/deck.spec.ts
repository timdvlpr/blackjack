import { Deck } from './deck';

describe('Deck', () => {
  it('should create an instance', () => {
    expect(new Deck()).toBeTruthy();
  });

  it('should initialize deck with 52 cards', () => {
    expect(new Deck().cards.length).toBe(52);
  });

  it('should initialize deck correctly with all card variations', () => {
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
    const deck = new Deck();

    suites.forEach((suit) => {
      types.forEach((type) => {
        const card = deck.cards.find(
          (card) => card.suit === suit && card.type === type
        );
        expect(card).not.toBeUndefined();
      });
    });
  });
});
