import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConvert'
})
export class StatusConvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 'Active')
      value = 'ACTIVE';
    else if(value == 'InActive')
      value = "INACTIVE"
    return value;
  }

}
