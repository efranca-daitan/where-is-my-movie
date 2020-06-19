import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { SearchBarComponent } from '../seach-bar/search-bar.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../models';
import { GetGenresApiService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ChipComponent, SearchBarComponent, MovieCardComponent],
})
export class HomePageComponent implements OnInit {
  movieSelected: Movie;
  genres: Map<number, string>;
  receiveMovieSelected($event) {
    this.movieSelected = $event;
  }
  constructor(private genresService: GetGenresApiService) {}
  ngOnInit() {
    this.genres = new Map();
    this.genresService
      .getGenres()
      .subscribe((data) => this.hashMapGenres(data.genres));
  }

  hashMapGenres(genres) {
    genres.forEach((genre) => {
      this.genres.set(genre.id, genre.name);
    });
  }
}
