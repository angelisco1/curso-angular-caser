import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [
  //   DatosService
  // ]
})
export class CmpAComponent implements OnInit {
  mensajes: Array<string> = [];

  constructor(private datosServ: DatosService) { }

  ngOnInit(): void {
    this.mensajes = this.datosServ.mensajes;
  }

  enviarMsgAChat(nuevoMsg) {
    this.datosServ.addMensaje(nuevoMsg);
  }

  enviarMsgAB(nuevoMsg) {
    this.datosServ.enviarMensajeAB(nuevoMsg);
  }

}
