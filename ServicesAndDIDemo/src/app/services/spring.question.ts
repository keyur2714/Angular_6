import { Injectable } from '@angular/core';
import { QuestionI } from './question-i';

export class SpringQuestion extends QuestionI{
    constructor(){
        super();
    }
    askQuestion():string{
        super.display();
        return "What is Spring?";
    }
}