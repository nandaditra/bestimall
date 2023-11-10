import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private userService: UserService
  ) { }
  
  async registerWithEmailAndPassword(user: {name: string, email:string, password:string}){
     return await this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((value: any) => {
        window.alert(value)
      })
  }

  async signWithEmailAndPassword(user: {email:string, password:string}){
    this.userService.setUser(user)
    return await this.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  async signOut(){
    this.userService.outUser();
    return this.auth.signOut().then((res)=> {
      window.alert("You have logout")
    })
  }
}
