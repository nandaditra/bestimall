import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";

@NgModule({
 declarations: [
    LoginComponent,
 ],
 imports: [
    CommonModule,
    AuthRoutingModule,
 ]
})
export class AuthModule {}