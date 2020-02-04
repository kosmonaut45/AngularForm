import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanCalculatorContainerComponent } from './loan-calculator-container/loan-calculator-container.component';
import { PersonalDetailsComponent } from './loan-calculator-container/personal-details/personal-details.component';
import { LoanDetailsComponent } from './loan-calculator-container/loan-details/loan-details.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { SummaryComponent } from './loan-calculator-container/summary/summary.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'; 
import { AppRoutingModule } from './app-routing.module'; 

import {MatStepperModule} from '@angular/material/stepper'; 

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoanCalculatorContainerComponent,
    PersonalDetailsComponent,
    LoanDetailsComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule,
    AppRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
