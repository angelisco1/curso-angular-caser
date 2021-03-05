import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [
  //   DatosService
  // ]
})
export class CmpBComponent implements OnInit {
  mensajes: Array<string> = [];
  mensaje: string = '';

  constructor(private datosServ: DatosService) { }

  ngOnInit(): void {
    this.mensajes = this.datosServ.mensajes;

    this.datosServ.mensajeParaB.subscribe((mensajeDeA) => {
      this.mensaje = mensajeDeA;
    });

  }

  enviarMsgAChat(nuevoMsg) {
    this.datosServ.addMensaje(nuevoMsg);
  }

}
