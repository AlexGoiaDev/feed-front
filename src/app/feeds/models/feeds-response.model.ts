import { FeedPaginationModel } from './feed-pagination.model';

export interface FeedsPaginationResponse {
  status: number;
  data: FeedPaginationModel;
  message: string;
}
