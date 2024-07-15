import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../Services/users/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  // result:number=0


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

  constructor(private http:HttpClient,private userSrv:UserService){
  this.loadStudentDetails();
  }

  // loadStudentDetails(){
  //   this.http.get("https://jsonplaceholder.typicode.com/AllUsers").subscribe((result:any)=>{
  //     console.log(result);
  //     this.studentDetailsArray=result;
  //   });
  // }

  loadStudentDetails(){
  this.userSrv.getAllUsers().subscribe((result:any)=>{
    this.studentDetailsArray=result;
  })
  }

  // saveRecord(){
  //   this.http.post("https://jsonplaceholder.typicode.com/users",this.studentDetailsObj).subscribe((result:any)=>{
  //       alert("Your data Successfully Saved....!"+ JSON.stringify(result));
  //       this.loadStudentDetails();
  //       this.reset();
  //     });
    
  // }

  saveRecord(){
    this.userSrv.createUser(this.studentDetailsObj).subscribe((result:any)=>{
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

  editRecord(id:number){
    // alert("ID:"+id);
    this.http.get("https://jsonplaceholder.typicode.com/users/"+id).subscribe((res:any)=>{
    console.log(res);
    this.studentDetailsObj=res;
    })
  }

  updateRecord(studRecord:any){
    console.log(studRecord);
    this.http.post("https://jsonplaceholder.typicode.com/users/",studRecord).subscribe((result:any)=>{
      console.log("update Result:"+JSON.stringify(result));
      alert("Updated Successfully");
      this.reset();
      this.loadStudentDetails();
    })

  }
  deleteRecord(deleteId:number){
    // alert(deleteId);
    const confirm = window.confirm("Are You Sure..?");
    if(confirm){
      this.http.delete("https://jsonplaceholder.typicode.com/users/"+deleteId).subscribe((result:any)=>{
        alert("Deleted Success");
        this.loadStudentDetails();  
      })
    }
      
  }
}
