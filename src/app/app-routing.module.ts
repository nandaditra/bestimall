import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';
import { DetailProductComponent } from './modules/detail-film/page/detail-product.component';
import { CategoryComponent } from './modules/category/page/category.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SigninComponent } from './modules/auth/signin/signin.component';

const routes: Routes = [
  { 
     path: '', 
     redirectTo: '/home', 
     pathMatch: 'full' 
  },
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
  {
     path: 'auth',
     component: ContentlayoutComponent,
     children: [
      {
        path:'login',
        title: 'Bestimall | Login',
        component: LoginComponent
      }, 
      {
        path: 'signin',
        title: 'Bestimall | Sign In',
        component: SigninComponent
      }
     ]
  }
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
