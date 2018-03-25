import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  userid: string;
  repoid: string;
  contributors: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    // console.log(this.route.params.subscribe(params => console.log(params)));
    // this.route.params.subscribe(params => {
    //   this.userid = params['userid'];
    //   this.repoid = params['repoid'];
    // });
    // console.log(this.userid, this.repoid);
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('userid'));
      this.userid = params.get('userid');
      this.repoid = params.get('repoid');

    });

    // console.log(this.userid, this.repoid);
    this.contributors = this.apiService.getContributors(this.userid, this.repoid)
      .subscribe((data: any) => {
        console.log(data);
        this.contributors = data;
      });

  }

  followContributor(userid) {
    console.log(userid);
    this.apiService.followContributor(userid).subscribe((data: any) => {
      console.log(data);
    });
  }

}


// https://api.github.com/repos/AcademiaBinaria/angular5/contributors
// 'https://api.github.com/user/following/'+followUsername+'?access_token='+$localStorage.access_token
// 'https://api.github.com/user/following/'+unfollowUsername+'?access_token='+$localStorage.access_token
