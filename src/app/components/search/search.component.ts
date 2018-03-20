import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  searchRepo(searchQuery) {
    console.log(searchQuery);
    this.apiService.getRepos(searchQuery).subscribe((data: any) => {
      console.log(data);
    });

  }

}


// https://api.github.com/search/repositories?q=angular5
