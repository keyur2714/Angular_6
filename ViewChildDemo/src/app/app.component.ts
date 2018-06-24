import { Component,ViewChild,ElementRef } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@ViewChild Demo';
  result: string = '';

  @ViewChild("str")
  str: ElementRef;

  @ViewChild(StringUtilComponent)
  stringComponent :StringUtilComponent;

  revStr(){
    console.log(this.str.nativeElement+" ======");
    let str = this.str.nativeElement.value;
    let revStr = this.stringComponent.revString(str);
    this.result = str+" Reverse String is "+revStr;    
  }

  isPalindrom(){
    let str = this.str.nativeElement.value;
    let flag = this.stringComponent.isPalendronString(str);
    this.result = flag ? str+' Is a Palindrom String': str+' is Not a Palindrom String';
  }
}
