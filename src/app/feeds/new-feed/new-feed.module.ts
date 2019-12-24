import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFeedComponent } from './new-feed.component';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewFeedComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule
  ],
  exports: [
    NewFeedComponent
  ],
  entryComponents: [
    NewFeedComponent
  ]
})
export class NewFeedModule { }
