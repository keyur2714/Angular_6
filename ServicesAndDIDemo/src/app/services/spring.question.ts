import { Injectable } from '@angular/core';
import { QuestionI } from './question-i';

export class SpringQuestion implements QuestionI{
    constructor(){}
    askQuestion():string{
        return "What is Spring?";
    }
}