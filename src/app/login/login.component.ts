import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin = "";
  userpassword = "";
  users = [
    { login: 'user', password: 'password' },
    { login: 'test', password: '1234' },
    { login: 'peter', password: 'hughes' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    for (let value of this.users) {
      if(this.userlogin == value.login && this.userpassword == value.password) {
        alert("Successful");
        this.router.navigateByUrl('/account');
        return;
      }
    }
    alert("Incorrect Login/Password");
  }

}
