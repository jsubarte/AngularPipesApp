import { Component, input } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './Card.html',
})
export class Card {

  title = input.required()

}
