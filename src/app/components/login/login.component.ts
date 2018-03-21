import { Component, OnInit } from '@angular/core';
import { AuthGithubService } from '../../shared/auth/auth-github.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authGithbService: AuthGithubService) { }

  public login() {
    console.log('login click');
    this.authGithbService.login();
  }

  ngOnInit() {
  }

}
