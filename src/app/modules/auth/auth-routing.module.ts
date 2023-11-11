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
            {
                path:'login',
                title: 'Bestimall | Login',
                component: LoginComponent
            },
            { 
                path:'signin',
                title: 'Bestimall | Sign In',
                component: SigninComponent
            }
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