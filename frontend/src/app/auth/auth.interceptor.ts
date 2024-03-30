import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): 
  Observable<HttpEvent<unknown>> {
   const user = this.userService.currentUser;
   if(user.token){
    req = req.clone({
      setHeaders:{
        access_token: user.token
      }
    })
   }
    return next.handle(req)
  }
}













// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
