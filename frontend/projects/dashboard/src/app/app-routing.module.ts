import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './user/dashboard/dashboard-main/dashboard-main.component';
import { OffersComponent } from './user/dashboard/offers/offers.component';
import { ProfileComponent } from './user/dashboard/profile/profile.component';
import { WalletComponent } from './user/dashboard/wallet/wallet.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardMainComponent
  },
  {
    path:'offers',
    component: OffersComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'wallet',
    component: WalletComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
