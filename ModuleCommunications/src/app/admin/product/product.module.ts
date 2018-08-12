import { NgModule } from '@angular/core'; 
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductEntryComponent } from './product-entry.component';
@NgModule({
    declarations: [
        ProductListComponent,
        ProductEntryComponent
    ],
    imports: [
        ProductRoutingModule
    ],
    providers: []
})
export class ProductModule{
  constructor(){
    console.log("Product Module Loaded...");
  }
}