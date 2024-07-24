import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-data',
  templateUrl: './registered-data.component.html',
  styleUrl: './registered-data.component.css'
})
export class RegisteredDataComponent implements OnInit {

  registerArray:any[]=[];

  constructor(private route:Router){

  }

  ngOnInit(): void {
    const localData = localStorage.getItem('data');
   
    if(localData != null){
      this.registerArray=JSON.parse(localData);
    }
  }
  

  editRecord(id:number){
   this.route.navigate(['/registerForm',id])
  }

  deleteRecord(id:number){
    const index = this.registerArray.findIndex((m=> m.id == id));
    this.registerArray.splice(index,1);
    localStorage.setItem('data',JSON.stringify(this.registerArray));
  }

}
