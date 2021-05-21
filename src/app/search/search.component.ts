import { BasketIcon } from './search.animations';
import { Title, Meta } from '@angular/platform-browser';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Painting } from '../shared/models/painting.model';
import { BasketState } from '../shared/state/basket.state';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [BasketIcon]
})
export class SearchComponent implements OnInit {
  options: string[] = [
    'Bestsellers', 'Most Viewed', 'Top Ranking'
  ]
  searchInput: string = ''
  lengthOfBasket$: Observable<number>
  media: MediaQueryList

  @Select(BasketState.getBasketPaintings) basketPaintings$: Observable<Painting[]>;
  constructor(private title: Title, private meta: Meta, private cd: ChangeDetectorRef) { }
  onClick(option: string){
    console.log(option)
  }
  onSearch(){
    console.log(`Searching info: ${this.searchInput}`)
  }
  detectWindowSize(minSize: number, maxSize: number) {
    this.media = window.matchMedia(`(min-width: ${minSize}px) and (max-width: ${maxSize}px)`)
    this.media.addEventListener<'change'>('change', () => this.cd.detectChanges())
    return this.media.matches
  }
  ngOnInit(): void {
    this.lengthOfBasket$= this.basketPaintings$.pipe(map(painting=>painting.length),
    distinctUntilChanged()
    )
  }

}
