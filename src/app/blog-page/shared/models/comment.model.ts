export interface Comment {
id: number,
blogId: number,
name: string,
email: string,
save: boolean,
comment: string,
date: Date,
answers?: Comment[]
}
