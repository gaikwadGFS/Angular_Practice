import { Component } from '@angular/core';
import { UserService } from '../../Services/users/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

  constructor(private userServices:UserService){
    this.getYear();
  }
 
  getYear(){
   
    this.userServices.getFullYear();
  }


}
