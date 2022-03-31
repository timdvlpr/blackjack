import { Component, OnInit } from '@angular/core';
import { Hand } from './models/hand';
import { DeckService } from './services/deck.service';
import { Result } from './enums/result';

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
      currentPlayerHand.result = Result.BUST;
      this.roundOver = true;
      return;
    }
    if (currentPlayerHand.hasTripleSeven()) {
      currentPlayerHand.result = Result.WIN;
    }
  }

  checkDealerTotal(): void {
    this.dealerTurn = true;
    if (this.dealerHand.total > 21) {
      this.playerHands.forEach((hand) => {
        if (hand.result !== 'bust') {
          hand.result = Result.WIN;
        }
      });
      this.roundOver = true;
      return;
    }
    if (this.dealerHand.total <= 16) {
      this.dealerHand.addCard(this.deckService.nextCard!, false);
      this.checkDealerTotal();
    } else {
      this.checkWinner();
    }
  }

  checkWinner(): void {
    const playerHands = this.playerHands.filter(
      (hand) => hand.result !== 'bust'
    );

    for (let i = 0; i < playerHands.length; i++) {
      if (playerHands[i].hasBlackJack()) {
        if (this.dealerHand.hasBlackJack()) {
          playerHands[i].result = Result.TIE;
        } else {
          playerHands[i].result = Result.WIN;
        }
        continue;
      }

      if (playerHands[i].total <= 21) {
        if (
          this.dealerHand.hasBlackJack() ||
          this.dealerHand.total > playerHands[i].total
        ) {
          playerHands[i].result = Result.LOSS;
        } else if (this.dealerHand.total === playerHands[i].total) {
          playerHands[i].result = Result.TIE;
        } else {
          playerHands[i].result = Result.WIN;
        }
      }
    }
    this.roundOver = true;
  }

  ngOnInit(): void {
    this.initGame();
  }
}
