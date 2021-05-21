import { MatSelectModule } from '@angular/material/select';
import { PaintingPageComponent } from './painting-page.component';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { PaintingPageRoutingModule } from './painting-page-routing.module';
import { ReviewCardComponent } from '../shared/components/review-card/review-card.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PaintingPageComponent,
    ReviewFormComponent,
  ],
  imports: [
    CommonModule,
    PaintingPageRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class PaintingPageModule { }
