import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {

  // in javascript --> var a =0;

  // Variables start
  name:string='Growing Flowers';

  num:number=10;

  isActive:boolean=false;

  date:Date=new Date();
 // Variables End

//  Object Start
  person:any ={
    pId:1,
    pName:'value',
    pCity:'pune'
    
  }
//  Object Start

// Array Start
  cityArray:any[]=['Pune','mumbai','Solapur'];

// Array Start


  constructor(){
   this.callfunction();
   this.objectAccessing();
   this.arrayAccessing();
  }
//  Variable 
   display(){
    console.log("Display function executed..");

     console.log("My name is " + this.name);
  }

  callfunction(){
    console.log("Call function executed..");
    this.display();
  }

  //  Variable 

  // Object

  objectAccessing(){
    // console.log("Person Name is " + this.person.pName);
    // console.log("Person Id is " + this.person.pId);
    // console.log("Person City is " + this.person.pCity);

    console.log("Person Name is "+  " " + this.person.pName + " " + "Person Id is " + this.person.pId +  " " +"Person City is " + this.person.pCity);

  }

  // Object

  // Array 

  arrayAccessing(){
    alert("The city names are : " + this.cityArray[0] + ','+ this.cityArray[1] +','+ this.cityArray[2]);

    for (let index = 0; index < this.cityArray.length ; index++) {
     
      alert(this.cityArray[index]);
      console.log(this.cityArray[index]);
    }

  }
  

 





}
