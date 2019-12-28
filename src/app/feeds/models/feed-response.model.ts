import {FeedModel } from './feed.model';
export interface FeedResponse {
  status: number;
  message: string;
  data: FeedModel;
}
