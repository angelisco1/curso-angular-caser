import { Component, OnInit } from '@angular/core';

interface Sugus {
  sabor: string;
  color: string;
}

@Component({
  selector: 'app-cmp-input-output',
  templateUrl: './cmp-input-output.component.html',
  styleUrls: ['./cmp-input-output.component.css']
})
export class CmpInputOutputComponent implements OnInit {

  sugus: Array<Sugus> = [
    { sabor: 'piña', color: 'blue' },
    { sabor: 'naranja', color: 'orange' },
  ]

  constructor() { }

  cambiarSaborSugus(event) {
    console.log('Se está cambiando el sabor...')
    this.sugus[0].sabor = event;
  }

  ngOnInit(): void {
  }

}
