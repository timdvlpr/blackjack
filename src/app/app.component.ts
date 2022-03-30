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
  dealerTurn = false;
  roundOver = false;

  constructor(private deckService: DeckService) {}

  initGame(): void {
    this.deckService.initDeckOfCards(6);
    this.initStartingCards();
  }

  initRound(): void {
    this.reset();
    this.initStartingCards();
  }

  initStartingCards(): void {
    for (let i = 1; i < 5; i++) {
      if (i % 2 === 0) {
        this.playerHands[0].addCard(this.deckService.nextCard!, true);
      } else {
        this.dealerHand.addCard(this.deckService.nextCard!, false);
      }
    }
  }

  reset(): void {
    this.currentHandIndex = 0;
    this.dealerTurn = false;
    this.roundOver = false;
    this.dealerHand = new Hand([]);
    this.playerHands = [new Hand([])];
  }

  draw(): void {
    this.playerHands[this.currentHandIndex].addCard(
      this.deckService.nextCard!,
      true
    );
    this.checkPlayerTotal();
  }

  stand(): void {
    if (this.currentHandIndex === this.playerHands.length - 1) {
      this.checkDealerTotal();
    } else {
      this.currentHandIndex++;
    }
  }

  checkPlayerTotal(): void {
    const currentPlayerHand = this.playerHands[this.currentHandIndex];

    if (currentPlayerHand.total > 21) {
      if (this.playerHands.length > 1 && this.currentHandIndex === 0) {
        this.currentHandIndex++;
      }
      currentPlayerHand.busted = true;
      this.roundOver = true;
      return;
    }
    if (currentPlayerHand.hasTripleSeven()) {
      console.log('Won with triple seven');
    }
  }

  checkDealerTotal(): void {
    this.dealerTurn = true;
    if (this.dealerHand.total > 21) {
      this.dealerHand.busted = true;
    }
    if (this.dealerHand.total <= 16) {
      this.dealerHand.addCard(this.deckService.nextCard!, false);
      this.checkDealerTotal();
    }
    this.checkWinner();
  }

  checkWinner(): void {
    const playerHands = this.playerHands.filter((hand) => !hand.busted);
    console.log('checking for winner');
  }

  ngOnInit(): void {
    this.initGame();
  }
}
