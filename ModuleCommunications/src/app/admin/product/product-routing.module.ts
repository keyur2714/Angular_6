import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductEntryComponent } from './product-entry.component';
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
        component: ProductListComponent
        // children: [
        //     {
        //         path: "product-entry",
        //         component: ProductEntryComponent
        //     }
        // ]
    },
    {
        path: '',
        component: ProductEntryComponent          
    }    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule{

}