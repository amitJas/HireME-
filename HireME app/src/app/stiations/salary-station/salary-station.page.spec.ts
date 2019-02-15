import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStationPage } from './salary-station.page';

describe('SalaryStationPage', () => {
  let component: SalaryStationPage;
  let fixture: ComponentFixture<SalaryStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
