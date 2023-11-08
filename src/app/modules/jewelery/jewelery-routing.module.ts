import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JeweleryComponent } from './page/jewelery.component';

export const routes:Routes = [
   {
     path: 'jewelery',
     component:JeweleryComponent
   }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JeweleryRoutingModule { }
