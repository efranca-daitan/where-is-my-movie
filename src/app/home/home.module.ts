import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  HomePageComponent,
  SearchBarComponent,
  ChipComponent,
  MovieCardComponent,
} from './components';

import { MovieScoreComponent } from '../home/components/movie-card/components/movie-score.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBarComponent,
    ChipComponent,
    MovieCardComponent,
    MovieScoreComponent,
  ],
  exports: [HomePageComponent],
  imports: [FormsModule, BrowserModule],
})
export class HomeModule {}
