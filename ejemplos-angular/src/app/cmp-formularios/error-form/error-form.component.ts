import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnChanges {

  @Input() error: any;
  key = null;

  constructor() { }

  ngOnChanges(changes) {
    this.key = Object.keys(this.error)[0];
  }
}
