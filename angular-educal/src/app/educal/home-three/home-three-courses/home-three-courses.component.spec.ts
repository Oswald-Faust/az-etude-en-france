import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreeCoursesComponent } from './home-three-courses.component';

describe('HomeThreeCoursesComponent', () => {
  let component: HomeThreeCoursesComponent;
  let fixture: ComponentFixture<HomeThreeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThreeCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
