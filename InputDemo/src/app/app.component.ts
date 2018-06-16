import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Input Demo';
  successMessage = 'Success Message...!';
  failureMessage = 'Failure Message...!';

  customeMessageList: string[] = [
    "Hi",
    "Hello",
    "How Are You?",
    "Good Morning...!",
    "Good Afternoon...!",
    "Good Evening"
  ];


  

}
