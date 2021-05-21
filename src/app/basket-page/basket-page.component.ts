import { Title, Meta } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Painting } from '../shared/models/painting.model';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { BasketState } from '../shared/state/basket.state';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketPageComponent implements OnInit, OnDestroy {

  @Select(BasketState.getBasketPaintings) basketPaintings$!: Observable<Painting[]>;
  subscriptions: Subscription[] = []
  paints!: Painting[];

  constructor(private title: Title, private meta: Meta) {  }

  ngOnInit(): void {
    this.fetchPaints();
    this.title.setTitle('Basket')
    this.meta.removeTag('description')
  }
  fetchPaints(){
    this.subscriptions.push(
      this.basketPaintings$.subscribe(paintings=>{
        this.paints = paintings
      })
    )
  }
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>sub.unsubscribe())
  }
}
