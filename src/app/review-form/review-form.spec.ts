import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { BasketState } from '../shared/state/basket.state';
import { CategoryState } from '../shared/state/category.state';
import { PaintingsState } from '../shared/state/paintings.state';
import { ReviewsState } from '../shared/state/reviews.state';

import { ReviewFormComponent } from './review-form.component';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        SharedModule,
        NgxsModule.forRoot([
          ReviewsState,
        ]),
        BrowserAnimationsModule
        ,
        HttpClientTestingModule
      ],
      declarations: [ ReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a form with fields',()=>{
    expect(component.form.contains('id')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
    expect(component.form.contains('name')).toBeTruthy()
    expect(component.form.contains('score')).toBeTruthy()
    expect(component.form.contains('comment')).toBeTruthy()
    expect(component.form.contains('productId')).toBeTruthy()
  })
  it('should validate name field in form',()=>{
    const name = component.form.get('name')
    name.setValue('')
    expect(name.valid).toBeFalsy()
    name.setValue('An')
    expect(name.valid).toBeFalsy()
    name.setValue('Ant')
    expect(name.valid).toBeTruthy()
    name.setValue('Lomovatskyi Anton Andiiyovich')
    expect(name.valid).toBeFalsy()
  })
});
