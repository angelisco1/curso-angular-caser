import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface ICambios {
  key: string;
  val: string;
}

@Component({
  selector: 'app-cmp-cv-form',
  templateUrl: './cmp-cv-form.component.html',
  styleUrls: ['./cmp-cv-form.component.css']
})
export class CmpCvFormComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() apellidos: string = '';
  @Input() trabajo: string = '';
  @Output() datoCambiado = new EventEmitter<ICambios>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDato(event) {
    const datos: ICambios = {
      key: event.target.name,
      val: event.target.value
    }
    this.datoCambiado.emit(datos);
  }

}
