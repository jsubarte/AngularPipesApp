import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes';
import { TogglecasePipe } from '../../pipes/togglecase-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ TogglecasePipe ],
  templateUrl: './CustomPage.html',
})
export default class CustomPage {
  name = signal('Joel Ubarte')
  upperCase = signal(true)

  heroes = signal(heroes)

  changeUpperCase() {
    this.upperCase.set(!this.upperCase())
  }
}
