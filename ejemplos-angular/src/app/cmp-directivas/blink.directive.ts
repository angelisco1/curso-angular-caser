import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  // @HostBinding('class.miClase')
  // @HostBinding('attr.disabled')
  @HostBinding('style.backgroundColor') colorDelFondo;
  colorInicial: string = 'white';
  color: string = 'orange';
  id = null;

  constructor() { }

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
    }.bind(this), 500);

  }

  @HostListener('mouseout') onMouseOut() {
    this.colorDelFondo = this.colorInicial;
    clearInterval(this.id);
  }

}
