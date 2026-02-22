import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/Ihero';

@Pipe({
  name: 'heroSortBy',
})
export class HerosortbyPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    if(!sortBy) return value
    const valueCopy: Hero[] = value.map( (item) => item )

    switch( sortBy ){
      case 'name':
        return valueCopy.sort( (a,b) => a.name.localeCompare(b.name))
      case 'canFly':
        return valueCopy.sort( (a,b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1))
      case 'color':
        return valueCopy.sort( (a,b) => a.color - b.color )
      case 'creator':
        return valueCopy.sort( (a,b) => a.creator - b.creator )
      default:
        return value
    }

  }

}
