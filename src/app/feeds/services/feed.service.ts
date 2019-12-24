import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getTodayFeeds() {
    return this.http.get('/feeds').pipe(take(1));
  }

}
