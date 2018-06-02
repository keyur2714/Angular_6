import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FriendsListComponent } from './friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SuccessMessageComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
