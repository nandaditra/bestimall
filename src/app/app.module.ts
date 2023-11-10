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
import { MensModule } from './modules/mens/mens.module';
import { WomensModule } from './modules/womens/womens.module';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { FirestoreModule } from '@angular/fire/firestore';

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
    MensModule,
    WomensModule,
    AuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDNZJUGSju8mPjMREgpvrTFosq8DTvRrSA",
      authDomain: "bestimall.firebaseapp.com",
      projectId: "bestimall",
      storageBucket: "bestimall.appspot.com",
      messagingSenderId: "187985853740",
      appId: "1:187985853740:web:9802c366e8ea0d8e044089",
      measurementId: "G-84XYN01P6L"
    }),
    AngularFireAuthModule,
    FirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
