import { BasketState } from './../../shared/state/basket.state';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Painting } from 'src/app/shared/models/painting.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit, OnDestroy {
  tax: number = 15
  subscriptions: Subscription[] = []
  @Select(BasketState.getBasketPaintings) paintings$: Observable<Painting[]>
  @Select(BasketState.getTotalCostOfPaintings) cost$: Observable<number>
  cost: number
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchCost()
  }
  fetchCost(){
    this.subscriptions.push(
      this.cost$.subscribe(cost=>{this.cost=cost})
    )

  }
  taxCost():number{
    return this.cost * (this.tax/100)
  }
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>sub.unsubscribe())
  }
}
