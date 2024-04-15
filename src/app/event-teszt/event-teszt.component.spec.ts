import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTesztComponent } from './event-teszt.component';

describe('EventTesztComponent', () => {
  let component: EventTesztComponent;
  let fixture: ComponentFixture<EventTesztComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventTesztComponent]
    });
    fixture = TestBed.createComponent(EventTesztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
