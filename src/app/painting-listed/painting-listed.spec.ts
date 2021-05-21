import { ReviewsState } from './../shared/state/reviews.state';
import { Painting } from './../shared/models/painting.model';
import { AddBasket } from './../shared/actions/basket.actions';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaintingsState } from './../shared/state/paintings.state';
import { NgxsModule, Store } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PaintingListedComponent } from './painting-listed.component';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

describe('PaintingListedComponent', () => {
  let component: PaintingListedComponent;
  let fixture: ComponentFixture<PaintingListedComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          PaintingsState
        ]),
        HttpClientTestingModule
      ],
      declarations: [ PaintingListedComponent ]
    })

    .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
