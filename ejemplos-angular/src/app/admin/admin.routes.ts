import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent },
];

export const AdminRouting = RouterModule.forChild(ADMIN_ROUTES);
