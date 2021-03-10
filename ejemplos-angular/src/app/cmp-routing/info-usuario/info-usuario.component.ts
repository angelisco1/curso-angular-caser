import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  id = '';
  usuario = {};
  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('usuarioId');
    })

    const state: any = this.location.getState();
    this.usuario = state.usuario;
  }
}
