import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GetMoviesApiService, GetGenresApiService } from './home/services';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HomeModule],
  providers: [GetMoviesApiService, GetGenresApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
