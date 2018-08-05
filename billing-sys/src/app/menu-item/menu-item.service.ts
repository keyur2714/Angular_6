import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item.model';
@Injectable()
export class MenuItemService {

    serviceUrl : string = "http://localhost:3000/menuItem";

    constructor(private http:Http,private httpClient:HttpClient){
    }

    getMenuItemList():Observable<Response>{
        return this.http.get(this.serviceUrl);
    }

    getMenuItemListUsingHttpClient():Observable<MenuItem[]>{
        return this.httpClient.get<MenuItem[]>(this.serviceUrl);
    }

    saveMenuItem(menuItem:MenuItem):Observable<number>{
        return this.httpClient.post<number>(this.serviceUrl,menuItem);
    }

    updateMenuItem(menuItem:MenuItem):Observable<number>{
        return this.httpClient.put<number>(this.serviceUrl+"/"+menuItem.id,menuItem);
    }

    getMenuItemById(id:number):Observable<MenuItem>{
        return this.httpClient.get<MenuItem>(this.serviceUrl+"/"+id);
    }

    deleteMenuItemById(id:number):Observable<number>{
        return this.httpClient.delete<number>(this.serviceUrl+"/"+id);
    }
}