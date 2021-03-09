import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp-reactivos',
  templateUrl: './cmp-reactivos.component.html',
  styleUrls: ['./cmp-reactivos.component.css']
})
export class CmpReactivosComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.formulario =  new FormGroup({
    //   usuario: new FormControl('angel', [Validators.required, this.esStark(['arya', 'robb', 'tony', 'rickon'])]),
    //   email: new FormControl('angel@gmail.com', Validators.required),
    //   password: new FormControl('1234', [Validators.required, Validators.minLength(5)]),
    // });
    // this.formulario =  this.formBuilder.group({
    //   usuario: this.formBuilder.control('arya', [Validators.required, this.esStark(['arya', 'robb', 'tony', 'rickon'])]),
    //   email: this.formBuilder.control('angel@gmail.com', Validators.required),
    //   password: this.formBuilder.control('123477734', [Validators.required, Validators.minLength(5)]),
    //   pais: this.formBuilder.control('', Validators.required),
    //   telefono: this.formBuilder.control(''),
    // }, { validator: this.telfConPrefijoDePais });
    this.formulario =  new FormGroup({
      usuario: new FormControl('arya', [Validators.required, this.esStark(['arya', 'robb', 'tony', 'rickon'])]),
      email: new FormControl('angel@gmail.com', Validators.required),
      password: new FormControl('123477734', [Validators.required, Validators.minLength(5)]),
      pais: new FormControl('', Validators.required),
      telefono: new FormControl(''),
    }, this.telfConPrefijoDePais);
  }

  registrate() {
    console.log(this.formulario.value);
  }

  telfConPrefijoDePais(formGroup: FormGroup) {
    const { pais, telefono } = formGroup.value;

    console.log('Validacion', pais, telefono)

    if (pais && !telefono) return { telefonoRequired: true };

    switch(pais) {
      case 'es':
        return telefono.includes('+34') ? null : {prefijoInvalid: 'Falta el +34'}
      case 'it':
        return telefono.includes('+35') ? null : {prefijoInvalid: 'Falta el +35'}
      case 'fr':
        return telefono.includes('+36') ? null : {prefijoInvalid: 'Falta el +36'}
    }
  }



  // esStark(formControl) {
  //   const personajesStark = ['arya', 'robb', 'tony', 'rickon'];
  //   if (personajesStark.includes(formControl.value.toLowerCase())) {
  //     return null;
  //   }
  //   return {esStark: true};
  // }

  esStark(personajesStark) {
    return (formControl) => {
      // console.log(formControl.root);
      // if (formControl.root.controls.email) {
      if (personajesStark.includes(formControl.value.toLowerCase())) {
        return null;
      }
      return {esStark: true};
      // }
      // return null;
    }
  }


}