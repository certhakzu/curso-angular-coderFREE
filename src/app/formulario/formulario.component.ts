import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  openAlert: boolean = false;

  constructor(){}

  ngOnInit(): void {
      
  }

  mostrar_en_consola(name: string){
    console.log(name);
    this.openAlert = true;
    
  }

  closeAlert(){
    this.openAlert = false;
  }
}
