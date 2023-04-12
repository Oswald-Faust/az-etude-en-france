import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './educal/home/home-main/home-main.component';
import { AboutMainComponent } from './educal/about/about-main/about-main.component';
import { BlogMainComponent } from './educal/blog/blog-main/blog-main.component';
import { ContactMainComponent } from './educal/contact/contact-main/contact-main.component';
import { BlogDetailsMainComponent } from './educal/blog-details/blog-details-main/blog-details-main.component';
import { SignUpMainComponent } from './educal/sign-up/sign-up-main/sign-up-main.component';
import { SignInMainComponent } from './educal/sign-in/sign-in-main/sign-in-main.component';
import { ErrorPageComponent } from './educal/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent
  },
  {
    path: 'about',
    component: AboutMainComponent
  },
  {
    path: 'blog',
    component: BlogMainComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsMainComponent
  },
  {
    path: 'contact',
    component: ContactMainComponent
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
    loadChildren: () => import('projects/dashboard/src/app/app.module').then(m => m.AppModule)
   },
   {
     path: 'error',
     component: ErrorPageComponent
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
