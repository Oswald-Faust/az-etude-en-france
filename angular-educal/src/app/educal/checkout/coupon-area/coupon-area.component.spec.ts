import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAreaComponent } from './coupon-area.component';

describe('CouponAreaComponent', () => {
  let component: CouponAreaComponent;
  let fixture: ComponentFixture<CouponAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
