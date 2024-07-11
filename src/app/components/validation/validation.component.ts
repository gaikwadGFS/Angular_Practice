import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  studentDetailsObj:any={
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  }
 
  constructor(private http:HttpClient){

  }

  saveRecord(){
    this.http.post("https://jsonplaceholder.typicode.com/users",this.studentDetailsObj).subscribe((result:any)=>{
        alert("Your data Successfully Saved....!"+ JSON.stringify(result));
       
        this.reset();
      });
    
  }

  reset(){
    this.studentDetailsObj={
      id: 0,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    }
  }

}
