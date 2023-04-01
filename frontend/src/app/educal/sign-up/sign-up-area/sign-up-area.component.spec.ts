import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAreaComponent } from './sign-up-area.component';

describe('SignUpAreaComponent', () => {
  let component: SignUpAreaComponent;
  let fixture: ComponentFixture<SignUpAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
