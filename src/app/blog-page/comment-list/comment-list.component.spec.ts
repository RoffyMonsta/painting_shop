import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { BlogPageModule } from '../blog-page.module';
import { CommentState } from '../shared/state/comment.state';

import { CommentListComponent } from './comment-list.component';

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BlogPageModule,
        NgxsModule.forRoot([
          CommentState
          ]),
      ],
      declarations: [ CommentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
