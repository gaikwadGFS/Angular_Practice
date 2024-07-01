import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any={
    userName:"",
    password:""
  }

  constructor(private route:Router){

  }

  login(){
    
     if(this.loginObj.userName == "admin"  && this.loginObj.password == "admin"){
       
        alert("Login Success");
        localStorage.setItem('loginCredentials',JSON.stringify(this.loginObj));
        // this.route.navigateByUrl("teacher"); 
        this.route.navigateByUrl("teacher");
                  

     }else{
      alert("Your Login Credientails wrong ... please try again...!!!");
     }
  }

}
