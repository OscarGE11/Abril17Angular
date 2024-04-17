import { Component } from '@angular/core';
import { Ejercicio4HijoComponent } from '../ejercicio4-hijo/ejercicio4-hijo.component';
import { Persona } from '../../../modelo/Persona';

@Component({
  selector: 'app-ejercicio4-padre',
  standalone: true,
  imports: [Ejercicio4HijoComponent],
  templateUrl: './ejercicio4-padre.component.html',
  styleUrl: './ejercicio4-padre.component.css'
})
export class Ejercicio4PadreComponent {

  personas:Persona[]=[];
  recibirDato(persona:Persona){
    this.personas.push(persona);


  }

     borrarUltimoNombre(){
      this.personas.pop();
    }

    filtrarEdades(){
     this.personas = this.personas.filter(persona => persona.edad >=18);
    }

    calcularDobleEdad(){
     this.personas.map(persona => persona.edad=persona.edad*2);
    }

}

