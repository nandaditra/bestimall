import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensRoutingModule } from './mens-routing.module';
import { MensComponent } from './page/mens.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MensComponent],
  imports: [
    CommonModule,
    MensRoutingModule,
    SharedModule
  ]
})
export class MensModule { }
