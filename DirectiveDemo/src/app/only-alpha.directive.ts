import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appOnlyAlpha]'
})
export class OnlyAlphaDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef) { 
      this.elementRef.nativeElement.value = "keyur";
  }

  ngAfterViewInit(){
    console.log(this.elementRef.nativeElement.value);
  }
}
