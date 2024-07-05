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

  isMobile:boolean=false;
  isLaptop:boolean=false;
  isCamera:boolean=false;

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
  
  
}
