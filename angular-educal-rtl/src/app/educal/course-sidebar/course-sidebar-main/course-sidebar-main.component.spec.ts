import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSidebarMainComponent } from './course-sidebar-main.component';

describe('CourseSidebarMainComponent', () => {
  let component: CourseSidebarMainComponent;
  let fixture: ComponentFixture<CourseSidebarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSidebarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSidebarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
