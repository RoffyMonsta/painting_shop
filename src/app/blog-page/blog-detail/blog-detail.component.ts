import { BlogState } from './../../shared/state/blog.state';
import { Blog } from './../../shared/models/blog.model';
import { SelectBlog } from './../../shared/actions/blog.actions';
import { Store, Select } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetComments } from '../shared/actions/comment.actions';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) { }
  @Select (BlogState.getBlogs) blogs$: Observable<Blog[]>
  @Select(BlogState.getBlogById) blog$: Observable<Blog>
  ngOnInit(): void {
      this.route.params?.subscribe((params)=>{
        this.store.dispatch(new SelectBlog(+params.id))
        })
        this.store.dispatch(new GetComments())
  }

}
