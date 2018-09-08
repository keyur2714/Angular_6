import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { MaskPipe } from './mask.pipe';
import { RepeatePipe } from './repeate.pipe';
import { StatusConvertPipe } from './status-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    MaskPipe,
    RepeatePipe,
    StatusConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
