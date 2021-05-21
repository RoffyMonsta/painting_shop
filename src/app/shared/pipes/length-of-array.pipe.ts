import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthOfArray'
})
export class LengthOfArrayPipe implements PipeTransform {

  transform(array: any): number {
    return array.length;
  }

}
