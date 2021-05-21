import { Painting } from './../models/painting.model';

export class AddBasket {
    static readonly type = '[PAINTING] Add'

    constructor(public payload: Painting) {}
}

export class RemoveBasket {
    static readonly type = '[PAINTING] Remove'

    constructor(public payload: string) {}
}
export class UpdateAmount {
  static readonly type = '[PAINTING] Amount'
  constructor(public id: number, public payload: number){}
}
