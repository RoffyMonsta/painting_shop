import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { Recipes } from '../main-section/main-section.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent implements OnInit {
  @Input()recipe: Recipes


  constructor() { }

  ngOnInit(): void {
  }

}
