import { ListOfNamesPipe } from './list-of-names.pipe';
describe('ListOfNamesPipe',()=>{
  const pipe = new ListOfNamesPipe();
  it('should return titles of paintings array',()=>{
    let paintingsArray =[{
      "id": 1,
      "title": "Mona Lisa",
      "author": "Leonardo Da Vinci",
      "url": "https://media.timeout.com/images/103166731/750/422/image.jpg",
      "year": 1503,
      "price": 4000,
      "rank": 1,
      "views": 1000,
      "sales": 200,
      "available": true,
      "basketCount": 1
    },
    {
      "id": 2,
      "title": "Girl with a Pearl Earring",
      "author": "Johannes Vermeer",
      "url": "https://media.timeout.com/images/103166735/750/422/image.jpg",
      "year": 1503,
      "price": 1233,
      "rank": 2,
      "views": 5151,
      "sales": 50,
      "available": true,
      "basketCount": 1
    }]
    const result = pipe.transform(paintingsArray)
    expect(result).toContain('Mona Lisa')
    expect(result).toContain('Girl with a Pearl Earring')
  })
})
