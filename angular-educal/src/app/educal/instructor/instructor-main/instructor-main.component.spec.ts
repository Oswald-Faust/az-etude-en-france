import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorMainComponent } from './instructor-main.component';

describe('InstructorMainComponent', () => {
  let component: InstructorMainComponent;
  let fixture: ComponentFixture<InstructorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
