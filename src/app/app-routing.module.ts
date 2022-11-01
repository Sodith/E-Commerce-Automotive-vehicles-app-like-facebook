import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './component/admin/add-products/add-products.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditProductsComponent } from './component/admin/edit-products/edit-products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/loginregister/login/login.component';
import { RegisterComponent } from './component/loginregister/register/register.component';
import { ProductsComponent } from './component/products/products.component';


const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'products',  redirectTo:'products',pathMatch:'full'},
  // {path:'products', canActivate: [AuthguardGuard], component:ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'admin',component:AdminComponent,
  
  children:[
    {path:'addproduct', component: AddProductsComponent},
  {path:'editproduct/:id', component: EditProductsComponent}
     ]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
