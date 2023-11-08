import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductModule } from './modules/detail-film/detail-product.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { ElectronicsModule } from './modules/electronics/electronics.module';
import { JeweleryModule } from './modules/jewelery/jewelery.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentlayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    DetailProductModule,
    SharedModule,
    ElectronicsModule,
    JeweleryModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
