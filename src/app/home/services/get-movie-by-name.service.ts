import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class getMoviesApiService {
  constructor(private httpClient: HttpClient) {}
  getMovies(keywords): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/search/movie?&api_key=feb6f0eeaa0a72662967d77079850353&query=${keywords}`
    );
  }
}
