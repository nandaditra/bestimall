import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomensRoutingModule } from './womens-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WomensComponent } from './page/womens.component';

@NgModule({
  declarations: [WomensComponent],
  imports: [
    CommonModule,
    WomensRoutingModule,
    SharedModule
  ]
})
export class WomensModule { }
