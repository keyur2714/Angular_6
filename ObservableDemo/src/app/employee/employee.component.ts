import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedEmployee: Employee = new Employee();
  empList: Employee[] = [];
  employeeService : EmployeeService = new EmployeeService();

  constructor() { }

  ngOnInit() {
    //this.empList = this.employeeService.getEmployeeList();
    this.employeeService.getEmployeeListObservable().subscribe(
      (empList:Employee[])=>{
        this.empList = empList;    
      }
    )
    this.employeeService.getEmployeeListPromise().then((empList:Employee[])=>{
      this.empList = empList;
    }).catch((error:any)=>{
      console.log(error);
    })
  }
  currentEmployee(emp){
    this.selectedEmployee = emp;
  }
}
