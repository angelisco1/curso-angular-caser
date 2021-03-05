import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-msg',
  templateUrl: './cmp-msg.component.html',
  styleUrls: ['./cmp-msg.component.css']
})
export class CmpMsgComponent implements OnInit {

  @Input() texto: string = 'Un mensaje';
  @Input() fecha: string = 'Ayer';

  _dato: string;
  get dato() {
    return this._dato;
  }
  @Input() set dato(valor) {
    this._dato = valor + '!!!';
    // this.dato = valor + '!!!'; // Cuidado, bucle infinito
  }

  constructor() { }

  ngOnInit(): void {
    this.dato = '111'
  }

}
