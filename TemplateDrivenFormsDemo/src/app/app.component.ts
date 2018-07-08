import { Component,ViewChild,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Forms';

  @ViewChild("f")
  frm: NgForm;

  submit(){
    console.log(this.frm);    
    console.log(this.frm.value);    
    console.log(this.frm.controls["name"].valid);   
    if(this.frm.valid){
      console.log("valid form");
    }else{
      console.log("In valid form");
    }
  }
}
