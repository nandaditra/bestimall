import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductModule } from './modules/detail-film/detail-product.module';
import { CategoryModule } from './modules/category/category.module';
import { SharedModule } from './shared/shared.module';

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
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
