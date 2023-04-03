export interface User {
    name: string;
    email: string;
    password: string;
  }
  
export interface BlogArticle {
  title: string,
  img: String,
  author: string,
  authorImg: String,
  description: String,
  content: string,
  tags: [string],
  date: Date,

  comments: Comment[]
}

export interface Comment {
  author:String,
  content:string,
  comments: [Comment],
}