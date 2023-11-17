import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/user/user.service';

export const authguardGuard: CanActivateFn = (route, state) => {
   const userService = inject(UserService)

   if(userService.getUser()) {
      return true
   } 
   return false
};
