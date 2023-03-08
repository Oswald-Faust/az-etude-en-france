import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAreaComponent } from './instructor-area.component';

describe('InstructorAreaComponent', () => {
  let component: InstructorAreaComponent;
  let fixture: ComponentFixture<InstructorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
