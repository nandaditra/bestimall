import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
     private authService: AuthService,
     private router:Router
  ){

  }

  login() {
    const email = this.loginForm.value.email 
    const password= this.loginForm.value.password
    
    if(!email && !password) {
      window.alert("The Field still empty") 
      return
    } 

    const userData = Object.assign({email: email, password: password});    
    return this.authService.signWithEmailAndPassword(userData).
       then((res:any)=>
          this.router.navigateByUrl('home')
       ).catch((error:any)=> 
          console.log(error)   
       );
  }
}
