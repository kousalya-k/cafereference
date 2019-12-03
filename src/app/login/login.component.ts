import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(private router: Router,
    private loginservice: AuthenticationService, private session: SessionStorageService) { }

  ngOnInit() {
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.loginservice.getCounter(this.username).subscribe(resp => {
        this.success(resp);
      })
    } else
      this.invalidLogin = true
  }
  success(resp) {
    console.log("success counter: " + resp);
    this.session.set("counter", resp);
    console.log("j" + resp.id)
    this.session.set("counterId", resp.id)
    console.log("session user: " + this.session.get("counter"));
    this.router.navigate(['order'])
    this.invalidLogin = false
  }
}