import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const regExp= /\d/g
    const result = phone.match(regExp)!.join('')
    phone = `+380 (${result.slice(-9,-7)}) ${result.slice(-7,-4)}-${result.slice(-4,-2)}-${result.slice(-2)}`
    return phone
  }

}
