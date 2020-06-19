import { MovieScoreComponent } from '../../app/home/components/movie-card/components/movie-score.component';
export default {
  title: 'MovieScore',
  excludeStories: /.*Data$/,
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

export const High = () => ({
  component: MovieScoreComponent,
  props: {
    porcent: 75,
  },
});

export const Medium = () => ({
  component: MovieScoreComponent,
  props: {
    porcent: 70,
  },
});

export const Low = () => ({
  component: MovieScoreComponent,
  props: {
    porcent: 20,
  },
});
