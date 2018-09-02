import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValidUser: boolean = false;

  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  login(username,password){
    this.isValidUser = this.authenticationService.authenticate(username,password);
    console.log("========"+this.isValidUser);
    if(this.isValidUser){    
      this.router.navigate([this.authenticationService.getUrl()]);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
