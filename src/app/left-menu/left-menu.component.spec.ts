import { SelectCategory } from './../shared/actions/categories.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryState } from './../shared/state/category.state';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LeftMenuComponent } from './left-menu.component';
import { NgxsModule, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

describe('LeftMenuComponent', () => {
  let component: LeftMenuComponent;
  let fixture: ComponentFixture<LeftMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
          NgxsModule.forRoot([
            CategoryState,
          ]),
          HttpClientTestingModule
    ],
      declarations: [ LeftMenuComponent ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
