import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor() { }

  setBodyBGHeight() {

    let repoHeight = 0;

    if (document.getElementsByClassName('repo-container')[0]) {
      repoHeight = document.getElementsByClassName('repo-container')[0].clientHeight;
    }


    // tslint:disable-next-line:prefer-const
    let currentBgHeight = document.getElementsByClassName('search-container')[0].clientHeight + repoHeight;
    // tslint:disable-next-line:prefer-const
    let actualBgHeight = window.screen.height;
    if (actualBgHeight < currentBgHeight) {
      document.body.style.height = '100%';
    } else {
      document.body.style.height = '100vh';
    }
  }

}
