import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    logo= "../../../assets/images/logo/bestimall.png"
    authenticated: boolean = false

    constructor(
        private authService:AuthService,
        private userService:UserService,
        private router:Router
      ){
    }

    ngOnInit():void{
        if(this.userService.getUser()) {
           this.authenticated = true
        }
    }

    async logOut(){
       this.userService.outUser()
       this.authenticated = false;
       return this.authService.signOut()
       .then(() =>
         this.router.navigateByUrl('login')
       )
    }
}
