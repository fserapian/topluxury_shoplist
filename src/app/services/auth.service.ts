import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  isAuthenticated() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 1000);
    })
  }


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
