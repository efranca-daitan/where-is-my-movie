import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { SearchBarComponent } from '../seach-bar/search-bar.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
 styleUrls: ['./home-page.component.scss'],
  providers: [ChipComponent, SearchBarComponent, MovieCardComponent],
})
export class HomePageComponent implements OnInit {
  movieSelected: Movie;
  receiveMovieSelected($event) {
    this.movieSelected = $event;
  }
  constructor() {}
  ngOnInit() {}
}
