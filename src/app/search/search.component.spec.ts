import { BasketState } from './../shared/state/basket.state';
import { NgxsModule } from '@ngxs/store';
import { ListOfNamesPipe } from './../shared/pipes/list-of-names.pipe';
import { LengthOfArrayPipe } from './../shared/pipes/length-of-array.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        SharedModule,
        MatMenuModule,
        NgxsModule.forRoot([
          BasketState
        ]),
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [ SearchComponent, LengthOfArrayPipe, ListOfNamesPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
