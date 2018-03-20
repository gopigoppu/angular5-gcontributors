import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { PageService } from '../../shared/services/page.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchData: any;
  searchContainer: boolean;

  constructor(private apiService: ApiService, private pageService: PageService) { }

  ngOnInit() {
    this.pageService.setBodyBGHeight();
    this.searchContainer = false;
  }

  searchRepo(searchQuery) {
    // console.log(searchQuery);

    if (!searchQuery) {
      return;
    }
    this.apiService.getRepos(searchQuery).subscribe((data: any) => {
      // console.log(data.items);
      this.searchContainer = true;
      if (data.items.length > 0) {
        this.searchData = data.items;
      } else {
        this.searchData = null;
      }
      setTimeout(() => {
        this.pageService.setBodyBGHeight();
      }, 0);

    });

  }

}


// https://api.github.com/search/repositories?q=angular5
