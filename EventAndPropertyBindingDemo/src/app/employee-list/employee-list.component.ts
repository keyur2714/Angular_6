import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empNameList : string[] = ["keyur","vinit"];

  constructor() { }

  ngOnInit() {
    this.empNameList.push("denish");
    for(let empName of this.empNameList){
      console.log(empName);
    }
  }

}
