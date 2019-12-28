import { Component, Input, OnInit } from '@angular/core';
import { FeedModel } from '../models/feed.model';
import { NbWindowRef } from '@nebular/theme';
import { FeedsComponent } from '../feeds.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FeedService } from '../services/feed.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-delete',
  templateUrl: './edit-delete.component.html',
  styleUrls: ['./edit-delete.component.scss']
})
export class EditDeleteComponent implements OnInit {
  @Input()
  feed: FeedModel;

  feedForm: FormGroup;
  showEditSuccess: boolean;


  constructor(
    protected windowRef: NbWindowRef,
    private formBuilder: FormBuilder,
    private feedService: FeedService
  ) {
    this.feedForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required])
    });
    this.showEditSuccess = false;

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

  edit() {
    if (this.feedForm.valid) {
      const feedChanges: FeedModel = {
        title: this.feedForm.get('title').value,
        body: this.feedForm.get('body').value,
        source: this.feedForm.get('source').value,
        publisher: this.feedForm.get('publisher').value
      };
      this.feedService.editFeed(this.feed._id, feedChanges).pipe(take(1))
        .subscribe((res: any) => {
          if (res && res.data) {
            this.showEditSuccess = true;
            setTimeout(() => {
              this.showEditSuccess = false;
            }, 1500);
          }
        });
    }
  }

  delete() {

  }

}
