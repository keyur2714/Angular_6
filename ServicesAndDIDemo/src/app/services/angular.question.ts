import { QuestionI } from './question-i'; 
import { Injectable } from '@angular/core';


export class AngularQuestion extends QuestionI{
    askQuestion():string{
        super.display();
        return "What is Angular?";
    }
}