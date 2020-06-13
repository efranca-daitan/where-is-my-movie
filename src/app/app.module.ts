import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { getMoviesApiService } from './home/services';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HomeModule],
  providers: [getMoviesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
