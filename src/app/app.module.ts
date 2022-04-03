import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { DealerComponent } from './components/dealer/dealer.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { IconModule } from './icon.module';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    DealerComponent,
    ActionButtonComponent,
    ResultComponent
  ],
  imports: [BrowserModule, IconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
