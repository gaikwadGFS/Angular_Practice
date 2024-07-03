import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList:any[]=['Solapur','Pune','Mumbai','Delhi'];

  dropdownValue:string='';
  
}
