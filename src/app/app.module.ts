import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { RegisterComponent } from './Dashboard/register/register.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './Profile/admin/admin.component';
import { DeleteProductComponent } from './ModifyProducts/delete-product/delete-product.component';
import { UpdateProductComponent } from './ModifyProducts/update-product/update-product.component';
import { ViewProductsComponent } from './ModifyProducts/view-products/view-products.component';
import { AddProductComponent } from './ModifyProducts/add-product/add-product.component';
import { AdminDetailsComponent } from './Profile/admin-details/admin-details.component';
import { UserComponentComponent } from './user-component/user-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewProductsComponent,
    AddProductComponent,
    AdminDetailsComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
