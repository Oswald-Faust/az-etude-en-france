import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTwoComponent } from './blog-two.component';

describe('BlogTwoComponent', () => {
  let component: BlogTwoComponent;
  let fixture: ComponentFixture<BlogTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
