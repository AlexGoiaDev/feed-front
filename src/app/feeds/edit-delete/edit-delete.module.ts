import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeleteComponent } from './edit-delete.component';
import { NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';



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
  ]
})
export class EditDeleteModule { }
