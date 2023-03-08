import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListAreaComponent } from './courses-list-area.component';

describe('CoursesListAreaComponent', () => {
  let component: CoursesListAreaComponent;
  let fixture: ComponentFixture<CoursesListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
