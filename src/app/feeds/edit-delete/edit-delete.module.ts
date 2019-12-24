import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeleteComponent } from './edit-delete.component';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [EditDeleteComponent],
  imports: [
    CommonModule,
    NbButtonModule
  ],
  entryComponents: [
    EditDeleteComponent
  ]
})
export class EditDeleteModule { }
