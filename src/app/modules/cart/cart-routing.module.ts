import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart.component';

const routes:Routes = [
  {
    path:'cart',
    component:CartComponent,
    title: 'Bestimall | Cart'
  }
]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CartRoutingModule { }
