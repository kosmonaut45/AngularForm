import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataHandlerService } from 'src/app/data-handler.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  job: string;
  form;
  jobAvailable: boolean;
  contractType: string;
  jobTime: Date;
  dataHandler: DataHandlerService;
  dataGroup;
  buttonIsDisabled: boolean;

  constructor(private formBuilder: FormBuilder, dataHandler: DataHandlerService) {
    this.dataHandler = dataHandler;
    this.form = this.formBuilder.group({
      name: '',
      surname: '',
      personalNumber: '',
      education: '',
      position: '',
      jobType: '',
      jobTime: '',
      jobContractType: '',
      date: '',
      family: '',
      telephoneNumber: ''
    })
    this.buttonIsDisabled = true;
  }

  ngOnInit() {
    this.dataHandler.formData.subscribe(data => {
      this.dataGroup = data;
    })
  }

  checkJob() {
    if (this.job === "job8" || this.job === "job9" || this.job === "job10" || this.job === "job11") {
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    this.dataGroup = { ...this.dataGroup, ...this.form.value }
    console.log(this.dataGroup);
    this.dataHandler.formData.next(this.dataGroup);
  }
  isDisabled(){
    if(!this.form.value.name || !this.form.value.surname || !this.form.value.personalNumber || !this.form.value.education || !this.form.value.education || !this.form.value.position || !this.form.value.family || !this.form.value.telephoneNumber) return true;
    else return false;
  }
}
