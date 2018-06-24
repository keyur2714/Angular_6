import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  templateUrl: './string-util.component.html',
  styleUrls: ['./string-util.component.css']
})
export class StringUtilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  revString(str: string):string{
    let revStr= str.split('').reverse().join('');
    return revStr;
  }

  isPalendronString(str: string):boolean{
    let flag = false;
    if(str === this.revString(str)){
      flag = true;
    }
    return flag;
  }

}
