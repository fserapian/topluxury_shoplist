import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const { firstName, lastName, email, password } = form.value;

    const user = { name: `${firstName} ${lastName}`, email, password };

    console.log(form.value);

    this.http.post<User>(environment.REGISTER_URL, user)
      .subscribe(res => console.log(res));

    console.log('registered');

    // this.flashMessage.showFlashMessage({
    //   messages: ["Successfully registered... Welcome to the luxury"],
    //   dismissible: true,
    //   timeout: 4000,
    //   type: 'success'
    // });

    this.router.navigate(['/home']);
  }

}
