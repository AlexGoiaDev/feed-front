import { Component, Input, OnInit } from '@angular/core';
import { FeedModel } from '../models/feed.model';
import { NbWindowRef } from '@nebular/theme';
import { FeedsComponent } from '../feeds.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    this.feedForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {

    this.fillForm();
  }

  fillForm() {
    this.feedForm.get('title').setValue(this.feed.title);
    this.feedForm.get('body').setValue(this.feed.body);
    this.feedForm.get('source').setValue(this.feed.source);
    this.feedForm.get('publisher').setValue(this.feed.publisher);
  }

  delete() {
    this.windowRef.close();
  }

}
