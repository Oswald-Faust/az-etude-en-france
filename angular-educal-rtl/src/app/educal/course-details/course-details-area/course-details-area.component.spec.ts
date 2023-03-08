import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsAreaComponent } from './course-details-area.component';

describe('CourseDetailsAreaComponent', () => {
  let component: CourseDetailsAreaComponent;
  let fixture: ComponentFixture<CourseDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
