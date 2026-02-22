import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { heroes } from '../../data/heroes';
import { Hero } from '../../interfaces/Ihero';
import {
  CanflyPipe,HerocolorPipe,HerocreatorPipe,
  HerofilterPipe,HerosortbyPipe,HerotextcolorPipe,
  TogglecasePipe
} from '../../pipes';

@Component({
  selector: 'app-custom-page',
  imports: [
    TogglecasePipe,
    CanflyPipe,
    HerocolorPipe,
    HerotextcolorPipe,
    TitleCasePipe,
    HerocreatorPipe,
    HerosortbyPipe,
    HerofilterPipe
  ],
  templateUrl: './CustomPage.html',
})
export default class CustomPage {

  name = signal<string>('Joel Ubarte')

  upperCase = signal<boolean>(true)

  heroes = signal<Hero[]>(heroes)

  sortBy = signal<keyof Hero | null>(null)

  searchQuery = signal<string>('')

  changeUpperCase(): void {
    this.upperCase.set(!this.upperCase())
  }

}
