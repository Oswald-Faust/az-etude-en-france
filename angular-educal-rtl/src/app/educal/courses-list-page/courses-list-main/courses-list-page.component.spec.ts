import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListPageComponent } from './courses-list-page.component';

describe('CoursesListPageComponent', () => {
  let component: CoursesListPageComponent;
  let fixture: ComponentFixture<CoursesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
