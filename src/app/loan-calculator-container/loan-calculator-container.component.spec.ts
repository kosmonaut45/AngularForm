import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalculatorContainerComponent } from './loan-calculator-container.component';

describe('LoanCalculatorContainerComponent', () => {
  let component: LoanCalculatorContainerComponent;
  let fixture: ComponentFixture<LoanCalculatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCalculatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
