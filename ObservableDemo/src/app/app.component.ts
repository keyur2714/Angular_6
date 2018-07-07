import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable Demo';
  generatedNumber : number = 0;
  ngOnInit(){
    let numbers = Observable.interval(10000);
    console.log(numbers);
    numbers.subscribe(
      (num:number)=>{
        if(num != 10){
         console.log(num);  
         this.generatedNumber = num;
        }      
      },
      (error)=>{

      }
    )
  }

}
