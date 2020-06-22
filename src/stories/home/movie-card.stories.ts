import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './../../app/home/components';
import { MovieScoreComponent } from './../../app/home/components/movie-card/components/movie-score.component';

export default {
  title: 'MovieCard',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [MovieScoreComponent],
      imports: [CommonModule],
    }),
  ],
};

export const movieData = {
  popularity: 69.083,
  vote_count: 11928,
  video: false,
  poster_path: '/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg',
  id: 109445,
  adult: false,
  backdrop_path: '/vfkUC9sV1LoReuz1QuTIKTj8XpK.jpg',
  original_language: 'en',
  original_title: 'Frozen',
  genre_ids: [12, 16, 10751],
  title: 'Frozen',
  vote_average: 7.3,
  overview:
    "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
  release_date: '2013-11-27',
};

export const genresData = new Map([
  [28, 'Action'],
  [12, 'Adventure'],
  [16, 'Animation'],
  [35, 'Comedy'],
  [80, 'Crime'],
  [99, 'Documentary'],
  [18, 'Drama'],
  [10751, 'Family'],
  [14, 'Fantasy'],
  [36, 'History'],
  [27, 'Horror'],
  [10402, 'Music'],
  [9648, 'Mystery'],
  [10749, 'Romance'],
  [878, 'Science Fiction'],
  [10770, 'TV Movie'],
  [53, 'Thriller'],
  [10752, 'War'],
  [37, 'Western'],
]);

export const Default = () => ({
  component: MovieCardComponent,
  props: {
    movieSelected: movieData,
    genres: genresData,
    porcent: 20,
  },
});

export const WithoutPoster = () => ({
  component: MovieCardComponent,
  props: {
    movieSelected: { ...movieData, poster_path: null },
    genres: genresData,
    porcent: 20,
  },
});

export const WithoutBackground = () => ({
  component: MovieCardComponent,
  props: {
    movieSelected: { ...movieData, backdrop_path: null },
    genres: genresData,
    porcent: 20,
  },
});
