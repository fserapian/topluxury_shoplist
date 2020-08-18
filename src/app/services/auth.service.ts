import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string) {
    const user: User = { name, email, password };
    this.http.post<User>(environment.REGISTER_URL, user)
      .subscribe(res => console.log(res));
  }
}
