
import { Comment } from './../models/comment.model';

export class AddComment {
    static readonly type = '[COMMENT] Add'

    constructor(public payload: Comment) {}
}

export class AddCommentSuccess {
  static readonly type = '[COMMENT] Add success'

  constructor(public payload: Comment) {}
}

export class AddCommentFail {
  static readonly type = '[COMMENT] Add fail'

  constructor(public payload: Error) {}
}
export class AddAnswer {
  static readonly type = '[COMMENT] Add answer'

  constructor(public payload: Comment) {}
}

export class AddAnswerSuccess {
static readonly type = '[COMMENT] Add answer success'

constructor(public payload: Comment) {}
}

export class AddAnswerFail {
static readonly type = '[COMMENT] Add answer fail'

constructor(public payload: Error) {}
}

export class RemoveComment {
    static readonly type = '[COMMENT] Remove'

    constructor(public payload: string) {}
}

export class GetComments {
  static readonly type = '[COMMENT] Get'
}

export class GetCommentsSuccess {
  static readonly type = '[COMMENT] Get success'

  constructor(public payload: Comment[]) {}
}

export class GetCommentsFail {
  static readonly type = '[COMMENT] Get fail'

  constructor(public payload: Error) {}
}

export class SelectComment {
  static readonly type = '[COMMENT] Select'

  constructor(public payload: number) {}
}
