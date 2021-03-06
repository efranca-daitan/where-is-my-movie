export interface Movie {
  id: number;
  popularity: number;
  vote_count: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  release_date: Date;
  original_language: string;
  overview: string;
  genre_ids: number[];
}
