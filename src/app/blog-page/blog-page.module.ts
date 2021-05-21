import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommentService } from './shared/services/comment.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { SharedModule } from '../shared/shared.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentState } from './shared/state/comment.state';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { ReplyComponent } from './reply/reply.component';


@NgModule({
  declarations: [BlogPageComponent, BlogDetailComponent, CommentComponent, CommentFormComponent, CommentListComponent, ReplyComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatChipsModule,
    NgxsModule.forFeature([CommentState]),
  ],
  providers:[CommentService]
})
export class BlogPageModule { }
