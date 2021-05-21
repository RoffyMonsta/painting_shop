import { LengthOfArrayPipe } from './../shared/pipes/length-of-array.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { PaintingsState } from '../shared/state/paintings.state';

import { PaintingPageComponent } from './painting-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

describe('PaintingPageComponent', () => {
  let component: PaintingPageComponent;
  let fixture: ComponentFixture<PaintingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        SharedModule,
        NgxsModule.forRoot([
          PaintingsState,
        ]),
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [ PaintingPageComponent, LengthOfArrayPipe ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should switch between menus', ()=>{
    component.switchActive(1)
    expect(component.descriptionShow).toBeTruthy()
    expect(component.reviewsShow).toBeFalsy()
    expect(component.addShow).toBeFalsy()
    component.switchActive(2)
    expect(component.descriptionShow).toBeFalsy()
    expect(component.reviewsShow).toBeTruthy()
    expect(component.addShow).toBeFalsy()
    component.switchActive(3)
    expect(component.descriptionShow).toBeFalsy()
    expect(component.reviewsShow).toBeFalsy()
    expect(component.addShow).toBeTruthy()
  })

});
