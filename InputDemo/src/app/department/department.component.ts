import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  deptList: Department[] = [];

  headerColumnList: string[] = ["Dept Name"];

  columnList: string[] = ["deptName"];

  constructor() { }

  ngOnInit() {
    let dept1 = new Department();
    dept1.deptId = 10;
    dept1.deptName = "HR";

    let dept2 = new Department();
    dept2.deptId = 20;
    dept2.deptName = "IT";  

    let dept3 = new Department();
    dept3.deptId = 30;
    dept3.deptName = "SALES";

    this.deptList.push(dept1);
    this.deptList.push(dept2);
    this.deptList.push(dept3);

  }

}
