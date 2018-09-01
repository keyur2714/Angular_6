import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {

  constructor(private authenticationService:AuthenticationService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authenticationService.isValidUser())
        return true;      
      console.log(state.url+" =========");
      this.authenticationService.setUrl(state.url);
      this.router.navigate(['/login']);
      return false;
  }
  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      console.log("Hello...");
      return false;
  }  
}
