import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class DatosService {

  mensajes: Array<string> = ['Hola'];
  mensajeParaB = new EventEmitter<string>();

  constructor(private logServ: LogService) { }

  addMensaje(msg: string) {
    this.mensajes.push(msg);
    this.logServ.muestraMensaje('Se ha enviado el mensaje ' + msg);
  }

  enviarMensajeAB(msg: string) {
    this.mensajeParaB.emit(msg);
  }

}
