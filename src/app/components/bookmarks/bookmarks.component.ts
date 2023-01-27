import { Component } from '@angular/core';
import { BookmarkModel } from 'src/app/models/bookmark-model';
import bookmarks from '../../bookmarks.json'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
  bookmarkModel: BookmarkModel[] = bookmarks;
  

  constructor() {}

  ngOnInit() {}
}
