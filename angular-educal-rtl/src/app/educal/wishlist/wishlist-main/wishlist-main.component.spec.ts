import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistMainComponent } from './wishlist-main.component';

describe('WishlistMainComponent', () => {
  let component: WishlistMainComponent;
  let fixture: ComponentFixture<WishlistMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
