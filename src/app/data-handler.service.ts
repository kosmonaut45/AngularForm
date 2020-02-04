import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { FormFields } from './app.const';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public formData = new BehaviorSubject({
    term: undefined,
    amount: undefined,
    paymentDay: undefined,
    salary: undefined,
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
  });

  constructor() { }
}
