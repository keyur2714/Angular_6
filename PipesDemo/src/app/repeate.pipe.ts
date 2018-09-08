import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeate'
})
export class RepeatePipe implements PipeTransform {

  transform(value: any, no?: number): any {
    let finalValue = '';
    for(let i=1;i<=no;i++){
      finalValue = finalValue + value +"\n";
    }
    return finalValue;
  }

}
