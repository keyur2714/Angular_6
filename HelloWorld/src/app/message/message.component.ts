import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message:string = "Good Afternoon!";

  constructor() { 
    console.log("Always First...!");
  }

  ngOnInit() {
    console.log("Always After Constructor...!");
    this.message = "How Are You?";
  }


}
