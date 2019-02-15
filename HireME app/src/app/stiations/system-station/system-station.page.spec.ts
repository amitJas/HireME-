import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStationPage } from './system-station.page';

describe('SystemStationPage', () => {
  let component: SystemStationPage;
  let fixture: ComponentFixture<SystemStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
