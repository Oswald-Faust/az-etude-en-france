import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-area',
  templateUrl: './coupon-area.component.html',
  styleUrls: ['./coupon-area.component.scss']
})
export class CouponAreaComponent implements OnInit {

  showLogin : boolean = false;
  showCoupon : boolean = false;
  handleLogin () {
    this.showLogin = !this.showLogin;
  }
  handleShowCoupon () {
    this.showCoupon = !this.showCoupon;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
