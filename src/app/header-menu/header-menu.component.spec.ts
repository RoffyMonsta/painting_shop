
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { PhonePipe } from '../shared/pipes/phone.pipe';
import { SharedModule } from '../shared/shared.module';

import { HeaderMenuComponent } from './header-menu.component';

describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatMenuModule,
        RouterTestingModule
    ],
      declarations: [ HeaderMenuComponent,  PhonePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
