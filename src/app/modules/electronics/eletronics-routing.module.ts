import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './page/electronics.component';

export const routes:Routes = [
  {
    path:'electronics',
    component: ElectronicsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EletronicsRoutingModule { }
