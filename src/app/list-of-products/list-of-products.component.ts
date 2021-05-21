import { Observable } from 'rxjs';
import { CategoryState } from './../shared/state/category.state';
import { Select, Store } from '@ngxs/store';
import { PaintingsService } from '../shared/services/paintings.service';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/models/category.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Painting } from '../shared/models/painting.model';
import { PaintingsState } from '../shared/state/paintings.state';
import { SelectCategory } from '../shared/actions/categories.actions';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfProductsComponent implements OnInit {
  show: string = 'list'
  @Select(PaintingsState.getListByCategory) paintings$: Observable<Painting[]>
  @Select(CategoryState.getCategoryById) category$: Observable<Category>
  constructor(private route: ActivatedRoute,
    public categoryService: CategoriesService,
    public paintingsService: PaintingsService,
    private store: Store
    ) { }
    category: any
  myModel = true
  ngOnInit(): void {
    this.route.params?.subscribe((params)=>{
      this.store.dispatch(new SelectCategory(+params.id))
      })
  }
  changeShow(select:string){
    this.show = select
  }
}
