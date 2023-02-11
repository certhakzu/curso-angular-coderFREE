import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  persona = {
    nombre: '',
    edad: ''
  };

  constructor(){}

  ngOnInit(): void {
      
  }

  procesar(){
    console.log(this.persona); //Aqui podria ser la llamada a una API (ejemplo)
    
  }
}
