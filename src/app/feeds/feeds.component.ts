import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeedModel } from './feed.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedsComponent implements OnInit {
  elMundoFeeds: FeedModel[];
  elPaisFeeds: FeedModel[];

  constructor() { }

  ngOnInit() {
    this.elMundoFeeds = [
      {
        title: 'Test',
        body: 'cuerpo',
        source: 'adafs',
        publisher: 'ejemplo',
        image: ''
      }
    ];

    this.elPaisFeeds = [
      {
        title: 'Test',
        body: 'cuerpo',
        source: 'adafs',
        publisher: 'ejemplo',
        image: ''
      }
    ];
  }

}
