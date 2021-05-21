import { LengthOfArrayPipe } from './../shared/pipes/length-of-array.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { ReviewsState } from '../shared/state/reviews.state';

import { UserReviewComponent } from './user-review.component';
import { SharedModule } from '../shared/shared.module';

describe('UserReviewComponent', () => {
  let component: UserReviewComponent;
  let fixture: ComponentFixture<UserReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientTestingModule,
          NgxsModule.forRoot([
            ReviewsState,
          ]),
      ],
      declarations: [ UserReviewComponent, LengthOfArrayPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
