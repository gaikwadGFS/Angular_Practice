import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  // result:number=0

  constructor(){
    this.square(5);
  }

  square(num:number){
    let result = num*num ;
    console.log(result); 
  }
}
