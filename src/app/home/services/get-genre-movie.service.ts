import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetGenresApiService {
  constructor(private httpClient: HttpClient) {}
  getGenres(): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/genre/movie/list?&api_key=feb6f0eeaa0a72662967d77079850353`
    );
  }
}
