import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemEntryComponent } from './menu-item/menu-item-entry/menu-item-entry.component';
import { MenuItemService } from './menu-item/menu-item.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuItemEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
