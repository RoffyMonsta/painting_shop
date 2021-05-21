import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog-big',
  templateUrl: './blog-big.component.html',
  styleUrls: ['./blog-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogBigComponent implements OnInit {
  @Input()blog: Blog
  constructor(private router: Router) {



     }
  ngOnInit(): void {
  }
navigatetoBlog(){
  this.router.navigate(['/blog/',this.blog.id])
}
}
