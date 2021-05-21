import { Review } from './../models/review.model';

export class AddReview {
    static readonly type = '[REVIEW] Add'

    constructor(public payload: Review) {}
}

export class AddReviewSuccess {
  static readonly type = '[REVIEW] Add success'

  constructor(public payload: Review) {}
}

export class AddReviewFail {
  static readonly type = '[REVIEW] Add fail'

  constructor(public payload: any) {}
}


export class RemoveReview {
    static readonly type = '[REVIEW] Remove'

    constructor(public payload: string) {}
}

export class GetReviews {
  static readonly type = '[REVIEW] Get'
}

export class GetReviewsSuccess {
  static readonly type = '[REVIEW] Get success'

  constructor(public payload: Review[]) {}
}

export class GetReviewsFail {
  static readonly type = '[REVIEW] Get fail'

  constructor(public payload: Error) {}
}
