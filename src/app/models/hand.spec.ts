import { Hand } from './hand';
import { Card } from './card';

describe('Hand', () => {
  let hand = new Hand([new Card('♣', '10'), new Card('♠', '3')]);

  afterEach(() => {
    hand = new Hand([new Card('♣', '10'), new Card('♠', '3')]);
  });

  it('should create an instance', () => {
    expect(new Hand([])).toBeTruthy();
  });

  it('should calculate total value of cards in hand', () => {
    expect(hand.total).toBe(13);
  });

  it('should add card to hand and update total', () => {
    hand.addCard(new Card('♣', '3'), true);
    expect(hand.cards.length).toBe(3);
    expect(hand.total).toBe(16);
  });

  it('should check for triple seven', () => {
    const testHand = new Hand([
      new Card('♣', '7'),
      new Card('♦', '7'),
      new Card('♥', '7')
    ]);
    expect(testHand.hasTripleSeven()).toBeTrue();
  });

  it('should check for blackjack', () => {
    const testHand = new Hand([new Card('♥', 'K'), new Card('♥', 'A')]);
    expect(testHand.hasBlackJack()).toBeTrue();
  });

  it('should check if hand is splittable', () => {
    const testHand = new Hand([new Card('♥', '8'), new Card('♣', '8')]);
    expect(testHand.isSplittable()).toBeTrue();
  });

  it('should set ace value to 1 if total is higher than 21', () => {
    const testHand = new Hand([new Card('♣', '10'), new Card('♥', '8')]);
    const ace = new Card('♥', 'A');
    testHand.addCard(ace, true);
    expect(testHand.total).toBe(19);
  });
});
