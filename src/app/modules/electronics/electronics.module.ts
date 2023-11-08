import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EletronicsRoutingModule } from './eletronics-routing.module';
import { ElectronicsComponent } from './page/electronics.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ElectronicsComponent,
  ],
  imports: [
    CommonModule,
    EletronicsRoutingModule,
    SharedModule
  ]
})
export class ElectronicsModule { }
