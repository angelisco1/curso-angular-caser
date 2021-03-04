import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-plantilla',
  templateUrl: './cmp-plantilla.component.html',
  styleUrls: ['./cmp-plantilla.component.css']
})
export class CmpPlantillaComponent implements OnInit {

  datosIniciales = {
    usuario: 'angel',
    email: 'angel@gmail.com',
    password: 1234
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrate(form) {
    console.log(form.value);
    // Hacer un POST con esos datos
  }

}
