import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
   signForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)   
   }) 

   constructor(private userService: UserService) {
           
   }

   signIn(){
      const password = this.signForm.value.password
      const confirmPassword = this.signForm.value.confirmPassword

      if(password != confirmPassword) {
         
         return
      }

      
   }
}
