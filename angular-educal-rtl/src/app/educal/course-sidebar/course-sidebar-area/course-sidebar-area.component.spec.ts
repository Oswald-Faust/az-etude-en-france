import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSidebarAreaComponent } from './course-sidebar-area.component';

describe('CourseSidebarAreaComponent', () => {
  let component: CourseSidebarAreaComponent;
  let fixture: ComponentFixture<CourseSidebarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSidebarAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSidebarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
