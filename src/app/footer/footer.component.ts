import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
export interface Product {
  name: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {

  constructor() { }
  products: Product[] = [
    {name: 'Beans'},
    {name: 'Carrots'},
    {name: 'Apples'},
    {name: 'Garlic'},
    {name: 'Mushrooms'},
    {name: 'Tomatoes'},
    {name: 'Chilli peppers'},
    {name: 'Broccoli'},
    {name: 'Watermelon'},
    {name: 'Oranges'},
    {name: 'Bananas'},
    {name: 'Grapes'},
    {name: 'Cherries'},
    {name: 'Meat'},
    {name: 'Seo tag'},
    {name: 'Fish'},
    {name: 'Seo tag'},
    {name: 'Fresh food'},
    {name: 'Lemons'}
  ];


  ngOnInit(): void {
  }

}
