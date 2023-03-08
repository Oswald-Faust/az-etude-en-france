import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsMainComponent } from './event-details-main.component';

describe('EventDetailsMainComponent', () => {
  let component: EventDetailsMainComponent;
  let fixture: ComponentFixture<EventDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
