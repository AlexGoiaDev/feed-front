import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FeedPaginationModel } from '../models/feed-pagination.model';
import { FeedsResponse } from '../models/feeds-response.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDailyFeeds(): Observable<FeedsResponse> {
    return this.http.get<FeedsResponse>(this.baseUrl + 'feed').pipe(take(1));
  }

}
