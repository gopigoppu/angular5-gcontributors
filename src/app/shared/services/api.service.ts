import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  readonly searchUrl = 'https://api.github.com/search/repositories?q=';
  readonly contributorsUrl = 'https://api.github.com/repos/';
  readonly contributorFollowUrl = 'https://api.github.com/user/following/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(private http: HttpClient) { }

  getRepos(query) {
    return this.http.get(this.searchUrl + query);
  }

  getContributors(owner, repo) {
    return this.http.get(this.contributorsUrl + owner + '/' + repo + '/contributors');
  }

  followContributor(user: any) {
    return this.http.put(this.contributorFollowUrl + user + '?access_token=' + localStorage.getItem('token'), this.httpOptions);
  }

}
