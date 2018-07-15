import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactive Forms Demo';

  result:number = 0;

  ngOnInit(){
    this.calculatorForm.setValue({num1:11,num2:12});
    this.calculatorForm.patchValue({num2:55});        
  }

  calculatorForm = new FormGroup({
    num1: new FormControl(0,[Validators.required,Validators.minLength(2)]),
    num2: new FormControl(0,[Validators.required,Validators.minLength(2)])
  });

  calculate(){
    console.log(this.calculatorForm.value);
    console.log(this.calculatorForm.controls["num1"].value);
    console.log(this.calculatorForm.controls["num2"].value);
    console.log(this.calculatorForm.get("num1").touched);
    this.result = parseInt(this.calculatorForm.get("num1").value) + parseInt(this.calculatorForm.get("num2").value);
  }

  resetForm(){
    this.calculatorForm.reset();
    this.calculatorForm.setValue({num1:0,num2:0});
    this.calculatorForm.get('num1').setValidators(Validators.required);    
  }

}
