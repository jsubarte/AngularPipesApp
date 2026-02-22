import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/Ihero';

@Pipe({
  name: 'heroColor',
})
export class HerocolorPipe implements PipeTransform {

  transform(value: number): string {
    return Color[value];
  }

}
