import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonialComponent } from './home-testimonial.component';

describe('HomeTestimonialComponent', () => {
  let component: HomeTestimonialComponent;
  let fixture: ComponentFixture<HomeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
