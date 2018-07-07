import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural Directive Demo';

  flag:boolean = false;

  toggleFlag(){
    this.flag = !this.flag;
  }
}
