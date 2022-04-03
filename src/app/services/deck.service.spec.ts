import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('DeckService', () => {
  let service: DeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init deck of cards correctly', () => {
    service.initDeckOfCards(1);
    expect(service.deckCards.length).toBe(52);
    service.initDeckOfCards(3);
    expect(service.deckCards.length).toBe(156);
    service.initDeckOfCards(6);
    expect(service.deckCards.length).toBe(312);
  });

  it('should get next card from deck', () => {
    service.initDeckOfCards(6);
    expect(service.nextCard).not.toBeNull();
  });

  it('should return null if no card is left', () => {
    expect(service.deckCards.length).toBe(0);
    expect(service.nextCard).toBeNull();
  });
});
