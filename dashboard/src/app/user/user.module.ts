import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { OffersComponent } from './dashboard/offers/offers.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { WalletComponent } from './dashboard/wallet/wallet.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardMainComponent,
    OffersComponent,
    ProfileComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
