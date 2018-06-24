import { Directive,AfterViewInit,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyBlock]'
})
export class MyBlockDirective implements AfterViewInit {

  @Input("color")
  color: string = 'yellow';

  @Input("backGround")
  backGroundColor: string = 'black';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.position = 'relative';
    this.elementRef.nativeElement.style.padding = '10px';
    this.elementRef.nativeElement.style.width = '500px';
    this.elementRef.nativeElement.style.height = '100px';
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.backgroundColor = this.backGroundColor;
  }

}
