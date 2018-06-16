import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  columnHeaderList: string[]=["Id","Name","Salary","Dept #"];

  columnList: string[] = ["empId","name","salary","deptId"];

  empList: Employee[]=[
    {
      "empId": 1,
      "name": "keyur",
      "salary": 12121,
      "deptId": 10
    },
    {
      "empId": 2,
      "name": "denish",
      "salary": 12121,
      "deptId": 20
    },
    {
      "empId": 3,
      "name": "vinit",
      "salary": 121121,
      "deptId": 30
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
