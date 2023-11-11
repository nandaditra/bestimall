import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductComponent } from './page/detail-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule,
    SharedModule
  ]
})
export class DetailProductModule { }
