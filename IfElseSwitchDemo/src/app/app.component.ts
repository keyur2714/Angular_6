import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgIf Esle Switch Demo';
  age: number = 1;
  percentage: number = 0;
  grade: string = '';

  calculateGrade(){
    let per= this.percentage;
    let grade = '';
    if(per>=70)
      grade = 'Distinction';
    else if(per >= 60){
      grade = 'First';
    }else if(per >= 50){
      grade = 'Second';
    }else if(per >= 40){
      grade = 'PASS';
    }else{
      grade = 'FAIL';
    }
    this.grade = grade;
  }
}
