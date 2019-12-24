import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FeedModel } from './models/feed.model';
import { FeedService } from './services/feed.service';
import { take } from 'rxjs/operators';
import { FeedPaginationModel } from './models/feed-pagination.model';
import { FeedsResponse } from './models/feeds-response.model';
import { NbDialogService } from '@nebular/theme';
import { NewFeedComponent } from './new-feed/new-feed.component';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedsComponent implements OnInit {
  elMundoFeeds: FeedModel[] = [];
  elPaisFeeds: FeedModel[] = [];

  constructor(
    private feedService: FeedService,
    private dialogService: NbDialogService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getDailyFeeds();
  }

  getDailyFeeds() {
    this.feedService.getDailyFeeds().pipe(take(1)).subscribe((res: FeedsResponse) => {
      if (res.data.docs && res.data.docs.length > 0) {
        this.organizeDailyFeeds(res.data.docs);
      }
    });
  }

  organizeDailyFeeds(feeds: FeedModel[]) {
    feeds.forEach((feed: FeedModel) => {
      if (feed.source.toLowerCase().includes('elpais')) {
        this.elPaisFeeds.push(feed);
      } else if (feed.source.toLowerCase().includes('elmundo')) {
        this.elMundoFeeds.push(feed);
      }
    });
    this.cdr.markForCheck();
  }

  openNewFeed() {
    this.dialogService.open(NewFeedComponent, {
    });
  }


}
