import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { GetMoviesApiService } from '../../app/home/services';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SearchBarComponent } from '../../app/home/components/seach-bar/search-bar.component';

export default {
  title: 'SearchBar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      providers: [GetMoviesApiService, HttpClientModule, HttpClient, HttpHandler],
      imports: [CommonModule],
    }),
  ],
};

export const Default = () => ({
  component: SearchBarComponent,
  props: {},
});
