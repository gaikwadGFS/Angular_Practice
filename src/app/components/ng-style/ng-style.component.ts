import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  myColor:string='';
  bgColor:string='blue'
  div1Width:string='50';
  div2Width:string='100px';

  div2Height:string='30px';

  cssObj:any={
    "color":"yellow",
    'height':'200px',
    'width':'200px',
    'background-color':'green'
  }
  
  myProgress:number=0
}

