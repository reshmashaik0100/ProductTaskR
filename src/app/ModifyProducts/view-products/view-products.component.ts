import { Component, OnInit } from '@angular/core';
import { Products } from '../../Models/Products';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {
  ProdList?:Products[];
  constructor(private router:Router,private adminservice:AdminService){

  }
  ngOnInit(): void {
    this.adminservice.AllProducts().subscribe(data=>this.ProdList=data);
  }

}
