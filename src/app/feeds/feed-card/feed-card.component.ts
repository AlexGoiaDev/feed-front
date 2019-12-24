import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FeedModel } from '../feed.model';

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

}
