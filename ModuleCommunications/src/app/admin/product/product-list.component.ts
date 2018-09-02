import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
}) 
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private router:ActivatedRoute,private route: Router,private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (data)=>{
        this.productList = data;
      }
    )
  }

  newProduct(){
    this.route.navigate(['product/product-entry']);
  }
  edit(productId){
    this.route.navigate(['product/product-entry']);
  }
}
