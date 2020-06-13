import { Component, OnInit } from '@angular/core';
import { getMoviesApiService } from '../../services';
import { Movie } from '../../models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  constructor(private getMovies: getMoviesApiService) {}
  movies: Movie[];
  searchTerm: string;
  ngOnInit() {
  }

  search() {
    this.getMovies
      .getMovies(this.searchTerm)
      .subscribe((data) => (this.movies = data.results));
  }
}
