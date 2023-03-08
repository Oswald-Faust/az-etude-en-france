import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-area',
  templateUrl: './instructor-area.component.html',
  styleUrls: ['./instructor-area.component.scss']
})
export class InstructorAreaComponent implements OnInit {

  instructorData = [
    {
        id:1,
        img:'assets/img/teacher/teacger-1.jpg',
        name:'Lillian Walsh,',
        title:'CO Founder',
    },
    {
        id:2,
        img:'assets/img/teacher/teacher-2.jpg',
        name:'Kelly Franklin,',
        title:'Designer',
    },
    {
        id:3,
        img:'assets/img/teacher/teacher-3.jpg',
        name:'Hilary Ouse,',
        title:'Marketer',
    },
    {
        id:4,
        img:'assets/img/teacher/teacher-4.jpg',
        name:'Lillian Walsh,',
        title:'CO Founder',
    },
    {
        id:5,
        img:'assets/img/teacher/teacher-5.jpg',
        name:'Shahnewaz,',
        title:'Web Developer',
    },
    {
        id:6,
        img:'assets/img/teacher/teacher-6.jpg',
        name:'Nicola Tesla,,',
        title:'Engineer',
    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
