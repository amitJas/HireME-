import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardPage } from './candidate-card.page';

describe('CandidateCardPage', () => {
  let component: CandidateCardPage;
  let fixture: ComponentFixture<CandidateCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
