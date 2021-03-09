import { Routes } from '@angular/router';
import { EditarUsuarioGuard } from '../editar-usuario.guard';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { InfoUsuarioGuard } from '../info-usuario.guard';
import { InfoUsuarioComponent } from '../info-usuario/info-usuario.component';

export const USUARIOS_ROUTES: Routes = [
  { path: ':usuarioId/info' , component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard] },
  { path: ':usuarioId/editar', component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard] },
]