import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

import { BlogArticle } from 'src/app/helpers/types';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit{
  constructor(private http:HttpClient) {}

  ngOnInit(): void {  
  }

  onClickSubmit(articleForm:NgForm) {
    const article:BlogArticle = {
      title: articleForm.value.title,
      img: "",
      author:articleForm.value.author,
      authorImg: "",
      description: articleForm.value.description,
      content: articleForm.value.content,
      tags: articleForm.value.tags,
      comments: [],
    }

    this.http.post('http://localhost:3000/blogs/new', article)
    .subscribe({
      next: (response:any) => {
        alert(response.message);
      },
      error: (error:any) => console.log(error),
    });
  }
}
