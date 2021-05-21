import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {
  myModel = true
  constructor() { }
  value: number = 20;
  highValue: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  ngOnInit(): void {
  }

}
