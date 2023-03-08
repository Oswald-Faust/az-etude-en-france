import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDetailsAreaComponent } from './instructor-details-area.component';

describe('InstructorDetailsAreaComponent', () => {
  let component: InstructorDetailsAreaComponent;
  let fixture: ComponentFixture<InstructorDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDetailsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
