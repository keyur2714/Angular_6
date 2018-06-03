import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
