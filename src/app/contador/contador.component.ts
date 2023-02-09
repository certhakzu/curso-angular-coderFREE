import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona'

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

  /*
  persona: Persona = {
    nombre: 'Victor Arana',
    edad: 30
  }
  */

  numero: number = 1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero += 1;;
  }
}
