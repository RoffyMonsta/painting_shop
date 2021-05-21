import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ListOfProductsComponent } from './list-of-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: ':id', component: ListOfProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),

],
  exports: [RouterModule],
})
export class ListOfProductsRoutingModule { }
