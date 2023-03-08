import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home-three-testimonial',
  templateUrl: './home-three-testimonial.component.html',
  styleUrls: ['./home-three-testimonial.component.scss']
})
export class HomeThreeTestimonialComponent implements OnInit {

  sliderData = [
    {
       id:1,
       img:'assets/img/testimonial/home-3/testi-1.jpg'
    },
    {
       id:2,
       img:'assets/img/testimonial/home-3/testi-2.jpg'
    },
    {
       id:3,
       img:'assets/img/testimonial/home-3/testi-3.jpg'
    },
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
