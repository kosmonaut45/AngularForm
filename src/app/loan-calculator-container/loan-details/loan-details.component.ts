import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../data-handler.service';
import { FormFields } from 'src/app/app.const';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  term: number;
  amount: number;
  paymentDay: number;
  salary: number;
  dataHandler: DataHandlerService;
  formFields: FormFields;
  buttonIsDisabled: boolean;

  constructor(dataHandler: DataHandlerService) {
    this.dataHandler = dataHandler;
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return value + 'EUR';
    }
    return value + 'mėn';
  }

  ngOnInit() {

    this.dataHandler.formData.subscribe(data => {
      this.term = data.term;
      this.amount = data.amount;
      this.paymentDay = data.paymentDay;
      this.salary = data.salary;
      this.formFields = data;
    });
    this.buttonIsDisabled = true;

  }

  onNext() {
    this.formFields = {
      term: this.term,
      amount: this.amount,
      paymentDay: this.paymentDay,
      salary: this.salary,
      name: undefined,
      surname: undefined,
      personalNumber: undefined,
      education: undefined,
      position: undefined,
      jobType: undefined,
      jobTime: undefined,
      jobContractType: undefined,
      date: undefined,
      family: undefined,
      telephoneNumber: undefined
    };
    this.dataHandler.formData.next(this.formFields);
  }

  isDisabled(){
    if(this.term === undefined || this.paymentDay === undefined || this.amount === undefined || this.salary === undefined) return true;
    else return false;
  }
}