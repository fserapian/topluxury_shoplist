import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post<User>(environment.REGISTER_URL, user)
      .subscribe(res => console.log(res));

    this.flashMessage.showFlashMessage({
      messages: ["Successfully registered... Welcome to the luxury"],
      dismissible: true,
      timeout: 4000,
      type: 'success'
    });

    this.router.navigate(['/']);
  }

}
