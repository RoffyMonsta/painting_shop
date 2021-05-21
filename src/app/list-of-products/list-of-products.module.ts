import { MatInputModule } from '@angular/material/input';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from '../shared/shared.module';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ListOfProductsRoutingModule } from './list-of-products-routing.module';
import { ListOfProductsComponent } from './list-of-products.component';
import { PaintingListedComponent } from '../painting-listed/painting-listed.component';
import { FiltersComponent } from '../filters/filters.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ListOfProductsComponent,
    PaintingListedComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ListOfProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRadioModule,
MatCheckboxModule,
MatSelectModule,
MatSliderModule,
NgxSliderModule,
MatInputModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ListOfProductsModule { }
