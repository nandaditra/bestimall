import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
   email:string = ""
   error:boolean = false
   
   signForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)   
   }) 

   constructor(
      private authService: AuthService,
      private router: Router) {     
   }

   ngOnInit():void {
      
   }

   signIn(){
      const password = this.signForm.value.password
      const confirmPassword = this.signForm.value.confirmPassword
      const name = this.signForm.value.name 
      const email = this.signForm.value.email

      if(!name || !email || !password || !confirmPassword ) {
         window.alert("Field still empty")
         return 
      }

      if(password != confirmPassword) {
         this.error = true;
         this.email = "Password Not Match"     
         return
      }

      const userData = Object.assign({email: email, password: password});    
      return this.authService.registerWithEmailAndPassword(userData)
        .then(()=>
            this.router.navigateByUrl('home').then(() => {
                  window.location.reload();
            })
        ).catch((error:any)=> 
           console.log(error)
        );
   }
}
