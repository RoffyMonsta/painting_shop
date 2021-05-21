import { PaintingsState } from './../shared/state/paintings.state';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProductsComponent } from './list-of-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';

describe('HeaderMenuComponent', () => {
  let component: ListOfProductsComponent;
  let fixture: ComponentFixture<ListOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
          NgxsModule.forRoot([
            PaintingsState,
          ]),
          HttpClientTestingModule,
    ],
      declarations: [ ListOfProductsComponent ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
