import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  muestraMensaje(mensaje) {
    console.log('MSG: ' + mensaje);
  }
}
