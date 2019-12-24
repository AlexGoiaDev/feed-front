import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { NbLayoutModule } from '@nebular/theme';
import { FeedCardModule } from './feed-card/feed-card.module';



@NgModule({
  declarations: [FeedsComponent],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    NbLayoutModule,
    FeedCardModule
  ]
})
export class FeedsModule { }
