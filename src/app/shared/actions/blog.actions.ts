import { Blog } from "../models/blog.model"

export class GetBlogs {
  static readonly type = '[BLOG] Get'

}
export class GetBlogsSuccess {
  static readonly type = '[BLOG] Get success'
  constructor(public payload: Blog[]) {}
}
export class GetBlogsFail {
  static readonly type = '[BLOG] Get fail'
  constructor(public payload: Error) {}
}
export class SelectBlog {
  static readonly type = '[BLOG] Select'
  constructor(public payload: number) {}
}
