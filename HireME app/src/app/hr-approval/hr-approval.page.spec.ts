import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrApprovalPage } from './hr-approval.page';

describe('HrApprovalPage', () => {
  let component: HrApprovalPage;
  let fixture: ComponentFixture<HrApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrApprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
