import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  names : string[] = ["keyur","denish","vinit"];

  person = {
    name: "keyur",
    city: "surat"
  };

  personList = [
    {
     name: "keyur",
     city: "surat"
    },
    {
      name: "denish",
      city: "maroli"
    },
    {
      name: "vinit",
      city: "mumbai"
    } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
