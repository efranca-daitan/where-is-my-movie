import { Chip } from './chip.model';
import { Movie } from './movie.model';
export class HomePage {
  title: string;

  searchSection: {
    default_input: string;
  };
  chipSection: {
    data: Chip[];
  };
  movieCardSection: {
    data: Movie[];
  };

  constructor(data: any) {
    this.title = data.title;
    this.searchSection = data.searchSection;
    this.chipSection = data.chipSection;
    this.movieCardSection = data.movieCardSection;
  }
}

export interface EmptyStateFilter {
  title: string;
  chipSection: string;
  movieCardSection: string;
}
