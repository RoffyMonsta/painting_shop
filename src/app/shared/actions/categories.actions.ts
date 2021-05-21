import { Category } from "../models/category.model"

export class GetCategories {
  static readonly type = '[CATEGORY] Get'

}
export class GetCategoriesSuccess {
  static readonly type = '[CATEGORY] Get success'
  constructor(public payload: Category[]) {}
}
export class GetCategoriesFail {
  static readonly type = '[CATEGORY] Get fail'
  constructor(public payload: Error) {}
}
export class SelectCategory {
  static readonly type = '[CATEGORY] Select'
  constructor(public payload: number) {}
}
