import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';
import { Users } from '../../Models/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  cUser: Users;
  httpResponse?: string;
  constructor(private router:Router,private adminservice:AdminService){
    this.cUser={userId :0,username : "", email : "", password : "",role : ""};
  }
  ngOnInit(): void {
    
  }
  btn_Register():void{
    debugger;
    this.adminservice.InsertUser(this.cUser!).subscribe(data=>alert(data));
    this.router.navigate(["login"]).then(()=>{
      window.location.reload();
    });
  }
}
