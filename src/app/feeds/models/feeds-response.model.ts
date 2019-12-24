import { FeedPaginationModel } from './feed-pagination.model';

export interface FeedsResponse {
  status: number;
  data: FeedPaginationModel;
  message: string;
}
