import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedsPaginationResponse } from '../models/feeds-response.model';
import { FeedResponse } from '../models/feed-response.model';
import { FeedModel } from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDailyFeeds(): Observable<FeedsPaginationResponse> {
    return this.http.get<FeedsPaginationResponse>(this.baseUrl + 'feed?limit=10');
  }

  addByUrl(url: string): Observable<FeedResponse> {
    return this.http.post<FeedResponse>(this.baseUrl + 'feed/scrap', { url });
  }

  deleteFeed(id: string): Observable<FeedResponse> {
    return this.http.delete<FeedResponse>(this.baseUrl + `feed/${id}`);
  }

  editFeed(id: string, changes: any): Observable<FeedResponse> {
    return this.http.put<FeedResponse>(this.baseUrl  + `feed/${id}`, changes);
  }

}
