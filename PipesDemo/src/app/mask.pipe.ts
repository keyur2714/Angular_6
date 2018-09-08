import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, noOfChar?: number): any {
    console.log(value);
    console.log(noOfChar);
    let maskAccountNo = '';
    let newAccountNo = value.substring(noOfChar,value.length);
    for(let i=1;i<=noOfChar;i++){
      maskAccountNo = maskAccountNo +"*";
    }
    maskAccountNo = maskAccountNo + newAccountNo;
    console.log(newAccountNo);
    return maskAccountNo;
  }

}
