import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';
import { DetailProductComponent } from './modules/detail-film/page/detail-product.component';
import { CategoryComponent } from './modules/category/page/category.component';

const routes: Routes = [
  { 
     path: '', 
     redirectTo: '/home', 
     pathMatch: 'full' },
  { 
     path: '',
     component: ContentlayoutComponent,
     children:[
      {
        path: 'home',
        title: 'Bestimall | Home',
        component:HomeComponent
      },
      { path: 'detail-product/:productId',
        title: 'Bestimall | Detail Product',
        component: DetailProductComponent
      },
      {
        path: 'category/:categoryId',
        title: 'Bestimall | Category',
        component: CategoryComponent,
      }
     ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
