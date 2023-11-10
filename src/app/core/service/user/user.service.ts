import { Injectable } from '@angular/core';
import { User } from 'src/app/data/schema/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User{
    return JSON.parse(localStorage.getItem('user')!)
  }

  public setUser(value: User){
    localStorage.setItem('user', JSON.stringify(value));
  }

  public outUser(){
    localStorage.removeItem('user');
  }
}
