import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './NumberPage.html',
})
export default class NumberPage {
  totalSell = signal(2_433_232.5567)
  percent = signal(0.4856)
}
