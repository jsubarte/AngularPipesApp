import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, /* LOCALE_ID, */ signal } from '@angular/core';
import { AvailableLocale, Locale } from '../../services/Locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './BasicPage.html',
})
export default class BasicPage {

  localService = inject(Locale)
  //currentLocal = signal(inject(LOCALE_ID))

  nameLower = signal('joel')
  nameUpper = signal('JOEL')
  fullName = signal('jOeL sÁnchEz ubArtE')

  customDate = signal( new Date() )

  tickingDateEffect = effect(
    (onCleanUp) => {
      const interval = setInterval(
        () => {
          this.customDate.set( new Date() )
        },
        1000
      )
      onCleanUp(
        () => {
          clearInterval(interval)
        }
      )
    }
  )

  changeLocale( locale: AvailableLocale ){
    this.localService.changeLocale(locale)
  }

}
