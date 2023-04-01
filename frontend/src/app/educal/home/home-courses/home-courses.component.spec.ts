import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoursesComponent } from './home-courses.component';

describe('HomeCoursesComponent', () => {
  let component: HomeCoursesComponent;
  let fixture: ComponentFixture<HomeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
