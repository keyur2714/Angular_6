import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  result: number = 0;
  flag: boolean = true;
  mytable: string = "mytable";

  constructor() { 
    console.log("Always First:::");
  }

  ngOnInit() {
    console.log("Always After Coonstructor:::");
  }

  add(num1,num2):void{
    console.log(num1);
    console.log(num2);
    this.result = parseInt(num1) + parseInt(num2);
  }

  sub(num1,num2):void{
    console.log(num1);
    console.log(num2);
    this.result = parseInt(num1) - parseInt(num2);
  }

  mul(num1,num2):void{
    console.log(num1);
    console.log(num2);
    this.result = parseInt(num1) * parseInt(num2);
  }

  div(num1,num2):void{
    console.log(num1);
    console.log(num2);
    this.result = parseInt(num1) / parseInt(num2);
  }

  checkValid(num1,num2):void{
    if(parseInt(num1) > 0 && parseInt(num2) > 0)
      this.flag = false;
  }

}
