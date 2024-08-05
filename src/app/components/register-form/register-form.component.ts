import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  registerObj:any={
    id:1,
    name:'',
    email:'',
    number:'',
    city:'',
    education:''
  }
  currentId:number=0;
  registerArray:any[]=[];

  constructor(private activatedRoute:ActivatedRoute){
   this.activatedRoute.params.subscribe((res:any)=>{
    if(res.id){
      this.currentId=res.id;
    }
   })
  }

  ngOnInit(): void {
    
    const localData = localStorage.getItem('data');
    if(localData !== null){
      this.registerArray=JSON.parse(localData);
      if(this.currentId !== 0){
        const currentRecord = this.registerArray.find((m=> m.id == this.currentId));
        if(currentRecord != undefined){
          this.registerObj=currentRecord;
        }
      }
    }
  }

  register(){
    const localData= localStorage.getItem('data');
    if(localData == null){
      debugger; //if no record in localSTorage
    this.registerArray.push(this.registerObj);
    localStorage.setItem('data',JSON.stringify(this.registerArray));
    }else{ // if data is alaredy present 
      debugger;
      const parseData = JSON.parse(localData);
      this.registerObj.id = parseData.length +1 ;
      this.registerArray.push(this.registerObj);
      localStorage.setItem('data',JSON.stringify(this.registerArray));
    }
  }
  update(){
    const currentRecord = this.registerArray.find((m=> m.id == this.currentId));
    if(currentRecord != undefined){
      const index = this.registerArray.findIndex((m=> m.id == this.currentId));
      this.registerArray.splice(index,1);
      this.registerArray.push(this.registerObj);
      localStorage.setItem('data',JSON.stringify(this.registerArray));
      alert("Updated")
    }
  }
}
