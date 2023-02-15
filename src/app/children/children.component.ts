import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {

  @Input() title2?: string; // el ? indica que es un parámetro opional

  @Output() titleChange = new EventEmitter<string>();

  emitTitleChange(){
    //console.log('El title ha cambiado por: ' + this.title2);
    this.titleChange.emit(this.title2);
  }
}
