import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlightMe]'
})
export class HightlightMeDirective {

  @Input() myColor:string='';

  constructor(private elementRef:ElementRef) {
    console.log("Directive Called...");
    // this.elementRef.nativeElement.style.color="red";
    // document.getElementById("hgg")?.style.color="red";
   }

   @HostListener('mouseover')
   addColor(){
    this.elementRef.nativeElement.style.color=this.myColor;
   }

   @HostListener('mouseout')
   removeColor(){
    this.elementRef.nativeElement.style.color='black';
   }

}
