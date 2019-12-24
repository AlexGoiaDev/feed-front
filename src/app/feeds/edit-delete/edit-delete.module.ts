import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeleteComponent } from './edit-delete.component';
import { NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedService } from '../services/feed.service';



@NgModule({
  declarations: [EditDeleteComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbInputModule,
    NbLayoutModule
  ],
  entryComponents: [
    EditDeleteComponent
  ],
  providers: [FeedService]
})
export class EditDeleteModule { }
