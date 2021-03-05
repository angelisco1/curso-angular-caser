import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit, OnDestroy {

  subscripcionInterval: Subscription = null;

  constructor() { }

  ngOnInit(): void {
    this.obsInterval();
  }

  obsInterval() {
    const obs = interval(500);

    this.subscripcionInterval = obs.subscribe((num) => {
      console.log(num);
    })
  }

  ngOnDestroy() {
    this.subscripcionInterval.unsubscribe();
  }
}
