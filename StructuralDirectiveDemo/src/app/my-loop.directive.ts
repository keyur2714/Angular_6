import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input() set appMyLoop(num : number){
    for(let i=0;i<num;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
