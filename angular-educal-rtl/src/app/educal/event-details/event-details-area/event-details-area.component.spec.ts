import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsAreaComponent } from './event-details-area.component';

describe('EventDetailsAreaComponent', () => {
  let component: EventDetailsAreaComponent;
  let fixture: ComponentFixture<EventDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
