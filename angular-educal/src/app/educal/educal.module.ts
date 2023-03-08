import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './Home/Home/home.component';
import { HeaderOneComponent } from './common/header-one/header-one.component';
import { HeroComponent } from './Home/hero/hero.component';
import { CategoryComponent } from './Home/category/category.component';
import { BannerAreaComponent } from './Home/banner-area/banner-area.component';
import { CoursesComponent } from './Home/courses/courses.component';
import { EventsComponent } from './Home/events/events.component';
import { PricingComponent } from './Home/pricing/pricing.component';
import { CtaComponent } from './Home/cta/cta.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeTwoComponent } from './home-two/home-two-main/home-two.component';
import { HeaderTwoComponent } from './common/header-two/header-two.component';
import { HeroAreaComponent } from './home-two/hero-area/hero-area.component';
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
import { PopularTeachersComponent } from './home-three/popular-teachers/popular-teachers.component';
import { HomeThreeCtaComponent } from './home-three/home-three-cta/home-three-cta.component';
import { HomeThreeTestimonialComponent } from './home-three/home-three-testimonial/home-three-testimonial.component';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { CourseGridComponent } from './common/course-grid/course-grid.component';
import { CourseListComponent } from './common/course-list/course-list.component';
import { CoursesPageCoursesAreaComponent } from './courses/courses-page-courses-area/courses-page-courses-area.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { CoursesListPageComponent } from './courses-list-page/courses-list-main/courses-list-page.component';
import { CoursesListAreaComponent } from './courses-list-page/courses-list-area/courses-list-area.component';
import { CourseSidebarMainComponent } from './course-sidebar/course-sidebar-main/course-sidebar-main.component';
import { CourseSidebarAreaComponent } from './course-sidebar/course-sidebar-area/course-sidebar-area.component';
import { RelatedCourseComponent } from './common/related-course/related-course.component';
import { CourseDetailsComponent } from './course-details/course-details-main/course-details.component';
import { CourseDetailsAreaComponent } from './course-details/course-details-area/course-details-area.component';
import { BlogComponent } from './blog/blog-main/blog.component';
import { BlogSidebarComponent } from './common/blog-sidebar/blog-sidebar.component';
import { BlogAreaComponent } from './blog/blog-area/blog-area.component';
import { BlogDetailsMainComponent } from './blog-details/blog-details-main/blog-details-main.component';
import { BlogDetailsTitleComponent } from './blog-details/blog-details-title/blog-details-title.component';
import { BlogDetailsAreaComponent } from './blog-details/blog-details-area/blog-details-area.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { InstructorMainComponent } from './instructor/instructor-main/instructor-main.component';
import { InstructorAreaComponent } from './instructor/instructor-area/instructor-area.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details-main/instructor-details.component';
import { InstructorDetailsAreaComponent } from './instructor-details/instructor-details-area/instructor-details-area.component';
import { EventDetailsMainComponent } from './event-details/event-details-main/event-details-main.component';
import { EventDetailsAreaComponent } from './event-details/event-details-area/event-details-area.component';
import { EventDetailsTitleComponent } from './event-details/event-details-title/event-details-title.component';
import { CartComponent } from './cart/cart-main/cart.component';
import { CartAreaComponent } from './cart/cart-area/cart-area.component';
import { WishlistMainComponent } from './wishlist/wishlist-main/wishlist-main.component';
import { WishlistAreaComponent } from './wishlist/wishlist-area/wishlist-area.component';
import { CheckoutMainComponent } from './checkout/checkout-main/checkout-main.component';
import { CheckoutAreaComponent } from './checkout/checkout-area/checkout-area.component';
import { CouponAreaComponent } from './checkout/coupon-area/coupon-area.component';
import { SignInMainComponent } from './sign-in/sign-in-main/sign-in-main.component';
import { SignInAreaComponent } from './sign-in/sign-in-area/sign-in-area.component';
import { SignUpMainComponent } from './sign-up/sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up/sign-up-area/sign-up-area.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { BlogTwoComponent } from './home-two/blog-two/blog-two.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderOneComponent,
    HeroComponent,
    CategoryComponent,
    BannerAreaComponent,
    CoursesComponent,
    EventsComponent,
    PricingComponent,
    CtaComponent,
    FooterComponent,
    HomeTwoComponent,
    HeaderTwoComponent,
    HeroAreaComponent,
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
    PopularTeachersComponent,
    HomeThreeCtaComponent,
    HomeThreeTestimonialComponent,
    CoursesPageComponent,
    BreadcrumbComponent,
    CourseGridComponent,
    CourseListComponent,
    CoursesPageCoursesAreaComponent,
    PaginationComponent,
    CoursesListPageComponent,
    CoursesListAreaComponent,
    CourseSidebarMainComponent,
    CourseSidebarAreaComponent,
    RelatedCourseComponent,
    CourseDetailsComponent,
    CourseDetailsAreaComponent,
    BlogComponent,
    BlogSidebarComponent,
    BlogAreaComponent,
    BlogDetailsMainComponent,
    BlogDetailsTitleComponent,
    BlogDetailsAreaComponent,
    AboutMainComponent,
    InstructorMainComponent,
    InstructorAreaComponent,
    InstructorDetailsComponent,
    InstructorDetailsAreaComponent,
    EventDetailsMainComponent,
    EventDetailsAreaComponent,
    EventDetailsTitleComponent,
    CartComponent,
    CartAreaComponent,
    WishlistMainComponent,
    WishlistAreaComponent,
    CheckoutMainComponent,
    CheckoutAreaComponent,
    CouponAreaComponent,
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EducalModule { }
