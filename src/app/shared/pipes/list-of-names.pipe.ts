import { Pipe, PipeTransform } from '@angular/core';
import { Painting } from '../models/painting.model';

@Pipe({
  name: 'listOfNames',
  pure: false
})
export class ListOfNamesPipe implements PipeTransform {
  transform(paintings: Painting[]): string[] {
    return paintings.map(painting=>{
      return painting.title
    });
  }

}
