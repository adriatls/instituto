import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsEventsComponent } from './actions-events.component';

describe('ActionsEventsComponent', () => {
  let component: ActionsEventsComponent;
  let fixture: ComponentFixture<ActionsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsEventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
