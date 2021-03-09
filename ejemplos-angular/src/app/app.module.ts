import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routing } from './cmp-routing/app.routes';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpMsgComponent } from './cmp-input-output/cmp-msg/cmp-msg.component';
import { SugusComponent } from './cmp-input-output/sugus/sugus.component';
import { CmpCvComponent } from './cmp-cv/cmp-cv.component';
import { CmpCvFormComponent } from './cmp-cv/cmp-cv-form/cmp-cv-form.component';
import { CmpCvPreviewComponent } from './cmp-cv/cmp-cv-preview/cmp-cv-preview.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { CambiarSimboloPipe } from './cmp-pipes/cambiar-simbolo.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { FiltroPipe } from './cmp-directivas/filtro.pipe';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpReactivosComponent } from './cmp-formularios/cmp-reactivos/cmp-reactivos.component';
import { CmpPlantillaComponent } from './cmp-formularios/cmp-plantilla/cmp-plantilla.component';
import { ErrorFormComponent } from './cmp-formularios/error-form/error-form.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { LogService } from './cmp-servicios/log.service';
import { DatosService } from './cmp-servicios/datos.service';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { AuthService } from './cmp-http/auth.service';
import { CmpViewchildComponent } from './cmp-viewchild/cmp-viewchild.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    CmpMsgComponent,
    SugusComponent,
    CmpCvComponent,
    CmpCvFormComponent,
    CmpCvPreviewComponent,
    CmpPipesComponent,
    CambiarSimboloPipe,
    HideWordsPipe,
    CmpDirectivasComponent,
    BlinkDirective,
    FiltroPipe,
    CmpFormulariosComponent,
    CmpReactivosComponent,
    CmpPlantillaComponent,
    ErrorFormComponent,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpObservablesComponent,
    CmpHttpComponent,
    CmpViewchildComponent,
    CmpRoutingComponent,
    NuevoUsuarioComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    // DatosService
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
