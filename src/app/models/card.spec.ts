import { Card } from './card';

describe('Card', () => {
  it('should create an instance', () => {
    expect(new Card('♥', '10')).toBeTruthy();
  });

  it('should set value depending on card type', () => {
    const king = new Card('♥', 'K');
    const queen = new Card('♥', 'Q');
    const jack = new Card('♥', 'J');
    const ace = new Card('♥', 'A');
    const five = new Card('♥', '5');
    expect(king.value).toBe(10);
    expect(queen.value).toBe(10);
    expect(jack.value).toBe(10);
    expect(ace.value).toBe(11);
    expect(five.value).toBe(5);
  });
});
