import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  seMuestra: boolean = false;
  mascotas: Array<string> = [
    'gato',
    'perro',
    'canario'
  ];

  miMascota: string = 'gato';

  persona = {
    apellido: 'Villalba',
    nombre: 'Angel',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
