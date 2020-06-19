import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../models';
import { MovieScoreComponent } from './components/movie-score.component';
import { Hash } from 'crypto';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  providers: [MovieScoreComponent],
})
export class MovieCardComponent implements OnChanges, OnInit {
  @Input() movieSelected: Movie;
  @Input() genres: Map<number, string>;
  releaseYear: string;
  posterUrl: string;
  backdropUrl: string;
  porcent: number;
  movieGenres: string[];
  hashMapMovieGenres: Hash;
  originalLanguage: string;
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'movieSelected': {
            this.porcent = changes[propName].currentValue.vote_average * 10;
            this.originalLanguage = changes[
              propName
            ].currentValue.original_language.toUpperCase();
            this.releaseYear = changes[
              propName
            ].currentValue.release_date.split('-')[0];

            if (changes[propName].currentValue.poster_path) {
              this.posterUrl = `https://image.tmdb.org/t/p/original${changes[propName].currentValue.poster_path}`;
            } else {
              this.posterUrl =
                'https://popcorn.tvseries-movies.com/themes/vstripe/images/no-cover.png';
            }

            if (changes[propName].currentValue.backdrop_path) {
              this.backdropUrl = `http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${changes[propName].currentValue.backdrop_path}`;
            } else {
              this.backdropUrl = null;
            }
          }
        }
      }
    }
  }
  ngOnInit() {
    this.originalLanguage = this.movieSelected.original_language.toUpperCase();
    this.movieGenres = this.movieSelected.genre_ids.map((id) =>
      this.genres.get(id)
    );
    if (this.movieSelected.poster_path) {
      this.posterUrl = `https://image.tmdb.org/t/p/original${this.movieSelected.poster_path}`;
    } else {
      this.posterUrl =
        'https://popcorn.tvseries-movies.com/themes/vstripe/images/no-cover.png';
    }

    if (this.movieSelected.backdrop_path) {
      this.backdropUrl = `http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.movieSelected.backdrop_path}`;
    }
  }
}
