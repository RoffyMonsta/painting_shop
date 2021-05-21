import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { PaintingBasketComponent } from './painting-basket/painting-basket.component';
import { BasketPageComponent } from './basket-page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageRoutingModule } from './basket-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { OrderComponent } from './order/order.component';
import { BillingComponent } from './billing/billing.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [ BasketPageComponent,
    PaintingBasketComponent,
    OrderComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    BasketPageRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class BasketPageModule { }
