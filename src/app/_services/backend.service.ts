import { Injectable } from "@angular/core";

import { UserService, Kmd  } from  'kinvey-angular-sdk'
import {MatSnackBar} from '@angular/material';

const _CURRENT_USER = "_CURRENT_USER";

class User {
    email?: string;
    password?: string;
  }

@Injectable()
export class BackendService {

    constructor(private userService: UserService, private snackBar: MatSnackBar){

    }



    async login(username: string, password: string) {
        try {
          const user = await this.userService.login(username, password);
         // console.log(user);
            return user;
        } catch (error) {
            this.snackBar.open('Please retry your request with correct credentials', 'Please try again', {
                duration: 3000,
            });
         // console.log(error);
            return null;
        }
      }

      async logout() {
        try {
          localStorage.clear();
          await this.userService.logout();
        } catch (error) {
          console.log(error);
        }
      }

}