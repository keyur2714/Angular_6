import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("msg")
  message : string = "Hello Good Morning...!";

  @Input()
  color: string = "green";

  constructor() { }

  ngOnInit() {
    console.log(this.color);
  }

}
