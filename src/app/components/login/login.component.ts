import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() onLoginPage = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log('logging in ', form);
    this.router.navigate(['/home']);
  }

}
