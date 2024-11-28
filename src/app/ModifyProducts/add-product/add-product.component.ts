import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';
import { Products } from '../../Models/Products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  product:Products;
  httpResponse?:string;
    // procuctName : string;
    // productPrice : string;
    // category : string;
    // createdAt : string;
  constructor(private router:Router, private adminservice:AdminService){
    this.product={productId:0,procuctName:"",productPrice:"",category:"",createdAt:""}
  }
  ngOnInit(): void {
    
  }
  btn_register():void{
    debugger;
    this.product.createdAt="2024-10-27";
    this.adminservice.InsertProduct(this.product!).subscribe(data=>(alert(data)));
    this.router.navigate(["admindetails"])
    .then(()=>{
      window.location.reload();
    });
  }

}
