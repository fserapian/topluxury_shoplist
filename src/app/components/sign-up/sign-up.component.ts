import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post<User>('http://localhost:5000/api/v1/auth/register', user)
      .subscribe(res => console.log(res));
  }

}
