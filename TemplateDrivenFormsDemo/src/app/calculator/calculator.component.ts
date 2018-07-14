import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  submit(frm){
    console.log(frm);
    console.log(frm.value);
    console.log(frm.controls["num1"].value);
    console.log(frm.controls["num2"].value);
    this.result = parseInt(frm.controls["num1"].value)+parseInt(frm.controls["num2"].value);
  }
}
