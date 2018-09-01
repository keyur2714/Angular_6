import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from './product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [
    {
      "productId" : 10,
      "code": "C01",
      "description": "Computer",
      "unitPrice": 25000
    },
    {
      "productId" : 20,
      "code": "M01",
      "description": "Mobile",
      "unitPrice": 20000
    },{
      "productId" : 30,
      "code": "L01",
      "description": "Laptop",
      "unitPrice": 35000
    }
  ];

  constructor(private router:ActivatedRoute,private route: Router) { }

  ngOnInit() {
  }

  newProduct(){
    this.route.navigate(['product/product-entry']);
  }
  edit(productId){
    this.route.navigate(['product/product-entry']);
  }
}
