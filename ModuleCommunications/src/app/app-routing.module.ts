import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes : Routes = [
    {
        "path":"product-list",
         loadChildren: './admin/product/product.module#ProductModule'  
    },
    {
        "path":"home",
        "component":HomeComponent
    },
    {
        "path":"aboutus",
        "component":AboutusComponent
    },
    {
        "path":"contact-us",
        "component":ContactUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}


