import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBlockDirective } from './my-block.directive';
import { OnlyAlphaDirective } from './only-alpha.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyBlockDirective,
    OnlyAlphaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
