import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetMoviesApiService } from '../../services';
import { Movie } from '../../models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() movieChange = new EventEmitter<Movie>();
  constructor(private movieService: GetMoviesApiService) {}
  movies: Movie[];
  searchTerm: string;
  ngOnInit() {}

  search() {
    this.movieService
      .getMovies(this.searchTerm)
      .subscribe((data) => (this.movies = data.results));
  }
  selectecMovie(movie) {
    this.movieChange.emit(movie);
  }
}
