import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
        
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (window.localStorage.getItem('auth')) {
            return true;
        }
        console.log("You must login");
        this.router.navigate(['/login']);
        return false;
    }
}
