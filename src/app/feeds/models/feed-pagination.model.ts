import { PaginationModel } from './pagination.model';
import { FeedModel } from './feed.model';

export interface FeedPaginationModel extends PaginationModel {
  docs: FeedModel[];
}
