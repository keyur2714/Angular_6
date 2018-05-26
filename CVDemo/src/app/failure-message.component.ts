import {Component} from '@angular/core';
@Component({
    selector: 'app-failure-message',
    template: `<h1>{{failureMessage}}</h1>`,
    styles: ['h1{color:red;}']
})
export class FailureMessageComponent {
    failureMessage:string = 'Failure..!';
}