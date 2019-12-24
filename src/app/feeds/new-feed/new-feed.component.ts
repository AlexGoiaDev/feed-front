import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { FeedsComponent } from '../feeds.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.scss']
})
export class NewFeedComponent implements OnInit {
  newFeedForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<FeedsComponent>,
    private fb: FormBuilder
  ) {
    this.newFeedForm = this.fb.group({
      url: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  addUrl() {
    this.ref.close(
      this.newFeedForm.controls.url.value
    );
  }

}
