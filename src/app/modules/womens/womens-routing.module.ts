import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WomensComponent } from './page/womens.component';

export const router: Routes = [
   {
     path: "women's clothing",
     title: 'Bestimall | Womens',
     component: WomensComponent
   }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class WomensRoutingModule { }
