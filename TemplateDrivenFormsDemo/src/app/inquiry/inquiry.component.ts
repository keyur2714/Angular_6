import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';
import { Course } from './course.model';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  inquiry: Inquiry = new Inquiry();
  courses = [
    {
      "id":1,
      "name":"Angular",
      "description":"UI Technology",
      "fees": 12000
    },
    {
      "id":2,
      "name":"Java",
      "description":"Multi Purpose",
      "fees": 15000
    },  
    {
      "id":3,
      "name":"Big Data",
      "description":"Data Analytics",
      "fees": 20000
    }
  ];
  isSubmitted = false;

  constructor() { }

  ngOnInit() {
    this.inquiry.gender = "F";
    this.inquiry.course = this.courses[0];
  }

  save(frm){
    console.log(this.inquiry.name);
    console.log(this.inquiry.course);
    console.log(this.inquiry.gender);
    this.isSubmitted = true;
  }
}
