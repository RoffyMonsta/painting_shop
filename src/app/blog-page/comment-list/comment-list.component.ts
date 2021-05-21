
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CommentState } from '../shared/state/comment.state';
import { Comment } from '../shared/models/comment.model';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent implements OnInit {
  @Select(CommentState.getCommentsByProduct) comments$: Observable<Comment[]>
  constructor() { }

  ngOnInit(): void {
  }

}
