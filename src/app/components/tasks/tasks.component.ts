import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  
  isSidePanel:boolean=false;

  isMobile:boolean=false;
  isLaptop:boolean=false;
  isCamera:boolean=false;

  toggle:boolean=false;

  fromStation:any[]=['Pune','Mumbai','Jalgoa','Thane','Solapur'];
  toStation:any[]=['Pune','Mumbai','Jalgoa','Thane','Solapur'];
  journeyDate:Date=new Date();

  selectToStation:string='';
  selectFromStation:string='';


  isDisplay:boolean=false;

 

  constructor(){
    
  }

  // 1st senario
  // showMobileCategory(){
  //   this.isMobile=true;
  //   this.isLaptop=false;
  //   this.isCamera=false;
  // }
  // showLaptopCategory(){
  //   this.isMobile=false;
  //   this.isLaptop=true;
  //   this.isCamera=false;
  // }
  // showCameraCategory(){
  //   this.isMobile=false;
  //   this.isLaptop=false;
  //   this.isCamera=true;
  // }

  // 2nd senario

  // showCategory(category:string){
  //   if(category == 'mobile'){
  //     this.isMobile=true;
  //     this.isLaptop=false;
  //     this.isCamera=false;
  //   }else if(category == 'laptop'){
  //     this.isMobile=false;
  //     this.isLaptop=true;
  //     this.isCamera=false;
  //   }else if(category == 'camera'){
  //     this.isMobile=false;
  //     this.isLaptop=false;
  //     this.isCamera=true;
  //   }
  // }

  // 3rd senario
  // showCategory(category: string) {
  //   this.isMobile = this.isLaptop = this.isCamera = false;
        

  //   switch(category) {
  //     case 'mobile':
  //       this.isMobile = true;
  //       break;
  //     case 'laptop':
  //       this.isLaptop = true;
  //       break;
  //     case 'camera':
  //       this.isCamera = true;
  //       break;
  //   }
  // }

  // 4th senario
  showCategory(category: string) {
   
    this.isMobile = (category === 'mobile'); 
    this.isLaptop = (category === 'laptop');
    this.isCamera = (category === 'camera');
  }

  toggleDiv(){
    this.toggle = !this.toggle;
  }

  searchTrain(){
    if(this.selectFromStation === this.selectToStation){
      alert("From Station and  To  Station Can't Be Same....");
    }else{
      this.isDisplay=true;
    }
  }

  clear(){
    this.selectFromStation='';
    this.selectToStation='';
    this.journeyDate=new Date();
    this.isDisplay=false;
  }
  
 

 
  
}
