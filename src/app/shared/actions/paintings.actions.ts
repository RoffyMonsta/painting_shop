import { Painting } from "../models/painting.model"

export class GetPaintings {
  static readonly type = '[PAINTING] Get'
}
export class GetPaintingsSuccess {
  static readonly type = '[PAINTING] Get success'
  constructor(public payload: Painting[]) {}
}
export class GetPaintingsFail {
  static readonly type = '[PAINTING] Get fail'
  constructor(public payload: Error) {}
}
export class SelectPainting {
  static readonly type = '[PAINTING] Select'
  constructor(public payload: number) {}
}

