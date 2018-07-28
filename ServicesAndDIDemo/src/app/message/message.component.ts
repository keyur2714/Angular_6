import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AngularQuestion } from '../services/angular.question';
import { SpringQuestion } from '../services/spring.question';
import { QuestionI } from '../services/question-i';
import { BookServiceService } from '../book-service.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [  
    { provide: QuestionI, useClass: AngularQuestion },
    BookServiceService
  ]  
})
export class MessageComponent implements OnInit {

  //questionIX : QuestionI = new SpringQuestion();
  question: string = '';
  constructor(private loggingService: LoggingService,private questionI: QuestionI,private bookServiceService:BookServiceService){}

  ngOnInit() {
    this.loggingService.logDebug("Inside Message Component...");
    this.question = this.questionI.askQuestion();

    this.bookServiceService.getBookList().subscribe(
      (data)=>{
        console.log(data.json());
      }
    )
  }



}
