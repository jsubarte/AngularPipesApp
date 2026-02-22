import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class TogglecasePipe implements PipeTransform {

  transform(value: string, upper: boolean): string {
    return upper ? value.toUpperCase() : value.toLocaleLowerCase()
  }

}
