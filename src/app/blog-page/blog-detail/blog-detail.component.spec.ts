import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { BlogPageModule } from '../blog-page.module';
import { CommentState } from '../shared/state/comment.state';

import { BlogDetailComponent } from './blog-detail.component';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BlogPageModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          CommentState
          ]),
      ],
      declarations: [ BlogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
