import { Component, OnInit } from '@angular/core';
import { DatosService, IConcepto } from './datos.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {

  conceptos: Array<IConcepto> = [];

  constructor(private datosServ: DatosService) { }

  ngOnInit(): void {
    this.getDatos()
    // this.datosServ.getConceptos().subscribe(datos => {
    //   this.conceptos = datos;
    // })
  }

  crearConcepto() {
    this.datosServ.crearConcepto().subscribe((resp) => {
      console.log(resp);
      this.getDatos()
    });
  }

  eliminar(id) {
    this.datosServ.eliminarConcepto(id).subscribe(() => {
      console.log('Eliminado...');
      this.getDatos()
    });
  }

  getDatos(){
    this.datosServ.getConceptos().subscribe(datos => {
      this.conceptos = datos;
    })
  }
}
