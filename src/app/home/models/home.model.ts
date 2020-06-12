import { Chip } from './chip.model';

export class HomePage {
  title: string;

  seachSection: {
    default_input: string;
  };
  chipSection: {
    data: Chip[];
    apply_label: string;
    clear_all_label: string;
  };
  movieCardSection: {
    title: string;
    date: string;
    overview: string;
    image: { url: string };
  };

  constructor(data: any) {
    this.title = data.title;
    this.seachSection = data.seachSection;
    this.chipSection = data.chipSection;
    this.movieCardSection = data.movieCardSection;
  }
}

export interface EmptyStateFilter {
  title: string;
  chipSection: string;
  movieCardSection: string;
}
