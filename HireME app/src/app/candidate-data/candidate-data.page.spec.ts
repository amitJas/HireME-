import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDataPage } from './candidate-data.page';

describe('CandidateDataPage', () => {
  let component: CandidateDataPage;
  let fixture: ComponentFixture<CandidateDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
