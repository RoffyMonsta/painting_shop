import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaintingsState } from '../../shared/state/paintings.state';
import { NgxsModule } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PaintingBasketComponent } from './painting-basket.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PaintingBasketComponent', () => {
  let component: PaintingBasketComponent;
  let fixture: ComponentFixture<PaintingBasketComponent>;

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
      declarations: [ PaintingBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
