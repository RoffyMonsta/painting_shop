import { Comment } from '../shared/models/comment.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SelectComment } from '../shared/actions/comment.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment
  @Input() answer: boolean
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  selectReply(){
    this.store.dispatch(new SelectComment(this.comment.id))
  }
}
