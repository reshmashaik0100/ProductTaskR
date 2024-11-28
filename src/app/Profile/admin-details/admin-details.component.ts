import { Component, OnInit } from '@angular/core';
import { Users } from '../../Models/Users';
import { AdminService } from '../../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit {
  loggedadmin?:Users;
  httpresponse?:string;
  
  constructor(private adminservice:AdminService,private router:Router){
    this.loggedadmin={userId:0,username:"",email:"",password:"",role:""};
  }
  ngOnInit(): void {
    window.sessionStorage.getItem("UserData");
    if(("UserData")==null){
      this.router.navigate(["home"]);
    }
  }

}
