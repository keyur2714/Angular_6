import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FailureMessageComponent } from './failure-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    FailureMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,SuccessMessageComponent]
})
export class AppModule { }
