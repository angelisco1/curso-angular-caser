import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradorMemesComponent } from './generador-memes/generador-memes.component';
import { MemeComponent } from './meme/meme.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';
import { FormMemeComponent } from './form-meme/form-meme.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneradorMemesComponent,
    MemeComponent,
    ListaMemesComponent,
    FormMemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
