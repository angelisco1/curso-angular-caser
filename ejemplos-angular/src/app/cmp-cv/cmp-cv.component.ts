import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-cv',
  templateUrl: './cmp-cv.component.html',
  styleUrls: ['./cmp-cv.component.css']
})
export class CmpCvComponent implements OnInit {

  datosPersona = {
    nombre: 'Ángel',
    apellidos: 'Villalba',
    trabajo: 'Formador'
  }

  constructor() { }

  ngOnInit(): void {
  }

  getNombreCompleto() {
    return this.datosPersona.nombre + ' ' + this.datosPersona.apellidos;
  }

  cambiarDatosPersona(event) {
    this.datosPersona[event.key] = event.val;
  }
}
