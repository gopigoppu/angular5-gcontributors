import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  readonly searchUrl = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) { }

  getRepos(query) {
    return this.http.get(this.searchUrl + query);
  }

}
