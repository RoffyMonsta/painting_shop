import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { BlogPageComponent } from './blog-page.component';
import { BlogPageModule } from './blog-page.module';
import { CommentState } from './shared/state/comment.state';

describe('BlogPageComponent', () => {
  let component: BlogPageComponent;
  let fixture: ComponentFixture<BlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BlogPageModule,
        NgxsModule.forRoot([
          CommentState
          ]),
      ],
      declarations: [ BlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
