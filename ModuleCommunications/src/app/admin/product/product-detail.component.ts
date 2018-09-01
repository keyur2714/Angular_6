import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  productId: number;
  isEditable: boolean;

  constructor(private activatedRoute: ActivatedRoute,private location:Location) { }

  ngOnInit() {
    //this.productId = this.activatedRoute.snapshot.params["id"];
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.productId = params["id"];
      }
    )
    this.activatedRoute.fragment.subscribe(
      (params:string)=>{
        console.log(params);
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (queryParams: Params)=>{
        this.isEditable = queryParams["editable"];
      }
    )
  }

  back():void{
    this.location.back();
  }
}
