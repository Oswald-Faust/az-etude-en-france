import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistAreaComponent } from './wishlist-area.component';

describe('WishlistAreaComponent', () => {
  let component: WishlistAreaComponent;
  let fixture: ComponentFixture<WishlistAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
