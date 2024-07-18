import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

//@Input--  Parent to child Communication
 @Input() columnData:any[]=[];

 @Input() tableData:any[]=[];
 
//  @Output -- child to parent Communication
  @Output() edit = new EventEmitter<any>();

  @Output() delete = new EventEmitter<any>();

  onEdit(item:any){
    
    this.edit.emit(item);
  }

  onDelete(item:any){
    
    this.delete.emit(item);
  }


}
