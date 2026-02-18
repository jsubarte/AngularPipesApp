import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './Card.html',
})
export class Card {

  title = input.required()

}
