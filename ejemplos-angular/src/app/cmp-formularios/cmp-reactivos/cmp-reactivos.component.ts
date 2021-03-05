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
    this.formulario =  this.formBuilder.group({
      usuario: this.formBuilder.control('angel', [Validators.required, this.esStark(['arya', 'robb', 'tony', 'rickon'])]),
      email: this.formBuilder.control('angel@gmail.com', Validators.required),
      password: this.formBuilder.control('1234', [Validators.required, Validators.minLength(5)]),
    });
  }

  registrate() {
    console.log(this.formulario.value);
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