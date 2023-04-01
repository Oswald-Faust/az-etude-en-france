import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsTitleComponent } from './blog-details-title.component';

describe('BlogDetailsTitleComponent', () => {
  let component: BlogDetailsTitleComponent;
  let fixture: ComponentFixture<BlogDetailsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
