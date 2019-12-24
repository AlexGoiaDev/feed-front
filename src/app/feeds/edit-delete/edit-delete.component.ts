import { Component, Input, OnInit } from '@angular/core';
import { FeedModel } from '../models/feed.model';
import { NbWindowRef } from '@nebular/theme';
import { FeedsComponent } from '../feeds.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-delete',
  templateUrl: './edit-delete.component.html',
  styleUrls: ['./edit-delete.component.scss']
})
export class EditDeleteComponent implements OnInit {
  @Input()
  feed: FeedModel;

  feedForm: FormGroup;

  constructor(
    protected windowRef: NbWindowRef,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {


  }

  delete() {
    this.windowRef.close();
  }

}
