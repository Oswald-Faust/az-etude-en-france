import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from './educal/home-three/home-three-main/home-three.component';
import { BlogComponent } from './educal/blog/blog-main/blog.component';
import { BlogDetailsMainComponent } from './educal/blog-details/blog-details-main/blog-details-main.component';
import { AboutMainComponent } from './educal/about/about-main/about-main.component';
import { SignInMainComponent } from './educal/sign-in/sign-in-main/sign-in-main.component';
import { SignUpMainComponent } from './educal/sign-up/sign-up-main/sign-up-main.component';
import { ErrorPageComponent } from './educal/error-page/error-page.component';
import { ContactMainComponent } from './educal/contact/contact-main/contact-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeThreeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsMainComponent
  },
  {
    path: 'about',
    component: AboutMainComponent
  },
  {
    path: 'sign-in',
    component: SignInMainComponent
  },
  {
    path: 'sign-up',
    component: SignUpMainComponent
  },
  {
    path: 'dashboard',
    component: AboutMainComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'contact',
    component: ContactMainComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
