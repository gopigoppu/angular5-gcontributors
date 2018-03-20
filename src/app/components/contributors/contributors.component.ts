import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// https://api.github.com/repos/AcademiaBinaria/angular5/contributors
// 'https://api.github.com/user/following/'+followUsername+'?access_token='+$localStorage.access_token
// 'https://api.github.com/user/following/'+unfollowUsername+'?access_token='+$localStorage.access_token
