import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouting } from './admin.routes';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }
