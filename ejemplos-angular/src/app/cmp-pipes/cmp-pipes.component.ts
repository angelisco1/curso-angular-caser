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
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus maiores, adipisci, ullam ipsa sit, harum expedita incidunt unde enim nostrum repellendus veniam dolorem? Vitae necessitatibus labore quidem, non error modi.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
