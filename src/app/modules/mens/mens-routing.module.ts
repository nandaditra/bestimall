import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './page/mens.component';

export const routes:Routes = [
   {
     path: "men's clothing",
     component: MensComponent
   }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MensRoutingModule { }
