import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard {

  constructor( private _authService : AuthService, private _router : Router ) {
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this._authService.isAutenticated()) return true;

    this._router.navigate(['/login']);
    return false;
  }
}