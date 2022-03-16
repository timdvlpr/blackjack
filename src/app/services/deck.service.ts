import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deckCards: Card[] = [];

  constructor() {}

  private static shuffle(cards: Card[]): Card[] {
    let rndNum: number;
    let index: number;
    let card: Card;
    for (index = cards.length - 1; index > 0; index--) {
      rndNum = Math.floor(Math.random() * (index + 1));
      card = cards[index];
      cards[index] = cards[rndNum];
      cards[rndNum] = card;
    }
    return cards;
  }

  initDeckOfCards(deckAmount: number): void {
    const deck: Card[] = [];
    for (let i = 0; i < deckAmount; i++) {
      deck.push(...new Deck().cards);
    }
    this.deckCards = DeckService.shuffle(deck);
  }

  get nextCard(): Card | null {
    if (this.deckCards.length > 0) {
      return this.deckCards.shift()!;
    }
    return null;
  }
}
