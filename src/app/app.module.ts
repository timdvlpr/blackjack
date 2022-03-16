import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { DealerComponent } from './components/dealer/dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    DealerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
