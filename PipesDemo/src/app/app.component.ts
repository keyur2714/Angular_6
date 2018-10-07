import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes Demo';

  today = new Date();

  employee1 = {
    name: "Keyur",
    city: "surat",
    mobileNo: "7387029671",
    gender: "M",
    accountNo: "123456789",
    status: "Active"
  };
  employee2 = {
    name: "Ami",
    city: "surat",
    mobileNo: "7387029123",
    gender: "F",
    accountNo: "234500011",
    status: "InActive"
  };

  add(num1,num2):number{
    return num1 + num2;
  }
}
