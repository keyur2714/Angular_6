import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
const routes : Routes = [
    {
        "path":"",
         component: HomeComponent
    },
    {
        "path":"product",
         loadChildren: './admin/product/product.module#ProductModule',
         canActivate: [AuthGuard]         
    },
    {
        "path":"home",
        "component":HomeComponent
    },
    {
        "path":"login",
        "component":LoginComponent
    },
    {
        "path":"aboutus",
        "component":AboutusComponent,
        canActivate: [AuthGuard]  
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


