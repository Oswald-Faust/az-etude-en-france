import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,EffectFade } from "swiper";

SwiperCore.use([Autoplay,EffectFade]);

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  sliderNavData = [
    {
      id: 1,
      img: 'assets/img/slider/nav/slider-nav-4.jpg',
      title: "Logement",
      subtitle: "Trouvez votre logement !",
      bgColor: "orange-bg",
    },
    {
      id: 2,
      img: 'assets/img/slider/nav/slider-nav-1.jpg',
      title: "Visa Personalisé",
      subtitle: "Facilitation de demande",
      bgColor: "blue-bg",
    },
    {
      id: 3,
      img: 'assets/img/slider/nav/slider-nav-2.jpg',
      title: "Assurances sociales",
      subtitle: "Obtenez vos attestations",
      bgColor: "pink-bg",
    },
    {
      id: 4,
      img: 'assets/img/slider/nav/slider-nav-3.jpg',
      title: "Attestations de logement",
      subtitle: "Béneficiez de vos documents",
      bgColor: "green-bg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
