import { LengthOfArrayPipe } from './length-of-array.pipe';
describe('LengthOfArrayPipe',()=>{
  const pipe = new LengthOfArrayPipe();
  it('should return length of input array',()=>{
    let array=[0,2,3,2]
    const result = pipe.transform(array)
    expect(result).toBe(array.length)
  })
})
