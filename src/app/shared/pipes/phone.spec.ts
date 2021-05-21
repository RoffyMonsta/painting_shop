
import { PhonePipe } from './phone.pipe';

describe('PhonePipe',()=>{

  const pipe = new PhonePipe();
  it('should make right format of phone number',()=>{
    let phone= '0991234567'
    const result = pipe.transform(phone)
    expect(result).toBe('+380 (99) 123-45-67')
  })
})
