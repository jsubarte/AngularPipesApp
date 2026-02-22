import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/Ihero';

@Pipe({
  name: 'heroCreator',
})
export class HerocreatorPipe implements PipeTransform {

  transform(value: number): string {
    return Creator[value as Creator]
  }

}
