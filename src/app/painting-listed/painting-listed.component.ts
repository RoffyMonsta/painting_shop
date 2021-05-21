import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Painting } from '../shared/models/painting.model';
import { Select, Store } from '@ngxs/store';
import { AddBasket, RemoveBasket } from '../shared/actions/basket.actions';
import { Observable, Subscription } from 'rxjs';
import { ReviewsState } from '../shared/state/reviews.state';

@Component({
  selector: 'app-painting-listed',
  templateUrl: './painting-listed.component.html',
  styleUrls: ['./painting-listed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaintingListedComponent implements OnInit {
  @Input()painting: Painting
  subscriptions: Subscription[] = []
  ArrayRating: Array<number> = []
  constructor(public router: Router, private store: Store) {
  }
  ngOnInit(): void {
  }
  AddBasket(){
    this.painting.available = false
    this.store.dispatch(new AddBasket(this.painting))
  }

  RemoveBasket() {
    this.painting.available = true
    this.store.dispatch(new RemoveBasket(this.painting.id.toString()))
  }

  goToDetails(){
    this.router.navigate(['/painting',this.painting.id])
  }
  ngOnDestroy(): void {

    this.subscriptions.forEach(sub=>sub.unsubscribe())
  }
}
