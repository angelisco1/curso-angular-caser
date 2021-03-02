import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarSimbolo'
})
export class CambiarSimboloPipe implements PipeTransform {

  transform(value: string, lugarDelSimbolo: string = 'D'): string {
    if (lugarDelSimbolo === 'I') return value;

    const simbolo = value[0];
    return value.slice(1) + simbolo;
  }

}
