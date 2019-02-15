import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStationPage } from './interview-station.page';

describe('InterviewStationPage', () => {
  let component: InterviewStationPage;
  let fixture: ComponentFixture<InterviewStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
