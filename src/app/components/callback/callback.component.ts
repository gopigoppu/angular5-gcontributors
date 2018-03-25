import { Component, OnInit } from '@angular/core';
import { AuthGithubService } from '../../shared/auth/auth-github.service';
import { SpinnerVisibilityService } from 'ng-http-loader/services/spinner-visibility.service';


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

  constructor(private auth: AuthGithubService, private spinner: SpinnerVisibilityService) { }

  ngOnInit() {
    // this.spinner.show();
    this.auth.handleLoginCallback();
  }

}
