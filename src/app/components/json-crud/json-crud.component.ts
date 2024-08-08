import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/users/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-json-crud',
  templateUrl: './json-crud.component.html',
  styleUrl: './json-crud.component.css'
})
export class JsonCRUDComponent implements OnInit {

  // usersObject:any={
  //   id: 1,
  //   name: "",
  //   email: ""
  // }

  userForm!:FormGroup;

  usersArray:any[]=[];

  constructor(private userSRV:UserService){

  }

  ngOnInit(): void {
    this.userForm=new FormGroup({
      id:new FormControl(0),
      name:new FormControl(''),
      email:new FormControl(''),
    })
    
    this.getAllUsers();
  }

  getAllUsers(){
    this.userSRV.getAllUsers().subscribe((res:any)=>{
      this.usersArray=res;
    })
  }

  saveUser(){
    console.log(this.userForm.value);
    this.userSRV.createUser(this.userForm.value).subscribe((res:any)=>{
      alert("Saved");
      this.getAllUsers();
    })
  }

  edit(id:number){
    
    this.userSRV.getUserById(id).subscribe((res:any)=>{
      this.userForm.patchValue(res);
    })
  }

  update(){
    this.userSRV.updateUser(this.userForm.value).subscribe((res:any)=>{
      alert("updated");
      this.getAllUsers();
    })
  }

  delete(id:number){
    this.userSRV.deleteUser(id).subscribe((res:any)=>{
      alert("deleted");
      this.getAllUsers();
    })
  }

  
}
