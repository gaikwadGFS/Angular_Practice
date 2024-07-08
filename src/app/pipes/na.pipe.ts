import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: any, emptyText:string,...args: unknown[]): unknown {
        
    if(value === null || value === undefined || value === ''){
      return emptyText;
    }
     return value;
    
  }
  // or
  // transform(value: any, ...args: unknown[]): unknown {
        
  //   if(value === null || value === undefined || value === ''){
  //     return 'NA';
  //   }
  //    return value;
    
  // }
}
