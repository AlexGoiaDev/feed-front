import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { NbLayoutModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { FeedCardModule } from './feed-card/feed-card.module';
import { FeedService } from './services/feed.service';
import { NewFeedComponent } from './new-feed/new-feed.component';



@NgModule({
  declarations: [FeedsComponent, NewFeedComponent],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    NbLayoutModule,
    FeedCardModule,
    NbButtonModule,
    NbDialogModule.forChild({})
    ],
  providers: [
    FeedService
  ],
  entryComponents: [
    NewFeedComponent
  ]
})
export class FeedsModule { }
