import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AngularQuestion } from '../services/angular.question';
import { SpringQuestion } from '../services/spring.question';
import { QuestionI } from '../services/question-i';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [AngularQuestion,SpringQuestion]  
})
export class MessageComponent implements OnInit {

  questionIX : QuestionI = new SpringQuestion();
  question: string = '';
  constructor(private loggingService: LoggingService,private questionI: AngularQuestion){}

  ngOnInit() {
    this.loggingService.logDebug("Inside Message Component...");
    this.question = this.questionI.askQuestion();
  }



}
