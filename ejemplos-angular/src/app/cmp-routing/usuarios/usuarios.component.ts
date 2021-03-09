import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = [];
  constructor(private usuariosServ: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosServ.getUsuarios().subscribe((usuarios: Array<any>) => {
      this.usuarios = usuarios;
    });
  }
}
