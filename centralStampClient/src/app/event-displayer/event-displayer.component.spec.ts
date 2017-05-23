import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDisplayerComponent } from './event-displayer.component';

describe('EventDisplayerComponent', () => {
  let component: EventDisplayerComponent;
  let fixture: ComponentFixture<EventDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
