import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/Ihero';

@Pipe({
  name: 'heroFilter',
})
export class HerofilterPipe implements PipeTransform {

  transform(value: Hero[], search: string): Hero[] {
    if( !search ) return value

    search = search.toLowerCase()

    return value.filter(
      hero => hero.name.toLowerCase().includes(search)
    )

  }

}
