import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public authService: AuthenticationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(localStorage.getItem("token"));
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getCurrentUser().token}`
      }
    });

    return next.handle(request);
  }

}