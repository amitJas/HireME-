import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStationPage } from './hr-station.page';

describe('HrStationPage', () => {
  let component: HrStationPage;
  let fixture: ComponentFixture<HrStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
