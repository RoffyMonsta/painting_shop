import { BasketState } from './../shared/state/basket.state';
import { NgxsModule } from '@ngxs/store';
import { BasketPageComponent } from './basket-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('BasketPageComponent', () => {
  let component: BasketPageComponent;
  let fixture: ComponentFixture<BasketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        NgxsModule.forRoot([
          BasketState
        ]),
        RouterTestingModule
      ],
      declarations: [ BasketPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
