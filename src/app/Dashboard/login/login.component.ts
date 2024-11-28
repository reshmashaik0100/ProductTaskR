import { Component } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Users } from '../../Models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ulogin?:Users;
  email?:string;
  password?:string;
  httpResponse?:string;

constructor(private adminservice:AdminService,
  private userservice:UserService,
  private formbuilder:FormBuilder,
  private router:Router){
}
btn_LoginClick():void{
  debugger;
    this.adminservice.UserByEmailAndPassword(this.email!,this.password!)
    .subscribe(data =>{
      const userData = data;
      const userRole = userData.role;
      window.sessionStorage.setItem("UserData", JSON.stringify(userData));
      window.sessionStorage.setItem("UserId",data.toString());
      if(userRole === "Admin"){
        this.router.navigate(["admin"])
        .then(()=>{
          window.location.reload();
        });
      }
      else{
        this.router.navigate(["user"])
        .then(()=>{
          window.location.reload();
        });
      }
    });
  }
}
