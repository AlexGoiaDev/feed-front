import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbDialogModule, NbLayoutModule, NbWindowModule } from '@nebular/theme';
import { FeedCardModule } from './feed-card/feed-card.module';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { NewFeedModule } from './new-feed/new-feed.module';
import { FeedService } from './services/feed.service';
import { EditDeleteModule } from './edit-delete/edit-delete.module';



@NgModule({
  declarations: [FeedsComponent],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    NbLayoutModule,
    FeedCardModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NewFeedModule,
    EditDeleteModule
  ],
  providers: [
    FeedService
  ],
  entryComponents: [

  ]
})
export class FeedsModule { }
