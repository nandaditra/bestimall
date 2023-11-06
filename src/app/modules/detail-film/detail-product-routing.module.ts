import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './page/detail-product.component';

export const routes:Routes = [
    {
      path:'detail-film/:productId',
      component:DetailProductComponent 
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)    
  ],
  exports: [RouterModule]
})
export class DetailProductRoutingModule { }
