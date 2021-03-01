import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-msg',
  templateUrl: './cmp-msg.component.html',
  styleUrls: ['./cmp-msg.component.css']
})
export class CmpMsgComponent implements OnInit {

  @Input() texto: string = 'Un mensaje';
  @Input() fecha: string = 'Ayer';


  constructor() { }

  ngOnInit(): void {
  }

}
