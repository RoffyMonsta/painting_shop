
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { PhonePipe } from './pipes/phone.pipe';
import { ListOfNamesPipe } from './pipes/list-of-names.pipe';
import { TooltipDirective } from './directives/tooltip.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { MatCardModule } from '@angular/material/card';
import { LengthOfArrayPipe } from './pipes/length-of-array.pipe';
import { PaintingComponent } from './components/painting/painting.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { BlogListedComponent } from './components/blog-listed/blog-listed.component';
import { BlogBigComponent } from './components/blog-big/blog-big.component';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    TooltipDirective,
    ListOfNamesPipe,
    PhonePipe,
    ReviewCardComponent,
    LengthOfArrayPipe,
    PaintingComponent,
    BlogGridComponent,
    BlogListedComponent,
    BlogBigComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    TooltipDirective,
    ListOfNamesPipe,
    PhonePipe,
    LengthOfArrayPipe,
    ReviewCardComponent,
    PaintingComponent,
    BlogGridComponent,
    BlogListedComponent,
    BlogBigComponent
  ]
})
export class SharedModule { }
