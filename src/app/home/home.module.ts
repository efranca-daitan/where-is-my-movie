import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  HomePageComponent,
  SearchBarComponent,
  ChipComponent,
} from './components';

@NgModule({
  declarations: [HomePageComponent, SearchBarComponent, ChipComponent],
  exports: [HomePageComponent],
  imports: [FormsModule, BrowserModule],
})
export class HomeModule {}
