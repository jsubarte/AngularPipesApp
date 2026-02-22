import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes';
import { TogglecasePipe } from '../../pipes/togglecase-pipe';
import { CanflyPipe } from '../../pipes/canfly-pipe';
import { HerocolorPipe } from '../../pipes/herocolor-pipe';
import { HerotextcolorPipe } from '../../pipes/herotextcolor-pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [ TogglecasePipe, CanflyPipe, HerocolorPipe, HerotextcolorPipe, TitleCasePipe ],
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
