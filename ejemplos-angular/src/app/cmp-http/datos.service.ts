import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IConcepto {
  id: string,
  concepto: string,
  cantidad: number
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  URL: string = 'https://ingresos-gastos-32f12.firebaseio.com/conceptos-curso-angular/angel';

  constructor(private http: HttpClient) { }

  getConceptos() {
    return this.http.get(this.URL + '.json')
      .pipe(
        map(datos => {
          const arrayDatos: Array<IConcepto> = [];
          for (let key in datos) {
            const concepto: IConcepto = { id: key, ...datos[key] }
            arrayDatos.push(concepto)
          }
          return arrayDatos;
        })
      );
  }

  crearConcepto() {
    const nuevoConcepto = { concepto: 'Luz', cantidad: 74 };
    return this.http.post(this.URL + '.json', JSON.stringify(nuevoConcepto));
  }

  eliminarConcepto(id: string) {
    // this.http.delete(this.URL + '/' + id + '.json')
    return this.http.delete(`${this.URL}/${id}.json`);
  }

}
