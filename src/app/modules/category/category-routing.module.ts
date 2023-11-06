import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './page/category.component';

export const routes:Routes = [
   {
      path: 'category/:categoryId',
      component: CategoryComponent
   }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
