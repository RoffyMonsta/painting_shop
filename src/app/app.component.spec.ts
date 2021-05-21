import { ReviewsState } from './shared/state/reviews.state';
import { CategoryState } from './shared/state/category.state';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { PaintingsState } from './shared/state/paintings.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NgxsModule.forRoot([
          PaintingsState,
          CategoryState,
          ReviewsState
          ]),
          HttpClientTestingModule,
          RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'painting-shop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('painting-shop');
  });

});
