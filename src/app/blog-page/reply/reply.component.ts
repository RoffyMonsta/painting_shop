import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplyComponent implements OnInit {
  @Input() comment: Comment
  constructor() { }

  ngOnInit(): void {
  }

}
