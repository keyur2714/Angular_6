import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, gender?: string): any {
    console.log(value);
    console.log(gender);
    let updatedName = "Welcome "+value;
    if(gender == 'M')
      updatedName = "Welcome Mr "+value;
    else if(gender == 'F')
      updatedName = "Welcome Miss "+value;
    
    return updatedName;
  }

}
