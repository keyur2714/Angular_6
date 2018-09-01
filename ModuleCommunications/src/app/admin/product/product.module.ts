import { NgModule } from '@angular/core'; 
import { CommonModule  } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductEntryComponent } from './product-entry.component';
import { ProductDetailComponent } from './product-detail.component';
@NgModule({
    declarations: [
        ProductListComponent,
        ProductEntryComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,     
        ProductRoutingModule
    ],
    providers: []
})
export class ProductModule{
  constructor(){
    console.log("Product Module Loaded...");
  }
}