import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

interface IDatosBlink {
  color: string,
  colorInicial: string,
  interval: number
}

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit {

  // @HostBinding('class.miClase')
  // @HostBinding('attr.disabled')

  @HostBinding('style.backgroundColor') colorDelFondo;
  @Input('appBlink') datos: IDatosBlink;
  colorInicial: string = 'white';
  color: string = 'orange';
  interval: number = 500;
  id = null;

  constructor() { }

  ngOnInit() {
    // if (!this.color) {
    //   this.color = 'orange';
    // }
    if (this.datos) {
      this.color = this.datos.color;
      this.colorInicial = this.datos.colorInicial;
      this.interval = this.datos.interval;
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorDelFondo = this.color;

    // setInterval(() => {
    //   console.log(this);
    //   this.colorDelFondo = this.colorDelFondo === this.color ? this.colorInicial : this.color;
    // }, 500);

    // var that = this;
    // setInterval(function() {
    //   console.log(that);
    //   that.colorDelFondo = that.colorDelFondo === that.color ? that.colorInicial : that.color;
    // }, 500);

    this.id = setInterval(function() {
      console.log(this);
      this.colorDelFondo = this.colorDelFondo === this.color ? this.colorInicial : this.color;
    }.bind(this), this.interval);

  }

  @HostListener('mouseout') onMouseOut() {
    this.colorDelFondo = this.colorInicial;
    clearInterval(this.id);
  }

}
