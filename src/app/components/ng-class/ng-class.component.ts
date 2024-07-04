import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  addColor:string='';
  uisngInputAddColor:string='';
  multipleBtnColor:string=''
  isActive:boolean=false;
  isCircle:boolean=false;

  makeCircle(){
    this.isCircle=true;
  }

  makeSquare(){
    this.isCircle=false;
  }

  addGreenColor(){
      this.addColor='bg-success';
  }

  addRedColor(){
     this.addColor='bg-danger';
  }

  success(){
    this.multipleBtnColor='bg-success';

  }
  danger(){
    this.multipleBtnColor='bg-danger';

  }
  warning(){
    this.multipleBtnColor='bg-warning';

  }
  primary(){
    this.multipleBtnColor='bg-primary';

  }
  secondary(){
    this.multipleBtnColor='bg-secondary';

  }
  info(){
    this.multipleBtnColor='bg-info';

  }
  light(){
    this.multipleBtnColor='bg-light';

  }
}
