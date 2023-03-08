import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreeTestimonialComponent } from './home-three-testimonial.component';

describe('HomeThreeTestimonialComponent', () => {
  let component: HomeThreeTestimonialComponent;
  let fixture: ComponentFixture<HomeThreeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThreeTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
