import {Component} from '@angular/core';
@Component({
    selector: 'app-success-message',
    template: `<p>{{message}}</p>`,
    styles: ['p{color: green}']
})
export class SuccessMessageComponent{
    message : string = "Success!!!";
}