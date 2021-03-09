import { RouterModule, Routes } from '@angular/router';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  // { path: 'usuarios/:usuarioId/info', component: InfoUsuarioComponent },
  // { path: ':usuarioId', component: InfoUsuarioComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
