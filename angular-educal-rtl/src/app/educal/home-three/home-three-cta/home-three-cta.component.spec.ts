import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreeCtaComponent } from './home-three-cta.component';

describe('HomeThreeCtaComponent', () => {
  let component: HomeThreeCtaComponent;
  let fixture: ComponentFixture<HomeThreeCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThreeCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreeCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
