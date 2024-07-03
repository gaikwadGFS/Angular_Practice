import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

    showhide:boolean=false;

    studentNameOne:string ="Sachin";
    studentNameTwo:string="Sachin";

    showDiv(){
      this.showhide=true;
    }

    hideDiv(){
      this.showhide=false;
    }
}
