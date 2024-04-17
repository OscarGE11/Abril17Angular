import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../../modelo/Persona';

@Component({
  selector: 'app-ejercicio4-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4-hijo.component.html',
  styleUrl: './ejercicio4-hijo.component.css'
})
export class Ejercicio4HijoComponent {
  

@Output()
llamadaPadre:EventEmitter<Persona>= new EventEmitter();


  nombre:string="";
  edad:number=0;

  

personas:Persona[]=[];

enviarDatos(){
 
  let  persona:Persona = {
    nombre:this.nombre,
    edad:this.edad
  };
this.llamadaPadre.emit(persona);

}



}
