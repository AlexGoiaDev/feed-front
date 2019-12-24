import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [FeedCardComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [
    FeedCardComponent
  ]
})
export class FeedCardModule { }
