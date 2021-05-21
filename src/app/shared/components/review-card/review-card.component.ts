import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent implements OnInit {
  @Input()review: Review
  constructor() { }

  ngOnInit(): void {

  }

}
