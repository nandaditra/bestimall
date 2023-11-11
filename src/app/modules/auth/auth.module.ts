import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
 declarations: [
    LoginComponent,
    SigninComponent,
 ],
 imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
 ]
})
export class AuthModule {}