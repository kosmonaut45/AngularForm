import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/data-handler.service';

export interface Figure {
  description: string;
  data: any;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  dataHandler: DataHandlerService;
  finalData;
  figures: Figure[]

  constructor(dataHandler: DataHandlerService) {
    this.dataHandler = dataHandler;
  }

  ngOnInit() {
    this.dataHandler.formData.subscribe(data => {
      this.finalData = data;
      console.log(data)

      this.figures = [
        { description: 'Paskolos suma', data: this.finalData.amount + " EUR" },
        { description: 'Paskolos terminas', data: this.finalData.term + " mėn" },
        { description: 'Mėnesinis atlyginimas atskaičius mokesčius', data: this.finalData.salary + " EUR" },
        { description: 'Vardas, pavardė', data: this.finalData.name + ' ' + this.finalData.surname },
        { description: 'Telefonas', data: this.finalData.telephoneNumber },
      ];
    })
  }

  displayedColumns: string[] = ['description', 'data'];


}
