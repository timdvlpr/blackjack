import { Component, OnInit } from '@angular/core';
import { Hand } from './models/hand';
import { DeckService } from './services/deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dealerHand: Hand = new Hand([]);
  playerHands: Hand[] = [new Hand([])];
  currentHandIndex = 0;

  constructor(private deckService: DeckService) {}

  initGame(): void {
    this.deckService.initDeckOfCards(6);
    for (let i = 1; i < 5; i++) {
      if (i % 2 === 0) {
        this.playerHands[0].addCard(this.deckService.nextCard!, true);
      } else {
        this.dealerHand.addCard(this.deckService.nextCard!, false);
      }
    }
  }

  ngOnInit(): void {
    this.initGame();
  }
}
