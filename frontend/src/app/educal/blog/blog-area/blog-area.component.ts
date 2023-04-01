import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit {

  blogItems = [
  {
      id: 1,
      blogImg: 'assets/img/blog/blog-1.jpg',
      title: 'The Challenge Of Global Learning In Public Education',
      authorImg: 'assets/img/course/teacher/teacher-1.jpg',
      authorName: 'Jim Séchen',
      category: 'Art & Design',
      date:'April 02, 2022',
      color:'green'
  },
  {
      id: 2,
      blogImg: 'assets/img/blog/blog-2.jpg',
      title: 'Exactly How Technology Can Make Reading Better',
      authorImg: 'assets/img/course/teacher/teacher-2.jpg',
      authorName: 'Barry Tone',
      category: 'UX Design',
      date:'January 05, 2022',
      color:'sky-blue'
  },
  {
      id: 3,
      blogImg: 'assets/img/blog/blog-3.jpg',
      title: 'New Chicago school budget relies on state pension',
      authorImg: 'assets/img/course/teacher/teacher-3.jpg',
      authorName: 'Samuel Serif',
      category: 'Development',
      date:'February 08, 2022',
      color:'green',
  },
  {
      id: 4,
      blogImg: 'assets/img/blog/blog-4.jpg',
      title: 'Google Ads certifications: Are they worth it?',
      authorImg: 'assets/img/course/teacher/teacher-4.jpg',
      authorName: 'Elon Gated',
      category: 'Marketing',
      date:'March 01, 2022',
      color:'blue'
  },
  {
      id: 5,
      blogImg: 'assets/img/blog/blog-5.jpg',
      title: '14 Facebook Ad Examples for Ad Creative Inspiration',
      authorImg: 'assets/img/course/teacher/teacher-5.jpg',
      authorName: 'Brian Cumin',
      category: 'Data Science',
      date:'September 15, 2022',
      color:'orange'
  },
  {
      id: 6,
      blogImg: 'assets/img/blog/blog-6.jpg',
      title: 'How to manage Facebook ads for clients the right way',
      authorImg: 'assets/img/course/teacher/teacher-6.jpg',
      authorName: 'Pelican Steve',
      category: 'Audio & Music',
      date:'October 25, 2022',
      color:'pink'
  },
]



  constructor() { }

  ngOnInit(): void {
  }

}
