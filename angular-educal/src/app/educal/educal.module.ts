import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './Home/Home/home.component';
import { HeaderOneComponent } from './common/header-one/header-one.component';
import { HeroComponent } from './Home/hero/hero.component';
import { BannerAreaComponent } from './Home/banner-area/banner-area.component';
import { CtaComponent } from './Home/cta/cta.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeTwoComponent } from './home-two/home-two-main/home-two.component';
import { HeaderTwoComponent } from './common/header-two/header-two.component';
import { ServiceAreaComponent } from './home-two/service-area/service-area.component';
import { AboutAreaComponent } from './common/about-area/about-area.component';
import { WhyAreaComponent } from './home-two/why-area/why-area.component';
import { WhatAreaComponent } from './home-two/what-area/what-area.component';
import { CounterAreaComponent } from './home-two/counter-area/counter-area.component';
import { TestimonialAreaComponent } from './home-two/testimonial-area/testimonial-area.component';
import { CtaAreaComponent } from './home-two/cta-area/cta-area.component';
import { FooterTwoComponent } from './home-two/footer-two/footer-two.component';
import { HomeThreeComponent } from './home-three/home-three-main/home-three.component';
import { HeaderThreeComponent } from './home-three/header-three/header-three.component';
import { HeroSliderComponent } from './home-three/hero-slider/hero-slider.component';
import { BrandAreaComponent } from './common/brand-area/brand-area.component';
import { HomeThreeCoursesComponent } from './home-three/home-three-courses/home-three-courses.component';
import { HomeThreeCtaComponent } from './home-three/home-three-cta/home-three-cta.component';
import { HomeThreeTestimonialComponent } from './home-three/home-three-testimonial/home-three-testimonial.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { BlogComponent } from './blog/blog-main/blog.component';
import { BlogSidebarComponent } from './common/blog-sidebar/blog-sidebar.component';
import { BlogAreaComponent } from './blog/blog-area/blog-area.component';
import { BlogDetailsMainComponent } from './blog-details/blog-details-main/blog-details-main.component';
import { BlogDetailsTitleComponent } from './blog-details/blog-details-title/blog-details-title.component';
import { BlogDetailsAreaComponent } from './blog-details/blog-details-area/blog-details-area.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { SignInMainComponent } from './sign-in/sign-in-main/sign-in-main.component';
import { SignInAreaComponent } from './sign-in/sign-in-area/sign-in-area.component';
import { SignUpMainComponent } from './sign-up/sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up/sign-up-area/sign-up-area.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { BlogTwoComponent } from './home-two/blog-two/blog-two.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderOneComponent,
    HeroComponent,
    BannerAreaComponent,
    CtaComponent,
    FooterComponent,
    HomeTwoComponent,
    HeaderTwoComponent,
    ServiceAreaComponent,
    AboutAreaComponent,
    WhyAreaComponent,
    WhatAreaComponent,
    CounterAreaComponent,
    TestimonialAreaComponent,
    CtaAreaComponent,
    FooterTwoComponent,
    HomeThreeComponent,
    HeaderThreeComponent,
    HeroSliderComponent,
    BrandAreaComponent,
    HomeThreeCoursesComponent,
    HomeThreeCtaComponent,
    HomeThreeTestimonialComponent,
    PaginationComponent,
    BlogComponent,
    BlogSidebarComponent,
    BlogAreaComponent,
    BlogDetailsMainComponent,
    BlogDetailsTitleComponent,
    BlogDetailsAreaComponent,
    AboutMainComponent,
    SignInMainComponent,
    SignInAreaComponent,
    SignUpMainComponent,
    SignUpAreaComponent,
    ErrorPageComponent,
    ContactMainComponent,
    ContactAreaComponent,
    ContactInfoComponent,
    BlogTwoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EducalModule { }
