import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTitleComponent } from './event-details-title.component';

describe('EventDetailsTitleComponent', () => {
  let component: EventDetailsTitleComponent;
  let fixture: ComponentFixture<EventDetailsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
