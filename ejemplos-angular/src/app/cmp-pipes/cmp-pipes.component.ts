import { Component, OnInit, Pipe } from '@angular/core';

interface IProducto {
  titulo: string;
  precio: number;
  fechaLanzamiento: Date;
  descripcion: string;
}

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  producto: IProducto = {
    titulo: 'one plus 8',
    precio: 700,
    fechaLanzamiento: new Date(2020, 6, 15),
    descripcion: 'Lorem ipsum dolor Sit amet consectetur, adipisicing elit. Minus maiores, adipisci, ullam ipsa sit, harum expedita incidunt unde enim nostrum repellendus veniam dolorem? Vitae necessitatibus labore quidem, non error modi.'
  }

  palabrasAOcultar: Array<string> = ['sit', 'enim'];

  tareas: Promise<any>;

  constructor() { }

  ngOnInit(): void {
    this.getTareas()
  }

  async getTareas() {

    const resp = await fetch('http://jsonplaceholder.typicode.com/todos');

    this.tareas = resp.json();
    // this.tareas = await resp.json();

    // this.tareas = datos;
    // return datos;
  }

}
