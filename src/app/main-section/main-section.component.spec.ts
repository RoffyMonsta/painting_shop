import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { PaintingsState } from '../shared/state/paintings.state';

import { MainSectionComponent } from './main-section.component';

describe('MainSectionComponent', () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        SharedModule,
        NgxsModule.forRoot([
          PaintingsState,
        ]),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ MainSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
