import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

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

  studentDetailsArray:any[]=[];

  constructor(private http:HttpClient){
  this.loadStudentDetails();
  }

  loadStudentDetails(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      console.log(result);
      this.studentDetailsArray=result;
    });
  }

  saveRecord(){
    this.http.post("https://jsonplaceholder.typicode.com/users",this.studentDetailsObj).subscribe((result:any)=>{
        alert("Your data Successfully Saved....!"+ JSON.stringify(result));
        this.loadStudentDetails();
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
