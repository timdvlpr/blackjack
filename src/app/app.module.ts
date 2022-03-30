import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { DealerComponent } from './components/dealer/dealer.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faArrowRotateRight
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    DealerComponent,
    ActionButtonComponent
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPlus,
      faMinus,
      faAngleLeft,
      faAngleRight,
      faArrowRotateRight
    );
  }
}
