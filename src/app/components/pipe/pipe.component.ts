import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  dateFormat:Date=new Date();

  nameInLower:string='growing flower';

  nameInUpper:string='GROWING FLOWERS';

  currencyPipe:number=100;

  person:any={
    id:1,
    name:'xyz',
    city:'pune',
    mobileNo:9876567898
  };

  personDetails:any=[
    {
      id:1,
      name:'Prajakta',
      city:'',
      mobileNo:''
    },
    {
      id:2,
      name:'',
      city:'pune',
      mobileNo:'9876567898'
    },
    {
      id:3,
      name:'Sham',
      city:'',
      mobileNo:'9876567898'
    },
    {
      id:4,
      name:'RAM',
      city:'pune',
      mobileNo:'9876567898'
    }
  ]
}
