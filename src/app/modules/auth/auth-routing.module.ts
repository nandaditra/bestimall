import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { ContentlayoutComponent } from "src/app/layout/contentlayout/contentlayout.component";

export const routes:Routes= [
    {
        path:'auth',
        component:ContentlayoutComponent,
        children: [
         
        ]
    }
]

@NgModule({
    declarations: [],
    imports:[
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule{}