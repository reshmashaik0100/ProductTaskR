import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { RegisterComponent } from './Dashboard/register/register.component';
import { AdminComponent } from './Profile/admin/admin.component';
import { AddProductComponent } from './ModifyProducts/add-product/add-product.component';
import { DeleteProductComponent } from './ModifyProducts/delete-product/delete-product.component';
import { UpdateProductComponent } from './ModifyProducts/update-product/update-product.component';
import { ViewProductsComponent } from './ModifyProducts/view-products/view-products.component';
import { AdminDetailsComponent } from './Profile/admin-details/admin-details.component';
import { UserComponentComponent } from './user-component/user-component.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"user", component:UserComponentComponent},
  {path:"admin",component:AdminComponent,
    children:[
      {path:"",redirectTo:"admindetails",pathMatch:'full'},
      {path:"admindetails",component:AdminDetailsComponent},
      {path:"addproduct",component:AddProductComponent},
      {path:"deleteproduct",component:DeleteProductComponent},
      {path:"updateproduct",component:UpdateProductComponent},
      {path:"allproducts",component:ViewProductsComponent}
    ]
  },
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
