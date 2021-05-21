import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('About us')
    this.meta.removeTag('description')
  }

}
