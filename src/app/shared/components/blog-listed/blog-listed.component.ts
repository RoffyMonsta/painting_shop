import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog-listed',
  templateUrl: './blog-listed.component.html',
  styleUrls: ['./blog-listed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListedComponent implements OnInit {
  @Input()blog: Blog
  constructor(private router: Router) {



     }
  ngOnInit(): void {
  }
navigatetoBlog(){
  this.router.navigate(['/blog/',this.blog.id])
}

}
