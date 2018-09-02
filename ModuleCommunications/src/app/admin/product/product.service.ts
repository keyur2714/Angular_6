import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable()
export class ProductService{

    productUrl: string = "http://localhost:3000/product";

    constructor(private httpClient:HttpClient){}

    getProductList():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.productUrl);
    }

}