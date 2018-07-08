import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  inquiry: Inquiry = new Inquiry();
  isSubmitted = false;

  constructor() { }

  ngOnInit() {
    this.inquiry.gender = "F";
    this.inquiry.course = "ANGULAR";
  }

  save(frm){
    console.log(this.inquiry.name);
    console.log(this.inquiry.course);
    console.log(this.inquiry.gender);
    this.isSubmitted = true;
  }
}
