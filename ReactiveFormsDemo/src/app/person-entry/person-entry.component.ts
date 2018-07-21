import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personEntryForm = new FormGroup({
    name: new FormControl(),
    hobbies: new FormArray([new FormControl('',Validators.required)])
  });

  save(){
    console.log(this.personEntryForm);
    console.log(this.personEntryForm.value);
  }
  addHobby(){
    console.log("add hobby");
    const hobbyControl = new FormControl('',Validators.required);
    (<FormArray>this.personEntryForm.get('hobbies')).push(hobbyControl);
  }
}
