import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  get name(){
    return this.formUser.get('name'); // puede añadirsele 'as FormControl' para quitar el '?' del input
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  procesar() {
    console.log(this.formUser.value);
  }

  /*name = new FormControl('', Validators.required);
  // La cadena vacia es el valor por default que tomará el input con el que esté sincronizado
  email = new FormControl('', [Validators.required, Validators.email]);*/
}
