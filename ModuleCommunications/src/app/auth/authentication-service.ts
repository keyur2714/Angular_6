import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
@Injectable()
export class AuthenticationService {

    userList: User[] = [];
    currentUser : User = new User();
    userListUrl : string = "http://localhost:3000/users";

    stateUrl : string = '';
    isUserLoggedIn: boolean = false;

    constructor(private httpClient: HttpClient){
    }

    authenticate(userName:string,password:string):boolean{        
        console.log(userName+" "+password);
        this.httpClient.get<User[]>(this.userListUrl).subscribe(
            (userList)=>{
                console.log("userList"+userList[0].username);
                
                let user = userList.find(user =>                     
                    (user.username === userName) && (user.password === password)
                )
                console.log(user);
                localStorage.setItem("user",JSON.stringify(user));                
                this.currentUser = user;
                return this.isUserLoggedIn = true;
            }
        )        
        return;
    }

    getCurrentUser():User{
        return this.currentUser;
    }

    isValidUser():boolean{
        return this.isUserLoggedIn;
    }

    setUrl(url:string):void{
        this.stateUrl = url;
    }
    getUrl():string{
        return this.stateUrl;
    }
}