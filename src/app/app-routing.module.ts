import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoanCalculatorContainerComponent } from './loan-calculator-container/loan-calculator-container.component';
import { PersonalDetailsComponent } from './loan-calculator-container/personal-details/personal-details.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'loan', component: LoanCalculatorContainerComponent },
  { path: 'personal', component: PersonalDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }