import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, fromEvent } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit, OnDestroy {

  subscripciones: Array<Subscription> = [];

  constructor() { }

  ngOnInit(): void {
    // this.obsInterval();
    // this.obsMiObservable();
    // this.obsIntervalConOperadores();
    this.obsFromMouseMove();
  }

  obsInterval() {
    const obs = interval(500);

    const sub = obs.subscribe((num) => {
      console.log(num);
    })

    this.subscripciones.push(sub);
  }

  obsMiObservable() {
    const miObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Alguien ha subido su nuevo video "Mi nuevo video" al canal');
      }, 300);
      setTimeout(() => {
        observer.next('Alguien ha subido su nuevo video "Mi nuevo video" al canal');
      }, 1000);
      // setTimeout(() => {
      //   observer.error('Error: el video que esperabas no se ha podido subir');
      // }, 1600);
      setTimeout(() => {
        observer.complete();
      }, 1600);
    });

    const sub = miObservable.subscribe(
      (msg) => console.log(msg),
      (err) => console.log(err),
      () => console.log('A este canal de Youtube ya no se va a subir ningún video. Se ha cerrado!')
    );

    this.subscripciones.push(sub);
  }

  obsIntervalConOperadores() {
    const obs = interval(1000).pipe(
      map(num => num + 10)
    );

    const sub = obs.pipe(
      filter((num) => num % 2 === 0),
      take(5),
      map(num => num + '!'.repeat(num))
    ).subscribe((num) => {
      console.log(num);
    });

    this.subscripciones.push(sub);
  }

  obsFromMouseMove() {
    const obs = fromEvent(window, 'mousemove');

    const sub = obs.subscribe((event) => {
      console.log('Has movido el ratón: ', event);
    })

    this.subscripciones.push(sub);
  }

  ngOnDestroy() {
    this.subscripciones.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
