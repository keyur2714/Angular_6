import { Injectable } from '@angular/core';
@Injectable()
export class AuthenticationService {

    stateUrl : string = '';
    isUserLoggedIn: boolean = false;

    authenticate(userName:string,password:string):boolean{        
        if(userName === 'keyur' && password === '123'){
            this.isUserLoggedIn = true;
        }
        return this.isUserLoggedIn;
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