import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() sabor: string = '';
  @Input() color: string = '';
  @Output() saborCambiado = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  changeSugus(event) {
    // console.log(event);
    this.saborCambiado.emit(event.target.value);
  }

  getStyles() {
    return {
      width: '100px',
      height: '100px',
      backgroundColor: this.color
    }
  }

}
