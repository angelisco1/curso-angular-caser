import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Charly';
  estaDeshabilitado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getNombre() {
    return this.nombre;
  }

  toggleDeshabilitado(event) {
    console.log(event);
    this.estaDeshabilitado = !this.estaDeshabilitado;
  }

  cambiarNombre(event) {
    this.nombre = event.target.value;
  }

}
