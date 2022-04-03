import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faArrowRotateRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPlus,
      faMinus,
      faAngleLeft,
      faAngleRight,
      faArrowRotateRight,
      faChevronDown
    );
  }
}
