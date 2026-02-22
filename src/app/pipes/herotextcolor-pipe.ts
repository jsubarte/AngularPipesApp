import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/Ihero';

@Pipe({
  name: 'heroTextColor',
})
export class HerotextcolorPipe implements PipeTransform {

  transform(value: Color): string {
    return ColorMap[value];
  }

}
