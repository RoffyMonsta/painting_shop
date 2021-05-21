import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Painting } from '../../models/painting.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaintingComponent implements OnInit {
  @Input()painting: Painting
  constructor(private router: Router) {



    }
  ngOnInit(): void {
  }
navigatetoPainting(){
  this.router.navigate(['/painting',this.painting.id])
}
}
