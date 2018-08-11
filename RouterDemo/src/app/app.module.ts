import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    StudentListComponent,
    StudentDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {"path":'',component:HomeComponent},      
      {"path":"home",component: HomeComponent},
      {"path":"aboutus",component: AboutusComponent},
      {"path":"contactus",component: ContactusComponent},
      {"path":"student-list",component: StudentListComponent},
      {"path":"detail/:id",component: StudentDetailComponent},
      {"path":"**",component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
