import { Observable, Subscription } from 'rxjs';
import { ReviewsState } from './../../shared/state/reviews.state';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Painting } from '../../shared/models/painting.model';
import { Select, Store } from '@ngxs/store';
import { RemoveBasket } from '../../shared/actions/basket.actions';

@Component({
  selector: 'app-painting-basket',
  templateUrl: './painting-basket.component.html',
  styleUrls: ['./painting-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaintingBasketComponent implements OnInit, OnDestroy {
  @Input() painting: Painting
  ArrayRating: Array<number> = []
  subscriptions: Subscription[] = []
  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }
  RemoveBasket() {
    this.painting.available = true
    this.store.dispatch(new RemoveBasket(this.painting.id.toString()))
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub=>sub.unsubscribe())
  }
}
