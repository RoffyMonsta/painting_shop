
import { Blog } from './../shared/models/blog.model';
import { BlogState } from './../shared/state/blog.state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent implements OnInit {
  show: string = 'grid'
  @Select(BlogState.getBlogs) blogs$: Observable<Blog[]>
  constructor(private title: Title, private meta: Meta) { }
  changeShow(select:string){
    this.show = select
  }
  ngOnInit(): void {
    this.title.setTitle('Blogs')
    this.meta.removeTag('description')

  }

}
