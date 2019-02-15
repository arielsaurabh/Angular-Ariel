
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, @Inject(DOCUMENT) private document, private router: Router) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    debugger
    let checkLogin = this.authService.isLoggedIn();
    return checkLogin;
  }
}