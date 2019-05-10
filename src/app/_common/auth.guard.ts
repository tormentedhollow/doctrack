import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from 'kinvey-angular-sdk';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private userService: UserService) { }


 
    canActivate() {
 
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;    
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
    }
}