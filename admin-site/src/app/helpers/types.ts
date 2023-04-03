export interface BlogArticle {
    title: string,
    img: String,
    author: string,
    authorImg: String,
    description: String,
    content: string,
    tags: String[],

    comments: Comment[],
}

export interface Comment {
    author:String,
    content:string,
    comments: Comment[],
}