import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedsResponse } from '../models/feeds-response.model';
import { FeedModel } from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDailyFeeds(): Observable<FeedsResponse> {
    return this.http.get<FeedsResponse>(this.baseUrl + 'feed?limit=10');
  }

  addByUrl(url: string) {
    return this.http.post(this.baseUrl + 'feed/scrap', { url });
  }

  deleteFeed(id: string) {
    return this.http.delete(this.baseUrl + `feed/${id}`);
  }

  editFeed(changes: any, id: string) {
    return this.http.put(this.baseUrl  + `feed/${id}`, changes);
  }

}
