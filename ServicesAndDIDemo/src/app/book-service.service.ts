import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Book } from './book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:Http) { }

  getBookList():Observable<Response>{
    return this.http.get('http://localhost:3000/bookData');
  }
}
