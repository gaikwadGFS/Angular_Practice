import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { userClass } from '../../Core/classes/user';
import { userInterface } from '../../Core/interfaces/user';
import { UserService } from '../../Services/users/user.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  columns:any[]=['name','email','username'] 

  public studentDetailsObj:userClass = new userClass();

  public  studentDetailsArray:userInterface[]=[];

  public isLoader:boolean=false;

  public isAPICall:boolean=false;

  constructor(private http:HttpClient,private userSrv:UserService){
  
  }

  ngOnInit(){
    this.loadStudentDetails();
  }


  loadStudentDetails(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      console.log(result);
      this.studentDetailsArray=result;
      setTimeout(() => {
        this.isLoader=true;
      }, 2000);
      
    });
  }

  // loadStudentDetails(){

  // this.userSrv.getAllUsers().subscribe((result:any)=>{
  //   console.log(result);
  //   this.studentDetailsArray=result;
  
  // });
  // }

  saveRecord(){
    if(!this.isAPICall){
    this.isAPICall=true;
    this.http.post("https://jsonplaceholder.typicode.com/users",this.studentDetailsObj).subscribe((result:any)=>{
        // alert("Your data Successfully Saved....!"+ JSON.stringify(result));
        this.loadStudentDetails();
        this.isAPICall=false;
        this.reset();
      });
    } 
  }

  // saveRecord(){
  //   this.userSrv.createUser(this.studentDetailsObj).subscribe((result:any)=>{
  //            alert("Your data Successfully Saved....!"+ JSON.stringify(result));
  //          this.loadStudentDetails();
  //            this.reset();
  //        });
  // }

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
    
   
    // this.userSrv.getUserById(list.id).subscribe((data) => {
    //   console.log(data)
    //   this.studentDetailsObj=data;
    // })
    this.http.get("https://jsonplaceholder.typicode.com/users/"+list.id).subscribe((res:any)=>{
    console.log(res);
    this.studentDetailsObj=res;
    })
  }

  updateRecord(studRecord:any){
    console.log(studRecord);

    // this.userSrv.updateUser(studRecord).subscribe((data) => {
    //   console.log("update Result:"+JSON.stringify(data));
    //     alert("Updated Successfully");
    //     this.reset();
    //     this.loadStudentDetails();
    // })

    this.http.post("https://jsonplaceholder.typicode.com/users/",studRecord).subscribe((result:any)=>{
      console.log("update Result:"+JSON.stringify(result));
      alert("Updated Successfully");
      this.reset();
      this.loadStudentDetails();
    })

  }
  deleteRecord(record:any){
    debugger;
    // alert(deleteId);
    const confirm = window.confirm("Are You Sure..?");
    if(confirm){
      // this.userSrv.deleteUser(record.id).subscribe((result:any) => {
      //   alert("Deleted Success");
      //   this.loadStudentDetails();  
      // });

      this.http.delete("https://jsonplaceholder.typicode.com/users/"+record.id).subscribe((result:any)=>{
        alert("Deleted Success");
        this.loadStudentDetails();  
      })
    }
      
  }
}
