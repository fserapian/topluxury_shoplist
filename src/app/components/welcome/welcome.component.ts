import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    console.log('Welcome Component Init');
  }

  onLogin(form: NgForm) {

    this.http.post<User>(environment.LOGIN_URL, form.value)
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
