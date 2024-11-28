import { Component, OnInit } from '@angular/core';
import { Products } from '../Models/Products';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit {
  ProdList?:Products[];
  constructor(private router:Router,private adminservice:AdminService){

  }
  ngOnInit(): void {
    this.adminservice.AllProducts().subscribe(data=>this.ProdList=data);
  }
  btn_Logout():void{
    this.router.navigate(["home"]);
  }
}
