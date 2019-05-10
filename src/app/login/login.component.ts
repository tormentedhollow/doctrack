import { Component, OnInit } from '@angular/core';
import { BackendService } from '../_services/index';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

class user {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  logUser: user;
  isAuthenticating = false;

  constructor( private router: Router, 
    private backendService: BackendService) {
    this.logUser = new user();
   }

  ngOnInit() {
    this.backendService.logout();
  }

  login(){
    this.isAuthenticating = true;
    // Use the backend service to login
    this.backendService.login(this.logUser.email, this.logUser.password)
        .then((data) => {
          console.log(data);
            this.isAuthenticating = false;
            if(data){
              localStorage.setItem('currentUser', this.logUser.email);
            }            
            this.router.navigate(['/home', 'document']);
        }).catch(error => {
            this.isAuthenticating = false;
        });
  }
    // this.authService.login(this.logUser.email, this.logUser.password).subscribe(res=>{
    //   console.log(res);
    //   if(res.length){
    //     localStorage.setItem('currentUser', JSON.stringify(res[0].user_id));
    //     localStorage.setItem('name', JSON.stringify(res[0].username));
    //     localStorage.setItem('code', JSON.stringify(res[0].code));
    //     this.router.navigate(['/home', 'inventory']);
    //   }
    //   else{
    //     this.snackBar.open('Invalid email address and password', 'Please try again', {
    //       duration: 2000,
    //     });
    //   }
    // });
}




