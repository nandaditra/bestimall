import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { ControlMessaggeComponent } from './component/control-messagge/control-messagge.component';
import { MaterialModule } from './material.module';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [ProductItemComponent, ControlMessaggeComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ProductItemComponent,
    SpinnerComponent,
    MaterialModule
  ]
})
export class SharedModule { }
