import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { SwiperModule } from 'swiper/angular';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';

import { HeaderComponent } from './home/header/header.component';
import { HeroSliderComponent } from './home/hero-slider/hero-slider.component';
import { HomeCtaComponent } from './home/home-cta/home-cta.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { HomeCoursesComponent } from './home/home-courses/home-courses.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { AboutAreaComponent } from './about/about-area/about-area.component';
import { BrandAreaComponent } from './home/brand-area/brand-area.component';
import { WhyAreaComponent } from './home/why-area/why-area.component';
import { BlogComponent } from './home/blog/blog.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerAreaComponent } from './common/banner-area/banner-area.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { BlogAreaComponent } from './blog/blog-area/blog-area.component';
import { CtaComponent } from './common/cta/cta.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { BlogDetailsMainComponent } from './blog-details/blog-details-main/blog-details-main.component';
import { BlogDetailsAreaComponent } from './blog-details/blog-details-area/blog-details-area.component';
import { BlogDetailsTitleComponent } from './blog-details/blog-details-title/blog-details-title.component';
import { SignUpMainComponent } from './sign-up/sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up/sign-up-area/sign-up-area.component';
import { SignInAreaComponent } from './sign-in/sign-in-area/sign-in-area.component';
import { SignInMainComponent } from './sign-in/sign-in-main/sign-in-main.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderTwoComponent } from './common/header-two/header-two.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login'

@NgModule({
  declarations: [
    HeaderComponent,
    HeroSliderComponent,
    HomeCtaComponent,
    HomeTestimonialComponent,
    HomeCoursesComponent,
    HomeMainComponent,
    AboutMainComponent,
    AboutAreaComponent,
    BrandAreaComponent,
    WhyAreaComponent,
    BlogComponent,
    FooterComponent,
    BannerAreaComponent,
    BlogMainComponent,
    BlogAreaComponent,
    CtaComponent,
    ContactMainComponent,
    ContactAreaComponent,
    ContactInfoComponent,
    BlogDetailsMainComponent,
    BlogDetailsAreaComponent,
    BlogDetailsTitleComponent,
    SignUpMainComponent,
    SignUpAreaComponent,
    SignInAreaComponent,
    SignInMainComponent,
    ErrorPageComponent,
    HeaderTwoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '873191840760-navh9r89a5fp3pbheqdc32rc02001cmo.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('163228276621357')
          }
        ],
        onError: (err:any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EducalModule { }
