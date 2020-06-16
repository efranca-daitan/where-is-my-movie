import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../models';
import { MovieScoreComponent } from './components/movie-score.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  providers: [MovieScoreComponent],
})
export class MovieCardComponent implements OnChanges, OnInit {
  @Input() movieSelected: Movie;
  releaseYear: string;
  imgUrl: string;
  porcent: number;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'movieSelected': {
            this.porcent = changes[propName].currentValue.vote_average * 10;
            this.releaseYear = changes[
              propName
            ].currentValue.release_date.split('-')[0];
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
