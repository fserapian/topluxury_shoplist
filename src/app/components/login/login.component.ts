import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private flashMessage: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

  onClick() {
    if (this.username === 'admin' && this.password === 'admin') {

      this.flashMessage.showFlashMessage({
        messages: ["Logged In... Welcome"],
        dismissible: true,
        timeout: 4000,
        type: 'success'
      });

      this.router.navigate(['/home']);
    } else {

      console.log('Here....');
      this.flashMessage.showFlashMessage({
        messages: ["Cannot login... check username and password"],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });

      this.router.navigate(['/login']);
    }

  }

}
