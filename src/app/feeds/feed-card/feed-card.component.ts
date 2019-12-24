import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FeedModel } from '../models/feed.model';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedCardComponent implements OnInit {

  @Input()
  feed: FeedModel;

  @Input()
  color = 'info';

  constructor() { }

  ngOnInit() {
  }

  getSummaryBody() {
    if (this.feed && this.feed.body) {
      if (this.feed.body.length > 240) {
        return this.feed.body.slice(0, 240) + ' [...]';
      }
      return this.feed.body;
    }
    return 'Sin contenido';
  }

  getSourceName() {
    if (this.feed && this.feed.source) {
      return this.feed.source.split('/', 3).join('/');
    }
    return 'Error';
  }

}
