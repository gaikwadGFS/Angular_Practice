import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/users/user.service';
import { userClass } from '../../Core/classes/user';
import { userInterface } from '../../Core/interfaces/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit {

  // studentDetailsObj:any={
  //   id: 0,
  //   name: "",
  //   username: "",
  //   email: "",
  //   address: {
  //     street: "",
  //     suite: "",
  //     city: "",
  //     zipcode: "",
  //     geo: {
  //       lat: "",
  //       lng: ""
  //     }
  //   },
  //   phone: "",
  //   website: "",
  //   company: {
  //     name: "",
  //     catchPhrase: "",
  //     bs: ""
  //   }
  // }

   columns:any[]=['name','email','username'] 

  public studentDetailsObj:userClass = new userClass();

  public  studentDetailsArray:userInterface[]=[];

  constructor(private http:HttpClient,private userSrv:UserService){
  
  }

  ngOnInit(){
    this.loadStudentDetails();
  }
  // loadStudentDetails(){
  //   this.http.get("https://jsonplaceholder.typicode.com/AllUser").subscribe((result:any)=>{
  //     console.log(result);
  //     this.studentDetailsArray=result;
  //   });
  // }

  loadStudentDetails(){

  this.userSrv.getAllUsers().subscribe((result:any)=>{
    console.log(result);
    this.studentDetailsArray=result;
  
  });
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
        zipcode: 0,
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

  editRecord(list:any){
    debugger;
    // alert("ID:"+id);
    this.userSrv.getUserById(list.id).subscribe((data) => {
      console.log(data)
      this.studentDetailsObj=data;
    })
    // this.http.get("https://jsonplaceholder.typicode.com/users/"+list.id).subscribe((res:any)=>{
    // console.log(res);
    // this.studentDetailsObj=res;
    // })
  }

  updateRecord(studRecord:any){
    console.log(studRecord);

    this.userSrv.updateUser(studRecord).subscribe((data) => {
      console.log("update Result:"+JSON.stringify(data));
        alert("Updated Successfully");
        this.reset();
        this.loadStudentDetails();
    })

    // this.http.post("https://jsonplaceholder.typicode.com/users/",studRecord).subscribe((result:any)=>{
    //   console.log("update Result:"+JSON.stringify(result));
    //   alert("Updated Successfully");
    //   this.reset();
    //   this.loadStudentDetails();
    // })

  }
  deleteRecord(record:any){
    debugger;
    // alert(deleteId);
    const confirm = window.confirm("Are You Sure..?");
    if(confirm){
      this.userSrv.deleteUser(record.id).subscribe((result:any) => {
        alert("Deleted Success");
        this.loadStudentDetails();  
      });

      // this.http.delete("https://jsonplaceholder.typicode.com/users/"+record.id).subscribe((result:any)=>{
      //   alert("Deleted Success");
      //   this.loadStudentDetails();  
      // })
    }
      
  }
}
