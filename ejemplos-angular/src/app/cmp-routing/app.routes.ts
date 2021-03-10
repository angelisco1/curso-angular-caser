import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'tiempo', component: TiempoComponent, outlet: 'regionAux' },
  { path: 'noticias', component: NoticiasComponent, outlet: 'regionAux' },
  {
    path: 'admin',
    // loadChildren: '../admin/admin.module#AdminModule'
    loadChildren: () => import('../admin/admin.module').then(module => module.AdminModule)
  },
  { path: '**', component: ErrorComponent },
  // { path: 'usuarios/:usuarioId/info', component: InfoUsuarioComponent },
  // { path: ':usuarioId', component: InfoUsuarioComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
