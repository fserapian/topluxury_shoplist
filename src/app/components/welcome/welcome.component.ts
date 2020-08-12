import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    console.log('Welcome Component Init');
  }

  onLogin() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.http.post<User>(environment.LOGIN_URL, user)
      .subscribe(res => console.log(res));

    this.flashMessage.showFlashMessage({
      messages: ["Logged In... Welcome"],
      dismissible: true,
      timeout: 4000,
      type: 'success'
    });

    this.router.navigate(['/home']);

  }
}
