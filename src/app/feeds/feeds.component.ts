import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FeedModel } from './models/feed.model';
import { FeedService } from './services/feed.service';
import { take } from 'rxjs/operators';
import { FeedPaginationModel } from './models/feed-pagination.model';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { NewFeedComponent } from './new-feed/new-feed.component';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
import { FeedsPaginationResponse } from './models/feeds-response.model';
import { FeedResponse } from './models/feed-response.model';

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
    private windowService: NbWindowService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getDailyFeeds();
  }

  getDailyFeeds() {
    this.elMundoFeeds = [];
    this.elPaisFeeds = [];
    this.cdr.markForCheck();
    this.feedService.getDailyFeeds().pipe(take(1)).subscribe((res: FeedsPaginationResponse) => {
      if (res.data.docs && res.data.docs.length > 0) {
        this.organizeDailyFeeds(res.data.docs);
      }
    });
  }

  organizeDailyFeeds(feeds: FeedModel[]) {
    feeds.forEach((feed: FeedModel) => {
      if (feed.source.toLowerCase().includes('elpais')) {
        this.elPaisFeeds.unshift(feed);
      } else if (feed.source.toLowerCase().includes('elmundo')) {
        this.elMundoFeeds.unshift(feed);
      }
    });
    this.cdr.markForCheck();
  }

  openNewFeed() {
    this.dialogService.open(NewFeedComponent, {
    }).onClose.pipe(take(1)).subscribe((res: string) => {
      this.addNewFeed(res);
    });
  }

  editOrDelete(feed: FeedModel) {
    this.windowService.open(EditDeleteComponent, {
      title: 'Editar o eliminar',
      context: { feed }
    })
    .onClose.pipe(take(1)).subscribe(() => this.getDailyFeeds());
  }

  addNewFeed(url: string) {
    this.feedService.addByUrl(url).pipe(take(1)).subscribe((res: FeedResponse) => {
      if (res && res.data) {
        this.organizeDailyFeeds([{ ...res.data }]);
      }
    });
  }


}
