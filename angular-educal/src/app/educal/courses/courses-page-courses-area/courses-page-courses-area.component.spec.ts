import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageCoursesAreaComponent } from './courses-page-courses-area.component';

describe('CoursesPageCoursesAreaComponent', () => {
  let component: CoursesPageCoursesAreaComponent;
  let fixture: ComponentFixture<CoursesPageCoursesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageCoursesAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageCoursesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
