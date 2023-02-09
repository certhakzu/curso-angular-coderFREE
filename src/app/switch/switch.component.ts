import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  dia?: string; // el simbolo ? indica que inicialmente no tiene un valor

  constructor(){}

  ngOnInit(): void {
      
  }

  mostrarDia(dia: string){
    this.dia = dia;
  }
}
