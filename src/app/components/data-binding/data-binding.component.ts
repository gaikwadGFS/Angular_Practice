import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
      // interpolation Variable
      comapanyName:string="Growing Flower";
     // Properrty Binding varibale
       imgageURL:string="../../../assets/download.jpeg"
      
       inputPlaceholder:string="Enter Your full Name...."

       text:string='date';

       mobileNumber:number=0;
       cityname:string='';

       constructor(){
        console.log(this.comapanyName);
        this.fullYear();
      }

      showAlert(){
        alert("Event Binding successfull....")
      }

      printConsole(){
        console.log("Mobile Number is  " + this.mobileNumber + "," + "City Name is  " + this.cityname);

      }

      fullYear(){
        const year= new Date();
        const currentYear= year.getFullYear();
        console.log(currentYear);
      }
}
