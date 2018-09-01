import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductEntryComponent } from './product-entry.component';
import { ProductDetailComponent } from './product-detail.component';
// const routes : Routes = [
//     {
//         path: "product-list",
//         component: ProductListComponent
//     },
//     {
//         path: "product-entry",
//         component: ProductEntryComponent
//     }
// ]
const routes : Routes = [
    {
        path: '',
        component: ProductListComponent,
        children: [
             {
                path: "product-entry",
                component: ProductEntryComponent          
             }, 
             {
                path: "product-detail/:id",
                component: ProductDetailComponent          
             }
        ]        
    }
    // {
    //     path: "product-entry",
    //     component: ProductEntryComponent          
    // },
    // {
    //     path: "product-detail/:id",
    //     component: ProductDetailComponent          
    // }    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule{

}