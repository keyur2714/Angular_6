import { QuestionI } from './question-i'; 
import { Injectable } from '@angular/core';


export class AngularQuestion implements QuestionI{
    askQuestion():string{
        return "What is Angular?";
    }
}