import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeweleryRoutingModule } from './jewelery-routing.module';
import { JeweleryComponent } from './page/jewelery.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [JeweleryComponent],
  imports: [
    CommonModule,
    JeweleryRoutingModule,
    SharedModule,
  ]
})
export class JeweleryModule { }
