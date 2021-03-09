import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../editar-usuario.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate {
  datosGuardados = false;
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.datosGuardados = !this.datosGuardados;
  }

  canDeactivate() {
    return this.datosGuardados ? true : confirm('¿Quieres salir? Perderas los cambios que no has guardado!');
  }

}
