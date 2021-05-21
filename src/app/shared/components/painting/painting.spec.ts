import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaintingsState } from '../../state/paintings.state';
import { NgxsModule } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingComponent } from './painting.component';
import { SharedModule } from '../../shared.module';

describe('PaintingComponent', () => {
  let component: PaintingComponent;
  let fixture: ComponentFixture<PaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NgxsModule.forRoot([
        PaintingsState
        ]),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ PaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
