import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const APP_ROUTES: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
