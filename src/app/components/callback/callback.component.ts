import { Component, OnInit } from '@angular/core';
import { AuthGithubService } from '../../shared/auth/auth-github.service';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      Loading...
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthGithubService) { }

  ngOnInit() {
    // this.auth.handleLoginCallback();
  }

}
