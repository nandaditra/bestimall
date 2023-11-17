import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';
import { DetailProductComponent } from './modules/detail-film/page/detail-product.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { ElectronicsComponent } from './modules/electronics/page/electronics.component';
import { JeweleryComponent } from './modules/jewelery/page/jewelery.component';
import { MensComponent } from './modules/mens/page/mens.component';
import { WomensComponent } from './modules/womens/page/womens.component';
import { CartComponent } from './modules/cart/page/cart.component';
import { authguardGuard } from './core/guard/authguard.guard';

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
        path:'category',
        children: [
           {
             path:'electronics',
             title: 'Bestimall | Electronic',
             component : ElectronicsComponent
           },
           {
             path:'jewelery',
             title: 'Bestimall | Jewelery',
             component : JeweleryComponent,
          },
          {
             path:"men's clothing",
             title: 'Bestimall | Mens',
             component: MensComponent
            
          },
          {
             path:"women's clothing",
             title: 'Bestimall | Womens',
             component: WomensComponent,
          }
        ],
       },
       {
        path:"cart",
        title: "Bestimall | Cart",
        component: CartComponent,
        canActivate: [authguardGuard]
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
