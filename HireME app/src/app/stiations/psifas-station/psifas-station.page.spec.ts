import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsifasStationPage } from './psifas-station.page';

describe('PsifasStationPage', () => {
  let component: PsifasStationPage;
  let fixture: ComponentFixture<PsifasStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsifasStationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsifasStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
