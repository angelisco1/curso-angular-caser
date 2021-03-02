import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-cv-preview',
  templateUrl: './cmp-cv-preview.component.html',
  styleUrls: ['./cmp-cv-preview.component.css']
})
export class CmpCvPreviewComponent implements OnInit {

  @Input() nombreCompleto: string = '';
  @Input() trabajo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
