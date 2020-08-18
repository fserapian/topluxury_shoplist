import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthData } from '../models/authData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  register(name: string, email: string, password: string) {
    const authData: AuthData = { name, email, password };
    this.http.post<AuthData>(environment.REGISTER_URL, authData)
      .subscribe(res => console.log(res));
  }

  login(email: string, password: string) {
    const authData: AuthData = { email, password };
    this.http.post<{ success: boolean, token: string }>(environment.LOGIN_URL, authData)
      .subscribe(res => {
        this.token = res.token;
        console.log(res);
      });
  }

}
