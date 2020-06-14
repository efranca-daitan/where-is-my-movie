import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent implements OnChanges, OnInit {
  @Input() movieSelected: Movie;
  imgUrl: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'movieSelected': {
            if (
              changes[propName].currentValue.poster_path ||
              changes[propName].currentValue.backdrop_path
            ) {
              if (changes[propName].currentValue.poster_path) {
                this.imgUrl = `https://image.tmdb.org/t/p/original${changes[propName].currentValue.poster_path}`;
              }
              if (changes[propName].currentValue.backdrop_path) {
                this.imgUrl = `https://image.tmdb.org/t/p/original${changes[propName].currentValue.backdrop_path}`;
              }
            } else {
              this.imgUrl =
                'https://popcorn.tvseries-movies.com/themes/vstripe/images/no-cover.png';
            }
          }
        }
      }
    }
  }
  ngOnInit() {
    if (this.movieSelected.poster_path || this.movieSelected.backdrop_path) {
      this.imgUrl = `https://image.tmdb.org/t/p/original${
        this.movieSelected.poster_path || this.movieSelected.backdrop_path
      }`;
    } else {
      this.imgUrl =
        'https://popcorn.tvseries-movies.com/themes/vstripe/images/no-cover.png';
    }
  }
}
